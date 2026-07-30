import { Container } from './Container'

export function SectionTabs({ items }) {
  return (
    <section className="relative z-10 -mt-7 pb-8">
      <Container>
        <div className="rounded-[1.8rem] border border-brand-line bg-white/90 p-2 shadow-[0_24px_70px_rgba(6,34,75,0.14)] backdrop-blur">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group rounded-[1.25rem] border border-transparent bg-brand-porcelain px-4 py-3 transition duration-300 hover:-translate-y-0.5 hover:border-brand-green/45 hover:bg-white hover:shadow-[0_18px_36px_rgba(6,34,75,0.10)] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
              >
                <span className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-brand-green">
                  {item.eyebrow}
                </span>
                <span className="mt-2 block font-display text-lg font-bold text-brand-navy">{item.title}</span>
                <span className="mt-1 block text-sm leading-5 text-slate-600">{item.description}</span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
