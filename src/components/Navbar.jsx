import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Plane } from 'lucide-react'

const links = [
  ['Solutions', '#solutions'], ['How It Works', '#how'], ['Pricing', '#pricing'],
  ['Industries', '#industries'], ['About', '#about'], ['FAQ', '#faq'],
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24)
    on(); window.addEventListener('scroll', on)
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-navy-900/85 py-3 shadow-xl backdrop-blur-xl' : 'py-5'}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-white">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-gold-300 to-gold-500 text-navy-900"><Plane size={18} /></span>
          <span className="text-lg font-extrabold tracking-tight">AeroLux <span className="font-medium text-slate-300">HR Firm</span></span>
        </a>
        <ul className="hidden items-center gap-8 lg:flex">
          {links.map(([l, h]) => (
            <li key={h}><a href={h} className="text-sm font-medium text-slate-200 transition-colors hover:text-gold-300">{l}</a></li>
          ))}
        </ul>
        <a href="#contact" className="hidden rounded-full bg-gradient-to-r from-gold-300 to-gold-500 px-5 py-2.5 text-sm font-semibold text-navy-900 transition hover:scale-105 lg:block">
          Talk to AeroLux
        </a>
        <button onClick={() => setOpen(!open)} className="text-white lg:hidden" aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-navy-900/95 backdrop-blur-xl lg:hidden"
          >
            <ul className="space-y-1 px-5 py-4">
              {links.map(([l, h]) => (
                <li key={h}><a onClick={() => setOpen(false)} href={h} className="block rounded-lg px-3 py-3 font-medium text-slate-200 hover:bg-white/5">{l}</a></li>
              ))}
              <li><a onClick={() => setOpen(false)} href="#contact" className="mt-2 block rounded-full bg-gold-400 px-5 py-3 text-center font-semibold text-navy-900">Talk to AeroLux</a></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
