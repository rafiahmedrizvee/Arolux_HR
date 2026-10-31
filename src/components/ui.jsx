import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const Reveal = ({ children, delay = 0, className = '', y = 28 }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
)

export const Button = ({ href = '#contact', children, variant = 'gold', className = '' }) => {
  const styles = {
    gold: 'bg-gradient-to-r from-gold-300 to-gold-500 text-navy-900 shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40',
    ghost: 'border border-white/25 text-white hover:bg-white/10',
    dark: 'bg-navy-900 text-white hover:bg-navy-700 shadow-lg shadow-navy-900/20',
  }
  return (
    <motion.a
      href={href}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`group inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-shadow ${styles[variant]} ${className}`}
    >
      {children}
      <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
    </motion.a>
  )
}

export const SectionHead = ({ eyebrow, title, text, light = false, center = true }) => (
  <Reveal className={`mx-auto mb-14 max-w-3xl ${center ? 'text-center' : ''}`}>
    {eyebrow && (
      <span className={`mb-4 inline-block rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-widest ${light ? 'bg-white/10 text-gold-300' : 'bg-gold-400/15 text-gold-500'}`}>
        {eyebrow}
      </span>
    )}
    <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-navy-900'}`}>{title}</h2>
    {text && <p className={`mt-5 text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600'}`}>{text}</p>}
  </Reveal>
)

export const Section = ({ id, children, dark = false, className = '' }) => (
  <section id={id} className={`relative overflow-hidden py-24 sm:py-28 ${dark ? 'bg-navy-900' : ''} ${className}`}>
    <div className="mx-auto max-w-7xl px-5 sm:px-8">{children}</div>
  </section>
)
