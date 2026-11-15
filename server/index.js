import 'dotenv/config'
import express from 'express'
import pg from 'pg'

const { Pool } = pg
const app = express()
const port = Number(process.env.PORT || 3001)
const pool = process.env.DATABASE_URL ? new Pool({ connectionString: process.env.DATABASE_URL }) : null

app.use(express.json())

app.get('/api/health', async (_req, res) => {
  let database = 'not configured'
  if (pool) {
    try { await pool.query('SELECT 1'); database = 'connected' } catch { database = 'unavailable' }
  }
  res.json({ ok: true, database })
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body ?? {}
  if (!name || !email || !message) return res.status(400).json({ error: 'Name, email, and message are required.' })
  res.status(201).json({ ok: true, message: 'Thanks — your message is ready to be connected to PostgreSQL.' })
})

app.listen(port, () => console.log(`API listening on http://localhost:${port}`))
