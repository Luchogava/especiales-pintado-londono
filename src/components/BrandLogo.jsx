export function BrandLogo() {
  return (
    <div className="flex w-full min-w-0 items-center">
      <div className="w-full min-w-0 rounded-2xl border border-brand-silver/70 bg-white/90 px-3 py-2 shadow-[0_12px_28px_rgba(6,34,75,0.12)] sm:hidden">
        <span className="block text-[0.58rem] font-black uppercase leading-none tracking-[0.2em] text-brand-graphite">
          Servicios Especiales
        </span>
        <span className="mt-1 block truncate font-display text-[1.05rem] font-black uppercase leading-none tracking-[-0.03em]">
          <span className="text-brand-navy">Pintado</span>
          <span className="ml-1 text-brand-green">{'Londo\u00f1o'}</span>
        </span>
        <span className="mt-1 block truncate text-[0.58rem] font-extrabold leading-none text-brand-navy/75">
          Transporte especial de pasajeros
        </span>
      </div>
      <img
        src="/letrero-pl-nombre.png"
        alt={'Servicios Especiales Pintado Londo\u00f1o'}
        className="hidden h-auto w-full max-w-full rounded-xl object-contain shadow-[0_10px_24px_rgba(6,34,75,0.18)] transition group-hover:shadow-[0_14px_30px_rgba(6,34,75,0.24)] sm:block"
      />
    </div>
  )
}
