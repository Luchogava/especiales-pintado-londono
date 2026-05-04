function RoadAccent({ compact = false }) {
  return (
    <div
      className={`relative overflow-hidden rounded-full ${
        compact ? 'h-1.5 w-24' : 'h-2 w-40'
      } bg-brand-silver/15`}
      aria-hidden="true"
    >
      <span className="absolute inset-y-0 left-0 w-[58%] rounded-full bg-brand-green" />
      <span className="absolute inset-y-0 right-0 w-[28%] rounded-full bg-brand-red" />
      <span className="absolute left-[48%] top-1/2 h-[1px] w-[26%] -translate-y-1/2 bg-white/60" />
    </div>
  )
}

export function BrandLockup({ variant = 'compact' }) {
  const compact = variant === 'compact'

  return (
    <div className={`flex items-center ${compact ? 'gap-3' : 'gap-5 sm:gap-6'}`}>
      <div
        className={`flex shrink-0 items-center justify-center rounded-[1.45rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,#123465_0%,#08182d_48%,#040b16_100%)] p-1 shadow-[0_16px_34px_rgba(0,0,0,0.24)] ${
          compact ? 'h-12 w-12 sm:h-14 sm:w-14' : 'h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28'
        }`}
      >
        <img
          src="/logo-pl.png"
          alt="Logo Servicios Especiales Pintado Londo\u00f1o"
          className="h-full w-full object-contain"
        />
      </div>

      <div className="min-w-0">
        <p
          className={`font-display font-black uppercase tracking-[0.12em] text-brand-silver ${
            compact ? 'text-[0.52rem] leading-tight sm:text-[0.6rem]' : 'text-[0.72rem] leading-tight sm:text-sm'
          }`}
        >
          Servicios Especiales
        </p>

        <div className={`${compact ? 'mt-0.5' : 'mt-1.5'} leading-none`}>
          <span
            className={`block font-display font-black uppercase tracking-[0.02em] text-transparent bg-gradient-to-b from-white via-brand-silver to-[#94a6bc] bg-clip-text ${
              compact ? 'text-[1.1rem] sm:text-[1.25rem]' : 'text-[2.1rem] sm:text-[2.6rem] lg:text-[3rem]'
            }`}
          >
            Pintado
          </span>
          <span
            className={`block font-display font-black uppercase tracking-[0.04em] text-brand-green ${
              compact ? 'text-[0.92rem] sm:text-[1rem]' : 'text-[1.75rem] sm:text-[2rem] lg:text-[2.3rem]'
            }`}
          >
            Londo\u00f1o
          </span>
        </div>

        <div className={`${compact ? 'mt-1.5' : 'mt-2.5'} flex items-center gap-3`}>
          <RoadAccent compact={compact} />
          {!compact && (
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300 sm:text-sm">
              Empresa de transporte especial de pasajeros
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
