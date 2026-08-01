export const company = {
  name: 'Servicios Especiales Pintado Londoño',
  website: 'https://www.especialespl.com',
  phoneDisplay: '+57 316 841 33 92',
  phoneRaw: '573168413392',
  email: 'comercial@especialespl.com',
  years: 'Más de 40 años',
  founded: 'Desde 1984',
  coverage: 'Operación nacional',
  certifications: ['ISO 9001:2015', 'ISO 45001:2018'],
}

export const navigation = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Confianza', href: '#confianza' },
  { label: 'Nosotros', href: '#nosotros' },
]

export const newsEvents = [
  {
    slug: 'fiesta-virgen-del-carmen-2026',
    category: 'Evento institucional',
    date: '12 de julio de 2026',
    title: 'Celebración de la Virgen del Carmen 2026',
    summary:
      'La gerencia de Servicios Especiales Pintado Londoño y sus colaboradores conmemoraron el Día de la Virgen del Carmen, una fecha significativa para el sector del transporte.',
    description:
      'El 12 de julio de 2026, la gerencia de la empresa y sus colaboradores se reunieron para conmemorar el Día de la Virgen del Carmen. Este encuentro reafirmó la unión del equipo, la tradición del transporte y el compromiso de seguir movilizando personas con seguridad, respeto y confianza.',
    highlights: [
      'Participación de la gerencia y los colaboradores de la empresa.',
      'Conmemoración de una tradición representativa para el transporte en Colombia.',
      'Integración del equipo alrededor de la seguridad, la fe, el respeto y el servicio.',
    ],
    acknowledgements: {
      title: 'Agradecimiento especial',
      text:
        'Servicios Especiales Pintado Londoño expresa su agradecimiento a las empresas que, con sus aportes y respaldo, hicieron posible el desarrollo de esta celebración institucional.',
      companies: [
        'Geoflora S.A.S.',
        'Flores Ipanema S.A.S.',
        'Llantas al Costo',
        'Rápido Santa Ltda.',
        'Montallantas 5 Estrellas',
        'Seguros Beta',
        'Auto Frenos Látigo',
        'Parqueadero Zipalandia',
        'Parqueadero La Estación',
        'Inversiones Garzón Vargas',
      ],
    },
    images: [
      {
        src: '/evento-virgen-carmen-2026-equipo.png',
        alt: 'Gerencia y colaboradores de la empresa durante la celebración de la Virgen del Carmen 2026',
        fit: 'contain',
      },
      {
        src: '/evento-virgen-carmen-2026-flota.png',
        alt: 'Vehículos y colaboradores en la celebración Virgen del Carmen 2026',
      },
      {
        src: '/evento-virgen-carmen-2026-virgen.png',
        alt: 'Imagen de la Virgen del Carmen decorada con flores',
        fit: 'contain',
      },
    ],
  },
]

export const stats = [
  {
    value: '40+ años',
    label: 'Experiencia comprobada en transporte especial de pasajeros.',
    image: '/stat-40-anos-v2.png',
    imageAlt: 'Más de 40 años movilizando personas',
  },
  {
    value: 'Cobertura nacional',
    label: 'Servicios organizados en distintas regiones de Colombia.',
    image: '/stat-cobertura-v2.png',
    imageAlt: 'Cobertura nacional con mapa de Colombia',
  },
  {
    value: 'ISO 9001:2015',
    label: 'Gestión de calidad y mejora continua del servicio.',
    image: '/stat-iso-9001-v2.png',
    imageAlt: 'Certificación ISO 9001:2015',
  },
  {
    value: 'ISO 45001:2018',
    label: 'Seguridad, salud en el trabajo y operación responsable.',
    image: '/stat-iso-45001-v2.png',
    imageAlt: 'Certificación ISO 45001:2018',
  },
]

export const services = [
  {
    title: 'Transporte empresarial',
    accent: 'bg-brand-navy',
    summary: 'Movilidad corporativa organizada, puntual y con imagen profesional.',
    description:
      'Rutas programadas con logística clara, cumplimiento de horarios y respaldo operativo para la continuidad del servicio.',
  },
  {
    title: 'Transporte escolar',
    accent: 'bg-brand-green',
    summary: 'Seguridad y confianza para cada trayecto de la comunidad educativa.',
    description:
      'Servicio responsable con control de rutas, puntualidad y acompañamiento confiable para estudiantes y acudientes.',
  },
  {
    title: 'Turismo y grupos',
    accent: 'bg-brand-graphite',
    summary: 'Traslados cómodos y bien coordinados para experiencias grupales.',
    description:
      'Coordinación flexible para grupos que necesitan atención cordial, comodidad y una experiencia bien gestionada.',
  },
  {
    title: 'Servicios especiales',
    accent: 'bg-brand-red',
    summary: 'Soluciones a la medida para necesidades específicas de transporte.',
    description:
      'Atención personalizada para rutas, horarios y condiciones especiales con seguridad, orden y capacidad de respuesta.',
  },
]

