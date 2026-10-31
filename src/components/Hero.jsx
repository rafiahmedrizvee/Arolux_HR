import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { Button } from './ui'

const stages = ['Sourcing', 'Screening', 'Outreach', 'Qualification', 'Interview']

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden bg-ink pb-20 pt-32">
      <div className="grid-bg absolute inset-0" />
      <motion.div animate={{ x: [0, 60, 0], y: [0, 40, 0] }} transition={{ duration: 14, repeat: Infinity }}
        className="absolute -left-32 top-10 h-[28rem] w-[28rem] rounded-full bg-indigo-600/30 blur-[120px]" />
      <motion.div animate={{ x: [0, -50, 0], y: [0, -30, 0] }} transition={{ duration: 16, repeat: Infinity }}
        className="absolute -right-24 bottom-0 h-[26rem] w-[26rem] rounded-full bg-gold-500/20 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
        <div>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-block rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-300">
            US-Market Recruiters · Remote Teams
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build More Recruitment Capacity. <span className="gold-text">Without Building More Overhead.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.8 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
            AeroLux HR Firm provides experienced US-market recruiters and dedicated remote recruitment teams that work as an extension of your organization.
            Whether you're a staffing agency handling more job orders or a corporate HR team facing hiring demand, get flexible capacity without the cost of expanding your local team.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-9 flex flex-wrap gap-4">
            <Button>Build Your Recruitment Team</Button>
            <Button variant="ghost">Talk to AeroLux</Button>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-300">
            {['Experienced Recruiters', 'Flexible Engagements', 'Scalable Recruitment Support'].map((t) => (
              <span key={t} className="flex items-center gap-2"><CheckCircle2 size={16} className="text-gold-400" />{t}</span>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.3, duration: 1 }}
          className="relative mx-auto w-full max-w-md">
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-400">Recruitment Pipeline</p>
                <p className="text-lg font-bold text-white">Your Extended Team</p>
              </div>
              <span className="flex items-center gap-1.5 rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-300">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />Live
              </span>
            </div>
            <div className="space-y-3">
              {stages.map((s, i) => (
                <div key={s}>
                  <div className="mb-1 flex justify-between text-xs text-slate-300"><span>{s}</span><span>{92 - i * 11}%</span></div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${92 - i * 11}%` }} transition={{ delay: 0.8 + i * 0.15, duration: 1.2 }}
                      className="h-full rounded-full bg-gradient-to-r from-gold-300 to-gold-500" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div animate={{ y: [0, 12, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -bottom-6 -left-6 rounded-2xl bg-white px-5 py-3 shadow-xl">
            <p className="text-xs text-slate-500">Start with</p>
            <p className="text-xl font-extrabold text-navy-900">1 Recruiter</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
