import { Container } from './Container'

export function QuickActionsSection({ whatsappLink }) {
  return (
    <section className="py-10">
      <Container>
        <div className="rounded-[2rem] border border-brand-silver/12 bg-[linear-gradient(135deg,#040b16_0%,#06224b_58%,#0c1930_100%)] px-6 py-8 text-white shadow-[0_20px_50px_rgba(5,26,52,0.24)] sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-brand-green">Siguiente paso</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                {'Cu\u00e9ntanos qu\u00e9 tipo de traslado necesitas y te orientamos.'}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                {'Podemos ayudarte con transporte empresarial, escolar, tur\u00edstico, grupal o servicios especiales a la medida.'}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-base font-extrabold text-white shadow-[0_18px_40px_rgba(37,211,102,0.38)] transition hover:-translate-y-0.5 hover:bg-[#1fbe59]"
              >
                Hablar por WhatsApp
              </a>
              <a
                href="#cotizacion"
                className="inline-flex items-center justify-center rounded-full bg-brand-silver px-6 py-4 text-base font-extrabold text-brand-navy shadow-[0_18px_40px_rgba(217,221,228,0.18)] transition hover:-translate-y-0.5 hover:bg-white"
              >
                {'Ir a cotizaci\u00f3n'}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
