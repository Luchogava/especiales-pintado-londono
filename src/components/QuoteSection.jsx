import { useMemo, useState } from 'react'
import { Container } from './Container'
import { SectionHeading } from './SectionHeading'

const serviceOptions = [
  'Transporte empresarial',
  'Transporte escolar',
  'Turismo y grupos',
  'Servicios especiales',
]

const initialForm = {
  fullName: '',
  company: '',
  phone: '',
  email: '',
  service: serviceOptions[0],
  city: '',
  passengers: '',
  date: '',
  details: '',
}

export function QuoteSection({ phoneRaw, email }) {
  const [formData, setFormData] = useState(initialForm)
  const contactDescription =
    'Atendemos solicitudes de empresas, colegios, instituciones, grupos tur\u00edsticos, organizaciones, familias y clientes que buscan un servicio puntual y confiable.'

  const whatsappUrl = useMemo(() => {
    const lines = [
      'Hola, quisiera solicitar una cotizaci\u00f3n para un servicio de transporte especial con Servicios Especiales Pintado Londo\u00f1o.',
      '',
      `Nombre: ${formData.fullName || 'No indicado'}`,
      `Empresa o instituci\u00f3n: ${formData.company || 'No indicado'}`,
      `Tel\u00e9fono: ${formData.phone || 'No indicado'}`,
      `Correo: ${formData.email || 'No indicado'}`,
      `Servicio requerido: ${formData.service || 'No indicado'}`,
      `Ciudad o ruta: ${formData.city || 'No indicado'}`,
      `Cantidad de pasajeros: ${formData.passengers || 'No indicado'}`,
      `Fecha estimada: ${formData.date || 'No indicado'}`,
      `Detalle del servicio: ${formData.details || 'No indicado'}`,
    ]

    return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(lines.join('\n'))}`
  }, [formData, phoneRaw])

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="cotizacion" className="bg-[linear-gradient(145deg,#040b16_0%,#06224b_60%,#07162d_100%)] py-24 text-white">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow={'Cotizaci\u00f3n'}
            title={'Cu\u00e9ntanos qu\u00e9 servicio necesitas y te contactamos'}
            description={'Completa el formulario para enviarnos tu solicitud por WhatsApp con la informaci\u00f3n clave. Tambi\u00e9n puedes escribirnos al correo comercial para procesos formales o requerimientos especiales.'}
            theme="dark"
          />

          <div className="mt-8 space-y-5 rounded-[2rem] border border-brand-silver/15 bg-white/5 p-7 backdrop-blur">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-brand-green">{'Cont\u00e1ctanos'}</p>
              <p className="mt-3 text-2xl font-bold text-white">{email}</p>
              <p className="mt-2 text-base font-semibold text-slate-200">WhatsApp: +57 316 841 33 92</p>
            </div>
            <p className="leading-8 text-slate-300">{contactDescription}</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] border border-brand-silver/18 bg-white p-7 text-brand-ink shadow-premium sm:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <Field
              label="Nombre completo"
              name="fullName"
              placeholder="Tu nombre"
              value={formData.fullName}
              onChange={handleChange}
            />
            <Field
              label={'Empresa o instituci\u00f3n'}
              name="company"
              placeholder="Nombre de la empresa"
              value={formData.company}
              onChange={handleChange}
            />
            <Field
              label={'Tel\u00e9fono'}
              name="phone"
              type="tel"
              placeholder="+57"
              value={formData.phone}
              onChange={handleChange}
            />
            <Field
              label={'Correo electr\u00f3nico'}
              name="email"
              type="email"
              placeholder="correo@empresa.com"
              value={formData.email}
              onChange={handleChange}
            />
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm font-bold text-brand-navy">Servicio requerido</span>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-2xl border border-brand-silver/25 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-brand-green focus:bg-white"
              >
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <Field
              label="Ciudad o ruta"
              name="city"
              placeholder={'Ej. Medell\u00edn - Rionegro'}
              value={formData.city}
              onChange={handleChange}
            />
            <Field
              label="Cantidad de pasajeros"
              name="passengers"
              type="number"
              placeholder="Ej. 18"
              value={formData.passengers}
              onChange={handleChange}
            />
            <Field label="Fecha estimada" name="date" type="date" value={formData.date} onChange={handleChange} />
            <label className="md:col-span-2">
              <span className="mb-2 block text-sm font-bold text-brand-navy">Detalles del servicio</span>
              <textarea
                name="details"
                rows="5"
                placeholder="Describe horarios, puntos de recogida, destino o necesidades especiales."
                value={formData.details}
                onChange={handleChange}
                className="w-full rounded-2xl border border-brand-silver/25 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-brand-green focus:bg-white"
              />
            </label>
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366] px-6 py-4 text-base font-extrabold text-white shadow-[0_18px_40px_rgba(37,211,102,0.38)] transition hover:-translate-y-0.5 hover:bg-[#1fbe59]"
            >
              Enviar por WhatsApp
            </button>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent('Solicitud de cotizaci\u00f3n - Transporte especial')}`}
              className="inline-flex items-center justify-center rounded-full border border-brand-silver/25 px-6 py-4 text-base font-bold text-brand-navy transition hover:border-brand-green hover:text-brand-navy"
            >
              Enviar por correo
            </a>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            {'Al enviar, se abrir\u00e1 WhatsApp con tu informaci\u00f3n precargada para acelerar la atenci\u00f3n comercial.'}
          </p>
        </form>
      </Container>
    </section>
  )
}

function Field({ label, name, type = 'text', placeholder, value, onChange }) {
  return (
    <label>
      <span className="mb-2 block text-sm font-bold text-brand-navy">{label}</span>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-2xl border border-brand-silver/25 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-brand-green focus:bg-white"
      />
    </label>
  )
}
