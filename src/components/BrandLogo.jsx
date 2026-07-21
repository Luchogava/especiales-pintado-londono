export function BrandLogo() {
  return (
    <div className="flex w-full min-w-0 items-center">
      <div className="w-full min-w-0 rounded-2xl border border-brand-silver/80 bg-white px-3 py-2 shadow-[0_12px_28px_rgba(6,34,75,0.12)] sm:hidden">
        <span className="block text-[0.5rem] font-black uppercase leading-none tracking-[0.16em] text-brand-graphite">
          Servicios Especiales
        </span>
        <span className="mt-1 block font-display text-[0.98rem] font-black uppercase leading-none tracking-[-0.04em]">
          <span className="text-brand-navy">Pintado</span>
          <span className="ml-1 text-brand-green">{'Londo\u00f1o'}</span>
        </span>
        <span className="mt-1 block text-[0.52rem] font-extrabold leading-none text-brand-navy/75">
          Transporte especial de pasajeros
        </span>
      </div>
      <div className="hidden overflow-hidden rounded-xl bg-[linear-gradient(135deg,#f4f7fb_0%,#d9dde4_46%,#edf3f7_100%)] p-1 shadow-[0_10px_24px_rgba(6,34,75,0.18)] transition group-hover:shadow-[0_14px_30px_rgba(6,34,75,0.24)] sm:block">
        <img
          src="/letrero-pl-oficial-web-2026.png"
          alt={'Servicios Especiales Pintado Londo\u00f1o'}
          className="h-auto w-full max-w-full object-contain mix-blend-multiply"
        />
      </div>
    </div>
  )
}
