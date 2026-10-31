# AeroLux HR Firm — Website
React 18 + Vite + Tailwind CSS 3 + Framer Motion + lucide-react.

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in /dist

Edit copy in `src/components/Sections.jsx`. Brand colors live in `tailwind.config.js`.
The contact form currently shows a success message only; connect it to Formspree/EmailJS/your API in `Contact`.

## Contact form -> Gmail (setup)
1. Turn on 2-Step Verification on the Gmail account: https://myaccount.google.com/security
2. Create an **App Password**: https://myaccount.google.com/apppasswords (16 characters).
3. Copy `.env.example` to `.env` and fill `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `CONTACT_RECEIVER`.
4. Run both website and API: `npm run dev:all`
5. Submit the form. You get a lead email (Reply goes straight to the visitor) and the visitor gets an auto-reply.

Features: server-side validation, honeypot spam trap, rate limit (5 / 15 min / IP), HTML-escaped emails.

## Deploying
Host the API (`npm run server`) on Render/Railway/a VPS with the same env vars, set `CLIENT_ORIGIN` to your site URL,
then build the website with `VITE_API_URL=https://your-api-url npm run build`.

## Deploy on Netlify (website + email function in one place)
1. Push this folder to GitHub (`.env` is git-ignored, never upload it).
2. Netlify -> Add new site -> Import from GitHub -> pick the repo. Build settings are read from `netlify.toml`
   (build: `npm run build`, publish: `dist`).
3. Site configuration -> Environment variables: add `GMAIL_USER`, `GMAIL_APP_PASSWORD`, `CONTACT_RECEIVER`.
4. Deploy (or Trigger deploy after adding variables). The form posts to `/api/contact`, served by `netlify/functions/contact.mjs`.
The Express server in `/server` is only needed for local development.
