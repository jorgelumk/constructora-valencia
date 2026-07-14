export const SITE = {
  name: 'Constructora en Valencia',
  url: 'https://constructoraenvalencia.com',
  phone: '960 73 12 06',
  phoneHref: 'tel:+34960731206',
  whatsappHref: 'https://wa.me/34960731206',
  email: 'info@constructoravalencia.com',
  address: {
    street: 'Carrer de Sant Vicent Màrtir, 85',
    city: 'Valencia',
    postalCode: '46002',
    province: 'Valencia',
    country: 'España',
    countryCode: 'ES',
  },
  geo: { lat: 39.4699, lng: -0.3763 },
  founded: '2008',
  hours: 'Lun–Vie 8:00–19:00 · Sáb 9:00–14:00',
} as const

export interface Service {
  slug: string
  title: string
  titleLong: string
  subtitle: string
  description: string
  shortDesc: string
  icon: string
  category: string
  metaTitle: string
  metaDesc: string
  image: string
  features: string[]
  faqs: { q: string; a: string }[]
}

export const SERVICES: Service[] = [
  // --- CONSTRUCCIÓN RESIDENCIAL ---
  {
    slug: 'obra-nueva-valencia',
    title: 'Obra Nueva',
    titleLong: 'Obra Nueva en Valencia',
    subtitle: 'Edificación residencial y unifamiliar a medida',
    description: 'Nos encargamos de construir tu vivienda soñada o promoción inmobiliaria desde la excavación inicial. Asumimos la dirección de obra, tramitación de licencias, ejecución material y acabados. Resultados impecables con un solo equipo responsable.',
    shortDesc: 'Edificios residenciales, chalets y naves en Valencia y toda su área metropolitana.',
    icon: '🏗️',
    category: 'Construcción Residencial',
    metaTitle: 'Obra Nueva Valencia | Constructora Líder y Garantizada',
    metaDesc: 'Empresa de construcción de obra nueva en Valencia. Ejecutamos chalets, edificios y naves. Proyectos llave en mano. Pide presupuesto sin compromiso. ☎ 960 73 12 06',
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80',
    features: [
      'Desarrollo de proyecto técnico integral',
      'Obtención de licencia de obras municipal',
      'Cimentación, albañilería y revestimientos',
      'Seguro decenal por ley de 10 años',
      'Supervisión técnica en cada etapa',
      'Gestión de cédula de habitabilidad',
    ],
    faqs: [
      { q: '¿Qué plazos manejáis para construir una casa en Valencia?', a: 'Para un chalet o casa unifamiliar, estimamos entre 12 y 16 meses una vez concedida la licencia. Las promociones de varias viviendas requieren entre 18 y 28 meses según su envergadura.' },
      { q: '¿Hacéis vosotros el papeleo del Ayuntamiento?', a: 'Absolutamente. Presentamos el proyecto visado en el Ayuntamiento de Valencia o municipios colindantes y realizamos el seguimiento hasta obtener el permiso definitivo.' },
      { q: '¿Qué tipo de garantías ofrecéis?', a: 'Cumplimos estrictamente la LOE: 10 años para daños estructurales, 3 años para vicios que afecten a la habitabilidad y 1 año para terminaciones y acabados visuales.' },
    ],
  },
  {
    slug: 'construccion-casas-pasivas-valencia',
    title: 'Casas Pasivas (Passivhaus)',
    titleLong: 'Construcción de Casas Pasivas en Valencia',
    subtitle: 'Viviendas de consumo energético casi nulo',
    description: 'Construimos bajo el estándar Passivhaus para garantizar un ahorro energético de hasta el 90%. Viviendas hiperaisladas, con ventilación mecánica y temperatura constante durante todo el año, adaptadas al clima mediterráneo.',
    shortDesc: 'Especialistas en Passivhaus y edificación sostenible de máxima eficiencia.',
    icon: '🍃',
    category: 'Construcción Residencial',
    metaTitle: 'Constructora de Casas Pasivas en Valencia | Passivhaus',
    metaDesc: 'Construimos tu casa pasiva (Passivhaus) en Valencia. Máximo ahorro energético y confort térmico durante todo el año. Pide presupuesto sin compromiso.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=1200&q=80',
    features: [
      'Aislamiento térmico excepcional sin puentes',
      'Ventilación mecánica de doble flujo',
      'Ventanas de altas prestaciones',
      'Hermeticidad máxima comprobada (Blower Door)',
      'Certificación Passivhaus oficial',
      'Ahorro en facturas energéticas',
    ],
    faqs: [
      { q: '¿Es mucho más cara una casa pasiva que una normal?', a: 'La inversión inicial suele ser entre un 10% y un 15% superior debido a los aislamientos y carpinterías especiales, pero se amortiza rápidamente gracias al brutal ahorro mensual en climatización.' },
      { q: '¿Se pueden abrir las ventanas en una casa pasiva?', a: 'Por supuesto. Aunque el sistema de ventilación renueva el aire constantemente para mantenerlo puro, puedes abrir las ventanas siempre que quieras.' },
    ],
  },
  {
    slug: 'construccion-viviendas-unifamiliares-valencia',
    title: 'Viviendas Unifamiliares',
    titleLong: 'Construcción de Casas y Viviendas Unifamiliares',
    subtitle: 'Diseño y construcción de chalets a medida',
    description: 'Materializamos la casa de tus sueños. Desde chalets de diseño minimalista hasta casas de estilo tradicional. Nos encargamos de todo: movimiento de tierras, cimentación, estructura, instalaciones y urbanización de exteriores.',
    shortDesc: 'Construcción integral de chalets y villas a medida en Valencia.',
    icon: '🏡',
    category: 'Construcción Residencial',
    metaTitle: 'Construcción de Viviendas Unifamiliares en Valencia | Chalets',
    metaDesc: 'Tu empresa constructora de casas unifamiliares y chalets en Valencia. Ejecutamos proyectos llave en mano adaptados a tus gustos. Solicita información.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80',
    features: [
      'Proyectos arquitectónicos a medida',
      'Sistemas constructivos tradicionales o industrializados',
      'Integración domótica e iluminación LED',
      'Acabados en materiales nobles (piedra, madera)',
      'Climatización por aerotermia',
      'Gestión de licencias y conexiones a suministros',
    ],
    faqs: [
      { q: '¿Construís también en pueblos de alrededor de Valencia?', a: "Sí, trabajamos en toda el área metropolitana y urbanizaciones colindantes (Rocafort, Godella, L'Eliana, Paterna, etc.)." },
      { q: '¿Hacéis también los exteriores y piscinas?', a: 'Sí, nuestros proyectos unifamiliares suelen ser integrales, incluyendo paisajismo, cerramientos, terrazas y zonas de agua.' },
    ],
  },
  {
    slug: 'construccion-lujo-alta-calidad-valencia',
    title: 'Construcción de Lujo',
    titleLong: 'Construcción de Lujo y Alta Calidad',
    subtitle: 'Edificaciones residenciales de alto standing',
    description: 'Proyectos exclusivos donde el límite es la imaginación. Utilizamos materiales premium, domótica avanzada y técnicas constructivas de vanguardia para crear residencias de lujo con acabados de perfección milimétrica.',
    shortDesc: 'Villas y casas de alto standing con los mejores materiales del mercado.',
    icon: '✨',
    category: 'Construcción Residencial',
    metaTitle: 'Constructora de Lujo en Valencia | Villas y Alta Calidad',
    metaDesc: 'Expertos en la construcción de viviendas de lujo en Valencia. Acabados premium, arquitectura exclusiva y domótica avanzada. Habla con nuestros especialistas.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    features: [
      'Asesoramiento exclusivo en interiorismo',
      'Mármoles, maderas nobles y porcelánicos gran formato',
      'Integración total de domótica (Smart Home)',
      'Piscinas desbordantes (Infinity Pools)',
      'Sistemas de máxima seguridad',
      'Garantía de privacidad durante la obra',
    ],
    faqs: [
      { q: '¿Cómo garantizáis los plazos en proyectos tan complejos?', a: 'Asignamos un Project Manager exclusivo a tu obra que supervisa diariamente los avances y cordina a todos los oficios y proveedores de materiales especiales.' },
      { q: '¿Trabajáis con arquitectos externos?', a: 'Sí, podemos construir el proyecto firmado por tu arquitecto de confianza o podemos encargarnos nosotros del diseño a través de nuestro estudio.' },
    ],
  },
  {
    slug: 'construccion-piscinas-valencia',
    title: 'Construcción de Piscinas',
    titleLong: 'Construcción de Piscinas a Medida',
    subtitle: 'Zonas de agua integradas en el paisajismo',
    description: 'Diseñamos y construimos piscinas de obra (hormigón gunitado), desbordantes o de arena. Nos ocupamos del vaso, los equipos de filtración, la depuración salina y los pavimentos perimetrales antideslizantes.',
    shortDesc: 'Piscinas de obra, desbordantes y zonas de relax para tu hogar.',
    icon: '🏊',
    category: 'Construcción Residencial',
    metaTitle: 'Construcción de Piscinas en Valencia | De Obra y Desbordantes',
    metaDesc: 'Construimos tu piscina a medida en Valencia. Piscinas de hormigón gunitado, cloración salina y revestimientos modernos. Llama ahora.',
    image: 'https://images.unsplash.com/photo-1576013551627-11971f498c56?w=1200&q=80',
    features: [
      'Excavación y preparación del terreno',
      'Hormigón gunitado vía húmeda (máxima estanqueidad)',
      'Revestimiento porcelánico o gresite',
      'Sistemas de cloración salina automáticos',
      'Iluminación subacuática LED',
      'Márgenes térmicos y antideslizantes',
    ],
    faqs: [
      { q: '¿Cuánto se tarda en hacer una piscina de obra?', a: 'Si el acceso para la maquinaria es bueno, el proceso completo desde la excavación hasta el llenado suele llevar unas 3 a 5 semanas.' },
      { q: '¿Mejor cloro o sal?', a: 'Recomendamos encarecidamente la cloración salina. Es más respetuosa con la piel y los ojos, y el mantenimiento es mucho más automatizado.' },
    ],
  },
  {
    slug: 'promotora-valencia',
    title: 'Promotora Propia',
    titleLong: 'Promotora Inmobiliaria en Valencia',
    subtitle: 'Nuestras propias promociones de alta calidad',
    description: 'No solo construimos para terceros, también somos promotores en Valencia. Ofrecemos residenciales de diseño innovador en ubicaciones privilegiadas. Comprar directamente al constructor significa mejores precios y personalización.',
    shortDesc: 'Venta directa de viviendas de obra nueva promovidas y construidas por nosotros.',
    icon: '🏢',
    category: 'Construcción Residencial',
    metaTitle: 'Promotora Inmobiliaria Valencia | Obra Nueva Directa',
    metaDesc: 'Compre su casa en Valencia directamente al constructor. Promociones inmobiliarias de diseño, ubicaciones premium y alta rentabilidad. ☎ 960 73 12 06',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80',
    features: [
      'Compra sin comisiones de intermediarios',
      'Suelos seleccionados de alto potencial',
      'Calificaciones energéticas tipo A',
      'Atención directa y customización',
      'Postventa transparente y ágil',
      'Proyectos ideales para inversión',
    ],
    faqs: [
      { q: '¿Vendeis promociones de otros?', a: 'No, únicamente comercializamos aquellas viviendas que hemos promovido y construido nosotros mismos en Valencia.' },
      { q: '¿Puedo elegir los materiales de mi futura casa?', a: 'Sí, si la obra se encuentra en fase temprana, ofrecemos a los compradores la posibilidad de elegir acabados y colores.' },
    ],
  },

  // --- REFORMAS Y REHABILITACIÓN ---
  {
    slug: 'reformas-integrales-valencia',
    title: 'Reformas Integrales',
    titleLong: 'Reformas Integrales en Valencia',
    subtitle: 'Renovación absoluta de viviendas y áticos',
    description: 'Le damos una nueva vida a tu inmueble rediseñando espacios, actualizando instalaciones y eligiendo los mejores materiales. Un jefe de obra coordinará fontaneros, electricistas y albañiles para cumplir con la fecha de entrega.',
    shortDesc: 'Rehabilitación interior de viviendas, pisos y áticos en Valencia con acabados de primera.',
    icon: '🔨',
    category: 'Reformas y Rehabilitación',
    metaTitle: 'Reformas Integrales Valencia | Presupuesto Cerrado Gratis',
    metaDesc: 'Especialistas en reformas integrales en Valencia. Renueva tu casa por completo con un equipo profesional y sin sorpresas. Presupuesto rápido. ☎ 960 73 12 06',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&q=80',
    features: [
      'Visualización de espacios mediante Renders 3D',
      'Derribos y replanteo de tabiquería',
      'Renovación total de redes de suministros',
      'Mobiliario de cocina y sanitarios modernos',
      'Colocación de pavimentos, parquets y pintura',
      'Entrega impecable tras limpieza profesional',
    ],
    faqs: [
      { q: '¿Qué presupuesto aproximado tiene reformar un piso en Valencia?', a: 'Dependerá de los m² y materiales elegidos, pero una reforma integral de alta calidad suele rondar los 600 - 1.000 €/m².' },
      { q: '¿Cuánto tiempo lleva hacer una reforma total?', a: 'Para un piso medio de unos 90 m², solemos tardar entre 2 y 3 meses y medio, estableciendo penalizaciones en contrato si nos retrasamos.' },
    ],
  },
  {
    slug: 'reformas-banos-cocinas-valencia',
    title: 'Baños y Cocinas',
    titleLong: 'Reforma de Baños y Cocinas en Valencia',
    subtitle: 'Moderniza las estancias más importantes de casa',
    description: 'Renovamos parcial o totalmente tu cuarto de baño y tu cocina. Cambiamos la bañera por plato de ducha, instalamos mobiliario a medida e islas de cocina, y utilizamos materiales cerámicos de primera calidad de la región.',
    shortDesc: 'Obras rápidas de baños y cocinas en Valencia con diseños a tu medida.',
    icon: '🚿',
    category: 'Reformas y Rehabilitación',
    metaTitle: 'Reforma Baños y Cocinas Valencia | Calidad y Rapidez',
    metaDesc: 'Renueva tu baño o cocina en Valencia. Cambia tu bañera por ducha, o pon una isla en tu cocina. Máxima rapidez y limpieza garantizada. ☎ 960 73 12 06',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
    features: [
      'Propuestas de diseño y distribución',
      'Actualización de tuberías y cableado',
      'Revestimientos cerámicos y porcelánicos',
      'Grifería, sanitarios y muebles',
      'Cambio de bañera por ducha exprés',
      'Muebles a medida para aprovechar espacios',
    ],
    faqs: [
      { q: '¿Es muy cara una cocina con isla?', a: 'Una cocina recta estándar puede costar unos 5.000 - 7.000 €. Si añadimos una isla y materiales premium, el coste supera habitualmente los 12.000 €.' },
      { q: '¿Dejaréis de funcionar el agua muchos días?', a: 'Intentamos minimizar el impacto. Los cortes generales de agua duran apenas unas horas durante las conexiones principales.' },
    ],
  },
  {
    slug: 'rehabilitacion-edificios-valencia',
    title: 'Rehabilitación de Edificios',
    titleLong: 'Rehabilitación de Edificios en Valencia',
    subtitle: 'Consolidación estructural y eficiencia térmica',
    description: 'Expertos en devolver el esplendor a fincas y comunidades de propietarios en Valencia. Arreglamos fachadas, impermeabilizamos cubiertas y mejoramos la accesibilidad. Ayudamos a gestionar las subvenciones autonómicas vigentes.',
    shortDesc: 'Restauración de fachadas, refuerzos estructurales y reparación de cubiertas en Valencia.',
    icon: '🏛️',
    category: 'Reformas y Rehabilitación',
    metaTitle: 'Rehabilitación de Edificios Valencia | Fachadas y Cubiertas',
    metaDesc: 'Rehabilita tu edificio en Valencia con nosotros. Arreglo de fachadas, cubiertas y gestión de ayudas autonómicas. Empresa constructora experta. ☎ 960 73 12 06',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    features: [
      'Inspección y subsanación de IEEV.CV',
      'Pintura y saneamiento de fachadas',
      'Instalación de SATE para ahorro energético',
      'Gestión de ayudas (NextGen, Generalitat)',
      'Implantación de nuevos ascensores a cota cero',
      'Refuerzo de estructuras dañadas',
    ],
    faqs: [
      { q: '¿Nos ayudáis a pedir ayudas públicas para la comunidad?', a: 'Claro, nuestro departamento técnico prepara la documentación para acceder a los fondos de rehabilitación energética impulsados por la Generalitat Valenciana.' },
      { q: '¿Qué es el IEEV.CV?', a: 'El Informe de Evaluación del Edificio de la Comunitat Valenciana es un examen técnico obligatorio para fincas antiguas. Si sale desfavorable, ejecutamos las obras necesarias para aprobarlo.' },
    ],
  },

  // --- EMPRESAS E INDUSTRIA ---
  {
    slug: 'reforma-locales-valencia',
    title: 'Locales Comerciales',
    titleLong: 'Reforma de Locales Comerciales en Valencia',
    subtitle: 'Adecuación integral de negocios y oficinas',
    description: 'Preparamos tu local en Valencia para que puedas abrir las puertas cuanto antes. Hacemos el interiorismo, ejecutamos la reforma y tramitamos los permisos de actividad para hostelería, clínicas o despachos.',
    shortDesc: 'Transformamos bajos comerciales y oficinas en espacios productivos. Diseño y obra.',
    icon: '🏪',
    category: 'Empresas e Industria',
    metaTitle: 'Reforma Locales Comerciales Valencia | Llave en Mano',
    metaDesc: 'Reforma tu local comercial u oficina en Valencia. Proyectos llave en mano, licencias de apertura y rápida ejecución para abrir cuanto antes. ☎ 960 73 12 06',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    features: [
      'Concepto de diseño comercial personalizado',
      'Legalización y licencias de apertura',
      'Climatización, extracción y ventilación',
      'Cumplimiento de accesibilidad universal',
      'Iluminación corporativa y cartelería',
      'Planificación milimétrica de gremios',
    ],
    faqs: [
      { q: '¿Tramitáis la licencia de apertura?', a: 'Sí, nos ocupamos tanto de la declaración responsable ambiental como de la licencia ambiental si la actividad en Valencia lo requiere (como en hostelería).' },
      { q: '¿Cuánto tiempo tendré el negocio cerrado?', a: 'Sabemos que el tiempo es dinero. Organizamos los equipos para locales medios en un plazo intensivo de 4 a 8 semanas, trabajando a destajo si es preciso.' },
    ],
  },
  {
    slug: 'construccion-naves-industriales-valencia',
    title: 'Naves Industriales',
    titleLong: 'Construcción de Naves Industriales en Valencia',
    subtitle: 'Infraestructuras para la industria y logística valenciana',
    description: 'Ejecutamos la construcción de naves logísticas, almacenes e industrias en los polígonos de Valencia. Empleamos estructuras metálicas o de hormigón optimizadas para asegurar la máxima durabilidad de la instalación.',
    shortDesc: 'Construcción de naves y pabellones logísticos en los polígonos industriales de Valencia.',
    icon: '🏭',
    category: 'Empresas e Industria',
    metaTitle: 'Construcción Naves Industriales Valencia | Proyectos Seguros',
    metaDesc: 'Construimos tu nave industrial o logística en Valencia. Estructuras sólidas, cerramientos eficientes y legalización. Infórmate gratis. ☎ 960 73 12 06',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    features: [
      'Ingeniería civil e industrial',
      'Cálculo de estructuras de acero u hormigón',
      'Sistemas anti-incendios y BIEs',
      'Pavimentación de cuarzo pulido',
      'Cubiertas de panel sándwich aislante',
      'Adecuación legal del establecimiento',
    ],
    faqs: [
      { q: '¿Por cuánto sale construir una nave en Valencia?', a: 'Sin contar el suelo, la edificación en sí puede costar entre 300 y 650 €/m² dependiendo de las cargas a soportar, necesidades de frío/calor y oficinas.' },
      { q: '¿Operáis en todos los polígonos de Valencia?', a: 'Sí, trabajamos en Fuente del Jarro, Riba-roja, Parque Tecnológico de Paterna, Almussafes y en general en todo el cinturón industrial.' },
    ],
  },
  {
    slug: 'obra-civil-industrial-valencia',
    title: 'Obra Civil',
    titleLong: 'Empresa Constructora de Obra Civil en Valencia',
    subtitle: 'Infraestructuras públicas e industriales complejas',
    description: 'Desarrollamos proyectos de obra civil y urbanización en la Comunitat Valenciana. Desde viales y cimentaciones pesadas hasta redes de saneamiento y movimientos de tierras a gran escala, con maquinaria propia y personal altamente cualificado.',
    shortDesc: 'Especialistas en movimientos de tierra, urbanizaciones e infraestructuras civiles.',
    icon: '🚧',
    category: 'Empresas e Industria',
    metaTitle: 'Empresa Constructora de Obra Civil en Valencia',
    metaDesc: 'Realizamos proyectos de obra civil en Valencia: urbanizaciones, viales, redes de saneamiento y cimentaciones pesadas. Maquinaria propia.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    features: [
      'Movimientos de tierras y excavaciones',
      'Redes de saneamiento y canalizaciones',
      'Urbanización de polígonos y calles',
      'Muros de contención y cimentaciones pesadas',
      'Pavimentación y asfaltado',
      'Certificaciones ISO de calidad y medioambiente',
    ],
    faqs: [
      { q: '¿Trabajáis para la administración pública?', a: 'Sí, participamos en licitaciones públicas y colaboramos con ayuntamientos y diputaciones en el desarrollo de infraestructuras.' },
      { q: '¿Contáis con parque de maquinaria propio?', a: 'Disponemos de flota propia de excavadoras, retroexcavadoras y camiones para no depender de terceros y cumplir con los plazos estrictamente.' },
    ],
  }
]


