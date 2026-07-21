export function BrandLogo() {
  return (
    <div className="flex w-full min-w-0 items-center">
      <div className="w-full min-w-0 rounded-2xl border border-white/15 bg-white/95 px-3 py-2 shadow-[0_12px_28px_rgba(4,11,22,0.24)]">
        <span className="block text-[0.5rem] font-black uppercase leading-none tracking-[0.16em] text-brand-graphite sm:text-[0.56rem]">
          Servicios Especiales
        </span>
        <span className="mt-1 block whitespace-nowrap font-display text-[0.98rem] font-black uppercase leading-none tracking-[-0.04em] sm:text-[1.04rem]">
          <span className="text-brand-navy">Pintado</span>
          <span className="ml-1 text-brand-green">{'Londo\u00f1o'}</span>
        </span>
        <span className="mt-1 block whitespace-nowrap text-[0.52rem] font-extrabold leading-none text-brand-navy/75 sm:text-[0.56rem]">
          Transporte especial de pasajeros
        </span>
      </div>
    </div>
  )
}
