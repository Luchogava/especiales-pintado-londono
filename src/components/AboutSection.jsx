import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export function AboutSection({ values }) {
  const description =
    'Desde 1984 movilizamos personas con seguridad, puntualidad y atención cercana.'

  return (
    <section id="nosotros" className="py-10 sm:py-20">
      <Container className="grid gap-6 sm:gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow={'Quiénes somos'}
            title={'Una operación con experiencia y criterio de servicio'}
            description={description}
          />
        </div>

        <div className="rounded-[1.35rem] border border-brand-silver/16 bg-[linear-gradient(140deg,#04101f_0%,#06224b_72%,#07162d_100%)] p-4 text-white shadow-glow sm:rounded-[1.8rem] sm:p-6">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-brand-green sm:text-sm sm:tracking-[0.24em]">Lo esencial</p>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:mt-4 sm:gap-3">
            {['Seguridad', 'Puntualidad', 'Buen trato'].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-3 sm:rounded-2xl sm:p-4">
                <p className="font-display text-sm font-bold text-white sm:text-lg">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2 sm:mt-5 sm:space-y-3">
            {values.map((item) => (
              <details key={item.title} className="group rounded-[1rem] border border-white/10 bg-white/[0.06] p-3 sm:rounded-[1.2rem] sm:p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-base font-bold text-white sm:text-lg">{item.title}</span>
                  <span className="rounded-full border border-brand-green/30 px-3 py-1.5 text-xs font-bold text-slate-100 transition group-open:rotate-180">
                    Ver
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.text}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