export const STATS = [
  { value: '+400', label: 'Proyectos finalizados' },
  { value: '+15', label: 'Años en el sector' },
  { value: '99%', label: 'Satisfacción garantizada' },
  { value: '10 años', label: 'Seguro decenal' },
]

export const TESTIMONIALS = [
  {
    name: 'Laura Navarro',
    location: 'Ruzafa · Reforma completa',
    avatar: 'LN',
    rating: 5,
    text: '"Nos renovaron un piso muy antiguo en Ruzafa y lo han dejado irreconocible. Resolvieron los imprevistos muy rápido y el trato fue siempre muy cercano. Recomendables al 100%."',
  },
  {
    name: 'David Blasco',
    location: 'Centro Valencia · Local hostelería',
    avatar: 'DB',
    rating: 5,
    text: '"Necesitábamos abrir nuestro café antes de las fallas y trabajaron contrarreloj para conseguirlo. La insonorización y las calidades son inmejorables."',
  },
  {
    name: 'Elena Soriano',
    location: 'L\'Eliana · Chalet obra nueva',
    avatar: 'ES',
    rating: 5,
    text: '"Confiamos en ellos para hacernos nuestra casa a medida. Desde el primer boceto del arquitecto hasta que nos dieron las llaves fue un proceso súper tranquilo."',
  },
  {
    name: 'Antonio Grau',
    location: 'Paterna · Rehabilitación comunitaria',
    avatar: 'AG',
    rating: 5,
    text: '"Rehabilitamos el zaguán para poner el ascensor a cota cero en nuestro edificio. Las molestias para los vecinos fueron mínimas y nos gestionaron la subvención."',
  },
]

