export function SectionHeading({ eyebrow, title, description, align = 'left', theme = 'light' }) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
  const titleColor = theme === 'dark' ? 'text-white' : 'text-brand-navy'
  const descriptionColor = theme === 'dark' ? 'text-slate-300' : 'text-slate-600'

  return (
    <div className={alignment}>
      <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-brand-green sm:mb-4 sm:text-sm sm:tracking-[0.28em]">
        {eyebrow}
      </p>
      <h2 className={`font-display text-2xl font-bold leading-tight sm:text-4xl ${titleColor}`}>{title}</h2>
      <p className={`mt-3 text-base leading-7 sm:mt-4 sm:text-lg sm:leading-8 ${descriptionColor}`}>{description}</p>
    </div>
  )
}
