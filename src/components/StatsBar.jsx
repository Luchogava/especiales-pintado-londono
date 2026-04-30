import { Container } from './Container'

function StatCard({ item }) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-brand-navy/10 bg-slate-50 shadow-[0_14px_35px_rgba(5,26,52,0.08)]">
      <div className="aspect-[16/11] overflow-hidden">
        <img
          src={item.image}
          alt={item.imageAlt}
          className="h-full w-full object-cover transition duration-500 hover:scale-[1.02]"
          loading="lazy"
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
    <section className="relative py-8">
      <Container>
        <div className="rounded-[2rem] border border-brand-navy/10 bg-white p-4 shadow-card xl:p-5">
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
