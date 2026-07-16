import { useState } from 'react'
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

function ServicePanel({ service, index }) {
  const { title, summary, idealFor, description, accent } = service

  return (
    <article className="overflow-hidden rounded-[2rem] border border-brand-silver/20 bg-white shadow-premium">
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative bg-[radial-gradient(circle_at_top_left,#10305f_0%,#06224b_50%,#040b16_100%)] p-7 text-white sm:p-8">
          <div className="absolute right-[-4rem] top-[-4rem] h-40 w-40 rounded-full bg-brand-green/20 blur-3xl" />
          <div className="relative">
            <div
              className={`inline-flex h-14 min-w-14 items-center justify-center rounded-2xl px-4 font-display text-lg font-bold text-white shadow-[0_16px_30px_rgba(0,0,0,0.18)] ${accent}`}
            >
              <ServiceIcon index={index} />
            </div>
            <h3 className="mt-7 font-display text-3xl font-bold leading-tight sm:text-4xl">{title}</h3>
            <p className="mt-4 text-lg leading-8 text-slate-200">{summary}</p>
          </div>
        </div>

        <div className="p-7 sm:p-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-green/12 text-brand-green">
              <ServiceIcon index={index} />
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-green">Ideal para</p>
              <p className="mt-1 text-base font-semibold leading-7 text-slate-700">{idealFor}</p>
            </div>
          </div>
          <p className="mt-7 text-lg leading-8 text-slate-600">{description}</p>
          <a
            href="#cotizacion"
            className="mt-7 inline-flex rounded-full bg-brand-navy px-6 py-3.5 text-sm font-extrabold text-white shadow-[0_16px_32px_rgba(6,34,75,0.18)] transition hover:-translate-y-0.5 hover:bg-brand-green"
          >
            Cotizar este servicio
          </a>
        </div>
      </div>
    </article>
  )
}

function ServiceSummaryCard({ service, index, isActive, onSelect }) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group rounded-[1.4rem] border p-5 text-left transition duration-300 ${
        isActive
          ? 'border-brand-green bg-brand-navy text-white shadow-[0_20px_46px_rgba(6,34,75,0.22)]'
          : 'border-brand-silver/25 bg-white text-brand-navy hover:-translate-y-0.5 hover:border-brand-green/45 hover:shadow-card'
      }`}
      role="tab"
      aria-selected={isActive}
    >
      <span className="flex items-center gap-3">
        <div
          className={`inline-flex h-11 min-w-11 items-center justify-center rounded-2xl px-3 font-display text-base font-bold text-white ${service.accent}`}
        >
          <ServiceIcon index={index} />
        </div>
        <span className="font-display text-lg font-bold">{service.title}</span>
      </span>
      <span className={`mt-3 block text-sm leading-6 ${isActive ? 'text-slate-200' : 'text-slate-600'}`}>
        {service.summary}
      </span>
    </button>
  )
}

export function ServicesSection({ services }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeService = services[activeIndex]

  return (
    <section id="servicios" className="scroll-mt-28 py-24">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Soluciones pensadas para cada tipo de traslado"
          description={'Conoce de forma r\u00e1pida qu\u00e9 soluci\u00f3n te conviene seg\u00fan el tipo de pasajeros, la operaci\u00f3n y el objetivo del servicio.'}
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4" role="tablist" aria-label="Tipos de servicio">
          {services.map((service, index) => (
            <ServiceSummaryCard
              key={service.title}
              service={service}
              index={index}
              isActive={activeIndex === index}
              onSelect={() => setActiveIndex(index)}
            />
          ))}
        </div>

        <div className="mt-7">
          <ServicePanel service={activeService} index={activeIndex} />
        </div>
      </Container>
    </section>
  )
}
