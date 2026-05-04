import { BrandLogo } from './BrandLogo'
import { Container } from './Container'

export function Header({ navigation, whatsappLink }) {
  return (
    <header className="sticky top-0 z-40 border-b border-brand-silver/70 bg-[linear-gradient(90deg,#f7f9fc_0%,#ffffff_46%,#e8eef5_100%)] shadow-[0_16px_42px_rgba(6,34,75,0.16)]">
      <div
        className="absolute inset-x-0 bottom-0 h-[3px] bg-[linear-gradient(90deg,#06224B_0%,#74C043_64%,#E33239_100%)]"
        aria-hidden="true"
      />
      <Container className="relative py-2.5">
        <div className="flex items-center justify-between gap-4">
          <a href="#inicio" className="max-w-[14rem] sm:max-w-[17rem]" aria-label="Ir al inicio">
            <BrandLogo />
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-extrabold text-brand-navy transition hover:text-brand-green"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#25D366] px-3 py-3 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1fbe59] sm:px-5"
          >
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Cotiza por WhatsApp</span>
          </a>
        </div>

        <nav className="mt-3 flex gap-4 overflow-x-auto pb-1 lg:hidden" aria-label="Principal movil">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-brand-silver/70 bg-white/80 px-4 py-2 text-sm font-bold text-brand-navy shadow-[0_8px_20px_rgba(6,34,75,0.08)] transition hover:border-brand-green hover:text-brand-green"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  )
}
