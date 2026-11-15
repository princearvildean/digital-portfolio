import { useEffect, useState } from 'react'

const initialForm = { name: '', email: '', message: '' }
const apiBaseUrl = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '')

export function ContactForm({ fallbackEmail }) {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ type: 'idle', message: '' })
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (Object.keys(errors).length > 0) document.getElementById('contact-form-error-summary')?.focus()
  }, [errors])

  const updateField = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
    setErrors((current) => ({ ...current, [event.target.name]: '' }))
  }

  const submit = async (event) => {
    event.preventDefault()
    setStatus({ type: 'loading', message: 'Sending your message...' })
    setErrors({})
    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
      const result = await response.json().catch(() => ({}))
      if (!response.ok) {
        setErrors(result.fields || {})
        throw new Error(result.error || 'The contact service is unavailable.')
      }
      setForm(initialForm)
      setStatus({ type: 'success', message: result.message })
    } catch (error) {
      setStatus({ type: 'error', message: `${error.message} You can email me directly instead.` })
    }
  }

  return <div className="contact-form-wrap">
    <form className="contact-form" onSubmit={submit}>
      {Object.keys(errors).length > 0 && <div id="contact-form-error-summary" className="form-error-summary" tabIndex="-1" role="alert">Please correct the highlighted fields before sending your message.</div>}
      <div className="form-row"><label htmlFor="contact-name">Name</label><input id="contact-name" name="name" value={form.name} onChange={updateField} required minLength="2" maxLength="120" autoComplete="name" aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'contact-name-error' : undefined} />{errors.name && <span className="form-error" id="contact-name-error">{errors.name}</span>}</div>
      <div className="form-row"><label htmlFor="contact-email-input">Email</label><input id="contact-email-input" name="email" type="email" value={form.email} onChange={updateField} required maxLength="254" autoComplete="email" aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'contact-email-error' : undefined} />{errors.email && <span className="form-error" id="contact-email-error">{errors.email}</span>}</div>
      <div className="form-row"><label htmlFor="contact-message">Message</label><textarea id="contact-message" name="message" value={form.message} onChange={updateField} required minLength="10" maxLength="2000" rows="4" aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'contact-message-error' : undefined} />{errors.message && <span className="form-error" id="contact-message-error">{errors.message}</span>}</div>
      <div className="form-actions"><button type="submit" disabled={status.type === 'loading'}>{status.type === 'loading' ? 'Sending message' : 'Send message'} <span>↗</span></button><a href={`mailto:${fallbackEmail}`}>Email Prince instead</a></div>
      {status.message && <p className={`form-status ${status.type}`} role="status" aria-live="polite">{status.message}</p>}
    </form>
  </div>
}
