export function SectionHeading({ eyebrow, title, description, align = 'left', theme = 'light' }) {
  const alignment = align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
  const titleColor = theme === 'dark' ? 'text-white' : 'text-brand-navy'
  const descriptionColor = theme === 'dark' ? 'text-slate-300' : 'text-slate-600'

  return (
    <div className={alignment}>
      <p className="mb-2 text-[0.68rem] font-extrabold uppercase tracking-[0.22em] text-brand-green sm:mb-4 sm:text-sm sm:tracking-[0.28em]">
        {eyebrow}
      </p>
      <h2 className={`font-display text-[1.65rem] font-bold leading-tight sm:text-4xl ${titleColor}`}>{title}</h2>
      <p className={`mt-2 text-sm leading-6 sm:mt-4 sm:text-lg sm:leading-8 ${descriptionColor}`}>{description}</p>
    </div>
  )
}
