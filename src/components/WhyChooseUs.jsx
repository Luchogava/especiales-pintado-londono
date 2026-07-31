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
    <section className="bg-[linear-gradient(145deg,#061325_0%,#06224b_58%,#0f2f26_100%)] py-14 text-white sm:py-24">
      <Container className="grid gap-8 sm:gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow={'Por qué elegirnos'}
            title="Confianza para contratar transporte especial sin improvisar"
            description={'Reunimos experiencia, cobertura, certificaciones y atención humana para que cada traslado tenga respaldo desde el primer contacto.'}
            theme="dark"
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {reasons.map((reason) => (
            <div key={reason} className="flex gap-4 rounded-[1.35rem] border border-white/10 bg-white/[0.06] p-4 backdrop-blur sm:block sm:rounded-[1.6rem] sm:p-6">
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-green text-white sm:h-11 sm:w-11">
                <CheckIcon />
              </span>
              <p className="text-sm font-semibold leading-6 text-slate-100 sm:mt-5 sm:text-lg sm:leading-8">{reason}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
