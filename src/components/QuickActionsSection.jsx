import { Container } from './Container'

export function QuickActionsSection({ whatsappLink }) {
  const steps = ['Describe tu necesidad', 'Validamos ruta y capacidad', 'Recibes orientación comercial']

  return (
    <section className="py-12">
      <Container>
        <div className="rounded-[2rem] border border-brand-silver/12 bg-[linear-gradient(135deg,#040b16_0%,#06224b_58%,#0f2f26_100%)] px-6 py-8 text-white shadow-[0_20px_50px_rgba(5,26,52,0.24)] sm:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-extrabold uppercase tracking-[0.22em] text-brand-green">Cotización guiada</p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                {'Pasa de la idea del traslado a una solicitud clara.'}
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                {'Te acompañamos para definir servicio, ruta, horarios, cantidad de pasajeros y condiciones de operación.'}
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[30rem]">
              {steps.map((step, index) => (
                <div key={step} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                  <span className="text-xs font-black uppercase tracking-[0.18em] text-brand-green">Paso {index + 1}</span>
                  <p className="mt-2 text-sm font-bold leading-6 text-slate-100">{step}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-base font-extrabold text-white shadow-[0_18px_40px_rgba(37,211,102,0.38)] transition hover:-translate-y-0.5 hover:bg-[#1fbe59] focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              Hablar por WhatsApp
            </a>
            <a
              href="#cotizacion"
              className="inline-flex items-center justify-center rounded-full bg-brand-silver px-6 py-4 text-base font-extrabold text-brand-navy shadow-[0_18px_40px_rgba(217,221,228,0.18)] transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-green"
            >
              {'Ir a cotización'}
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
