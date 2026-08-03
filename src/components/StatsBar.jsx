import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

function StatCard({ item }) {
  return (
    <article className="rounded-2xl border border-brand-line bg-white p-3 shadow-[0_14px_34px_rgba(6,34,75,0.08)] sm:block sm:overflow-hidden sm:rounded-[1.6rem] sm:p-0 sm:shadow-[0_18px_48px_rgba(6,34,75,0.10)]">
      <div className="hidden sm:block sm:aspect-[16/11] sm:h-auto sm:w-auto sm:overflow-hidden sm:rounded-none">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="sm:p-5">
        <p className="font-display text-sm font-bold leading-tight text-brand-navy sm:text-xl">{item.value}</p>
        <p className="sr-only mt-1 text-sm leading-6 text-slate-600 sm:not-sr-only sm:mt-3">{item.label}</p>
      </div>
    </article>
  )
}

export function StatsBar({ stats }) {
  return (
    <section id="confianza" className="relative scroll-mt-28 bg-[linear-gradient(180deg,#eef3f8_0%,#f8fafc_100%)] py-10 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Confianza institucional"
          title="Respaldo para contratar con confianza"
          description="Trayectoria, cobertura nacional y certificaciones ISO."
        />
        <div className="mt-6 rounded-[1.35rem] border border-brand-line bg-gradient-to-br from-white via-brand-porcelain to-white p-2 shadow-premium sm:mt-10 sm:rounded-[2rem] sm:p-4 xl:p-5">
          <div className="grid grid-cols-2 gap-2 sm:gap-4 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item) => (
              <StatCard key={item.value} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