export const FAQ_HOME = [
  {
    q: '¿Qué precio medio tiene reformar de forma integral un piso en Valencia?',
    a: 'El precio final depende mucho de los acabados, pero una horquilla habitual está entre los 600 y los 1.000 €/m². Estudiamos tu caso y te damos un presupuesto ajustado gratis.',
  },
  {
    q: '¿Cuánto tardáis en construir un chalet de obra nueva?',
    a: 'Normalmente, desde que empezamos a poner ladrillos, un chalet unifamiliar en Valencia suele estar listo en un plazo de entre 12 y 16 meses, si la climatología y suministros acompañan.',
  },
  {
    q: '¿Os hacéis cargo del papeleo administrativo?',
    a: 'Sí, somos especialistas. Nos ocupamos de proyectos visados, tasas, licencias de obras, certificados finales y cédulas de habitabilidad.',
  },
  {
    q: '¿Qué zonas geográficas abarcáis?',
    a: 'Nuestra sede está en Valencia capital y realizamos trabajos en toda el área metropolitana y localidades cercanas: Paterna, Torrent, Sagunto, Alzira, L\'Eliana, etc.',
  },
  {
    q: '¿Tiene garantía el trabajo realizado?',
    a: 'Por supuesto. Cumplimos con la ley de edificación (10 años en estructura) y además damos amplias garantías en nuestras instalaciones eléctricas o de fontanería tras las reformas.',
  },
  {
    q: '¿Podéis gestionar las ayudas públicas para fachadas?',
    a: 'Efectivamente, tramitamos las subvenciones vigentes de los fondos NextGen y las específicas de la Generalitat Valenciana para que arreglar el edificio os cueste menos.',
  },
]
