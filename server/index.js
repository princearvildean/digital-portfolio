import 'dotenv/config'
import express from 'express'
import pg from 'pg'
import { Resend } from 'resend'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const { Pool } = pg
const app = express()
const port = Number(process.env.PORT || 3001)
const allowedOrigin = process.env.ALLOWED_ORIGIN || 'http://localhost:5173'
const pool = process.env.DATABASE_URL ? new Pool({ connectionString: process.env.DATABASE_URL, max: 5 }) : null
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const contactToEmail = process.env.CONTACT_TO_EMAIL || 'princearvil123@gmail.com'
const contactFromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>'
const contactAttempts = new Map()
const distPath = resolve(dirname(fileURLToPath(import.meta.url)), '../dist')

app.use((req, res, next) => {
  if (req.headers.origin === allowedOrigin) res.setHeader('Access-Control-Allow-Origin', allowedOrigin)
  res.setHeader('Vary', 'Origin')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS')
  if (req.method === 'OPTIONS') return res.sendStatus(204)
  next()
})
app.use(express.json({ limit: '10kb' }))

function contactRateLimit(req, res, next) {
  const now = Date.now()
  const key = req.ip || 'unknown'
  const current = contactAttempts.get(key)
  if (!current || now - current.startedAt > 15 * 60 * 1000) {
    contactAttempts.set(key, { startedAt: now, count: 1 })
    return next()
  }
  if (current.count >= 5) return res.status(429).json({ error: 'Too many messages. Please try again later.' })
  current.count += 1
  return next()
}

app.get('/api/health', async (_req, res) => {
  let database = 'not configured'
  if (pool) {
    try { await pool.query('SELECT 1'); database = 'connected' } catch { database = 'unavailable' }
  }
  res.json({ ok: true, database })
})

app.post('/api/contact', contactRateLimit, async (req, res) => {
  const name = String(req.body?.name || '').trim()
  const email = String(req.body?.email || '').trim().toLowerCase()
  const message = String(req.body?.message || '').trim()
  const errors = {}
  if (name.length < 2 || name.length > 120) errors.name = 'Name must be between 2 and 120 characters.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) errors.email = 'Enter a valid email address.'
  if (message.length < 10 || message.length > 2000) errors.message = 'Message must be between 10 and 2000 characters.'
  if (Object.keys(errors).length) return res.status(400).json({ error: 'Please check the highlighted fields.', fields: errors })
  if (!resend) return res.status(503).json({ error: 'The contact email service is not configured yet. Please use the direct email option.' })

  try {
    const { error } = await resend.emails.send({
      from: contactFromEmail,
      to: [contactToEmail],
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    })
    if (error) {
      console.error('Contact email send failed:', error)
      return res.status(502).json({ error: 'Your message could not be sent. Please use the direct email option.' })
    }
    return res.status(201).json({ ok: true, message: 'Message received. Thank you.' })
  } catch (error) {
    console.error('Contact email send failed:', error)
    return res.status(502).json({ error: 'Your message could not be sent. Please use the direct email option.' })
  }
})

app.use((error, _req, res, next) => {
  if (error?.type === 'entity.parse.failed') return res.status(400).json({ error: 'Request body must be valid JSON.' })
  return next(error)
})

app.use(express.static(distPath))
app.use((req, res, next) => {
  if (req.method !== 'GET' || req.path.startsWith('/api')) return next()
  return res.sendFile(join(distPath, 'index.html'))
})

const server = app.listen(port, '0.0.0.0', () => console.log(`Portfolio listening on http://localhost:${port}`))
server.on('error', (error) => { console.error('API server failed to start:', error); process.exitCode = 1 })

const shutdown = async () => { await pool?.end(); server.close(() => process.exit(0)) }
process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)
