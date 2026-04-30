import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export function AboutSection({ values }) {
  return (
    <section id="nosotros" className="py-24">
      <Container className="grid gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Quiénes somos"
            title="Trayectoria, criterio operativo y vocación de servicio"
            description="Servicios Especiales Pintado Londoño es una empresa colombiana dedicada al transporte terrestre especial de pasajeros. Desde 1984 acompañamos a organizaciones, instituciones, grupos y familias que necesitan movilización confiable y bien gestionada."
          />

          <div className="mt-8 space-y-5 text-lg leading-8 text-slate-600">
            <p>
              Nuestra propuesta combina experiencia, cercanía y enfoque en el detalle para brindar un servicio que
              transmite seguridad, puntualidad, comodidad y respeto por cada usuario.
            </p>
            <p>
              Más que movilizar personas, construimos confianza a través de una atención clara, una operación ordenada
              y el compromiso permanente de hacer las cosas bien.
            </p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="rounded-[1.8rem] border border-brand-gold/20 bg-brand-ink p-6 text-white shadow-glow">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">Lo esencial de nuestra empresa</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-gold">Seguridad</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Operación responsable y enfoque preventivo en cada servicio.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-gold">Puntualidad</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Cumplimiento de tiempos para clientes empresariales, escolares y turísticos.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-brand-gold">Buen trato</p>
                <p className="mt-2 text-sm leading-6 text-slate-200">
                  Atención humana, cercana y organizada durante todo el proceso.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.8rem] border border-brand-navy/10 bg-slate-50 p-5 shadow-card">
            <p className="mb-4 text-sm font-black uppercase tracking-[0.24em] text-brand-gold">Más información institucional</p>
            <div className="space-y-3">
              {values.map((item) => (
                <details key={item.title} className="group rounded-[1.2rem] border border-brand-navy/10 bg-white p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="font-display text-xl font-bold text-brand-navy">{item.title}</span>
                    <span className="rounded-full border border-brand-gold/30 px-4 py-2 text-sm font-bold text-brand-navy transition group-open:rotate-180">
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