export const reasons = [
  {
    title: 'Seguridad operativa',
    text: 'Planeación, control y enfoque preventivo en cada servicio.',
  },
  {
    title: 'Cumplimiento',
    text: 'Rutas, horarios y coordinación clara para cada cliente.',
  },
  {
    title: 'Atención humana',
    text: 'Trato respetuoso, cercano y responsable durante todo el proceso.',
  },
]

export const values = [
  {
    title: 'Misión',
    text: 'Brindar soluciones de transporte especial de pasajeros con altos estándares de seguridad, cumplimiento, comodidad y trato humano, generando confianza en cada recorrido.',
  },
  {
    title: 'Visión',
    text: 'Consolidarnos como una empresa referente en Colombia por la excelencia del servicio, la confiabilidad operativa y la capacidad de responder a las necesidades de cada cliente.',
  },
  {
    title: 'Valores',
    text: 'Seguridad, puntualidad, respeto, responsabilidad, cercanía, orden y compromiso con la calidad en cada detalle del servicio.',
  },
]

export const careerOpenings = [
  {
    slug: 'conductor-transporte-especial',
    title: 'Conductor de transporte especial de pasajeros',
    status: 'Recepción de hojas de vida',
    type: 'Operativo',
    location: 'Operación nacional según programación',
    summary:
      'Buscamos conductores responsables, puntuales y comprometidos con la seguridad vial para apoyar nuestra operación de transporte especial de pasajeros en servicios empresariales, escolares, turísticos y especiales.',
    requirements: [
      'Licencia de conducción C2 vigente para vehículos de servicio público.',
      'Formación básica primaria o bachillerato, con habilidades de lectura y escritura.',
      'Mínimo un año de experiencia comprobable como conductor de transporte especial de pasajeros.',
      'Conocimiento de normas de tránsito, seguridad vial y servicio al cliente.',
      'Disponibilidad para rutas programadas y servicios eventuales.',
      'Actitud de servicio, puntualidad, respeto y buen trato.',
      'Capacidad para realizar la inspección preoperacional y cuidar el vehículo asignado.',
    ],
    preferred: [
      'Más de dos años de experiencia en transporte especial.',
      'Formación en conducción defensiva y conocimiento del Plan Estratégico de Seguridad Vial.',
      'Conocimientos de primeros auxilios, evacuación y mecánica básica de buses o busetas.',
    ],
    responsibilities: [
      'Transportar pasajeros de forma segura, puntual y cordial.',
      'Cumplir las normas de tránsito y las políticas internas de seguridad vial.',
      'Realizar diariamente la inspección preoperacional del vehículo.',
      'Reportar oportunamente fallas, novedades o condiciones inseguras.',
      'Cuidar la limpieza, presentación, documentación y buen uso del vehículo asignado.',
    ],
    selection: [
      'Entrevista y verificación de experiencia.',
      'Prueba teórica y prueba práctica de conducción.',
      'Examen ocupacional de ingreso y prueba psicosensométrica.',
    ],
    applicationSubject: 'Hoja de vida - Conductor de transporte especial',
  },
  {
    slug: 'banco-hojas-de-vida',
    title: 'Banco de hojas de vida para apoyo operativo y administrativo',
    status: 'Convocatoria permanente',
    type: 'Administrativo y operativo',
    location: 'Colombia',
    summary:
      'Recibimos perfiles para futuras necesidades de coordinación, atención al cliente, apoyo logístico y gestión operativa.',
    requirements: [
      'Actitud de servicio, comunicación clara y orientación al detalle.',
      'Capacidad para trabajar con orden, cumplimiento y manejo responsable de información.',
      'Experiencia en transporte, logística, operaciones o atención al cliente será valorada.',
    ],
  },
]

export const whatsappMessage =
  'Hola, quisiera solicitar una cotización para un servicio de transporte especial con Servicios Especiales Pintado Londoño.'
