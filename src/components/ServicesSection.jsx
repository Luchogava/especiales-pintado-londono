import { BrochureCrop } from './BrochureCrop'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

function ServiceCard({ title, description, index, accent, objectPosition }) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-brand-navy/10 bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-gold/60">
      <BrochureCrop
        alt={title}
        className="h-52"
        imageClassName="transition duration-500 group-hover:scale-105"
        objectPosition={objectPosition}
        overlayClassName="bg-gradient-to-t from-brand-ink/50 to-transparent"
      />
      <div className="p-7">
        <div className={`inline-flex h-12 min-w-12 items-center justify-center rounded-2xl px-4 font-display text-lg font-bold text-white ${accent}`}>
          0{index + 1}
        </div>
        <h3 className="mt-6 font-display text-2xl font-bold text-brand-navy">{title}</h3>
        <p className="mt-4 leading-7 text-slate-600">{description}</p>
      </div>
    </article>
  )
}

export function ServicesSection({ services }) {
  return (
    <section id="servicios" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Servicios"
          title="Nuestros servicios con una presentación más cercana al brochure de la marca"
          description="Tomamos la identidad visual de la empresa para mostrar cada línea de servicio con más fuerza comercial, mejor recordación y una lectura clara para clientes empresariales, institucionales y particulares."
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
