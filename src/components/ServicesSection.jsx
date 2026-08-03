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
    <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" aria-hidden="true">
      <path d={paths[index]} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ServiceCard({ service, index }) {
  return (
    <article className="group flex h-full flex-col rounded-[1.15rem] border border-brand-line bg-white p-3 text-brand-navy shadow-[0_18px_44px_rgba(6,34,75,0.08)] transition duration-300 hover:-translate-y-1 hover:border-brand-green/55 hover:shadow-card sm:rounded-[1.6rem] sm:p-6">
      <div className="flex items-start gap-3 sm:gap-4">
        <div
          className={`inline-flex h-10 min-w-10 items-center justify-center rounded-xl text-white shadow-[0_16px_30px_rgba(0,0,0,0.16)] transition group-hover:scale-105 sm:h-14 sm:min-w-14 sm:rounded-2xl ${service.accent}`}
        >
          <ServiceIcon index={index} />
        </div>
        <div>
          <h3 className="font-display text-base font-bold leading-tight sm:text-xl">{service.title}</h3>
          <p className="mt-2 text-sm leading-5 text-slate-600 sm:mt-3 sm:text-base sm:leading-7">
            {service.summary}
          </p>
        </div>
      </div>
    </article>
  )
}

export function ServicesSection({ services, whatsappLink }) {
  return (
    <section id="servicios" className="relative scroll-mt-28 py-10 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Elige el tipo de transporte que necesitas"
          description="Cuatro soluciones para movilizar personas con seguridad, orden y puntualidad."
        />

        <div className="mt-6 grid gap-3 sm:mt-12 sm:gap-4 md:grid-cols-2 xl:grid-cols-4" aria-label="Tipos de servicio">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-[1.35rem] border border-brand-green/20 bg-[linear-gradient(135deg,#061325_0%,#06224b_62%,#0f2f26_100%)] p-4 text-white shadow-[0_22px_58px_rgba(6,34,75,0.18)] sm:mt-10 sm:rounded-[1.9rem] sm:p-7">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-green sm:text-sm sm:tracking-[0.24em]">Asesoría rápida</p>
              <h3 className="mt-2 font-display text-lg font-bold sm:mt-3 sm:text-3xl">
                Cuéntanos tu ruta y te orientamos por WhatsApp.
              </h3>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-premium-green w-full sm:w-auto"
              >
                Cotizar por WhatsApp
              </a>
              <a
                href="#confianza"
                className="btn-premium-ghost hidden sm:inline-flex"
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
