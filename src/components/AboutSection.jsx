import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export function AboutSection({ values }) {
  const description =
    'Servicios Especiales Pintado Londo\u00f1o es una empresa colombiana dedicada al transporte terrestre especial de pasajeros. Desde 1984 acompa\u00f1amos a organizaciones, instituciones, grupos y familias que necesitan movilizaci\u00f3n confiable y bien gestionada.'

  return (
    <section id="nosotros" className="py-24">
      <Container className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow={'Qui\u00e9nes somos'}
            title={'Trayectoria, criterio operativo y vocaci\u00f3n de servicio'}
            description={description}
          />

          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
            <p>{'Nuestra propuesta combina experiencia, cercan\u00eda y enfoque en el detalle para brindar un servicio que transmite seguridad, puntualidad, comodidad y respeto por cada usuario.'}</p>
            <p>{'M\u00e1s que movilizar personas, construimos confianza a trav\u00e9s de una atenci\u00f3n clara, una operaci\u00f3n ordenada y el compromiso permanente de hacer las cosas bien.'}</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-[1.8rem] border border-brand-silver/16 bg-[linear-gradient(140deg,#04101f_0%,#06224b_72%,#07162d_100%)] p-6 text-white shadow-glow">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-green">Lo esencial de nuestra empresa</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-green">Seguridad</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {'Operaci\u00f3n responsable y enfoque preventivo en cada servicio.'}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-green">Puntualidad</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {'Cumplimiento de tiempos para clientes empresariales, escolares y tur\u00edsticos.'}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-green">Buen trato</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  {'Atenci\u00f3n humana, cercana y organizada durante todo el proceso.'}
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-brand-silver/20 bg-slate-50 p-5 shadow-card">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-brand-green">{'M\u00e1s informaci\u00f3n institucional'}</p>
            <div className="space-y-3">
              {values.map((item) => (
                <details key={item.title} className="group rounded-[1.2rem] border border-brand-silver/20 bg-white p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-display text-xl font-bold text-brand-navy">{item.title}</span>
                    <span className="rounded-full border border-brand-green/30 px-4 py-2 text-sm font-bold text-brand-navy transition group-open:rotate-180">
                      Ver
                    </span>
                  </summary>
                  <p className="mt-4 leading-8 text-slate-600">{item.text}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
