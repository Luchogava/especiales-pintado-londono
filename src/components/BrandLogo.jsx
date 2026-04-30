export function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-1.5 shadow-[0_10px_24px_rgba(0,0,0,0.18)]">
        <img
          src="/logo-pintado.png"
          alt="Logo Servicios Especiales Pintado Londono"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="min-w-0">
        <p className="line-clamp-2 text-sm font-extrabold leading-tight text-white sm:text-base">
          Servicios Especiales Pintado Londono
        </p>
        <p className="mt-0.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-brand-gold/85 sm:text-xs">
          Transporte especial de pasajeros
        </p>
      </div>
    </div>
  )
}
