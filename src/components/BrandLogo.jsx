export function BrandLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-1 shadow-[0_10px_24px_rgba(0,0,0,0.18)] sm:h-12 sm:w-12">
        <img
          src="/logo-pl.png"
          alt="Logo Servicios Especiales Pintado Londoño"
          className="h-full w-full object-contain"
        />
      </div>
      <img
        src="/letrero-pl.png"
        alt="Letrero de Servicios Especiales Pintado Londoño"
        className="h-10 w-auto max-w-[12.5rem] object-contain sm:h-11 sm:max-w-[14rem]"
      />
    </div>
  )
}
