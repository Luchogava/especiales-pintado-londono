import { Container } from './Container'

export function Header({ navigation, whatsappLink }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-ink/75 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#inicio" className="max-w-[16rem] text-white" aria-label="Ir al inicio">
            <span className="block font-display text-lg font-semibold tracking-[0.18em] text-brand-gold">SEPL</span>
            <span className="block text-sm font-semibold leading-snug text-slate-200">
              Servicios Especiales Pintado Londoño
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-200 transition hover:text-brand-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-brand-gold/60 bg-brand-gold px-5 py-3 text-sm font-extrabold text-brand-ink transition hover:-translate-y-0.5 hover:bg-[#ebbd3d]"
          >
            WhatsApp
          </a>
        </div>

        <nav className="mt-4 flex gap-4 overflow-x-auto pb-1 lg:hidden" aria-label="Principal móvil">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-brand-gold hover:text-brand-gold"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  )
}
