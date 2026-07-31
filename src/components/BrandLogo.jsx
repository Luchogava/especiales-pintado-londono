export function BrandLogo() {
  return (
    <div className="flex w-full min-w-0 items-center">
      <div className="w-full min-w-0 rounded-2xl border border-white/12 bg-[linear-gradient(135deg,#07162d_0%,#06224b_55%,#0f2f26_100%)] px-3 py-2 shadow-[0_12px_28px_rgba(4,11,22,0.24)]">
        <span className="block text-[0.48rem] font-black uppercase leading-none tracking-[0.16em] text-brand-silver sm:text-[0.56rem]">
          Servicios Especiales
        </span>
        <span className="mt-1 block whitespace-nowrap font-display text-[0.92rem] font-black uppercase leading-none tracking-[-0.05em] sm:text-[1.04rem]">
          <span className="text-white">Pintado</span>
          <span className="ml-1 text-brand-green">{'Londoño'}</span>
        </span>
        <span className="mt-1 block whitespace-nowrap text-[0.49rem] font-extrabold leading-none text-slate-200/90 sm:text-[0.56rem]">
          Transporte especial de pasajeros
        </span>
      </div>
    </div>
  )
}
