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
    <article className="group flex h-full flex-col rounded-[1.6rem] border border-brand-line bg-white p-5 text-brand-navy shadow-[0_18px_44px_rgba(6,34,75,0.08)] transition duration-300 hover:-translate-y-1 hover:border-brand-green/55 hover:shadow-card sm:p-6">
      <div className="flex items-start gap-4">
        <div
          className={`inline-flex h-14 min-w-14 items-center justify-center rounded-2xl text-white shadow-[0_16px_30px_rgba(0,0,0,0.16)] transition group-hover:scale-105 ${service.accent}`}
        >
          <ServiceIcon index={index} />
        </div>
        <div>
          <h3 className="font-display text-xl font-bold leading-tight">{service.title}</h3>
          <p className="mt-3 text-base leading-7 text-slate-600">{service.summary}</p>
        </div>
      </div>

      <div className="mt-6 rounded-2xl border border-brand-line bg-brand-porcelain p-4">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-green">Clientes frecuentes</p>
        <p className="mt-3 text-sm font-semibold leading-6 text-slate-700">{service.idealFor}</p>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-600">{service.description}</p>
    </article>
  )
}

export function ServicesSection({ services }) {
  return (
    <section id="servicios" className="relative scroll-mt-28 py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Elige el tipo de transporte que necesitas"
          description={'Cuatro l\u00edneas de servicio claras para empresas, colegios, turismo, grupos y necesidades especiales.'}
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4" aria-label="Tipos de servicio">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="mt-10 flex flex-col items-start gap-4 rounded-[1.8rem] border border-brand-line bg-white/85 p-5 shadow-[0_18px_48px_rgba(6,34,75,0.08)] sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="max-w-2xl text-base font-semibold leading-7 text-slate-700">
            Si no tienes claro cu\u00e1l servicio se ajusta mejor, cu\u00e9ntanos tu necesidad y te orientamos.
          </p>
          <a
            href="#cotizacion"
            className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-full bg-brand-green px-6 py-3 text-sm font-extrabold text-white shadow-[0_16px_34px_rgba(116,192,67,0.28)] transition hover:-translate-y-0.5 hover:bg-brand-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
          >
            Solicitar orientaci\u00f3n
          </a>
        </div>
      </Container>
    </section>
  )
}
