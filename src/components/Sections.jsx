import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  Users, Search, Code2, Rocket, Building2, Briefcase, CheckCircle2, Plus,
  Layers, ShieldCheck, TrendingUp, Wallet, Eye, Award, Send, Clock, Mail, AlertCircle, Loader2,
} from 'lucide-react'
import { Reveal, Button, SectionHead, Section } from './ui'

const Card = ({ children, className = '' }) => (
  <motion.div whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    className={`rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-shadow hover:shadow-2xl hover:shadow-navy-900/10 ${className}`}>
    {children}
  </motion.div>
)

const IconBox = ({ icon: Icon }) => (
  <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-navy-800 to-navy-700 text-gold-300"><Icon size={22} /></span>
)

/* ---------- Capacity ---------- */
export const Capacity = () => (
  <Section>
    <SectionHead eyebrow="Recruitment Capacity" title="Recruitment Capacity, Built Around Your Business"
      text="Hiring demand doesn't always stay predictable. You may have more job orders than your team can handle, a talent acquisition team overwhelmed by a hiring surge, or simply need sourcing capacity without permanent headcount." />
    <Reveal>
      <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 p-10 text-center shadow-2xl">
        <p className="text-lg text-slate-300">AeroLux provides experienced recruitment professionals who integrate into your existing workflow, processes, ATS, and communication structure.</p>
        <p className="mt-5 text-2xl font-extrabold text-white sm:text-3xl">You control the recruitment strategy. <span className="gold-text">We provide the recruiting capacity.</span></p>
      </div>
    </Reveal>
  </Section>
)

/* ---------- Solutions ---------- */
const solutions = [
  [Users, 'Dedicated Remote Recruiters', 'Add experienced recruiters to your team without the cost of hiring additional local employees. They work to your processes, priorities, tools, and management structure.', 'Staffing firms and corporate TA teams needing ongoing capacity.'],
  [Search, 'Recruitment Sourcing', 'Need more candidates without adding more recruiters? Our sourcing specialists identify, research, and engage qualified candidates to your requirements.', 'Increasing candidate flow without more internal workload.'],
  [Code2, 'Technical & Specialized Recruitment', 'From IT and engineering to manufacturing, finance, healthcare, and professional services, align recruitment support with your hiring needs.', 'Specialized and technical hiring environments.'],
  [Rocket, 'Project-Based Recruitment', 'Have a hiring campaign, difficult role, or temporary requirement? Deploy support for a specific project without a long-term commitment.', 'Campaigns, hard-to-fill roles, and urgent projects.'],
]
export const Solutions = () => (
  <Section id="solutions" className="bg-slate-50">
    <SectionHead eyebrow="Our Solutions" title="Recruitment Solutions Designed Around Your Hiring Model"
      text="Whether you need one recruiter, additional sourcing support, or an entire recruitment delivery team, we build a model around your requirements." />
    <div className="grid gap-6 md:grid-cols-2">
      {solutions.map(([I, t, d, b], i) => (
        <Reveal key={t} delay={i * 0.08}>
          <Card className="h-full">
            <IconBox icon={I} />
            <h3 className="text-xl font-bold text-navy-900">{t}</h3>
            <p className="mt-3 leading-relaxed text-slate-600">{d}</p>
            <p className="mt-4 text-sm"><span className="font-semibold text-gold-500">Ideal for:</span> {b}</p>
          </Card>
        </Reveal>
      ))}
    </div>
    <Reveal className="mt-8">
      <div className="flex flex-col items-start justify-between gap-5 rounded-3xl bg-navy-900 p-8 sm:flex-row sm:items-center">
        <div>
          <h3 className="text-xl font-bold text-white">Recruitment Team Outsourcing</h3>
          <p className="mt-2 max-w-2xl text-slate-300">Build a dedicated team of recruiters, sourcers, and support professionals. You keep strategic control while AeroLux provides the execution capacity.</p>
        </div>
        <Button>Build Your Recruitment Team</Button>
      </div>
    </Reveal>
  </Section>
)

