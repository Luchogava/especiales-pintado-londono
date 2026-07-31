import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function WhyChooseUs({ reasons }) {
  return (
    <section className="bg-[linear-gradient(145deg,#061325_0%,#06224b_58%,#0f2f26_100%)] py-20 text-white sm:py-24">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow={'Por qué elegirnos'}
            title="Confianza para contratar transporte especial sin improvisar"
            description={'Reunimos experiencia, cobertura, certificaciones y atención humana para que cada traslado tenga respaldo desde el primer contacto.'}
            theme="dark"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason} className="rounded-[1.6rem] border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-green text-white">
                <CheckIcon />
              </span>
              <p className="mt-5 text-lg font-semibold leading-8 text-slate-100">{reason}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
