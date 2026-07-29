import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

function StatCard({ item }) {
  return (
    <article className="overflow-hidden rounded-[1.6rem] border border-brand-silver/20 bg-white shadow-[0_18px_48px_rgba(6,34,75,0.10)]">
      <div className="aspect-[16/11] overflow-hidden">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="p-5">
        <p className="font-display text-xl font-bold text-brand-navy">{item.value}</p>
        <p className="mt-3 text-sm leading-6 text-slate-600">{item.label}</p>
      </div>
    </article>
  )
}

export function StatsBar({ stats }) {
  return (
    <section id="confianza" className="relative scroll-mt-28 bg-slate-50 py-20">
      <Container>
        <SectionHeading
          eyebrow="Confianza institucional"
          title="Pruebas visibles para decidir con tranquilidad"
          description="Trayectoria, cobertura y certificaciones presentadas como señales de cumplimiento, calidad y seguridad operativa."
        />
        <div className="mt-10 rounded-[2rem] border border-brand-silver/20 bg-gradient-to-br from-white via-slate-50 to-white p-4 shadow-premium xl:p-5">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <StatCard key={item.value} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
