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

        <div className="grid gap-5">
          <div className="rounded-[1.7rem] border border-brand-gold/20 bg-brand-ink p-6 text-white shadow-glow">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">Seguridad operacional</p>
            <p className="mt-3 text-lg leading-8 text-slate-200">
              Cada servicio se planea con enfoque preventivo, responsabilidad y cumplimiento.
            </p>
          </div>
          <div className="rounded-[1.7rem] border border-brand-gold/20 bg-white p-6 shadow-card">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">Puntualidad</p>
            <p className="mt-3 text-lg leading-8 text-slate-600">
              Entendemos que el tiempo del cliente hace parte de la experiencia y del valor del servicio.
            </p>
          </div>
          <div className="rounded-[1.7rem] border border-brand-gold/20 bg-white p-6 shadow-card">
            <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">Buen trato</p>
            <p className="mt-3 text-lg leading-8 text-slate-600">
              Nuestra atención comercial y operativa busca generar tranquilidad, respaldo y confianza real.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
