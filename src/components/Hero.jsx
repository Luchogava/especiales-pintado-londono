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

export function Hero({ company, whatsappLink }) {
  const heroDescription =
    'Soluciones de transporte especial para empresas, instituciones educativas, grupos tur\u00edsticos y servicios a la medida, con operaci\u00f3n nacional, atenci\u00f3n humana y m\u00e1s de 40 a\u00f1os de experiencia.'
  const yearsLabel = 'M\u00e1s de 40 a\u00f1os'
  const yearsAlt = 'M\u00e1s de 40 a\u00f1os movilizando personas'
  const heroAlt = 'Servicios Especiales Pintado Londo\u00f1o'

  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-ink text-white">
      <div className="absolute inset-0 bg-hero-grid bg-[size:42px_42px] opacity-15" />
      <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-brand-blue/35 blur-3xl" />
      <div className="absolute right-[-8rem] top-10 h-80 w-80 rounded-full bg-brand-green/15 blur-3xl" />
      <div className="absolute bottom-[-8rem] right-[10%] h-64 w-64 rounded-full bg-brand-red/10 blur-3xl" />

      <Container className="relative grid gap-10 py-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/25 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <ShieldIcon />
            {company.founded} movilizando personas en Colombia
          </div>

          <div className="mt-7 max-w-[42rem] rounded-[2rem] border border-brand-silver/15 bg-[linear-gradient(145deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.04)_30%,rgba(6,34,75,0.16)_100%)] p-2 shadow-[0_28px_70px_rgba(0,0,0,0.32)]">
            <div className="overflow-hidden rounded-[1.45rem] border border-brand-silver/10 bg-[radial-gradient(circle_at_top_left,#113565_0%,#08182d_42%,#040b16_100%)]">
              <img
                src="/letrero-pl.png"
                alt={heroAlt}
                className="block h-[11.5rem] w-full object-contain px-5 py-5 drop-shadow-[0_18px_30px_rgba(0,0,0,0.28)] sm:h-[13.5rem] lg:h-[15rem]"
              />
            </div>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.45rem]">
            Transporte especial de pasajeros con seguridad, puntualidad y buen trato
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">{heroDescription}</p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#cotizacion"
              className="inline-flex items-center justify-center rounded-full bg-brand-silver px-7 py-4 text-base font-extrabold text-brand-navy shadow-[0_18px_40px_rgba(217,221,228,0.18)] transition hover:-translate-y-0.5 hover:bg-white"
            >
              {'Solicitar cotizaci\u00f3n'}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-7 py-4 text-base font-extrabold text-white shadow-[0_18px_40px_rgba(37,211,102,0.38)] transition hover:-translate-y-0.5 hover:bg-[#1fbe59]"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
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
                />
                <p className="mt-4 text-center text-sm leading-6 text-slate-300">
                  Trayectoria, experiencia operativa y confianza para movilizar personas en todo tipo de servicio.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
