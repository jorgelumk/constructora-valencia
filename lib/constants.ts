export const SITE = {
  name: 'Constructora en Valencia',
  url: 'https://constructoravalencia.com',
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
  seoContent?: string
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
      {
        q: '¿Cuánto se tarda de media en construir una casa unifamiliar en Valencia?',
        a: 'Desde que se obtiene la licencia de obras, el plazo de ejecución material suele oscilar entre los 10 y 14 meses, dependiendo de los metros cuadrados, la complejidad del diseño y el sistema constructivo elegido (la construcción industrializada puede reducir este plazo a 6-8 meses).'
      },
      {
        q: '¿Quién se encarga de solicitar las acometidas de luz y agua?',
        a: 'Como parte de nuestro servicio integral, nuestro equipo técnico te asesora y acompaña en la solicitud de todas las acometidas provisionales de obra y las altas definitivas con las compañías suministradoras operativas en la Comunitat Valenciana.'
      },
      {
        q: '¿Es posible hacer cambios en el diseño una vez iniciada la obra?',
        a: 'Sí, aunque siempre recomendamos cerrar el diseño en fase de proyecto para evitar sobrecostes y retrasos. Cualquier modificación durante la obra se presupuesta previamente, se aprueba por la propiedad y se documenta para mantener el control total del presupuesto.'
      }],
    seoContent: `
<h2>Construcción de Obra Nueva en Valencia: Calidad, Diseño y Garantía</h2>
<p>La decisión de embarcarse en un proyecto de <strong>obra nueva en Valencia</strong> es uno de los pasos más importantes para cualquier familia o inversor. En Constructora Valencia entendemos que construir desde cero no es solo levantar paredes, sino materializar un proyecto de vida o de negocio. Como empresa referente en el sector de la construcción en la Comunitat Valenciana, ofrecemos un servicio integral que abarca desde los primeros estudios de viabilidad del terreno hasta la entrega de llaves.</p>

<p>Valencia y su área metropolitana han experimentado un crecimiento notable en la demanda de viviendas de obra nueva, impulsado por el deseo de hogares más eficientes, modernos y adaptados a las nuevas formas de vivir. Ya sea en la capital, en zonas residenciales como Rocafort, L'Eliana o Godella, nuestra constructora aporta la solvencia técnica y la experiencia necesarias para ejecutar proyectos de cualquier envergadura con acabados de máxima calidad.</p>

<h3>¿Por qué elegirnos para tu proyecto de obra nueva?</h3>
<p>El éxito de una construcción desde cero reside en la planificación meticulosa y en la ejecución precisa. Nuestra metodología de trabajo se basa en la transparencia, el rigor técnico y el acompañamiento constante al cliente. Al elegirnos como tu <strong>empresa constructora en Valencia</strong>, te garantizas:</p>
<ul>
    <li><strong>Asesoramiento técnico integral:</strong> Te acompañamos desde la compra de la parcela, comprobando normativas urbanísticas y edificabilidad.</li>
    <li><strong>Control de costes estricto:</strong> Elaboramos presupuestos cerrados y detallados, evitando desviaciones económicas durante la obra.</li>
    <li><strong>Cumplimiento de plazos:</strong> Planificamos cada fase del proyecto mediante diagramas de Gantt, garantizando la fecha de entrega por contrato.</li>
    <li><strong>Eficiencia energética:</strong> Construimos bajo estándares de alta eficiencia, incorporando aislamientos térmicos avanzados, aerotermia y placas solares para conseguir clasificaciones energéticas A.</li>
</ul>

<h2>Fases de la Construcción de Obra Nueva</h2>
<p>Construir una vivienda unifamiliar o un edificio residencial requiere seguir un proceso técnico y legal muy estricto. Nuestro equipo multidisciplinar, compuesto por arquitectos, aparejadores, ingenieros y jefes de obra, se encarga de coordinar todas las fases para que tú solo te preocupes de elegir los acabados.</p>

<h3>1. Estudio Previo y Proyecto Arquitectónico</h3>
<p>Todo comienza con el análisis del solar. Evaluamos la topografía, la orientación y la normativa urbanística del ayuntamiento correspondiente en Valencia. A partir de ahí, trabajamos en estrecha colaboración con el estudio de arquitectura (el tuyo o el de nuestros partners) para definir el proyecto básico y de ejecución. En esta fase se define la distribución, el estilo arquitectónico (moderno, mediterráneo, minimalista) y se solicitan las licencias municipales.</p>

<h3>2. Movimiento de Tierras y Cimentación</h3>
<p>Una vez obtenida la licencia de obras, procedemos al vallado del terreno y comenzamos con el movimiento de tierras. La cimentación es la base de toda la estructura y se calcula específicamente según el estudio geotécnico del terreno. En Valencia, debido a la variedad de suelos (desde roca en zonas altas hasta terrenos más arenosos cerca de la costa), aplicamos soluciones de cimentación a medida, ya sean zapatas aisladas, losas de cimentación o pilotaje.</p>

<h3>3. Estructura y Cerramientos</h3>
<p>Levantamos el esqueleto del edificio. Trabajamos tanto con estructuras tradicionales de hormigón armado, estructuras metálicas o sistemas innovadores de construcción industrializada y madera técnica (entramado ligero o CLT). A continuación, ejecutamos los cerramientos exteriores, donde prestamos especial atención al aislamiento térmico y acústico (SATE, fachadas ventiladas o cámara de aire con lana de roca), fundamental para el confort interior y el ahorro energético en el clima mediterráneo.</p>

<h3>4. Instalaciones y Particiones Interiores</h3>
<p>El "sistema nervioso" de la vivienda. Instalamos fontanería, electricidad, domótica, telecomunicaciones y los sistemas de climatización. En la obra nueva actual en Valencia, la aerotermia combinada con suelo radiante-refrescante y conductos es la solución más demandada. Al mismo tiempo, realizamos las particiones interiores, ya sea con tabiquería tradicional de ladrillo o mediante sistemas de placa de yeso laminado (Pladur) con aislamiento acústico interno.</p>

<h3>5. Revestimientos, Acabados y Entrega</h3>
<p>Es la fase donde el proyecto cobra vida estética. Colocamos pavimentos (porcelánicos gran formato, tarimas, microcemento), alicatados, carpintería interior (puertas, armarios a medida) y carpintería exterior de altas prestaciones (aluminio con rotura de puente térmico o PVC). Finalizamos con pintura, limpieza de obra y pruebas de funcionamiento de todas las instalaciones antes de la entrega de llaves y el certificado final de obra.</p>

<h2>Calidad y Garantías en la Construcción</h2>
<p>Como constructora de confianza en Valencia, operamos bajo el estricto cumplimiento de la Ley de Ordenación de la Edificación (LOE). Entregamos el Libro del Edificio y ofrecemos las máximas garantías legales:</p>
<ul>
    <li><strong>Garantía de 1 año:</strong> Para defectos de acabado o terminación.</li>
    <li><strong>Garantía de 3 años:</strong> Para vicios o defectos que afecten a la habitabilidad (instalaciones, humedades).</li>
    <li><strong>Garantía de 10 años (Seguro Decenal):</strong> Para defectos que afecten a la seguridad estructural del edificio (cimentación, vigas, forjados).</li>
</ul>

<p>Si tienes el terreno y estás buscando una constructora solvente para hacer realidad tu casa soñada, o si eres un inversor desarrollando una promoción inmobiliaria, contacta con nosotros. Haremos un estudio preliminar sin compromiso y te mostraremos proyectos similares que hemos ejecutado con éxito en Valencia.</p>
`
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
      {
        q: '¿Es más caro construir una Casa Pasiva que una normal?',
        a: 'La inversión inicial en una casa pasiva suele ser entre un 10% y un 15% superior debido al extra de aislamiento, las ventanas de alta gama y el sistema de ventilación. Sin embargo, este sobrecoste se amortiza en los primeros 7-10 años gracias a la drástica reducción de las facturas de luz y gas.'
      },
      {
        q: '¿Se pueden abrir las ventanas en una casa Passivhaus?',
        a: '¡Por supuesto! Es un falso mito creer que son casas herméticas donde no se puede abrir la ventana. Puedes abrirlas cuando quieras, aunque gracias al sistema de ventilación mecánica, el aire interior siempre estará fresco, filtrado y a la temperatura ideal, por lo que no sentirás la necesidad de ventilar abriendo ventanas.'
      },
      {
        q: '¿Cualquier diseño arquitectónico puede ser una casa pasiva?',
        a: 'Casi cualquier diseño puede adaptarse, pero es mucho más económico y eficiente si la arquitectura se piensa con criterios pasivos desde el primer boceto (formas compactas, ventanas grandes al sur y pequeñas al norte, protección solar). Modificar un diseño ya terminado para que cumpla el estándar pasivo suele ser más complejo.'
      }],
    seoContent: `
<h2>Construcción de Casas Pasivas en Valencia (Passivhaus)</h2>
<p>El estándar <strong>Passivhaus</strong> o casa pasiva representa el nivel más exigente de eficiencia energética a nivel mundial. En Constructora Valencia somos pioneros en la aplicación de estos criterios de construcción sostenible en la Comunitat Valenciana, donde el clima mediterráneo exige un diseño térmico muy específico: no solo debemos protegernos del frío en invierno, sino especialmente del sobrecalentamiento en verano.</p>
<p>Construir una casa pasiva significa reducir hasta en un 90% la demanda de energía para climatización en comparación con una vivienda tradicional. Esto se traduce en facturas de luz mínimas, un confort acústico y térmico absoluto y una calidad del aire interior inmejorable, ideal para personas con alergias o problemas respiratorios.</p>

<h3>Los 5 Principios del Estándar Passivhaus</h3>
<p>Nuestros proyectos certificados y construidos bajo estándar pasivo se asientan sobre cinco pilares técnicos fundamentales:</p>
<ul>
    <li><strong>Súper aislamiento térmico:</strong> Duplicamos o triplicamos el espesor del aislamiento en cerramientos, cubiertas y soleras, envolviendo la vivienda como si fuera un termo y evitando la pérdida o ganancia de calor.</li>
    <li><strong>Ausencia de puentes térmicos:</strong> Eliminamos las zonas donde habitualmente se transmite el calor (uniones de forjados, pilares expuestos) mediante detalles constructivos hiper-cuidados desde la fase de proyecto.</li>
    <li><strong>Ventanas de altas prestaciones:</strong> Utilizamos carpinterías de PVC o madera-aluminio de triple vidrio con gas argón en las cámaras, asegurando que las ventanas dejen de ser el "punto débil" de la fachada.</li>
    <li><strong>Hermeticidad al aire:</strong> Sellamos la envolvente interior con láminas impermeables y cintas expansivas. El edificio debe superar el riguroso test "Blower Door", garantizando que no hay corrientes de aire indeseadas ni pérdidas energéticas.</li>
    <li><strong>Ventilación Mecánica con Recuperación de Calor (VMC):</strong> El "pulmón" de la casa pasiva. Un sistema extrae el aire viciado (baños, cocinas) y cruza su temperatura con el aire fresco y filtrado que entra del exterior, renovando el ambiente 24h sin abrir ventanas ni perder energía.</li>
</ul>

<h2>¿Por qué construir una Casa Pasiva en Valencia?</h2>
<p>Aunque originalmente el estándar nació en Alemania para climas fríos, su adaptación al clima cálido de Valencia (Passivhaus Classic / Plus) requiere estrategias adicionales de sombreamiento (lamas orientables, voladizos) para evitar el sol directo en verano, y aprovechar la ventilación cruzada nocturna. En Constructora Valencia dominamos estas estrategias de diseño bioclimático.</p>

<h2>Certificación Passivhaus Oficial</h2>
<p>Una auténtica Casa Pasiva no lo es solo de palabra. Si el cliente lo solicita, tramitamos la certificación oficial a través de certificadores homologados por el <em>Passivhaus Institut</em>. Esto garantiza, mediante auditorías externas durante el proyecto y la obra, que la vivienda cumple estrictamente todos los valores exigidos. Es un sello de calidad que revaloriza exponencialmente la propiedad.</p>
`
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
      {
        q: '¿Gestionáis también la construcción de la piscina y los muros de la parcela?',
        a: 'Sí, realizamos el proyecto completo. Incluimos en la ejecución material el movimiento de tierras, cimentación, construcción del vaso de la piscina, instalaciones de depuración, vallado perimetral de la parcela, puertas motorizadas y paisajismo básico.'
      },
      {
        q: '¿Qué sistema de climatización es mejor para un chalet en Valencia?',
        a: 'La combinación ganadora actual en la Comunitat Valenciana es la Aerotermia combinada con suelo radiante-refrescante (apoyado por fancoils por conductos para los picos de calor en agosto) y un sistema de paneles solares fotovoltaicos para reducir el consumo eléctrico a casi cero.'
      },
      {
        q: '¿Puedo aportar yo los materiales de acabado (suelos, grifos) y vosotros solo la mano de obra?',
        a: 'Por norma general recomendamos que la constructora adquiera y suministre los materiales de acabado para poder ofrecer una garantía integral sobre el producto y la instalación. Si suministras tú el material, nuestra garantía solo puede cubrir la mano de obra, y cualquier retraso en tu suministro afectará al plazo de la obra.'
      }],
    seoContent: `
<h2>Construcción de Viviendas Unifamiliares en Valencia</h2>
<p>La <strong>construcción de un chalet o vivienda unifamiliar</strong> a medida es el proyecto de vida más personal que puede emprender una familia. En Constructora Valencia nos especializamos en la construcción de villas y chalets de diseño independiente en las principales urbanizaciones y zonas residenciales de Valencia (Campolivar, Santa Bárbara, Los Monasterios, El Vedat, La Cañada, etc.).</p>
<p>Nuestra misión es hacer que el complejo proceso de autopromoción sea transparente, seguro y emocionante para el propietario, asumiendo la responsabilidad total de la ejecución material y coordinando a todos los gremios bajo un único interlocutor.</p>

<h3>Un Servicio Integral para la Construcción de tu Chalet</h3>
<p>Construir una vivienda unifamiliar no empieza al hacer la excavación, sino mucho antes. Nuestro equipo técnico (arquitectos y jefes de obra) te acompaña durante todo el ciclo de vida del proyecto:</p>
<ul>
    <li><strong>Evaluación de la parcela:</strong> Analizamos la edificabilidad, retranqueos, orientación solar y topografía del terreno antes de que inicies el diseño.</li>
    <li><strong>Diseño arquitectónico a medida:</strong> Colaboramos con estudios de arquitectura de primer nivel, o ejecutamos fielmente el proyecto de tu propio arquitecto, aportando nuestra experiencia en optimización de costes constructivos.</li>
    <li><strong>Gestión documental:</strong> Tramitación de licencias municipales, altas de suministros provisionales (agua y luz de obra) y gestión de residuos.</li>
    <li><strong>Construcción integral:</strong> Desde la cimentación perimetral hasta el paisajismo exterior, piscinas y cierres de parcela.</li>
</ul>

<h2>Sistemas Constructivos para Viviendas Unifamiliares</h2>
<p>El mercado ha evolucionado y hoy ofrecemos múltiples alternativas estructurales para adaptarnos al presupuesto, plazo y requerimientos térmicos de cada cliente:</p>
<ul>
    <li><strong>Construcción Tradicional (Hormigón y Ladrillo):</strong> La opción más arraigada en Valencia. Destaca por su inercia térmica, solidez y flexibilidad de diseño. Utilizamos forjados reticulares o unidireccionales según las luces del proyecto.</li>
    <li><strong>Estructura Metálica:</strong> Ideal para viviendas de estilo moderno e industrial que requieren grandes espacios diáfanos sin pilares, voladizos pronunciados y muros de cristal de piso a techo.</li>
    <li><strong>Construcción Industrializada (Steel Frame o CLT):</strong> Estructuras de acero ligero o madera contralaminada fabricadas en taller y ensambladas en la parcela. Reducen los plazos de obra hasta en un 50% y ofrecen acabados milimétricos.</li>
</ul>

<h2>Paisajismo y Exteriores</h2>
<p>En una vivienda unifamiliar mediterránea, el exterior es tan importante como el interior. Integramos la construcción principal con el entorno, desarrollando el diseño de terrazas, porches pergolados, zonas de barbacoa (paelleros) y el vaso de la piscina, creando una transición fluida entre el salón y el jardín.</p>
`
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
      {
        q: '¿Trabajáis con marcas internacionales específicas?',
        a: 'Sí, instalamos firmas de primera línea a petición de nuestros clientes y sus interioristas, tales como cocinas Boffi, Bulthaup o Gaggenau, iluminación Flos o Vibia, sanitarios Antonio Lupi, domótica Jung o Gira, entre otras.'
      },
      {
        q: '¿Ofrecéis servicio de mantenimiento post-obra?',
        a: 'Para nuestros proyectos de Alta Calidad y Lujo ofrecemos contratos de mantenimiento integral preventivo tras la entrega de la vivienda. Esto incluye la revisión semestral de climatización, limpieza de placas solares, revisión de domótica, piscinas y puesta a punto general.'
      },
      {
        q: '¿Podéis ejecutar obras mientras nosotros vivimos en la vivienda?',
        a: 'En rehabilitaciones de lujo de grandes villas o áticos, siempre recomendamos la mudanza temporal por seguridad y para no afectar los tiempos de ejecución. Sin embargo, en grandes fincas donde sea posible sectorizar y aislar completamente el área de obra del área de vida, podemos estudiar la logística para hacerlo viable.'
      }],
    seoContent: `
<h2>Construcción de Lujo y Alta Calidad en Valencia</h2>
<p>El sector de la <strong>construcción de lujo en Valencia</strong> requiere una sensibilidad arquitectónica especial, una ejecución milimétrica y un profundo conocimiento de los materiales más nobles y la tecnología más avanzada. Constructora Valencia es el <em>partner</em> de confianza para clientes internacionales, inversores y familias que exigen estándares de calidad muy por encima de la media del mercado.</p>
<p>Operamos en los enclaves más exclusivos (Ensanche, Alameda, Ciudad de las Artes, así como en urbanizaciones premium como Los Monasterios o Santa Bárbara), ejecutando villas de alto standing, áticos exclusivos y rehabilitaciones de viviendas palaciegas.</p>

<h3>¿Qué define nuestra construcción de Alta Gama?</h3>
<p>El "lujo" en la construcción actual no se mide solo en el precio de los materiales, sino en la personalización, la exclusividad del diseño, la privacidad y, sobre todo, la ejecución sin fallos. Nuestros proyectos de alto standing se caracterizan por:</p>

<h4>1. Materiales Nobles y Artesanía</h4>
<p>Seleccionamos personalmente junto al cliente (o su interiorista) mármoles de importación, maderas macizas nobles (roble, nogal), y piedras naturales. Trabajamos con artesanos locales para ejecutar carpinterías a medida, panelados de madera integrados que ocultan puertas y armarios, y trabajos de escayola personalizados.</p>

<h4>2. Tecnología y Domótica Integrada (Smart Home)</h4>
<p>Una vivienda de lujo es una vivienda inteligente. Integramos sistemas domóticos completos (KNX, Loxone) que permiten controlar la iluminación escénica, climatización (suelo radiante y fancoils ocultos), persianas, estores, sonido multi-room e integración total con sistemas de seguridad avanzados (CCTV perimetral y alarmas de grado 3).</p>

<h4>3. Máxima Privacidad y Discreción</h4>
<p>Garantizamos la absoluta confidencialidad en todos los proyectos residenciales de lujo, firmando acuerdos de confidencialidad (NDA) si el cliente lo requiere. Nuestro personal de obra mantiene un comportamiento profesional y discreto, gestionando el acopio de materiales de alta gama bajo estrictas medidas de seguridad.</p>

<h2>Servicio Concierge de Construcción</h2>
<p>Entendemos que el cliente de alto standing suele tener una agenda apretada y, a menudo, reside fuera de Valencia durante la ejecución de la obra. Por ello, ofrecemos un servicio de "llave en mano premium":</p>
<ul>
    <li><strong>Project Manager dedicado:</strong> Un ingeniero o arquitecto exclusivo para tu obra, disponible 24/7.</li>
    <li><strong>Reporte virtual periódico:</strong> Reuniones semanales por videoconferencia con dossiers fotográficos, vídeos en 4K y drones (en el caso de villas) para que veas el avance en tiempo real desde cualquier país.</li>
    <li><strong>Gestión de importaciones:</strong> Si el proyecto requiere mobiliario, griferías o luminarias internacionales exclusivas, nuestro equipo se encarga de las importaciones, despachos de aduanas y almacenamiento climatizado hasta su instalación.</li>
</ul>
<p>La construcción de lujo no admite excusas ni retrasos. Garantizamos unos acabados perfectos y una transición suave hacia tu nueva vivienda de alto nivel en Valencia.</p>
`
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
    image: '/images/stock/1576013551627-0cc20b96c2a7.jpg',
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
      {
        q: '¿Cuánto se tarda en construir una piscina de obra?',
        a: 'El proceso habitual, desde que entra la excavadora hasta que puedes darte el primer baño, suele durar entre 3 y 5 semanas, dependiendo de si surgen complicaciones en la excavación (aparición de roca o agua freática) y del tamaño de la piscina.'
      },
      {
        q: '¿Necesito licencia del Ayuntamiento para hacer una piscina en mi chalet?',
        a: 'Sí, la construcción de una piscina requiere presentar un Proyecto Técnico redactado por un arquitecto o ingeniero y solicitar la correspondiente Licencia de Obras en el Ayuntamiento de tu localidad. Nosotros nos encargamos de todo el trámite legal.'
      },
      {
        q: '¿Qué profundidad es la ideal para una piscina privada?',
        a: 'Actualmente, la tendencia es hacer piscinas más bien planas (fondo continuo de 1,20 a 1,40 metros). Esto permite hacer pie en toda la piscina, facilitando el juego, reduciendo drásticamente el consumo de agua, los productos químicos y el coste de calentarla.'
      }],
    seoContent: `
<h2>Construcción de Piscinas en Valencia: Diseño y Confort en tu Jardín</h2>
<p>Disfrutar del clima mediterráneo en Valencia no está completo sin una piscina que se adapte perfectamente al diseño de tu terraza o jardín. En Constructora Valencia no instalamos piscinas prefabricadas estándar; somos especialistas en la <strong>construcción de piscinas de obra a medida</strong> (hormigón gunitado). Creamos espacios de agua totalmente personalizados, desde piscinas tipo <em>infinity</em> (desbordantes) hasta pequeñas piscinas urbanas en áticos o patios interiores (<em>plunge pools</em>).</p>
<p>Nuestra experiencia en paisajismo y construcción nos permite integrar el vaso de la piscina de forma armónica con la vivienda, asegurando no solo un resultado estético de revista, sino también una ejecución técnica libre de filtraciones y con un mantenimiento simplificado gracias a las últimas tecnologías en depuración.</p>

<h3>Tipos de Piscinas de Obra que Construimos</h3>
<ul>
    <li><strong>Piscinas Desbordantes (Infinity Pools):</strong> El agua rebosa por uno o varios bordes creando un efecto visual continuo que se funde con el horizonte. Son ideales para parcelas con desnivel o vistas panorámicas al mar o a la montaña. Requieren un vaso de compensación y una precisión milimétrica en el nivelado.</li>
    <li><strong>Piscinas tipo Munich (Desborde Perimetral):</strong> El agua desborda por todo el perímetro hacia una rejilla. Es el sistema más higiénico y elegante, muy demandado en chalets de lujo y hoteles boutique en Valencia.</li>
    <li><strong>Piscinas con Skimmers:</strong> El sistema tradicional y más económico. El agua se sitúa unos 15 cm por debajo del borde de la coronación. Maximizamos su atractivo utilizando revestimientos modernos y coronaciones enrasadas.</li>
    <li><strong>Mini Piscinas para áticos y patios:</strong> Si el espacio es reducido, diseñamos piscinas compactas equipadas con sistemas de nado a contracorriente, cañones de hidromasaje y climatización, transformando un pequeño rincón en un spa privado.</li>
</ul>

<h2>El Proceso de Construcción (Hormigón Gunitado)</h2>
<p>A diferencia de las piscinas de poliéster o de bloques, nosotros utilizamos el sistema de <strong>hormigón proyectado o gunitado</strong>. Este método consiste en proyectar hormigón a alta presión sobre una armadura de acero, creando un vaso monolítico (de una sola pieza) continuo y sin juntas. Es el único sistema que garantiza una estanqueidad total a largo plazo y permite total libertad en la forma (curvas, playas sumergidas, escaleras a medida).</p>

<h3>Tecnología y Tratamiento del Agua</h3>
<p>Una piscina moderna debe requerir el menor mantenimiento posible. Recomendamos e instalamos sistemas que mejoran la calidad del baño y cuidan la piel:</p>
<ul>
    <li><strong>Cloración salina:</strong> Evita el uso de cloro químico directo, no irrita los ojos y el agua tiene un tacto mucho más suave.</li>
    <li><strong>Regulación automática de pH:</strong> Un ordenador analiza y dosifica el pH del agua de forma autónoma.</li>
    <li><strong>Climatización (Bomba de calor):</strong> Permite alargar la temporada de baño en Valencia desde abril hasta noviembre manteniendo el agua a 28ºC con un consumo eléctrico mínimo (ideal si se combina con placas solares).</li>
</ul>
<p>Desde la excavación y la ejecución del vaso, hasta el alicatado con mosaico vítreo (gresite) o revestimientos porcelánicos continuos, nos encargamos de todo el proceso para que este verano solo te preocupes de disfrutar.</p>
`
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
      {
        q: '¿Qué significa comprar sobre plano?',
        a: 'Significa reservar la vivienda antes de que esté construida, basándose en los planos, infografías y memoria de calidades del proyecto. La ventaja es conseguir un precio inferior y poder elegir la vivienda con mejor orientación de la promoción, además de permitir la personalización de acabados.'
      },
      {
        q: '¿Cómo pago una vivienda de vuestra promoción?',
        a: 'Normalmente se hace una reserva inicial (señal). Al firmar el contrato de compraventa se abona un 10%, durante la construcción se abona otro 10% dividido en mensualidades, y el 80% restante se paga a la firma de las escrituras ante notario (momento en el que puedes subrogarte a nuestra hipoteca promotor o pedir una propia).'
      },
      {
        q: '¿Están seguros mis ahorros si compro antes de que terminéis la obra?',
        a: 'Totalmente seguros. Por ley, todas las aportaciones económicas que haces durante la construcción se depositan en una cuenta bancaria especial y están blindadas por un aval bancario. Si por fuerza mayor la promoción no se entregara, el banco te devolvería el 100% de tu dinero más los intereses legales.'
      }],
    seoContent: `
<h2>Promotora Propia en Valencia: Viviendas Pensadas para Ti</h2>
<p>Además de ofrecer servicios de construcción a terceros, Constructora Valencia opera como <strong>Promotora Inmobiliaria</strong> en proyectos seleccionados en la ciudad de Valencia y su área metropolitana. Promover y construir bajo el mismo techo nos da una ventaja competitiva única: eliminamos intermediarios, controlamos la calidad desde el primer boceto y podemos ofrecer precios finales mucho más competitivos.</p>
<p>Nuestra visión como promotores huye de las macro-promociones masivas. Nos centramos en proyectos "boutique" o residenciales de tamaño medio, ubicados en solares urbanos estratégicos, donde prime la calidad arquitectónica, la sostenibilidad y la integración con el barrio.</p>

<h3>Ventajas de comprar directamente a la Promotora-Constructora</h3>
<p>Cuando adquieres una vivienda de obra nueva de nuestras promociones, estás tratando directamente con los responsables de poner cada ladrillo. Esto se traduce en beneficios directos para el comprador:</p>
<ul>
    <li><strong>Menor precio final:</strong> Al no haber una inmobiliaria externa ni un promotor subcontratando a una constructora, los márgenes se reducen.</li>
    <li><strong>Flexibilidad y personalización:</strong> Si reservas tu vivienda sobre plano o en las primeras fases de construcción, te ofrecemos la posibilidad de personalizar distribuciones (unir habitaciones, cambiar la cocina) y elegir entre un amplio catálogo de acabados (suelos, alicatados, colores) sin los sobrecostes abusivos que suelen aplicar otros promotores.</li>
    <li><strong>Trato técnico directo:</strong> Cualquier duda sobre la memoria de calidades, instalaciones o plazos te la resuelve nuestro equipo técnico, no un comercial que desconoce la obra.</li>
</ul>

<h2>Nuestros Criterios como Promotores</h2>
<p>Todas nuestras promociones propias en Valencia (tanto edificios plurifamiliares como conjuntos de adosados) se rigen por tres principios inquebrantables:</p>
<h4>1. Sostenibilidad y Calificación Energética A</h4>
<p>Diseñamos los edificios con criterios bioclimáticos. Todas nuestras nuevas promociones incluyen aislamiento SATE o fachada ventilada, carpinterías con rotura de puente térmico, sistemas de aerotermia centralizada o individual y preinstalación de cargadores para vehículos eléctricos en los garajes. El objetivo es que la factura energética de los vecinos sea mínima.</p>

<h4>2. Distribuciones Lógicas y Espacios Abiertos</h4>
<p>Los pisos con largos pasillos ciegos son cosas del pasado. Proyectamos zonas de día (salón-comedor-cocina) amplias y conectadas, maximizando la luz natural. Y, en la medida en que la normativa urbanística y la parcela lo permiten, dotamos a todas las viviendas de terrazas o balcones habitables.</p>

<h4>3. Garantía y Solvencia Financiera</h4>
<p>Cumplimos escrupulosamente con la Ley de Ordenación de la Edificación. Todas las cantidades entregadas a cuenta por nuestros compradores están garantizadas mediante aval bancario o seguro de caución hasta la entrega de llaves. Además, al ser nosotros los constructores, el Seguro Decenal estructural y la respuesta ante posibles repasos post-venta es directa y ágil.</p>
`
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
      {
        q: '¿Tengo que abandonar mi casa durante una reforma integral?',
        a: 'Para reformas integrales completas que implican demoliciones, cambio de suelos, fontanería e instalaciones eléctricas, es totalmente imprescindible desalojar la vivienda por motivos de seguridad, salubridad (polvo, ruido) y tiempos de ejecución. Volverás cuando esté completamente limpia y terminada.'
      },
      {
        q: '¿Gestionáis los permisos con la comunidad de vecinos?',
        a: 'Nos encargamos de solicitar los permisos oficiales al Ayuntamiento, pero la comunicación con el presidente de la comunidad o administrador de fincas corre a cargo del propietario. No obstante, nosotros nos coordinamos con ellos para la protección de elementos comunes (ascensor, zaguán) y el respeto de los horarios de descanso.'
      },
      {
        q: '¿Qué pasa si aparecen vicios ocultos (tuberías podridas, vigas en mal estado) al demoler?',
        a: 'En pisos antiguos es posible encontrar sorpresas al descubrir estructuras o instalaciones ocultas. Si esto ocurre, paralizamos esa zona, documentamos el problema fotográficamente, proponemos la mejor solución técnica y te presentamos un presupuesto de la partida extraordinaria antes de proceder.'
      }],
    seoContent: `
<h2>Reformas Integrales en Valencia: Transforma tu Hogar sin Estrés</h2>
<p>Afrontar una <strong>reforma integral en Valencia</strong> es la oportunidad perfecta para adaptar tu vivienda a tu estilo de vida actual, mejorar su eficiencia energética y revalorizar tu patrimonio. En Constructora Valencia somos especialistas en transformar pisos antiguos, áticos, dúplex y chalets en espacios modernos, funcionales y llenos de luz, aportando soluciones técnicas innovadoras y un diseño impecable.</p>

<p>Sabemos que la idea de reformar una casa entera puede generar incertidumbre. Por eso, nuestro valor añadido es el servicio "llave en mano". Nos encargamos absolutamente de todo: desde la tramitación de la licencia de obras en el Ayuntamiento de Valencia hasta la limpieza final antes de la mudanza, pasando por la gestión de compras y la coordinación milimétrica de todos los oficios implicados.</p>

<h3>¿Qué incluye nuestro servicio de reformas integrales?</h3>
<p>Una reforma completa va mucho más allá de cambiar suelos y pintar paredes. Consiste en repensar los espacios. Nuestros proyectos llave en mano incluyen:</p>
<ul>
    <li><strong>Redistribución de espacios:</strong> Demolición de tabiques para unir salón y cocina (open concept), creación de baños en suite, vestidores o despachos para teletrabajo.</li>
    <li><strong>Renovación total de instalaciones:</strong> Sustitución completa de las redes de fontanería, electricidad y gas adaptándolas a la normativa actual (REBT y RITE).</li>
    <li><strong>Mejora de la eficiencia energética:</strong> Trasdosados térmicos en fachadas, falsos techos con lana de roca, y sustitución de ventanas por modelos de PVC o aluminio con rotura de puente térmico (RPT) y cristales bajo emisivos.</li>
    <li><strong>Sistemas de climatización:</strong> Instalación de aire acondicionado por conductos (Airzone), calefacción por radiadores o sistemas avanzados de aerotermia.</li>
</ul>

<h2>El proceso de una reforma integral paso a paso</h2>
<p>La clave para que una reforma integral se ejecute en el plazo acordado y sin sorpresas económicas es la planificación. Así trabajamos en Constructora Valencia:</p>

<h3>1. Visita técnica y toma de datos</h3>
<p>Nuestro equipo técnico (arquitectos técnicos o interioristas) visita tu vivienda para conocer tus necesidades, tomar medidas precisas (levantamiento de planos) y evaluar el estado estructural, los bajantes y los muros de carga. Es el momento de escuchar tus ideas y aportar nuestra visión profesional.</p>

<h3>2. Diseño, infografías y presupuesto cerrado</h3>
<p>Elaboramos una propuesta de distribución. Si lo deseas, creamos infografías 3D para que visualices el resultado antes de poner el primer ladrillo. Junto con los planos, te presentamos un <strong>presupuesto detallado por partidas</strong> (demoliciones, albañilería, fontanería, revestimientos, etc.). Este presupuesto es cerrado: sin sorpresas de última hora.</p>

<h3>3. Selección de materiales</h3>
<p>Te acompañamos a los showrooms de nuestros proveedores de confianza en Valencia (o trabajamos con los que tú elijas) para seleccionar pavimentos, azulejos, griferías, sanitarios, mecanismos eléctricos y mobiliario de cocina. Coordinamos los pedidos y los plazos de entrega para que el material esté a pie de obra cuando se necesita.</p>

<h3>4. Gestión de licencias</h3>
<p>Nos ocupamos de todos los trámites burocráticos. Dependiendo de la envergadura de la reforma, gestionamos la Declaración Responsable o la Licencia de Obras correspondiente en el ayuntamiento, así como los permisos de ocupación de vía pública para los contenedores de escombros y el alta de suministros provisionales si fuera necesario.</p>

<h3>5. Ejecución de la obra y control de calidad</h3>
<p>Asignamos un Jefe de Obra a tu proyecto, que será tu único interlocutor. Esta figura se encarga de coordinar a los albañiles, fontaneros, electricistas, pintores y carpinteros. Realizamos visitas periódicas contigo para verificar el avance. Aplicamos estrictos controles de calidad en puntos críticos (impermeabilización de duchas, pruebas de presión en tuberías, nivelación de suelos).</p>

<h2>Tendencias actuales en reformas en Valencia</h2>
<p>En las reformas integrales que estamos ejecutando actualmente en barrios como Ruzafa, L'Eixample o El Pla del Real, priman los espacios diáfanos que maximizan la luz natural, suelos continuos (microcemento o porcelánicos imitación madera), cocinas con islas funcionales, baños tipo spa con duchas a ras de suelo y sistemas de domótica para el control de iluminación y persianas.</p>

<p>Si estás pensando en renovar tu vivienda en Valencia, no dejes tu inversión en manos de cualquiera. Confía en una empresa constructora con equipo propio, experiencia contrastada y garantía por escrito. Contáctanos y empecemos a dar forma a tu nuevo hogar.</p>
`
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
      {
        q: '¿Tengo que comprar yo los azulejos y sanitarios?',
        a: 'Puedes hacerlo si quieres, pero nuestro servicio es \'llave en mano\'. Te acompañamos a nuestras exposiciones asociadas, eliges lo que te guste y nosotros nos encargamos de la compra, el transporte hasta la obra y asumir la responsabilidad si llega algo roto o hay que hacer devoluciones.'
      },
      {
        q: '¿Hacéis reformas sin obra (aplicar pintura, microcemento, etc.)?',
        a: 'Sí, si las instalaciones de fontanería y electricidad están en buen estado, podemos aplicar revestimientos continuos como el microcemento sobre los azulejos antiguos y cambiar el mobiliario, consiguiendo un aspecto totalmente nuevo sin necesidad de desescombro.'
      },
      {
        q: '¿Puedo cambiar la cocina de sitio y llevarla al salón?',
        a: 'En la mayoría de los casos, sí. El principal condicionante para mover una cocina o un baño es la pendiente necesaria para el desagüe del fregadero o el inodoro hasta la bajante general del edificio. Nuestro fontanero técnico evaluará tu piso para confirmar la viabilidad antes de darte el presupuesto.'
      }],
    seoContent: `
<h2>Reformas de Baños y Cocinas en Valencia</h2>
<p>El baño y la cocina son, sin duda, los espacios más técnicos, utilizados e importantes de cualquier vivienda. Su renovación es la reforma más demandada, ya que actualizarlos no solo mejora drásticamente el confort diario, sino que revaloriza la propiedad de forma inmediata. En Constructora Valencia contamos con equipos especializados exclusivamente en <strong>reformas parciales de baños y cocinas en Valencia</strong>, garantizando ejecuciones rápidas, limpias y con acabados de alta gama.</p>
<p>A diferencia de los "chapuzas" informales, nosotros tratamos la reforma de una cocina o un baño con el mismo rigor técnico que una obra nueva: plano de instalaciones, protección de elementos comunes y una coordinación perfecta de albañiles, fontaneros, electricistas y carpinteros.</p>

<h3>Reforma de Cocinas: El corazón del hogar</h3>
<p>La cocina ha dejado de ser un espacio cerrado de trabajo para convertirse en el centro social de la casa. Las tendencias actuales apuestan por abrir la cocina al salón (Open Concept), integrar penínsulas o islas centrales y ocultar los electrodomésticos (panelados) para crear una estética limpia y continua.</p>
<ul>
    <li><strong>Mobiliario a medida:</strong> Trabajamos con fabricantes nacionales e internacionales para ofrecer cocinas modulares o hechas a medida por nuestros carpinteros, con herrajes de alta resistencia (Blum o Hettich).</li>
    <li><strong>Encimeras de última generación:</strong> Instalamos encimeras de cuarzo (Silestone), porcelánicos ultracompactos (Dekton, Neolith) o piedra natural (granito, mármol). Materiales resistentes al calor, al rayado y muy fáciles de limpiar.</li>
    <li><strong>Instalaciones eficientes:</strong> Renovamos toda la fontanería y creamos circuitos eléctricos independientes para hornos, placas de inducción y lavavajillas, cumpliendo con la normativa actual.</li>
</ul>

<h2>Reforma de Baños: Tu spa privado</h2>
<p>Renovar un baño anticuado por un espacio moderno, luminoso y funcional puede cambiar la forma en la que empiezas tu día. En nuestras reformas de cuartos de baño en Valencia destacamos en:</p>
<ul>
    <li><strong>Cambio de bañera por plato de ducha:</strong> Una intervención rápida que mejora la accesibilidad y amplía visualmente el espacio. Instalamos platos de ducha extraplanos de resina (antideslizantes) y mamparas de cristal templado minimalistas.</li>
    <li><strong>Sanitarios suspendidos y cisternas empotradas:</strong> Ocultar la cisterna detrás de la pared (sistemas Geberit) facilita la limpieza del suelo y aporta una estética moderna e impecable.</li>
    <li><strong>Revestimientos continuos y cerámicos:</strong> Sustituimos los viejos azulejos por porcelánicos rectificados de gran formato (juntas invisibles), o aplicamos microcemento sobre el azulejo existente para una reforma más rápida y sin escombros.</li>
    <li><strong>Iluminación y ventilación:</strong> Instalamos espejos retroiluminados, iluminación indirecta LED en foseados del techo y extractores silenciosos para evitar condensaciones.</li>
</ul>

<h3>¿Por qué hacer tu reforma parcial con nosotros?</h3>
<p>Reformar un baño o cocina mientras se vive en la casa puede ser molesto. Por eso, nuestro compromiso es la <strong>rapidez y la limpieza</strong>. Cubrimos el suelo del pasillo, sellamos las puertas para que no salga el polvo y coordinamos la entrada de los oficios día a día. Una reforma de baño estándar solemos completarla en 1 semana, y una cocina completa (incluyendo mobiliario) en unos 15-20 días, cumpliendo a rajatabla el calendario pactado.</p>
`
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
      {
        q: '¿Qué garantías ofrecéis en la impermeabilización de terrazas comunitarias?',
        a: 'Dependiendo del sistema utilizado (poliuretano, lámina asfáltica, EPDM), ofrecemos garantías de impermeabilización certificadas por los fabricantes que van desde los 10 hasta los 25 años, asegurando la tranquilidad de los vecinos de las últimas plantas.'
      },
      {
        q: '¿Cómo minimizáis las molestias a los vecinos durante la rehabilitación de la fachada?',
        a: 'Instalamos andamiajes homologados con redes de protección tupidas, protegemos los aparatos de aire acondicionado y ventanas de cada vivienda, y mantenemos una limpieza diaria de las zonas de paso. Nuestro jefe de obra está siempre localizable para resolver cualquier incidencia con los propietarios.'
      },
      {
        q: '¿Es obligatorio el SATE si vamos a arreglar la fachada?',
        a: 'No es estrictamente obligatorio, pero si la fachada necesita un picado y revestimiento superior al 25% de su superficie, el Código Técnico de la Edificación exige mejorar el aislamiento térmico. Además, instalar SATE es requisito indispensable para optar a la mayoría de las subvenciones europeas de eficiencia energética.'
      }],
    seoContent: `
<h2>Rehabilitación de Edificios en Valencia: Seguridad, Eficiencia y Valor</h2>
<p>La <strong>rehabilitación de edificios en Valencia</strong> es una necesidad creciente debido a la antigüedad de gran parte del parque inmobiliario de la ciudad. El paso del tiempo, las inclemencias meteorológicas y la evolución de las normativas de habitabilidad hacen indispensable acometer obras de mantenimiento, refuerzo estructural y mejora energética en comunidades de propietarios y fincas históricas.</p>

<p>En Constructora Valencia somos expertos en la restauración integral de inmuebles. Devolvemos la seguridad, la funcionalidad y la estética a los edificios, revalorizando las propiedades y mejorando drásticamente la calidad de vida de sus ocupantes. Trabajamos tanto para particulares, como para administradores de fincas y promotores patrimonialistas.</p>

<h3>Servicios clave en la Rehabilitación de Edificios</h3>
<p>Acometer la rehabilitación de un edificio requiere conocimientos técnicos especializados que van mucho más allá de la albañilería tradicional. Nuestros servicios abarcan todas las áreas críticas de un inmueble:</p>

<h4>Rehabilitación de Fachadas y Patios de Luces</h4>
<p>La fachada es la piel del edificio. Tratamos patologías comunes como fisuras, desprendimientos de revestimientos o carbonatación del hormigón. Aplicamos sistemas de aislamiento térmico por el exterior (SATE) y fachadas ventiladas, que no solo renuevan por completo la estética del edificio, sino que reducen hasta un 40% el consumo energético de las viviendas. Además, recuperamos elementos arquitectónicos protegidos en edificios históricos de Valencia (molduras, forjados de madera, balconadas).</p>

<h4>Reparación y Refuerzo Estructural</h4>
<p>La seguridad es innegociable. Intervenimos en estructuras dañadas por humedades, corrosión o termitas. Realizamos refuerzos de pilares y vigas mediante perfilería metálica, fibra de carbono o empresillado. Consolidamos forjados, reparamos cimentaciones y estabilizamos muros de carga, garantizando la viabilidad estructural del edificio para las próximas décadas.</p>

<h4>Impermeabilización de Cubiertas y Terrazas</h4>
<p>Las filtraciones de agua son el enemigo número uno de cualquier edificio. Ejecutamos la renovación completa de cubiertas planas (terrazas comunitarias) y cubiertas inclinadas (teja). Instalamos láminas asfálticas, membranas de poliuretano, EPDM o sistemas de cubierta invertida, asegurando una estanqueidad total y mejorando el aislamiento térmico del último piso.</p>

<h4>Mejora de la Accesibilidad (Instalación de Ascensores)</h4>
<p>Eliminar las barreras arquitectónicas es una obligación legal y una demanda social. Adaptamos zaguanes bajando el ascensor a cota cero, construimos rampas normativas e instalamos ascensores en edificios antiguos que carecían de ellos (ya sea por el hueco de la escalera, demoliendo parcialmente la misma, o mediante torres exteriores en fachadas o patios).</p>

<h2>El Informe de Evaluación del Edificio (IEEV.CV)</h2>
<p>En la Comunitat Valenciana, los edificios residenciales de más de 50 años están obligados a pasar el IEEV.CV (equivalente a la ITE). Nuestro equipo de arquitectos técnicos realiza la inspección obligatoria. Si el informe resulta desfavorable, presupuestamos y ejecutamos con precisión quirúrgica las obras de subsanación requeridas por el Ayuntamiento de Valencia, cerrando el círculo para que la comunidad obtenga su certificado favorable.</p>

<h2>Gestión de Subvenciones y Ayudas (Fondos Next Generation)</h2>
<p>Sabemos que las obras de rehabilitación suponen una derrama importante para las comunidades de vecinos. Actualmente, existen cuantiosas ayudas públicas (Fondos Europeos Next Generation, Plan Renhata, ayudas municipales del Ayuntamiento de Valencia) destinadas a la mejora de la eficiencia energética y la accesibilidad.</p>
<p>En Constructora Valencia no solo hacemos la obra: <strong>te ayudamos a tramitar las subvenciones</strong>. Colaboramos con gestores administrativos especializados para que tu comunidad pueda beneficiarse de ayudas que, en algunos casos, pueden llegar a cubrir hasta el 80% del coste de las obras de mejora energética.</p>

<p>Trabajamos con rigurosos planes de seguridad y salud, minimizando las molestias a los vecinos durante la obra mediante una comunicación transparente y el mantenimiento exhaustivo de la limpieza en zonas comunes. Si tu edificio necesita una intervención profesional, solicítanos un estudio previo y un presupuesto sin compromiso.</p>
`
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
      {
        q: '¿Cuánto cuesta reformar un local comercial en Valencia?',
        a: 'Depende enormemente del uso y estado del local. Un local para una tienda u oficina (sin necesidad de instalaciones complejas) puede rondar los 400-600 €/m2. Si hablamos de un restaurante con cocina industrial, aislamiento acústico y ventilación específica, la inversión suele partir de los 800-1.200 €/m2.'
      },
      {
        q: '¿Necesito pagar la licencia al ayuntamiento para tener el presupuesto?',
        a: 'No, nosotros te damos un presupuesto estimado tras la visita y el anteproyecto. La tasa de la licencia se paga al ayuntamiento en el momento de iniciar el trámite, cuando ya hayamos acordado el proyecto definitivo y el presupuesto de obra.'
      },
      {
        q: '¿Es obligatorio hacer el baño accesible para personas con movilidad reducida?',
        a: 'Por norma general, sí. La gran mayoría de nuevas licencias de actividad exigen al menos un aseo adaptado con las medidas reglamentarias (radio de giro de 1,50m) si el local tiene acceso público, salvo excepciones muy justificadas o locales extremadamente pequeños.'
      }],
    seoContent: `
<h2>Reforma de Locales Comerciales en Valencia: Diseño y Funcionalidad</h2>
<p>Abrir un negocio o modernizar uno existente es un reto apasionante. En Constructora Valencia sabemos que el local comercial es la tarjeta de presentación de tu marca y una herramienta clave para atraer clientes. Como expertos en <strong>reformas de locales comerciales y oficinas en Valencia</strong>, te ofrecemos un servicio llave en mano para transformar cualquier espacio "en bruto" o anticuado en un establecimiento atractivo, funcional y adaptado a la normativa vigente.</p>
<p>Nuestra principal obsesión en la reforma de espacios comerciales es <strong>cumplir los plazos de entrega</strong>. Entendemos que cada día de retraso en la apertura de tu negocio es un día de pérdidas económicas (alquileres, nóminas sin facturación). Por ello, trabajamos con un cronograma estricto (diagrama de Gantt) e incluso habilitamos turnos nocturnos o en fines de semana si el proyecto lo requiere.</p>

<h3>Adaptación y Diseño para cada Sector</h3>
<p>No es lo mismo reformar una clínica dental que un restaurante o una tienda de ropa. Nuestro equipo técnico tiene experiencia en la adaptación de locales según su uso específico:</p>
<ul>
    <li><strong>Restauración y Hostelería:</strong> Proyectos complejos donde la extracción de humos, la insonorización del techo, la fontanería industrial y las normativas de sanidad son críticas. Instalamos cocinas industriales, barras a medida y sistemas de climatización invisibles.</li>
    <li><strong>Clínicas y Centros de Salud (Dentales, Estéticas):</strong> Cumplimos con los requisitos de la Conselleria de Sanitat. Instalamos suelos vinílicos antibacterianos, pintura lavable, iluminación sin sombras y redes de fontanería, aire comprimido y aspiración ocultas en el suelo técnico.</li>
    <li><strong>Retail y Tiendas:</strong> Nos centramos en la iluminación de producto, escaparates atractivos y flujos de circulación para maximizar las ventas, usando materiales resistentes al alto tránsito comercial (microcementos, porcelánicos de alta dureza).</li>
    <li><strong>Oficinas Corporativas:</strong> Diseño de espacios de <em>coworking</em>, despachos acristalados, suelos técnicos para el paso de cableado estructurado, salas de servidores y aislamiento acústico entre zonas de reuniones.</li>
</ul>

<h2>Gestión de Licencias de Actividad en Valencia</h2>
<p>La burocracia no debe frenar tu negocio. Colaboramos con los mejores ingenieros para gestionar el <strong>Proyecto de Actividad</strong> y las licencias en el Ayuntamiento de Valencia o municipios del área metropolitana. Desde una Declaración Responsable para una tienda inocua, hasta una Licencia Ambiental para un restaurante con cocina o un pub.</p>
<p>Validamos contigo la viabilidad urbanística del local antes de que lo alquiles o compres, comprobando usos permitidos, accesibilidad (rampas, baños de minusválidos obligatorios) y cumplimiento de la normativa de prevención de incendios (salidas de emergencia, protección de estructuras).</p>

<h3>Ejecución y Dirección de Obra Comercial</h3>
<p>Nos ocupamos de las demoliciones, los refuerzos estructurales, ignifugación de vigas, nueva instalación eléctrica trifásica, redes informáticas, escaparatismo, rótulos exteriores e interiorismo. Tu proyecto será gestionado por un único Project Manager, permitiéndote centrarte en tu modelo de negocio mientras nosotros hacemos realidad el espacio perfecto.</p>
`
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
      {
        q: '¿Es mejor una nave de hormigón o una metálica?',
        a: 'La nave de hormigón aporta mayor seguridad contra incendios y menor mantenimiento a largo plazo. La estructura metálica es más rápida de montar, permite mayores luces sin pilares intermedios y es más económica. La elección dependerá del presupuesto y, sobre todo, del estudio de carga de fuego de la actividad a desarrollar.'
      },
      {
        q: '¿Quién tramita la legalización de la nave industrial?',
        a: 'Colaboramos con despachos de ingeniería industrial para redactar el Proyecto de Actividad, las legalizaciones eléctricas (Boletines a Industria) y los registros sanitarios, entregándote la nave completamente legalizada para que tú solo tengas que encender la maquinaria.'
      },
      {
        q: '¿Hacéis también los despachos y zonas de oficinas de la nave?',
        a: 'Sí, ejecutamos la nave de forma integral. Aislamos y acondicionamos una zona (habitualmente en un altillo forjado o en la parte frontal de la parcela) dotándola de aire acondicionado, redes informáticas, falsos techos y baños, para que tu equipo comercial y administrativo trabaje cómodamente.'
      }],
    seoContent: `
<h2>Construcción de Naves Industriales en Valencia</h2>
<p>El tejido industrial y logístico de Valencia (especialmente en los principales nudos como Fuente del Jarro, Riba-roja, Sagunto o Quart de Poblet) es uno de los más dinámicos de España. En Constructora Valencia aportamos nuestra capacidad técnica y financiera para la <strong>construcción de naves industriales y centros logísticos</strong>, desarrollando infraestructuras que optimizan la producción y el almacenaje de las empresas.</p>
<p>Entendemos la construcción industrial como una inversión estratégica de tu empresa. Por eso, priorizamos la durabilidad, el cumplimiento estricto del presupuesto y la adaptabilidad futura de la nave a los cambios tecnológicos de tu sector.</p>

<h3>Tipologías Constructivas Industriales</h3>
<p>Según el uso que se le vaya a dar a la nave (almacenaje logístico de paletería, producción pesada, cámaras frigoríficas, etc.), diseñamos y construimos con diferentes sistemas:</p>
<ul>
    <li><strong>Estructuras Metálicas (Pórticos de Acero):</strong> La opción más rápida y económica para naves de almacenamiento. Permiten grandes luces (distancias sin pilares), facilitando las maniobras interiores. Suelen cerramarse con panel sándwich para aislamiento.</li>
    <li><strong>Estructuras Prefabricadas de Hormigón:</strong> Ideales para naves de producción. Ofrecen una altísima resistencia mecánica y, sobre todo, una excelente resistencia al fuego, lo que a menudo es exigido por las compañías de seguros o la normativa antiincendios (RSCIEI) según la carga de fuego de los materiales almacenados.</li>
</ul>

<h2>Fases en la Construcción de una Nave Industrial</h2>
<p>Nuestra oferta es un contrato "Llave en Mano" (EPC - Engineering, Procurement and Construction). Nos ocupamos de:</p>
<h4>1. Obra Civil y Cimentación</h4>
<p>Realizamos el movimiento de tierras, compactación del terreno y ejecución de cimentaciones preparadas para soportar cargas pesadas y puentes grúa. Ejecutamos soleras de hormigón pulido de alta planimetría, vitales para el paso de carretillas elevadoras retráctiles.</p>
<h4>2. Montaje Estructural y Cerramientos</h4>
<p>Izado rápido de la estructura elegida y colocación de cerramientos laterales (hormigón o chapa) y cubiertas (tipo Deck o panel sándwich), previendo siempre la instalación de lucernarios para maximizar la luz natural y el ahorro eléctrico.</p>
<h4>3. Instalaciones Industriales (MEP)</h4>
<p>No hacemos solo "la caja". Dotamos a la nave de instalaciones eléctricas de alta tensión, cuadros de distribución de fuerza para maquinaria, redes de aire comprimido, fontanería industrial e instalaciones completas contra incendios (BIEs, detección, rociadores, grupos de presión).</p>
<h4>4. Oficinas y Zonas Sociales</h4>
<p>Dentro o adosadas a la nave, construimos las zonas administrativas (oficinas, salas de reuniones) y de vestuarios para el personal, aplicando calidades idénticas a las de una oficina corporativa en el centro de la ciudad.</p>
`
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
      {
        q: '¿Trabajáis para clientes particulares o solo para el sector público?',
        a: 'Trabajamos para ambos. Para clientes particulares y empresas ejecutamos obras como muros de escollera en fincas privadas, viales de acceso a masías, explanaciones para naves agrícolas o demoliciones. A nivel macro, trabajamos en desarrollos urbanísticos completos.'
      },
      {
        q: '¿Qué pasa si os encontráis con restos arqueológicos al excavar?',
        a: 'En algunas zonas de Valencia (especialmente cerca del centro histórico o huerta antigua) es posible hallar restos. Si ocurre, la ley obliga a detener cautelarmente el movimiento de tierras e informar a Patrimonio. Trabajamos de la mano con arqueólogos para catalogar y obtener el permiso de reanudación lo antes posible.'
      },
      {
        q: '¿Podéis gestionar vosotros el vertedero de los escombros y la tierra?',
        a: 'Absolutamente. Como empresa constructora registrada, garantizamos el transporte y la gestión medioambiental de los residuos (tierras de excavación, escombros, asfalto viejo) en vertederos autorizados o plantas de reciclaje de áridos, entregándote los certificados oficiales correspondientes.'
      }],
    seoContent: `
<h2>Obra Civil e Infraestructuras en Valencia</h2>
<p>En paralelo a la edificación residencial y comercial, Constructora Valencia dispone de una división especializada en <strong>Obra Civil y urbanización</strong>. Nuestra capacidad técnica y maquinaria propia nos permite acometer proyectos de infraestructura para promotores privados, juntas de compensación y administraciones públicas en toda la Comunitat Valenciana.</p>
<p>La obra civil requiere una enorme capacidad de planificación logística, topografía precisa y gestión medioambiental de tierras y residuos. Aportamos solvencia técnica a desarrollos urbanísticos, parques empresariales y grandes intervenciones en el espacio público.</p>

<h3>Principales Actuaciones en Obra Civil</h3>
<ul>
    <li><strong>Urbanización de Nuevos Sectores:</strong> Ejecutamos la urbanización completa de nuevas zonas residenciales o polígonos industriales. Esto incluye el desbroce, movimiento de tierras a gran escala, y la apertura de zanjas para todas las redes de servicios (alcantarillado, abastecimiento de agua, media tensión, telecomunicaciones y gas).</li>
    <li><strong>Pavimentación y Asfaltado:</strong> Realizamos la pavimentación de calzadas con mezcla bituminosa en caliente (asfalto), hormigón impreso o adoquines. Construimos aceras, rotondas y ejecutamos toda la señalización horizontal y vertical de las vías.</li>
    <li><strong>Redes de Saneamiento y Pluviales:</strong> Instalación de grandes colectores, arquetas, pozos de registro y sistemas de laminación o tanques de tormentas para gestionar las fuertes lluvias otoñales típicas de la costa mediterránea, evitando inundaciones en zonas urbanas.</li>
    <li><strong>Muros de Contención y Taludes:</strong> Ejecución de muros de contención de hormigón armado, muros de escollera, gaviones y estabilización de taludes, necesarios para el acondicionamiento de parcelas con fuertes desniveles.</li>
</ul>

<h2>Maquinaria y Equipo Técnico Propio</h2>
<p>Para la ejecución de estas obras contamos con un parque de maquinaria pesado (retroexcavadoras, motoniveladoras, rodillos compactadores) manejado por operarios de alta especialización. Nuestros ingenieros de caminos, canales y puertos, y topógrafos supervisan milimétricamente las cotas y niveles del proyecto.</p>

<h2>Mantenimiento de Polígonos y Áreas Privadas</h2>
<p>Además de la nueva construcción, ofrecemos contratos de mantenimiento y mejora de infraestructuras existentes para Entidades de Conservación de polígonos industriales y grandes comunidades de propietarios. Reparamos baches, limpiamos colectores, mejoramos la iluminación vial (cambio a tecnología LED) y reurbanizamos zonas obsoletas adaptándolas a las nuevas normativas de accesibilidad peatonal.</p>
<p>Si eres un promotor con un PAI aprobado o representas a una entidad gestora, contacta con nosotros para obtener un socio constructor solvente y con experiencia demostrable en obra civil.</p>
`
  }
]


