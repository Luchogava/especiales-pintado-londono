import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

function StatCard({ item }) {
  return (
    <article className="flex gap-4 overflow-hidden rounded-[1.35rem] border border-brand-line bg-white p-3 shadow-[0_18px_48px_rgba(6,34,75,0.10)] sm:block sm:rounded-[1.6rem] sm:p-0">
      <div className="h-20 w-24 shrink-0 overflow-hidden rounded-2xl sm:h-auto sm:w-auto sm:rounded-none sm:aspect-[16/11]">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="self-center sm:p-5">
        <p className="font-display text-base font-bold text-brand-navy sm:text-xl">{item.value}</p>
        <p className="mt-1 text-sm leading-6 text-slate-600 sm:mt-3">{item.label}</p>
      </div>
    </article>
  )
}

export function StatsBar({ stats }) {
  return (
    <section id="confianza" className="relative scroll-mt-28 bg-[linear-gradient(180deg,#eef3f8_0%,#f8fafc_100%)] py-14 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Confianza institucional"
          title="Pruebas visibles para decidir con tranquilidad"
          description="Trayectoria, cobertura y certificaciones presentadas como respaldo real de cumplimiento, calidad y seguridad operativa."
        />
        <div className="mt-8 rounded-[1.6rem] border border-brand-line bg-gradient-to-br from-white via-brand-porcelain to-white p-3 shadow-premium sm:mt-10 sm:rounded-[2rem] sm:p-4 xl:p-5">
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
