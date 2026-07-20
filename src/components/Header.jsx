import { BrandLogo } from './BrandLogo'
import { Container } from './Container'

export function Header({ navigation, whatsappLink }) {
  return (
    <header className="sticky left-0 right-0 top-0 z-40 w-full max-w-full overflow-hidden border-b border-brand-silver/70 bg-[linear-gradient(90deg,#f7f9fc_0%,#ffffff_46%,#e8eef5_100%)] shadow-[0_16px_42px_rgba(6,34,75,0.16)]">
      <div
        className="absolute inset-x-0 bottom-0 h-[3px] bg-[linear-gradient(90deg,#06224B_0%,#74C043_64%,#E33239_100%)]"
        aria-hidden="true"
      />
      <Container className="relative px-3 py-2.5 min-[390px]:px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center justify-between gap-3 sm:gap-4">
          <a
            href="#inicio"
            title="Volver al inicio"
            className="group w-[12rem] min-w-0 shrink rounded-2xl transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-white min-[390px]:w-[13.25rem] sm:w-[12.5rem] lg:w-[13.5rem]"
            aria-label={'Volver al inicio de la p\u00e1gina'}
          >
            <BrandLogo />
          </a>

          <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Principal">
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
            className="shrink-0 rounded-full bg-[#25D366] px-2.5 py-2.5 text-sm font-extrabold text-white shadow-[0_18px_40px_rgba(37,211,102,0.35)] transition hover:-translate-y-0.5 hover:bg-[#1fbe59] min-[390px]:px-3 min-[390px]:py-3 sm:px-5"
          >
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Cotiza por WhatsApp</span>
          </a>
        </div>
      </Container>
    </header>
  )
}