/* ---------- Staffing + Corporate ---------- */
const staffing = ['Candidate sourcing', 'Resume screening', 'Candidate qualification', 'Recruiting outreach', 'Job-board sourcing', 'LinkedIn sourcing', 'Candidate follow-up', 'Interview coordination', 'Recruiting administration', 'Pipeline development']
const corp = ['ATS', 'Hiring processes', 'Interview workflows', 'Recruiting technology', 'Communication platforms', 'Reporting structure', 'Internal recruiting team']
const List = ({ items, light }) => (
  <ul className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
    {items.map((i) => (
      <li key={i} className={`flex items-center gap-2.5 text-sm ${light ? 'text-slate-200' : 'text-slate-700'}`}>
        <CheckCircle2 size={16} className="shrink-0 text-gold-400" />{i}
      </li>
    ))}
  </ul>
)
export const Audiences = () => (
  <Section>
    <div className="grid gap-8 lg:grid-cols-2">
      <Reveal>
        <div className="h-full rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 p-9 shadow-2xl">
          <Briefcase className="mb-4 text-gold-300" />
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-300">For Staffing Agencies</p>
          <h3 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl">Your clients need more candidates. Your recruiters need more capacity.</h3>
          <p className="mt-4 text-slate-300">Increase delivery capacity without immediately increasing local payroll. Your team keeps control of the client relationship and strategy.</p>
          <List items={staffing} light />
          <div className="mt-8"><Button>Expand Your Recruiting Capacity</Button></div>
        </div>
      </Reveal>
      <Reveal delay={0.12}>
        <div className="h-full rounded-3xl border border-slate-200 bg-white p-9 shadow-xl shadow-navy-900/5">
          <Building2 className="mb-4 text-gold-500" />
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-500">For Corporate HR Teams</p>
          <h3 className="mt-2 text-2xl font-extrabold text-navy-900 sm:text-3xl">Scale Talent Acquisition When Hiring Demand Increases.</h3>
          <p className="mt-4 text-slate-600">Instead of hiring permanent recruiters every time demand grows, add flexible capacity when needed. Recruiters integrate with your existing:</p>
          <List items={corp} />
          <div className="mt-8"><Button variant="dark">Strengthen Your Talent Acquisition Team</Button></div>
        </div>
      </Reveal>
    </div>
  </Section>
)