export const STATS = [
  { value: '+350', label: 'Proyectos finalizados' },
  { value: '+15', label: 'Años en el sector' },
  { value: '98%', label: 'Clientes satisfechos' },
  { value: '10 años', label: 'Seguro decenal' },
]

export const TESTIMONIALS = [
  {
    name: 'Laura Navarro',
    location: 'Ruzafa · Reforma completa',
    avatar: 'LN',
    rating: 5,
    text: 'Nos renovaron un piso muy antiguo en Ruzafa y lo han dejado irreconocible. Resolvieron los imprevistos muy rápido y el trato fue siempre muy cercano. Recomendables al 100%.',
  },
  {
    name: 'David Blasco',
    location: 'Centro Valencia · Local hostelería',
    avatar: 'DB',
    rating: 5,
    text: 'Necesitábamos abrir nuestro café antes de las fallas y trabajaron contrarreloj para conseguirlo. La insonorización y las calidades son inmejorables.',
  },
  {
    name: 'Elena Soriano',
    location: "L'Eliana · Chalet obra nueva",
    avatar: 'ES',
    rating: 5,
    text: 'Confiamos en ellos para hacernos nuestra casa a medida. Desde el primer boceto del arquitecto hasta que nos dieron las llaves fue un proceso súper tranquilo.',
  },
  {
    name: 'Antonio Grau',
    location: 'Paterna · Rehabilitación comunitaria',
    avatar: 'AG',
    rating: 5,
    text: 'Rehabilitamos el zaguán para poner el ascensor a cota cero en nuestro edificio. Las molestias para los vecinos fueron mínimas y nos gestionaron la subvención.',
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
