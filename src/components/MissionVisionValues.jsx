import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export function MissionVisionValues({ values }) {
  return (
    <section className="bg-slate-100 py-24">
      <Container>
        <SectionHeading
          eyebrow="Fundamento"
          title="Misión, visión y valores en una sección más limpia"
          description="Dejamos esta información disponible de forma colapsable para conservar una landing más ágil, comercial y fácil de recorrer."
          align="center"
        />

        <div className="mx-auto mt-14 max-w-4xl space-y-4">
          {values.map((item) => (
            <details key={item.title} className="group rounded-[1.6rem] border border-brand-navy/10 bg-white p-6 shadow-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-gold">Información institucional</p>
                  <p className="mt-2 font-display text-2xl font-bold text-brand-navy">{item.title}</p>
                </div>
                <span className="rounded-full border border-brand-gold/30 px-4 py-2 text-sm font-bold text-brand-navy transition group-open:rotate-180">
                  Ver
                </span>
              </summary>
              <p className="mt-5 leading-8 text-slate-600">{item.text}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
