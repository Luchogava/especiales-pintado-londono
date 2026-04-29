import { BrochureCrop } from './BrochureCrop'
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
      <div className="absolute inset-0 bg-hero-grid bg-[size:42px_42px] opacity-15" />
      <div className="absolute inset-y-0 right-0 hidden w-[46%] bg-gradient-to-l from-brand-gold/15 to-transparent lg:block" />
      <div className="absolute left-[-10rem] top-20 h-72 w-72 rounded-full bg-brand-blue/30 blur-3xl" />

      <Container className="relative grid gap-16 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/25 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <ShieldIcon />
            {company.founded} movilizando personas en Colombia
          </div>

          <h1 className="mt-8 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Transporte especial con seguridad, puntualidad y buen trato
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Servicios empresariales, escolares, turísticos y para grupos con operación responsable, atención humana y
            respaldo real para movilizar personas con tranquilidad.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#cotizacion"
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-7 py-4 text-base font-extrabold text-brand-ink transition hover:-translate-y-0.5 hover:bg-[#ffc72a]"
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

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-gold">Cobertura</p>
              <p className="mt-2 text-lg font-bold text-white">Operación nacional</p>
            </div>
            <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-gold">Experiencia</p>
              <p className="mt-2 text-lg font-bold text-white">Más de 40 años</p>
            </div>
            <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-gold">Respaldo</p>
              <p className="mt-2 text-lg font-bold text-white">ISO 9001 e ISO 45001</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-4 top-8 hidden h-28 w-28 rounded-[1.8rem] border border-brand-gold/30 bg-brand-gold/10 lg:block" />
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-gold/25 bg-white/10 p-3 shadow-glow backdrop-blur">
            <BrochureCrop
              alt="Brochure corporativo de Servicios Especiales Pintado Londoño"
              className="h-[30rem] rounded-[1.6rem]"
              objectPosition="62% 18%"
              overlayClassName="bg-gradient-to-t from-brand-ink/60 via-transparent to-transparent"
            />
            <div className="absolute inset-x-8 bottom-8 rounded-[1.6rem] border border-white/10 bg-brand-ink/85 p-5 backdrop-blur">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">Imagen de marca</p>
                  <h2 className="mt-2 font-display text-2xl font-bold">Flota, respaldo y presencia institucional</h2>
                </div>
                <div className="rounded-2xl bg-brand-gold px-4 py-2 text-sm font-extrabold text-brand-ink">40+ años</div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-slate-200">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Seguridad</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Puntualidad</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Comodidad</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2">Buen trato</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
