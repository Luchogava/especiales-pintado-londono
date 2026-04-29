import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export function MissionVisionValues({ values }) {
  return (
    <section className="bg-slate-100 py-24">
      <Container>
        <SectionHeading
          eyebrow="Fundamento"
          title="Misión, visión y valores que sostienen nuestro servicio"
          description="Nuestra forma de trabajar se apoya en principios claros para ofrecer una experiencia consistente, profesional y humana."
          align="center"
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {values.map((item) => (
            <article key={item.title} className="rounded-[1.8rem] bg-white p-7 shadow-card">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-gold">Pilar estratégico</p>
              <p className="mt-5 font-display text-2xl font-bold text-brand-navy">{item.title}</p>
              <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
