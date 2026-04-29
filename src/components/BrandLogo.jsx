export function BrandLogo() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.2)]">
        <img
          src="/logo-pintado.png"
          alt="Logo Servicios Especiales Pintado Londoño"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="min-w-0">
        <p className="font-display text-sm font-black uppercase tracking-[0.28em] text-brand-gold">SEPL</p>
        <p className="line-clamp-2 text-sm font-extrabold leading-tight text-white sm:text-base">
          Servicios Especiales Pintado Londoño
        </p>
      </div>
    </div>
  )
}
