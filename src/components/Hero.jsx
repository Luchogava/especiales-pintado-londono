import { Container } from './Container'

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path
        d="M12 3L5 6V11C5 15.55 7.91 19.8 12 21C16.09 19.8 19 15.55 19 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9.5 12L11.2 13.7L14.8 10.1" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function BrandHeroMark() {
  return (
    <figure className="relative mt-6 max-w-[42rem] overflow-hidden rounded-[1.45rem] bg-brand-ink shadow-[0_24px_58px_rgba(0,0,0,0.30)] ring-1 ring-brand-green/25 sm:rounded-[2rem]">
      <picture className="block">
        <source srcSet="/letrero-pl-hero-limpio.webp" type="image/webp" />
        <img
          src="/letrero-pl-hero-limpio.png"
          alt={'Servicios Especiales Pintado Londoño, empresa de transporte especial de pasajeros'}
          width="1680"
          height="945"
          className="block aspect-[16/9] h-auto w-full object-contain"
          fetchPriority="high"
        />
      </picture>
    </figure>
  )
}

export function Hero({ company, whatsappLink }) {
  const heroDescription =
    'Movilizamos equipos de trabajo, estudiantes, turistas y grupos con seguridad, puntualidad, atención humana y operación nacional respaldada por más de 40 años de experiencia.'
  const yearsLabel = 'Más de 40 años'
  const yearsAlt = 'Más de 40 años movilizando personas'
  return (
    <section id="inicio" className="relative overflow-hidden bg-transparent py-5 sm:py-10">
      <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-brand-blue/18 blur-3xl" aria-hidden="true" />
      <div className="absolute right-[-8rem] top-10 h-80 w-80 rounded-full bg-brand-green/14 blur-3xl" aria-hidden="true" />
      <div className="absolute bottom-[-8rem] right-[10%] h-64 w-64 rounded-full bg-brand-red/8 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <div className="relative grid overflow-hidden rounded-[2rem] border border-brand-line bg-[linear-gradient(135deg,#040b16_0%,#06224b_58%,#0f2f26_100%)] px-5 py-7 text-white shadow-[0_30px_90px_rgba(6,34,75,0.22)] sm:rounded-[2.6rem] sm:px-8 sm:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-10 lg:px-10 lg:py-14">
          <div className="absolute inset-0 bg-hero-grid bg-[size:46px_46px] opacity-[0.07]" aria-hidden="true" />
          <div className="absolute left-[-8rem] top-[-6rem] h-72 w-72 rounded-full bg-brand-blue/35 blur-3xl" aria-hidden="true" />
          <div className="absolute right-[-8rem] top-0 h-80 w-80 rounded-full bg-brand-green/15 blur-3xl" aria-hidden="true" />
          <div className="absolute bottom-[-8rem] right-[10%] h-64 w-64 rounded-full bg-brand-red/10 blur-3xl" aria-hidden="true" />

          <div className="relative max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/25 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
            <ShieldIcon />
            {company.founded} movilizando personas en Colombia
          </div>

          <BrandHeroMark />

          <h1 className="mt-6 font-display text-[2.35rem] font-bold leading-[1.04] tracking-[-0.04em] min-[390px]:text-4xl sm:text-5xl lg:text-[3.45rem]">
            Transporte especial de pasajeros para empresas, colegios y grupos
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{heroDescription}</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#cotizacion"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-brand-silver px-7 py-4 text-base font-extrabold text-brand-navy shadow-[0_18px_40px_rgba(217,221,228,0.18)] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            >
              {'Solicitar cotización'}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#25D366] px-7 py-4 text-base font-extrabold text-white shadow-[0_18px_40px_rgba(37,211,102,0.38)] transition hover:-translate-y-0.5 hover:bg-[#1fbe59] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Hablar por WhatsApp
            </a>
          </div>
          </div>

          <div className="relative mt-10 lg:mt-0">
          <div className="mx-auto max-w-[22rem] rounded-[2rem] border border-brand-silver/15 bg-white/10 p-5 shadow-glow backdrop-blur lg:mr-0 lg:max-w-[24rem]">
            <div className="rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-brand-red/10 p-6">
              <div className="rounded-[1.4rem] border border-white/10 bg-brand-ink/40 p-4">
                <p className="text-center text-sm font-extrabold uppercase tracking-[0.24em] text-brand-green">
                  {yearsLabel}
                </p>
                <img
                  src="/40-anos.png"
                  alt={yearsAlt}
                  className="mx-auto mt-4 w-full max-w-[14rem] object-contain lg:max-w-[15rem]"
                  decoding="async"
                />
                <p className="mt-4 text-center text-sm leading-6 text-slate-300">
                  Trayectoria, experiencia operativa y confianza para movilizar personas en todo tipo de servicio.
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              {[
                ['1', 'Recibimos la necesidad'],
                ['2', 'Validamos ruta, horario y pasajeros'],
                ['3', 'Acompañamos la cotización'],
              ].map(([number, text]) => (
                <div key={number} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-green text-sm font-black text-white">
                    {number}
                  </span>
                  <span className="text-sm font-semibold text-slate-200">{text}</span>
                </div>
              ))}
            </div>
          </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
