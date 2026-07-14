export interface Project {
  id: number | string
  title: string
  slug: string
  type: string
  location: string
  area: string
  year: string
  description: string
  image: string
  tags: string[]
  gallery?: string[]
  challenge?: string
  solution?: string
}

export const PROJECTS: Project[] = [
  {
    id: 11,
    title: 'Reforma Integral de Lujo',
    slug: 'reforma-integral-villa-rocafort',
    type: 'Reforma Integral',
    location: 'Rocafort, Valencia',
    area: '450 m²',
    year: '2025',
    description: 'Rehabilitación integral de una vivienda unifamiliar premium en Rocafort. Incorporación de sistema domótico inteligente, piscina desbordante y rediseño de zonas exteriores.',
    challenge: 'El objetivo era actualizar una vivienda de corte clásico de los años 90, dotándola de un aire contemporáneo sin demoler la estructura original, y mejorando su calificación energética.',
    solution: 'Se ejecutó un proyecto de arquitectura interior que abrió los espacios mediante apeos estructurales. Instalamos climatización por aerotermia y rediseñamos los jardines integrándolos visualmente con los salones.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=bottom,left&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=top,right&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=center&q=80'
    ],
    tags: ['Reforma integral', 'Chalet', 'Rocafort', 'Premium'],
  },
  {
    id: 12,
    title: 'Edificio Residencial Ecológico',
    slug: 'edificio-sostenible-patraix',
    type: 'Obra Nueva',
    location: 'Patraix, Valencia',
    area: '3.200 m²',
    year: '2025',
    description: 'Promoción inmobiliaria de 20 viviendas diseñadas con criterios de sostenibilidad. Cuenta con cubierta ajardinada, energía solar y zonas comunes con vegetación autóctona.',
    challenge: 'Desarrollar un complejo de viviendas en un barrio consolidado de Valencia con la máxima certificación energética posible (A) y materiales de baja huella de carbono.',
    solution: 'Empleamos bloque cerámico rectificado con alto aislamiento térmico y ventanas con gas argón. La climatización se resuelve con bombas de calor centralizadas de muy alta eficiencia.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=bottom,left&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=top,right&q=80',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center&q=80'
    ],
    tags: ['Obra nueva', 'Sostenibilidad', 'Patraix'],
  },
  {
    id: 2,
    title: 'Ático Dúplex de Diseño',
    slug: 'reforma-atico-duplex-ruzafa',
    type: 'Reforma Integral',
    location: 'Ruzafa, Valencia',
    area: '120 m²',
    year: '2024',
    description:
      'Transformación de un ático en el céntrico barrio de Ruzafa. Se creó un gran espacio abierto (cocina-salón) que conecta directamente con la terraza orientada al este.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=bottom,left&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=top,right&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop&crop=center&q=80'
    ],
    tags: ['Reforma integral', 'Ático', 'Ruzafa'],
  },
  {
    id: 4,
    title: 'Plataforma Logística 2.400 m²',
    slug: 'nave-logistica-ribarroja',
    type: 'Naves Industriales',
    location: 'Riba-roja de Túria',
    area: '2.400 m²',
    year: '2024',
    description:
      'Centro de distribución logística con estructura prefabricada, oficinas integradas y 4 muelles para carga simultánea de vehículos pesados.',
    challenge: 'El cliente necesitaba trasladar sus operaciones en menos de 6 meses a un nuevo centro, requiriendo una construcción extremadamente rápida pero muy robusta.',
    solution: 'Toda la estructura y los cerramientos se fabricaron en taller de forma industrializada, lo que nos permitió levantar el esqueleto del edificio en menos de 3 semanas in situ.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=bottom,left&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=top,right&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=600&fit=crop&crop=center&q=80'
    ],
    tags: ['Nave industrial', 'Logística', 'Riba-roja'],
  },
  {
    id: 5,
    title: 'Restaurante Mediterráneo',
    slug: 'reforma-restaurante-el-carmen',
    type: 'Locales Comerciales',
    location: 'El Carmen, Valencia',
    area: '200 m²',
    year: '2024',
    description:
      'Rehabilitación de un local histórico en El Carmen para convertirlo en un restaurante de alto nivel. Conservación de muros de ladrillo caravista e instalación de cocina industrial.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=bottom,left&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=top,right&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop&crop=center&q=80'
    ],
    tags: ['Local comercial', 'Hostelería', 'El Carmen'],
  },
  {
    id: 7,
    title: 'Renovación Piso Familiar',
    slug: 'reforma-integral-piso-campanar',
    type: 'Reforma Integral',
    location: "Campanar, Valencia",
    area: '90 m²',
    year: '2024',
    description:
      'Actualización completa de vivienda antigua. Derribo de pasillos para ampliar el salón, colocación de pavimentos porcelánicos imitación madera e iluminación LED indirecta.',
    image: 'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop&crop=bottom,left&q=80',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop&crop=top,right&q=80',
      'https://images.unsplash.com/photo-1560185007-c5ca9d2c014d?w=800&h=600&fit=crop&crop=center&q=80'
    ],
    tags: ['Reforma integral', 'Piso', 'Campanar'],
  },
  {
    id: 9,
    title: 'Sede Tecnológica 600 m²',
    slug: 'oficinas-corporativas-av-cortes',
    type: 'Locales Comerciales',
    location: 'Av. Cortes Valencianas',
    area: '600 m²',
    year: '2024',
    description:
      'Habilitación de oficinas de diseño para empresa IT. Espacios diáfanos colaborativos, zonas de descanso, cabinas insonorizadas para llamadas y red estructurada.',
    image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop&crop=bottom,left&q=80',
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop&crop=top,right&q=80',
      'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=800&h=600&fit=crop&crop=center&q=80'
    ],
    tags: ['Oficinas', 'Local comercial', 'Negocios'],
  },
  {
    id: 1,
    title: 'Promoción 12 Viviendas',
    slug: 'edificio-residencial-extramurs',
    type: 'Obra Nueva',
    location: 'Extramurs, Valencia',
    area: '2.400 m²',
    year: '2023',
    description:
      'Construcción de un edificio residencial moderno con pisos de 3 habitaciones, áticos con terrazas descubiertas y aparcamiento subterráneo con puntos de carga eléctrica.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=bottom,left&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=top,right&q=80',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&crop=center&q=80'
    ],
    tags: ['Obra nueva', 'Residencial', 'Extramurs'],
  },
  {
    id: 3,
    title: 'Restauración Fachada Clásica',
    slug: 'rehabilitacion-fachada-eixample-vlc',
    type: 'Rehabilitación',
    location: 'L\'Eixample, Valencia',
    area: '850 m² fachada',
    year: '2023',
    description:
      'Trabajos de recuperación de molduras y elementos decorativos en fachada protegida. Impermeabilización de balconadas e instalación de nuevas barandillas.',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&crop=bottom,left&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&crop=top,right&q=80',
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop&crop=center&q=80'
    ],
    tags: ['Rehabilitación', 'Fachada', 'Eixample'],
  },
  {
    id: 8,
    title: 'Mejora Eficiencia Edificio',
    slug: 'rehabilitacion-finca-benimaclet',
    type: 'Rehabilitación',
    location: "Benimaclet, Valencia",
    area: '12 viviendas',
    year: '2023',
    description:
      'Intervención profunda en bloque de viviendas: colocación de aislamiento SATE, sustitución de cubiertas de fibrocemento y renovación de bajantes comunitarias.',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&crop=bottom,left&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&crop=top,right&q=80',
      'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&crop=center&q=80'
    ],
    tags: ['Rehabilitación', 'Edificio', 'Benimaclet'],
  },
  {
    id: 10,
    title: 'Planta de Producción',
    slug: 'nave-industrial-paterna',
    type: 'Naves Industriales',
    location: "Fuente del Jarro, Paterna",
    area: '1.800 m²',
    year: '2023',
    description:
      'Ejecución de nave industrial para empresa del sector automoción. Suelos técnicos epoxi, estructura ignifugada y oficinas de control de producción integradas.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=bottom,left&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=top,right&q=80',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center&q=80'
    ],
    tags: ['Nave industrial', 'Producción', 'Paterna'],
  },
  {
    id: 6,
    title: 'Chalet de Obra Nueva',
    slug: 'chalet-unifamiliar-leliana',
    type: 'Obra Nueva',
    location: 'L\'Eliana, Valencia',
    area: '320 m²',
    year: '2022',
    description:
      'Construcción de vivienda unifamiliar moderna de hormigón visto y grandes ventanales. Cuenta con sistema de aprovechamiento de aguas pluviales y piscina desbordante.',
    image: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop&crop=bottom,left&q=80',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop&crop=top,right&q=80',
      'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&h=600&fit=crop&crop=center&q=80'
    ],
    tags: ['Obra nueva', 'Chalet', 'L\'Eliana'],
  },
]

export const PROJECT_TYPES = [
  'Todos',
  'Obra Nueva',
  'Reforma Integral',
  'Rehabilitación',
  'Locales Comerciales',
  'Naves Industriales',
]
