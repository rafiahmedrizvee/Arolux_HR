import { Plane } from 'lucide-react'

const cols = [
  ['Solutions', [['Dedicated Recruiters', '#solutions'], ['Recruitment Sourcing', '#solutions'], ['Technical Recruitment', '#solutions'], ['Project-Based Recruitment', '#solutions'], ['Recruitment Teams', '#solutions']]],
  ['Company', [['About AeroLux', '#about'], ['How It Works', '#how'], ['Industries', '#industries'], ['Recruiter Network', '#network'], ['FAQ', '#faq']]],
  ['For Businesses', [['Staffing Agencies', '#solutions'], ['Corporate HR', '#solutions'], ['Request a Proposal', '#contact'], ['Contact', '#contact']]],
]

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 text-slate-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 md:grid-cols-4">
        <div>
          <a href="#top" className="flex items-center gap-2.5 text-white">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 text-navy-900"><Plane size={18} /></span>
            <span className="text-lg font-extrabold">AeroLux <span className="font-medium text-slate-300">HR Firm</span></span>
          </a>
          <p className="mt-4 text-sm leading-relaxed">Experienced Recruitment. Flexible Capacity. Scalable Growth.</p>
        </div>
        {cols.map(([t, items]) => (
          <div key={t}>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">{t}</h4>
            <ul className="space-y-2.5 text-sm">
              {items.map(([l, h]) => <li key={l}><a href={h} className="transition-colors hover:text-gold-300">{l}</a></li>)}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-14 max-w-7xl border-t border-white/10 px-5 py-6 text-center text-xs sm:px-8">
        <p>© 2026 AeroLux HR Firm. All rights reserved.</p>
        <p className="mt-1">Recruitment Outsourcing • Talent Acquisition Support • Dedicated Remote Recruiters</p>
      </div>
    </footer>
  )
}
