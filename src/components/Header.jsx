import { BrandLogo } from './BrandLogo'
import { Container } from './Container'

export function Header({ navigation, whatsappLink }) {
  return (
    <header className="sticky left-0 right-0 top-0 z-40 w-full max-w-full overflow-hidden border-b border-brand-green/35 bg-[linear-gradient(180deg,#0a2b5b_0%,#06224b_100%)] shadow-[0_14px_36px_rgba(4,11,22,0.22)]">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:text-sm focus:font-extrabold focus:text-brand-navy"
      >
        Saltar al contenido principal
      </a>
      <div
        className="absolute inset-x-0 bottom-0 h-[2px] bg-[linear-gradient(90deg,#74C043_0%,#74C043_68%,#E33239_100%)]"
        aria-hidden="true"
      />
      <Container className="relative px-3 py-2 min-[390px]:px-4 sm:px-6 sm:py-2.5 lg:px-8">
        <div className="flex min-w-0 items-center justify-between gap-3 sm:gap-4">
          <a
            href="#inicio"
            title="Volver al inicio"
            className="group w-[10.2rem] min-w-0 shrink rounded-2xl transition hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green focus-visible:ring-offset-2 focus-visible:ring-offset-brand-ink min-[390px]:w-[11.5rem] sm:w-[12.5rem] lg:w-[13.5rem]"
            aria-label={'Volver al inicio de la página'}
          >
            <BrandLogo />
          </a>

          <nav className="hidden items-center gap-5 xl:flex xl:gap-7" aria-label="Principal">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-2 py-2 text-sm font-extrabold text-slate-100 transition hover:bg-white/10 hover:text-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn-premium-green min-h-11 shrink-0 px-3 py-2.5 text-sm sm:px-5"
          >
            <span className="sm:hidden">WhatsApp</span>
            <span className="hidden sm:inline">Cotiza por WhatsApp</span>
          </a>
        </div>

        <nav
          className="-mx-3 mt-3 hidden gap-2 overflow-x-auto px-3 pb-1 sm:flex xl:hidden"
          aria-label="Secciones principales"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-extrabold text-slate-100 transition hover:border-brand-green hover:text-brand-green focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  )
}
