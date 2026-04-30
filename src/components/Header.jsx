import { BrandLogo } from './BrandLogo'
import { Container } from './Container'

export function Header({ navigation, whatsappLink }) {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-gold/20 bg-brand-ink/85 backdrop-blur-xl">
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <a href="#inicio" className="max-w-[19rem]" aria-label="Ir al inicio">
            <BrandLogo />
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
            className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1fbe59]"
          >
            Cotiza por WhatsApp
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
