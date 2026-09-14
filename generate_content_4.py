import json

c_locales = """
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
"""

c_naves = """
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
"""

c_civil = """
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
"""

new_faqs_locales = [
    {"q": "¿Cuánto cuesta reformar un local comercial en Valencia?", "a": "Depende enormemente del uso y estado del local. Un local para una tienda u oficina (sin necesidad de instalaciones complejas) puede rondar los 400-600 €/m2. Si hablamos de un restaurante con cocina industrial, aislamiento acústico y ventilación específica, la inversión suele partir de los 800-1.200 €/m2."},
    {"q": "¿Necesito pagar la licencia al ayuntamiento para tener el presupuesto?", "a": "No, nosotros te damos un presupuesto estimado tras la visita y el anteproyecto. La tasa de la licencia se paga al ayuntamiento en el momento de iniciar el trámite, cuando ya hayamos acordado el proyecto definitivo y el presupuesto de obra."},
    {"q": "¿Es obligatorio hacer el baño accesible para personas con movilidad reducida?", "a": "Por norma general, sí. La gran mayoría de nuevas licencias de actividad exigen al menos un aseo adaptado con las medidas reglamentarias (radio de giro de 1,50m) si el local tiene acceso público, salvo excepciones muy justificadas o locales extremadamente pequeños."}
]

new_faqs_naves = [
    {"q": "¿Es mejor una nave de hormigón o una metálica?", "a": "La nave de hormigón aporta mayor seguridad contra incendios y menor mantenimiento a largo plazo. La estructura metálica es más rápida de montar, permite mayores luces sin pilares intermedios y es más económica. La elección dependerá del presupuesto y, sobre todo, del estudio de carga de fuego de la actividad a desarrollar."},
    {"q": "¿Quién tramita la legalización de la nave industrial?", "a": "Colaboramos con despachos de ingeniería industrial para redactar el Proyecto de Actividad, las legalizaciones eléctricas (Boletines a Industria) y los registros sanitarios, entregándote la nave completamente legalizada para que tú solo tengas que encender la maquinaria."},
    {"q": "¿Hacéis también los despachos y zonas de oficinas de la nave?", "a": "Sí, ejecutamos la nave de forma integral. Aislamos y acondicionamos una zona (habitualmente en un altillo forjado o en la parte frontal de la parcela) dotándola de aire acondicionado, redes informáticas, falsos techos y baños, para que tu equipo comercial y administrativo trabaje cómodamente."}
]

new_faqs_civil = [
    {"q": "¿Trabajáis para clientes particulares o solo para el sector público?", "a": "Trabajamos para ambos. Para clientes particulares y empresas ejecutamos obras como muros de escollera en fincas privadas, viales de acceso a masías, explanaciones para naves agrícolas o demoliciones. A nivel macro, trabajamos en desarrollos urbanísticos completos."},
    {"q": "¿Qué pasa si os encontráis con restos arqueológicos al excavar?", "a": "En algunas zonas de Valencia (especialmente cerca del centro histórico o huerta antigua) es posible hallar restos. Si ocurre, la ley obliga a detener cautelarmente el movimiento de tierras e informar a Patrimonio. Trabajamos de la mano con arqueólogos para catalogar y obtener el permiso de reanudación lo antes posible."},
    {"q": "¿Podéis gestionar vosotros el vertedero de los escombros y la tierra?", "a": "Absolutamente. Como empresa constructora registrada, garantizamos el transporte y la gestión medioambiental de los residuos (tierras de excavación, escombros, asfalto viejo) en vertederos autorizados o plantas de reciclaje de áridos, entregándote los certificados oficiales correspondientes."}
]

import re

with open('/Users/jorge/Desktop/Antigravity/constructora-valencia/lib/constants.ts', 'r', encoding='utf-8') as f:
    constants_data = f.read()

services_updates = {
    'reforma-locales-valencia': {
        'content': c_locales,
        'new_faqs': new_faqs_locales
    },
    'construccion-naves-industriales-valencia': {
        'content': c_naves,
        'new_faqs': new_faqs_naves
    },
    'obra-civil-industrial-valencia': {
        'content': c_civil,
        'new_faqs': new_faqs_civil
    }
}

for slug, data in services_updates.items():
    pattern = r"(slug:\s*'" + slug + r"'.*?faqs:\s*\[)(.*?)(\]\s*\n\s*\})"
    match = re.search(pattern, constants_data, re.DOTALL)
    if match:
        existing_faqs = match.group(2)
        new_faqs_str = ""
        for faq in data['new_faqs']:
            new_faqs_str += f",\n      {{\n        q: '{faq['q']}',\n        a: '{faq['a']}'\n      }}"
        modified_faqs = existing_faqs + new_faqs_str
        safe_content = data['content'].replace('`', '\\`')
        replacement = match.group(1) + modified_faqs + "],\n    seoContent: `" + safe_content + "`\n  }"
        constants_data = constants_data.replace(match.group(0), replacement)

with open('/Users/jorge/Desktop/Antigravity/constructora-valencia/lib/constants.ts', 'w', encoding='utf-8') as f:
    f.write(constants_data)

print("Updated constants.ts for locales, naves, and civil.")
