import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24">
      <Container className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
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

        <div className="relative">
          <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] bg-brand-gold/20" />
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-gradient-to-br from-brand-navy via-brand-blue to-brand-ink p-8 text-white shadow-glow">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">Confianza que se nota</p>
            <div className="mt-10 grid gap-5">
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="font-display text-2xl font-bold">Seguridad operacional</p>
                <p className="mt-2 leading-7 text-slate-300">
                  Cada servicio se planea con enfoque preventivo, orden y responsabilidad.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="font-display text-2xl font-bold">Puntualidad y cumplimiento</p>
                <p className="mt-2 leading-7 text-slate-300">
                  Entendemos que los tiempos del cliente son parte esencial de la experiencia.
                </p>
              </div>
              <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                <p className="font-display text-2xl font-bold">Buen trato y cercanía</p>
                <p className="mt-2 leading-7 text-slate-300">
                  Nuestra atención comercial y operativa busca generar tranquilidad y respaldo real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
