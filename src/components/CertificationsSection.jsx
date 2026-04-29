import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export function CertificationsSection({ certifications }) {
  return (
    <section id="certificaciones" className="py-24">
      <Container>
        <SectionHeading
          eyebrow="Certificaciones"
          title="Respaldos que fortalecen la calidad y la seguridad del servicio"
          description="Nuestras certificaciones reflejan el compromiso con procesos bien gestionados, mejora continua y bienestar dentro de la operación."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {certifications.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-brand-navy/10 bg-gradient-to-br from-white to-brand-sand p-8 shadow-card"
            >
              <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">Certificación</p>
              <h3 className="mt-5 font-display text-3xl font-bold text-brand-navy">{item.title}</h3>
              <p className="mt-4 text-lg leading-8 text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
