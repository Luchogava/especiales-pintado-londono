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
  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-ink text-white">
      <div className="absolute inset-0 bg-hero-grid bg-[size:42px_42px] opacity-20" />
      <div className="absolute left-1/2 top-0 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-brand-blue/30 blur-3xl" />
      <div className="absolute right-[-6rem] top-36 h-64 w-64 rounded-full bg-brand-gold/20 blur-3xl" />
      <Container className="relative grid gap-16 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <ShieldIcon />
            {company.founded} movilizando personas en Colombia
          </div>

          <h1 className="mt-8 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Transporte especial con seguridad, puntualidad y buen trato
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Soluciones de transporte terrestre especial para empresas, instituciones educativas, grupos turísticos y
            servicios a la medida, con cobertura nacional y experiencia respaldada por más de cuatro décadas.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#cotizacion"
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-7 py-4 text-base font-extrabold text-brand-ink transition hover:-translate-y-0.5 hover:bg-[#e6b73a]"
            >
              Solicitar cotización
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-4 text-base font-bold text-white transition hover:border-brand-gold hover:text-brand-gold"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 hidden h-24 w-24 rounded-3xl border border-white/10 bg-white/5 lg:block" />
          <div className="relative rounded-[2rem] border border-white/10 bg-white/10 p-5 shadow-glow backdrop-blur">
            <div className="rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-brand-gold/10 p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">Operación confiable</p>
                  <h2 className="mt-3 font-display text-2xl font-bold">Movilidad organizada para cada necesidad</h2>
                </div>
                <div className="rounded-2xl bg-brand-gold px-4 py-2 text-sm font-extrabold text-brand-ink">ISO</div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-brand-ink/60 p-5">
                  <p className="text-3xl font-extrabold text-brand-gold">1984</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Trayectoria que respalda decisiones de transporte seguras y bien coordinadas.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-brand-ink/60 p-5">
                  <p className="text-3xl font-extrabold text-brand-gold">Nacional</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Cobertura para servicios empresariales, escolares, turísticos y especiales.</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-brand-ink/60 p-5 sm:col-span-2">
                  <p className="text-lg font-bold text-white">Promesa de valor</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Seguridad, puntualidad, confianza, comodidad y atención humana en cada recorrido.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
