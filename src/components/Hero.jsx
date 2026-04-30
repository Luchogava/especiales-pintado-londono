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
      <div className="absolute left-[-8rem] top-16 h-72 w-72 rounded-full bg-brand-blue/35 blur-3xl" />
      <div className="absolute right-[-8rem] top-10 h-80 w-80 rounded-full bg-brand-gold/20 blur-3xl" />

      <Container className="relative grid gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/25 bg-white/5 px-4 py-2 text-sm text-slate-200">
            <ShieldIcon />
            {company.founded} movilizando personas en Colombia
          </div>

          <div className="mt-7 max-w-[42rem] rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-brand-gold/10 p-2 shadow-[0_28px_70px_rgba(0,0,0,0.32)]">
            <div className="overflow-hidden rounded-[1.45rem] border border-brand-gold/20 bg-brand-ink/75">
              <img
                src="/hero-brand.png"
                alt="Servicios Especiales Pintado Londono"
                className="block h-[12.25rem] w-full object-cover object-center sm:h-[15rem] lg:h-[17rem]"
              />
            </div>
          </div>

          <h1 className="mt-6 font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.45rem]">
            Transporte especial con seguridad, puntualidad y buen trato
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Empresa de transporte especial de pasajeros para companias, instituciones educativas, turismo, grupos y
            servicios a la medida, con operacion nacional, atencion humana y experiencia comprobada.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#cotizacion"
              className="inline-flex items-center justify-center rounded-full bg-brand-gold px-7 py-4 text-base font-extrabold text-brand-ink shadow-[0_18px_40px_rgba(242,181,1,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ffc72a]"
            >
              Solicitar cotizacion
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
          <div className="rounded-[2rem] border border-brand-gold/25 bg-white/10 p-5 shadow-glow backdrop-blur">
            <div className="rounded-[1.7rem] border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-brand-gold/10 p-7">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                <div className="max-w-sm">
                  <p className="text-sm uppercase tracking-[0.25em] text-brand-gold">Respaldo y trayectoria</p>
                  <h2 className="mt-3 font-display text-3xl font-bold">
                    Transporte especial de pasajeros con presencia nacional
                  </h2>
                  <p className="mt-4 leading-7 text-slate-300">
                    Seguridad, puntualidad, confianza, comodidad y buen trato como base de cada servicio.
                  </p>
                </div>

                <img
                  src="/40-anos.png"
                  alt="Mas de 40 anos movilizando personas"
                  className="mx-auto w-full max-w-[14rem] object-contain sm:mx-0"
                />
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-brand-ink/60 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-gold">Promesa</p>
                  <p className="mt-2 text-2xl font-extrabold text-white">Atencion humana</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Acompanamiento cercano para clientes empresariales, institucionales y particulares.
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-brand-ink/60 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.22em] text-brand-gold">Respaldo</p>
                  <p className="mt-2 text-2xl font-extrabold text-white">ISO 9001:2015</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    Gestion orientada a la calidad, cumplimiento y mejora continua.
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