/* ---------- How it works ---------- */
const steps = [
  ['Understand', 'We learn about your organization, hiring requirements, recruiting process, technology, and expectations.'],
  ['Match', 'We identify recruiters based on your industry, role requirements, experience, and workflow.'],
  ['Interview', 'Evaluate and interview the proposed recruiter before deployment.'],
  ['Deploy', 'Your recruiter joins your workflow and begins supporting your recruiting operation.'],
  ['Manage', 'You keep direct visibility and control over activities, priorities, and performance.'],
  ['Scale', 'Add recruiters, increase hours, or launch project-based support as needs change.'],
]
export const HowItWorks = () => (
  <Section id="how" dark>
    <div className="absolute inset-0 grid-bg opacity-60" />
    <div className="relative">
      <SectionHead light eyebrow="How It Works" title="Simple to Start. Easy to Scale." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map(([t, d], i) => (
          <Reveal key={t} delay={i * 0.07}>
            <motion.div whileHover={{ y: -6 }} className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur">
              <span className="gold-text text-5xl font-extrabold">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-bold text-white">{t}</h3>
              <p className="mt-2 leading-relaxed text-slate-300">{d}</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
)

/* ---------- Pricing ---------- */
const plans = [
  ['Dedicated Recruiter', 'Starting from $1,800', '/month', 'One experienced recruiter dedicated to your recruitment operation. Best for ongoing hiring requirements.', false],
  ['Senior / Technical Recruiter', '$2,000–$2,600', '/month', 'Deeper technical or industry experience for IT, engineering, executive, and specialized hiring.', true],
  ['Hourly Recruitment Support', '$12–$18', '/hour', 'Flexible capacity without a full-time commitment. Best for variable workloads and short-term needs.', false],
  ['Project-Based Sourcing', '$500+', '/project', 'A defined sourcing campaign for specific roles, hiring targets, or candidate volumes.', false],
  ['Dedicated Recruitment Team', 'Custom', ' pricing', 'Recruiters, senior recruiters, sourcers, coordinators, and team leads. Priced on team size, specialization, workload, and length.', false],
]
export const Pricing = () => (
  <Section id="pricing" className="bg-slate-50">
    <SectionHead eyebrow="Engagement Models" title="Flexible Support for Different Business Needs"
      text="Start with one recruiter, prove the model, and scale when you're ready." />
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {plans.map(([t, p, u, d, hot], i) => (
        <Reveal key={t} delay={i * 0.07}>
          <motion.div whileHover={{ y: -8 }}
            className={`relative h-full rounded-3xl p-8 ${hot ? 'bg-gradient-to-br from-navy-900 to-navy-700 text-white shadow-2xl' : 'border border-slate-200 bg-white shadow-sm'}`}>
            {hot && <span className="absolute -top-3 right-6 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-3 py-1 text-xs font-bold text-navy-900">Most Popular</span>}
            <h3 className={`text-lg font-bold ${hot ? 'text-white' : 'text-navy-900'}`}>{t}</h3>
            <p className="mt-4"><span className={`text-3xl font-extrabold ${hot ? 'gold-text' : 'text-navy-900'}`}>{p}</span><span className={hot ? 'text-slate-300' : 'text-slate-500'}>{u}</span></p>
            <p className={`mt-4 leading-relaxed ${hot ? 'text-slate-300' : 'text-slate-600'}`}>{d}</p>
            <a href="#contact" className={`mt-6 inline-block text-sm font-semibold ${hot ? 'text-gold-300' : 'text-gold-500'} hover:underline`}>Request Pricing →</a>
          </motion.div>
        </Reveal>
      ))}
    </div>
  </Section>
)

/* ---------- Why ---------- */
const why = [
  [Award, 'US-Market Experience', 'Our model is designed around the expectations and workflows of the US hiring market.'],
  [Wallet, 'Cost-Efficient Capacity', 'Increase capacity without the full cost of additional US-based headcount.'],
  [Eye, 'Direct Control', 'Your team controls priorities, processes, communication, and performance.'],
  [TrendingUp, 'Flexible Scaling', 'Start with one recruiter and expand as hiring requirements grow.'],
  [Users, 'Experienced Professionals', 'Experienced recruiters, not just low-cost administrative support.'],
  [ShieldCheck, 'Quality First', 'Qualified candidates, consistent execution, and measurable performance.'],
]
export const Why = () => (
  <Section>
    <SectionHead eyebrow="Why AeroLux?" title="Recruiters Who Become Part of Your Team"
      text="Not outside consultants who hand off resumes. AeroLux recruiters operate as an extension of your recruiting organization." />
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {why.map(([I, t, d], i) => (
        <Reveal key={t} delay={i * 0.06}><Card className="h-full"><IconBox icon={I} /><h3 className="text-lg font-bold text-navy-900">{t}</h3><p className="mt-2 text-slate-600">{d}</p></Card></Reveal>
      ))}
    </div>
    <Reveal className="mt-12">
      <div className="flex flex-wrap items-center justify-center gap-2 text-sm font-semibold text-navy-900">
        {['Sourcing', 'Screening', 'Outreach', 'Qualification', 'Follow-Up', 'Interview Coordination', 'Pipeline Management'].map((s, i, a) => (
          <span key={s} className="flex items-center gap-2">
            <span className="rounded-full bg-gold-400/15 px-4 py-2">{s}</span>{i < a.length - 1 && <span className="text-gold-500">→</span>}
          </span>
        ))}
      </div>
    </Reveal>
  </Section>
)

/* ---------- Recruiter network ---------- */
const caps = ['Candidate Sourcing', 'LinkedIn Recruiting', 'Boolean Search', 'Job-Board Sourcing', 'Candidate Outreach', 'Resume Screening', 'Candidate Qualification', 'Interview Coordination', 'ATS Management', 'Pipeline Management', 'Client-Specific Processes']
export const Network = () => (
  <Section id="network" dark className="!py-20">
    <SectionHead light eyebrow="Recruiter Network" title="Experienced Recruiters. Ready to Work With Your Team."
      text="Aligned by industry, technical specialization, seniority, geographic market, recruiting workflow, and hiring volume. Interview before deployment." />
    <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
      <div className="flex w-max animate-marquee gap-4">
        {[...caps, ...caps].map((c, i) => (
          <span key={i} className="whitespace-nowrap rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200">{c}</span>
        ))}
      </div>
    </div>
    <Reveal className="mt-10 text-center"><Button>Meet Your Next Recruiter</Button></Reveal>
  </Section>
)

/* ---------- Industries ---------- */
const industries = [
  ['Information Technology', 'Software Engineering · Cloud · DevOps · Cybersecurity · Data · AI/ML · Infrastructure · IT Support'],
  ['Engineering & Construction', 'Civil · Construction Management · Project Management · Estimating · Surveying · Safety'],
  ['Manufacturing', 'CNC · Manufacturing Engineering · Quality · Production · Maintenance · Supply Chain'],
  ['Accounting & Finance', 'Accounting · Finance · FP&A · Tax · Audit · Payroll · Financial Analysis'],
  ['Healthcare', 'Clinical · Administrative · Healthcare Operations · Allied Health · Specialized Roles'],
  ['Legal', 'Legal Operations · Paralegal · Legal Support · Attorneys · Compliance'],
  ['Professional Services', 'Operations · Sales · Administration · Customer Success · Business Development · Management'],
]
export const Industries = () => (
  <Section id="industries" className="bg-slate-50">
    <SectionHead eyebrow="Industries We Support" title="Recruitment Expertise Across Multiple Industries" />
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {industries.map(([t, d], i) => (
        <Reveal key={t} delay={i * 0.05}>
          <Card className="h-full !p-6"><Layers className="mb-3 text-gold-500" size={22} /><h3 className="font-bold text-navy-900">{t}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{d}</p></Card>
        </Reveal>
      ))}
      <Reveal delay={0.35}>
        <div className="flex h-full flex-col justify-center rounded-3xl bg-gradient-to-br from-gold-300 to-gold-500 p-6">
          <h3 className="font-bold text-navy-900">Don't see your industry?</h3>
          <p className="mt-2 text-sm text-navy-900/80">Our model can be customized for specialized hiring requirements.</p>
          <a href="#contact" className="mt-4 text-sm font-bold text-navy-900 underline">Discuss Your Hiring Needs →</a>
        </div>
      </Reveal>
    </div>
  </Section>
)

/* ---------- About ---------- */
export const About = () => (
  <Section id="about">
    <div className="grid items-center gap-14 lg:grid-cols-2">
      <Reveal>
        <span className="mb-4 inline-block rounded-full bg-gold-400/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold-500">About AeroLux</span>
        <h2 className="text-3xl font-extrabold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">Recruitment Capacity, Without the Traditional Overhead</h2>
        <p className="mt-5 text-lg leading-relaxed text-slate-600">Companies should be able to access experienced recruitment talent without building every part of the recruiting operation themselves. Our focus isn't simply reducing cost — it's creating <b className="text-navy-900">more capacity, greater flexibility, and scalable hiring support.</b></p>
        <p className="mt-5 text-2xl font-extrabold gold-text">People first. Quality first. Long-term relationships first.</p>
      </Reveal>
      <div className="grid gap-5">
        {[['Our Mission', 'To help organizations build stronger and more scalable recruitment operations through experienced people, flexible engagement models, and modern recruitment delivery.'],
          ['Our Vision', 'To become a trusted global recruitment operations partner for companies that want to scale hiring without unnecessary overhead.']].map(([t, d], i) => (
          <Reveal key={t} delay={0.1 + i * 0.1}>
            <Card><h3 className="text-lg font-bold text-navy-900">{t}</h3><p className="mt-2 text-slate-600">{d}</p></Card>
          </Reveal>
        ))}
      </div>
    </div>
  </Section>
)

/* ---------- FAQ ---------- */
const faqs = [
  ['How does the dedicated recruiter model work?', 'A dedicated AeroLux recruiter becomes an extension of your team and works according to your assigned priorities, processes, tools, and KPIs.'],
  ['Can we interview the recruiter before hiring?', 'Yes. Clients can interview proposed recruiters before deciding whether they are the right fit.'],
  ['Who manages the recruiter?', 'The structure can be customized. Your team can supervise directly, or AeroLux can provide recruitment operations oversight.'],
  ['Can recruiters work inside our ATS?', 'Yes, where appropriate access and permissions are provided, within your approved ATS and recruitment systems.'],
  ['Can we start with one recruiter?', 'Absolutely. We recommend starting small when appropriate and scaling once the model is proven.'],
  ['What if we need more recruiters?', 'Additional recruiters can be added based on availability and your requirements.'],
  ['Do you offer hourly support?', 'Yes. Hourly support is available for organizations that don\'t need a full-time dedicated recruiter.'],
  ['Do you support project-based recruitment?', 'Yes. We create sourcing and recruitment projects around specific roles, campaigns, locations, or candidate requirements.'],
  ['Do you work with staffing agencies?', 'Yes. Staffing agencies are one of AeroLux\'s primary target markets.'],
  ['Do you work with corporate HR teams?', 'Yes. We also support corporate Talent Acquisition and HR departments.'],
  ['What contract length do you require?', 'Terms vary by service. We can discuss pilot arrangements, monthly engagements, and longer-term agreements.'],
  ['How quickly can a recruiter start?', 'Timing depends on recruiter availability, client requirements, the interview process, and onboarding.'],
]
export const FAQ = () => {
  const [open, setOpen] = useState(0)
  return (
    <Section id="faq" className="bg-slate-50">
      <SectionHead eyebrow="FAQ" title="Frequently Asked Questions" />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map(([q, a], i) => (
          <Reveal key={q} delay={i * 0.03}>
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <button onClick={() => setOpen(open === i ? -1 : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-navy-900">
                {q}
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="shrink-0 text-gold-500"><Plus size={20} /></motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="px-6 pb-5 text-slate-600">{a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* ---------- Contact ---------- */
const field = 'w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-gold-400 focus:ring-4 focus:ring-gold-400/20'
const API = import.meta.env.VITE_API_URL || ''
const initial = { firstName: '', lastName: '', company: '', email: '', phone: '', companyType: 'Staffing Agency', need: 'Dedicated Recruiter', recruiters: '1', message: '', website: '' }

const Field = ({ label, error, children, className = '' }) => (
  <label className={`block ${className}`}>
    <span className="mb-1.5 block text-sm font-semibold text-navy-900">{label}</span>
    {children}
    <AnimatePresence>
      {error && <motion.span initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1 block text-xs font-medium text-red-500">{error}</motion.span>}
    </AnimatePresence>
  </label>
)

const Choice = ({ label, value, options, onChange }) => (
  <div className="sm:col-span-2">
    <span className="mb-2 block text-sm font-semibold text-navy-900">{label}</span>
    <div className="flex flex-wrap gap-2">
      {options.map((o) => (
        <button type="button" key={o} onClick={() => onChange(o)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${value === o ? 'border-gold-400 bg-gold-400/15 text-navy-900 shadow-sm' : 'border-slate-200 text-slate-600 hover:border-gold-300'}`}>
          {o}
        </button>
      ))}
    </div>
  </div>
)

export const Contact = () => {
  const [f, setF] = useState(initial)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [serverError, setServerError] = useState('')
  const set = (k) => (e) => { setF({ ...f, [k]: e.target.value }); if (errors[k]) setErrors({ ...errors, [k]: '' }) }
  const pick = (k) => (v) => setF({ ...f, [k]: v })

  const validate = () => {
    const e = {}
    if (!f.firstName.trim()) e.firstName = 'First name is required'
    if (!f.lastName.trim()) e.lastName = 'Last name is required'
    if (!f.company.trim()) e.company = 'Company is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = 'Enter a valid work email'
    if (f.phone && !/^[+()\-\s\d]{7,20}$/.test(f.phone)) e.phone = 'Enter a valid phone number'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const submit = async (ev) => {
    ev.preventDefault()
    if (!validate()) return
    setStatus('sending'); setServerError('')
    try {
      const res = await fetch(`${API}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(f) })
      const data = await res.json().catch(() => ({}))
      if (!res.ok || !data.ok) throw new Error(data.error || 'Something went wrong. Please try again.')
      setStatus('sent'); setF(initial)
    } catch (err) {
      setServerError(err.message || 'Network error. Please try again.'); setStatus('error')
    }
  }

  const border = (k) => (errors[k] ? 'border-red-400' : 'border-slate-200')

  return (
    <Section id="contact">
      <SectionHead eyebrow="Contact" title="Let's Build Your Recruitment Capacity"
        text="Tell us about your hiring requirements and we'll recommend the model that fits your organization." />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="h-full rounded-3xl bg-gradient-to-br from-navy-900 to-navy-700 p-8 text-white shadow-2xl">
            <h3 className="text-2xl font-extrabold">What happens next?</h3>
            <ul className="mt-6 space-y-5">
              {[[Clock, 'Quick response', 'Our team reviews every request and replies shortly.'], [Mail, 'Confirmation email', 'You get an instant confirmation in your inbox.'], [ShieldCheck, 'No obligation', 'We recommend a model first. Start small, scale later.']].map(([I, t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-gold-300"><I size={18} /></span>
                  <div><p className="font-semibold">{t}</p><p className="text-sm text-slate-300">{d}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-3">
          <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-2xl shadow-navy-900/10 sm:p-9">
            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div key="ok" initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="py-14 text-center">
                  <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', delay: 0.15 }} className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-emerald-100 text-emerald-500"><CheckCircle2 size={44} /></motion.span>
                  <h3 className="mt-5 text-2xl font-extrabold text-navy-900">Request received!</h3>
                  <p className="mt-2 text-slate-600">Thank you. We've emailed you a confirmation and our team will be in touch shortly.</p>
                  <button onClick={() => setStatus('idle')} className="mt-6 text-sm font-semibold text-gold-500 hover:underline">Send another request</button>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={submit} noValidate className="grid gap-5 sm:grid-cols-2">
                  {/* honeypot: hidden from humans, bots fill it */}
                  <input type="text" name="website" value={f.website} onChange={set('website')} tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
                  <Field label="First Name *" error={errors.firstName}><input className={`${field} ${border('firstName')}`} value={f.firstName} onChange={set('firstName')} /></Field>
                  <Field label="Last Name *" error={errors.lastName}><input className={`${field} ${border('lastName')}`} value={f.lastName} onChange={set('lastName')} /></Field>
                  <Field label="Company *" error={errors.company}><input className={`${field} ${border('company')}`} value={f.company} onChange={set('company')} /></Field>
                  <Field label="Work Email *" error={errors.email}><input type="email" className={`${field} ${border('email')}`} value={f.email} onChange={set('email')} /></Field>
                  <Field label="Phone" error={errors.phone} className="sm:col-span-2"><input type="tel" className={`${field} ${border('phone')}`} value={f.phone} onChange={set('phone')} placeholder="+1 555 000 0000" /></Field>
                  <Choice label="Company Type" value={f.companyType} options={['Staffing Agency', 'Corporate HR', 'Other']} onChange={pick('companyType')} />
                  <Choice label="What do you need help with?" value={f.need} options={['Dedicated Recruiter', 'Senior / Technical Recruiter', 'Sourcing Support', 'Project-Based Recruitment', 'Dedicated Recruitment Team', 'Not Sure Yet']} onChange={pick('need')} />
                  <Choice label="How many recruiters do you need?" value={f.recruiters} options={['1', '2–3', '4–5', '6–10', '10+']} onChange={pick('recruiters')} />
                  <Field label="Tell us about your hiring requirements" className="sm:col-span-2">
                    <textarea rows={4} maxLength={3000} className={`${field} border-slate-200`} value={f.message} onChange={set('message')} placeholder="Roles, industries, volume, tools (ATS), timeline..." />
                  </Field>
                  {status === 'error' && (
                    <div className="flex items-start gap-2 rounded-xl bg-red-50 p-4 text-sm text-red-600 sm:col-span-2"><AlertCircle size={18} className="mt-0.5 shrink-0" />{serverError}</div>
                  )}
                  <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.97 }} disabled={status === 'sending'} type="submit"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-8 py-4 font-bold text-navy-900 shadow-lg shadow-gold-500/30 disabled:opacity-70 sm:col-span-2">
                    {status === 'sending' ? <><Loader2 size={18} className="animate-spin" /> Sending...</> : <>Submit Request <Send size={16} /></>}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}

/* ---------- Final CTA ---------- */
export const FinalCTA = () => (
  <section className="relative overflow-hidden bg-ink py-24">
    <div className="grid-bg absolute inset-0" />
    <motion.div animate={{ scale: [1, 1.25, 1] }} transition={{ duration: 10, repeat: Infinity }} className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold-500/20 blur-[130px]" />
    <Reveal className="relative mx-auto max-w-3xl px-5 text-center">
      <h2 className="text-3xl font-extrabold text-white sm:text-5xl">Ready to Build a More <span className="gold-text">Scalable Recruitment Team?</span></h2>
      <p className="mt-5 text-lg text-slate-300">Tell us what you're hiring for and where your team needs support. We'll show you how AeroLux can become an extension of your recruitment operation.</p>
      <div className="mt-9 flex justify-center"><Button>Book a Consultation</Button></div>
    </Reveal>
  </section>
)
