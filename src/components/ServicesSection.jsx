import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

function ServiceIcon({ index }) {
  const paths = [
    'M4 19V8.5C4 7.67 4.67 7 5.5 7H9V5.5C9 4.67 9.67 4 10.5 4H13.5C14.33 4 15 4.67 15 5.5V7H18.5C19.33 7 20 7.67 20 8.5V19M4 19H20M4 19V11H20V19M9 7H15M8 14H8.01M16 14H16.01',
    'M4 17V8C4 6.9 4.9 6 6 6H18C19.1 6 20 6.9 20 8V17M6 17H18M7 20H9M15 20H17M8 10H16M8 14H10M14 14H16M12 3V6M9.5 3H14.5',
    'M5 18C7.2 14.7 9 13 12 13C15 13 16.8 14.7 19 18M7 10.5C7 8.57 8.57 7 10.5 7H13.5C15.43 7 17 8.57 17 10.5V13H7V10.5ZM9 7L10 4H14L15 7M8 18H16M6 20H18',
    'M12 3L4 7V12C4 16.42 7.13 20.17 12 21C16.87 20.17 20 16.42 20 12V7L12 3ZM9 12L11 14L15.5 9.5M6.5 19.5L4.5 21.5M17.5 19.5L19.5 21.5',
  ]

  return (
    <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" aria-hidden="true">
      <path d={paths[index]} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ServiceCard({ service, index }) {
  return (
    <article className="group flex h-full flex-col rounded-[1.35rem] border border-brand-line bg-white p-4 text-brand-navy shadow-[0_18px_44px_rgba(6,34,75,0.08)] transition duration-300 hover:-translate-y-1 hover:border-brand-green/55 hover:shadow-card sm:rounded-[1.6rem] sm:p-6">
      <div className="flex items-start gap-4">
        <div
          className={`inline-flex h-12 min-w-12 items-center justify-center rounded-2xl text-white shadow-[0_16px_30px_rgba(0,0,0,0.16)] transition group-hover:scale-105 sm:h-14 sm:min-w-14 ${service.accent}`}
        >
          <ServiceIcon index={index} />
        </div>
        <div>
          <h3 className="font-display text-lg font-bold leading-tight sm:text-xl">{service.title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">{service.summary}</p>
        </div>
      </div>

      <details className="mt-4 rounded-2xl border border-brand-line bg-brand-porcelain p-4 sm:hidden">
        <summary className="cursor-pointer list-none text-xs font-black uppercase tracking-[0.2em] text-brand-green">
          Ver detalle
        </summary>
        <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">{service.idealFor}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
      </details>

      <div className="mt-6 hidden rounded-2xl border border-brand-line bg-brand-porcelain p-4 sm:block">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-green">Clientes frecuentes</p>
        <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">{service.idealFor}</p>
      </div>

      <p className="mt-5 hidden text-sm leading-6 text-slate-600 sm:block">{service.description}</p>
    </article>
  )
}

export function ServicesSection({ services, whatsappLink }) {
  return (
    <section id="servicios" className="relative scroll-mt-28 py-14 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Elige el tipo de transporte que necesitas"
          description={'Cuatro líneas de servicio claras para empresas, colegios, turismo, grupos y necesidades especiales.'}
        />

        <div className="mt-8 grid gap-4 sm:mt-12 md:grid-cols-2 xl:grid-cols-4" aria-label="Tipos de servicio">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.6rem] border border-brand-green/20 bg-[linear-gradient(135deg,#061325_0%,#06224b_62%,#0f2f26_100%)] p-5 text-white shadow-[0_22px_58px_rgba(6,34,75,0.18)] sm:mt-10 sm:rounded-[1.9rem] sm:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-green">Asesoría rápida</p>
              <h3 className="mt-3 font-display text-xl font-bold sm:text-3xl">
                Dinos qué necesitas movilizar y te ayudamos a definir la mejor solución.
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
                Comparte origen, destino, fecha, horarios y número de pasajeros. Con esa información podemos orientarte mejor desde el primer contacto.
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-extrabold text-white shadow-[0_16px_34px_rgba(37,211,102,0.34)] transition hover:-translate-y-0.5 hover:bg-[#1fbe59] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#confianza"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-extrabold text-brand-navy shadow-[0_16px_34px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 hover:bg-brand-silver focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
              >
                Ver respaldo
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
