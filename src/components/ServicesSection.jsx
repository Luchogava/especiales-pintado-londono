import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

function ServiceCard({ title, summary, idealFor, description, index, accent }) {
  return (
    <article className="group rounded-[1.8rem] border border-brand-silver/20 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-green/45 hover:shadow-premium">
      <div className="flex items-start justify-between gap-4">
        <div
          className={`inline-flex h-12 min-w-12 items-center justify-center rounded-2xl px-4 font-display text-lg font-bold text-white shadow-[0_12px_26px_rgba(6,34,75,0.16)] ${accent}`}
        >
          0{index + 1}
        </div>
        <p className="rounded-full border border-brand-silver/25 bg-brand-navy px-3 py-1 text-[0.72rem] font-extrabold uppercase tracking-[0.16em] text-brand-silver">
          Servicio
        </p>
      </div>

      <h3 className="mt-6 font-display text-2xl font-bold text-brand-navy">{title}</h3>
      <p className="mt-3 text-base font-semibold leading-7 text-slate-700">{summary}</p>

      <div className="mt-6 rounded-[1.35rem] border border-brand-silver/20 bg-slate-50 p-4">
        <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-green">Ideal para</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">{idealFor}</p>
      </div>

      <p className="mt-5 leading-7 text-slate-600">{description}</p>
    </article>
  )
}

export function ServicesSection({ services }) {
  return (
    <section id="servicios" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Servicios pensados para cada tipo de traslado"
          description={
            'Conoce de forma r\u00e1pida qu\u00e9 soluci\u00f3n te conviene seg\u00fan el tipo de pasajeros, la operaci\u00f3n y el objetivo del servicio.'
          }
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
