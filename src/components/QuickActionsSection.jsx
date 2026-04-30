import { Container } from './Container'

export function QuickActionsSection({ whatsappLink }) {
  return (
    <section className="py-10">
      <Container>
        <div className="rounded-[2rem] border border-brand-gold/20 bg-brand-ink px-6 py-8 text-white shadow-[0_20px_50px_rgba(5,26,52,0.18)] sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-brand-gold">Hablemos de tu servicio</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Ya conoces nuestros servicios y respaldos. Ahora elige como quieres contactarnos.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Puedes escribirnos por WhatsApp para una respuesta agil o pasar directo al formulario de cotizacion.
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
                className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-4 text-base font-extrabold text-brand-ink shadow-[0_18px_40px_rgba(242,181,1,0.35)] transition hover:-translate-y-0.5 hover:bg-[#ffc72a]"
              >
                Ir a cotizacion
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
