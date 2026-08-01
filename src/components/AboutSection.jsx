import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export function AboutSection({ values }) {
  const description =
    'Desde 1984 movilizamos personas con seguridad, puntualidad y atención cercana.'

  return (
    <section id="nosotros" className="py-14 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow={'Quiénes somos'}
            title={'Una operación con experiencia y criterio de servicio'}
            description={description}
          />
        </div>

        <div className="rounded-[1.8rem] border border-brand-silver/16 bg-[linear-gradient(140deg,#04101f_0%,#06224b_72%,#07162d_100%)] p-5 text-white shadow-glow sm:p-6">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-brand-green">Lo esencial</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {['Seguridad', 'Puntualidad', 'Buen trato'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-display text-lg font-bold text-white">{item}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 space-y-3">
            {values.map((item) => (
              <details key={item.title} className="group rounded-[1.2rem] border border-white/10 bg-white/[0.06] p-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="font-display text-lg font-bold text-white">{item.title}</span>
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
