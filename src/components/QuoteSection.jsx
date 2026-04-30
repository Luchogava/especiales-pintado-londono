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

  const whatsappUrl = useMemo(() => {
    const lines = [
      'Hola, quisiera solicitar una cotización para un servicio de transporte especial con Servicios Especiales Pintado Londoño.',
      '',
      `Nombre: ${formData.fullName || 'No indicado'}`,
      `Empresa o institución: ${formData.company || 'No indicado'}`,
      `Teléfono: ${formData.phone || 'No indicado'}`,
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
    <section id="cotizacion" className="bg-brand-ink py-24 text-white">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <SectionHeading
            eyebrow="Cotización"
            title="Cuéntanos qué servicio necesitas y te contactamos"
            description="Completa el formulario para enviarnos tu solicitud por WhatsApp con la información clave. También puedes escribirnos al correo comercial para procesos formales o requerimientos especiales."
            theme="dark"
          />

          <div className="mt-8 space-y-5 rounded-[2rem] border border-brand-gold/20 bg-white/5 p-7 backdrop-blur">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-brand-gold">Contáctanos</p>
              <p className="mt-3 text-2xl font-bold text-white">{email}</p>
              <p className="mt-2 text-base font-semibold text-slate-200">WhatsApp: +57 316 841 33 92</p>
            </div>
            <p className="leading-8 text-slate-300">
              Atendemos solicitudes de empresas, colegios, instituciones, grupos turísticos, organizaciones, familias y
              clientes que buscan un servicio puntual y confiable.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-7 text-brand-ink shadow-glow sm:p-8">
          <div className="grid gap-5 md:grid-cols-2">
            <Field
              label="Nombre completo"
              name="fullName"
              placeholder="Tu nombre"
              value={formData.fullName}
              onChange={handleChange}
            />
            <Field
              label="Empresa o institución"
              name="company"
              placeholder="Nombre de la empresa"
              value={formData.company}
              onChange={handleChange}
            />
            <Field
              label="Teléfono"
              name="phone"
              type="tel"
              placeholder="+57"
              value={formData.phone}
              onChange={handleChange}
            />
            <Field
              label="Correo electrónico"
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
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-brand-gold focus:bg-white"
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
              placeholder="Ej. Medellín - Rionegro"
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
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-brand-gold focus:bg-white"
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
              href={`mailto:${email}?subject=${encodeURIComponent('Solicitud de cotización - Transporte especial')}`}
              className="inline-flex items-center justify-center rounded-full border border-brand-navy/15 px-6 py-4 text-base font-bold text-brand-navy transition hover:border-brand-gold hover:text-brand-blue"
            >
              Enviar por correo
            </a>
          </div>

          <p className="mt-4 text-sm leading-6 text-slate-500">
            Al enviar, se abrirá WhatsApp con tu información precargada para acelerar la atención comercial.
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
        className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition focus:border-brand-gold focus:bg-white"
      />
    </label>
  )
}
