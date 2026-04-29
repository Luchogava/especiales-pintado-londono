import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

function ServiceCard({ title, description, index }) {
  return (
    <article className="group rounded-[1.75rem] border border-brand-navy/10 bg-white p-7 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-gold/60">
      <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-sand font-display text-lg font-bold text-brand-navy">
        0{index + 1}
      </div>
      <h3 className="mt-6 font-display text-2xl font-bold text-brand-navy">{title}</h3>
      <p className="mt-4 leading-7 text-slate-600">{description}</p>
    </article>
  )
}

export function ServicesSection({ services }) {
  return (
    <section id="servicios" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Soluciones de transporte especial para distintos tipos de operación"
          description="Diseñamos servicios confiables para clientes que necesitan logística ordenada, atención responsable y una experiencia de traslado segura y puntual."
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
