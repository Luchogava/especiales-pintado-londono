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

          <div
            className="mt-7 max-w-[42rem] overflow-hidden rounded-[1.4rem] border border-brand-silver/20 bg-[radial-gradient(circle_at_18%_22%,rgba(116,192,67,0.22),transparent_25%),linear-gradient(135deg,#06172f_0%,#040b16_56%,#0b241f_100%)] p-5 shadow-[0_28px_70px_rgba(0,0,0,0.32)] sm:rounded-[2rem] sm:p-8"
            aria-label={'Servicios Especiales Pintado Londo\u00f1o, empresa de transporte especial de pasajeros'}
          >
            <div className="relative">
              <div className="absolute -right-10 top-0 h-28 w-28 rounded-full bg-brand-green/20 blur-2xl" aria-hidden="true" />
              <div className="absolute -bottom-8 left-0 h-24 w-24 rounded-full bg-brand-red/10 blur-2xl" aria-hidden="true" />
              <p className="relative text-[0.68rem] font-black uppercase tracking-[0.34em] text-brand-silver sm:text-sm">
                Servicios Especiales
              </p>
              <div className="relative mt-3 font-display text-[2.45rem] font-black uppercase leading-[0.9] tracking-[-0.08em] text-white sm:text-[4.35rem]">
                <span className="block text-brand-silver drop-shadow-[0_2px_0_rgba(255,255,255,0.18)]">Pintado</span>
                <span className="block bg-[linear-gradient(180deg,#a7e765_0%,#74c043_44%,#3f7c22_100%)] bg-clip-text text-transparent drop-shadow-[0_2px_0_rgba(255,255,255,0.14)]">
                  {'Londo\u00f1o'}
                </span>
              </div>
              <div className="relative mt-5 flex items-center gap-3">
                <span className="h-px flex-1 bg-[linear-gradient(90deg,#74C043,rgba(217,221,228,0.55))]" aria-hidden="true" />
                <span className="rounded-full border border-brand-green/40 bg-brand-ink/70 px-4 py-2 text-[0.68rem] font-extrabold uppercase tracking-[0.08em] text-slate-100 sm:text-xs">
                  Empresa de transporte especial de pasajeros
                </span>
                <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(217,221,228,0.55),#E33239)]" aria-hidden="true" />
              </div>
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
