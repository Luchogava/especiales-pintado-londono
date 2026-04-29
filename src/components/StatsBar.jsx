import { Container } from './Container'

export function StatsBar({ stats }) {
  return (
    <section className="relative -mt-10 z-10">
      <Container>
        <div className="grid gap-4 rounded-[2rem] border border-brand-navy/10 bg-white p-4 shadow-card md:grid-cols-2 xl:grid-cols-4 xl:p-5">
          {stats.map((item) => (
            <div key={item.value} className="rounded-[1.4rem] bg-slate-50 p-5">
              <p className="font-display text-xl font-bold text-brand-navy">{item.value}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
