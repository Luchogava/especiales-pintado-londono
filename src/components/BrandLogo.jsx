export function BrandLogo() {
  const logoAlt = 'Logo Servicios Especiales Pintado Londo\u00f1o'
  const signAlt = 'Letrero de Servicios Especiales Pintado Londo\u00f1o'

  return (
    <div className="flex items-center gap-3">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-[linear-gradient(145deg,#0a1d39_0%,#071427_100%)] p-1 shadow-[0_10px_24px_rgba(0,0,0,0.18)] sm:h-12 sm:w-12">
        <img src="/logo-pl.png" alt={logoAlt} className="h-full w-full object-contain" />
      </div>

      <div className="rounded-[1.15rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,#0f2d5e_0%,#08182d_48%,#040b16_100%)] px-3 py-2 shadow-[0_10px_24px_rgba(0,0,0,0.16)]">
        <img
          src="/letrero-pl.png"
          alt={signAlt}
          className="h-8 w-auto max-w-[11.5rem] object-contain sm:h-9 sm:max-w-[13rem]"
        />
      </div>
    </div>
  )
}
