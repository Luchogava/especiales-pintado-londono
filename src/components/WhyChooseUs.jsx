import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export function WhyChooseUs({ reasons }) {
  return (
    <section className="bg-[linear-gradient(145deg,#061325_0%,#06224b_60%,#07162d_100%)] py-24 text-white">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow={'Por qu\u00e9 elegirnos'}
            title="Un aliado que entiende que mover personas exige orden y confianza"
            description={
              'Trabajamos para que cada servicio se perciba seguro, puntual y bien acompa\u00f1ado desde la solicitud hasta la llegada.'
            }
            theme="dark"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason, index) => (
            <div key={reason} className="rounded-[1.6rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.25em] text-brand-green">0{index + 1}</p>
              <p className="mt-4 text-lg leading-8 text-slate-200">{reason}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
