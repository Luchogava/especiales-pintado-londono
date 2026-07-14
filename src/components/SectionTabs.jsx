import { Container } from './Container'

export function SectionTabs({ items }) {
  return (
    <section className="relative z-10 -mt-8 pb-10">
      <Container>
        <div className="rounded-[1.8rem] border border-brand-silver/40 bg-white/95 p-3 shadow-[0_24px_70px_rgba(6,34,75,0.16)] backdrop-blur">
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group rounded-[1.35rem] border border-transparent bg-slate-50 px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-brand-green/45 hover:bg-white hover:shadow-[0_18px_36px_rgba(6,34,75,0.10)]"
              >
                <span className="inline-flex rounded-full bg-brand-navy px-3 py-1 text-xs font-black text-white transition group-hover:bg-brand-green">
                  {item.eyebrow}
                </span>
                <span className="mt-3 block font-display text-lg font-bold text-brand-navy">{item.title}</span>
                <span className="mt-2 block text-sm leading-6 text-slate-600">{item.description}</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
