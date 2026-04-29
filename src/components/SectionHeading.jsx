export function SectionHeading({ eyebrow, title, description, align = 'left', theme = 'light' }) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
  const titleColor = theme === 'dark' ? 'text-white' : 'text-brand-navy'
  const descriptionColor = theme === 'dark' ? 'text-slate-300' : 'text-slate-600'

  return (
    <div className={alignment}>
      <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.28em] text-brand-gold">{eyebrow}</p>
      <h2 className={`font-display text-3xl font-bold tracking-tight sm:text-4xl ${titleColor}`}>{title}</h2>
      <p className={`mt-4 text-lg leading-8 ${descriptionColor}`}>{description}</p>
    </div>
  )
}
