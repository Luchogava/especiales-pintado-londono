import { BrochureCrop } from './BrochureCrop'
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
          <div className="relative overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-white shadow-glow">
            <BrochureCrop
              alt="Brochure institucional de la empresa"
              className="h-[38rem]"
              objectPosition="50% 77%"
              overlayClassName="bg-gradient-to-t from-white/25 to-transparent"
            />
            <div className="absolute inset-x-6 top-6 rounded-[1.4rem] border border-white/40 bg-white/92 p-5 text-brand-navy backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">Confianza que se nota</p>
              <p className="mt-3 text-lg font-bold">
                El brochure ya proyecta una marca fuerte; ahora la web también habla con ese mismo lenguaje visual.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
