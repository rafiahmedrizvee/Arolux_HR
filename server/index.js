import express from 'express'
import cors from 'cors'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()
const { GMAIL_USER, GMAIL_APP_PASSWORD, CONTACT_RECEIVER, CLIENT_ORIGIN, PORT = 5000 } = process.env
if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
  console.error('Missing GMAIL_USER or GMAIL_APP_PASSWORD in .env (see .env.example)')
  process.exit(1)
}

const app = express()
app.use(express.json({ limit: '20kb' }))
app.use(cors({ origin: (CLIENT_ORIGIN || 'http://localhost:5173').split(',').map((s) => s.trim()) }))

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: { user: GMAIL_USER, pass: GMAIL_APP_PASSWORD },
})

// max 5 submissions / 15 min per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, max: 5,
  message: { ok: false, error: 'Too many requests. Please try again in a few minutes.' },
})

const esc = (s = '') => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]))
const clean = (s, max = 200) => String(s ?? '').trim().slice(0, max)
const emailOk = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)

const row = (k, v) => `<tr><td style="padding:8px 12px;color:#64748b;font-weight:600;width:200px;border-bottom:1px solid #eef2f7">${k}</td><td style="padding:8px 12px;color:#0b1230;border-bottom:1px solid #eef2f7">${esc(v) || '—'}</td></tr>`

app.get('/api/health', (_, res) => res.json({ ok: true }))

app.post('/api/contact', limiter, async (req, res) => {
  const b = req.body || {}
  if (b.website) return res.json({ ok: true }) // honeypot: bots fill this, silently drop

  const d = {
    firstName: clean(b.firstName, 60), lastName: clean(b.lastName, 60), company: clean(b.company, 120),
    email: clean(b.email, 120), phone: clean(b.phone, 40), companyType: clean(b.companyType, 40),
    need: clean(b.need, 60), recruiters: clean(b.recruiters, 20), message: clean(b.message, 3000),
  }
  if (!d.firstName || !d.lastName || !d.company || !emailOk(d.email)) {
    return res.status(400).json({ ok: false, error: 'Please fill in all required fields with valid details.' })
  }

  const table = [
    row('Name', `${d.firstName} ${d.lastName}`), row('Company', d.company), row('Email', d.email), row('Phone', d.phone),
    row('Company Type', d.companyType), row('Needs', d.need), row('Recruiters Needed', d.recruiters),
  ].join('')

  try {
    // 1) Notification to the business inbox
    await transporter.sendMail({
      from: `"AeroLux Website" <${GMAIL_USER}>`,
      to: CONTACT_RECEIVER || GMAIL_USER,
      replyTo: `"${d.firstName} ${d.lastName}" <${d.email}>`,
      subject: `New Lead: ${d.company} — ${d.need} (${d.recruiters} recruiter${d.recruiters === '1' ? '' : 's'})`,
      html: `<div style="font-family:Arial,sans-serif;max-width:620px;margin:auto">
        <div style="background:#0b1230;padding:20px 24px;border-radius:12px 12px 0 0"><h2 style="margin:0;color:#e5bd5c">New AeroLux Inquiry</h2></div>
        <table style="width:100%;border-collapse:collapse;background:#fff;border:1px solid #eef2f7">${table}</table>
        <div style="padding:16px 24px;background:#f8fafc;border:1px solid #eef2f7;border-top:0;border-radius:0 0 12px 12px">
        <b style="color:#0b1230">Hiring requirements</b><p style="white-space:pre-wrap;color:#334155">${esc(d.message) || '—'}</p>
        <small style="color:#94a3b8">Hit Reply to respond directly to ${esc(d.email)}.</small></div></div>`,
      text: `New inquiry from ${d.firstName} ${d.lastName} (${d.company})\nEmail: ${d.email}\nPhone: ${d.phone}\nType: ${d.companyType}\nNeeds: ${d.need}\nRecruiters: ${d.recruiters}\n\n${d.message}`,
    })

    // 2) Auto-reply to the visitor (non-fatal if it fails)
    transporter.sendMail({
      from: `"AeroLux HR Firm" <${GMAIL_USER}>`,
      to: d.email,
      subject: 'We received your request — AeroLux HR Firm',
      html: `<div style="font-family:Arial,sans-serif;max-width:560px;margin:auto;color:#334155">
        <h2 style="color:#0b1230">Hi ${esc(d.firstName)}, thank you!</h2>
        <p>We've received your request for <b>${esc(d.need)}</b> and our team will get back to you shortly with a recommended recruitment model.</p>
        <p style="color:#64748b">— The AeroLux HR Firm Team<br/>Experienced Recruitment. Flexible Capacity. Scalable Growth.</p></div>`,
    }).catch((e) => console.warn('Auto-reply failed:', e.message))

    res.json({ ok: true })
  } catch (err) {
    console.error('Mail error:', err.message)
    res.status(500).json({ ok: false, error: 'We could not send your request right now. Please try again shortly.' })
  }
})

app.listen(PORT, () => console.log(`AeroLux API running on http://localhost:${PORT}`))
