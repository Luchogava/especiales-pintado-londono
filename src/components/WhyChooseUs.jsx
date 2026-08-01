import { Container } from './Container'

function CheckIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
      <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function WhyChooseUs({ reasons, whatsappLink }) {
  return (
    <section className="bg-[linear-gradient(145deg,#061325_0%,#06224b_58%,#0f2f26_100%)] py-12 text-white sm:py-16">
      <Container>
        <div className="grid gap-6 rounded-[1.8rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur sm:p-7 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.24em] text-brand-green">Por qué elegirnos</p>
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-4xl">
              Transporte especial con respaldo, orden y buen trato
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Lo esencial para contratar con tranquilidad, sin saturarte de información.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex min-h-12 items-center justify-center rounded-full bg-[#25D366] px-6 py-3 text-sm font-extrabold text-white shadow-[0_16px_34px_rgba(37,211,102,0.34)] transition hover:-translate-y-0.5 hover:bg-[#1fbe59] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Hablar con un asesor
            </a>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] p-4">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-brand-green text-white">
                  <CheckIcon />
                </span>
                <p className="mt-4 font-display text-lg font-bold text-white">{reason.title}</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">{reason.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
