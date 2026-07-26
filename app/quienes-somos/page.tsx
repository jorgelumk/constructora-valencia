import type { Metadata } from 'next'
import Link from 'next/link'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Quiénes Somos | Constructora en Valencia con +15 Años',
  description: 'Conoce el equipo de Constructora en Valencia. Empresa constructora con más de 15 años de experiencia, clasificación de contratista, seguro decenal y garantía total en cada proyecto.',
  alternates: { canonical: 'https://constructoravalencia.com/quienes-somos/' },
  openGraph: {
    title: 'Quiénes Somos | Constructora en Valencia',
    description: 'Empresa constructora valenciana con +15 años de experiencia. Equipo técnico propio, clasificación de contratista y seguro decenal.',
    url: 'https://constructoravalencia.com/quienes-somos/',
  },
}

const VALORES = [
  { icon: '🏗️', title: 'Experiencia real', desc: 'Más de 15 años ejecutando proyectos en Valencia y área metropolitana. Desde reformas de 50 m² hasta edificios de obra nueva de 30 viviendas.' },
  { icon: '📋', title: 'Precio cerrado', desc: 'Presupuestamos con detalle antes de empezar. Sin costes ocultos, sin sorpresas al final de la obra. Lo que firmamos es lo que pagas.' },
  { icon: '⏱️', title: 'Plazo garantizado', desc: 'Recogemos el plazo de entrega en contrato. Si no cumplimos, aplicamos las penalizaciones acordadas. Así de claro.' },
  { icon: '🛡️', title: 'Garantías legales', desc: 'Seguro decenal en estructuras, póliza de responsabilidad civil y garantías específicas por instalaciones. Tu inversión está protegida.' },
  { icon: '👤', title: 'Un solo interlocutor', desc: 'Desde el primer presupuesto hasta la entrega de llaves, tienes un jefe de obra asignado. Sin teléfonos que no responden.' },
  { icon: '📐', title: 'Equipo técnico propio', desc: 'Arquitectos técnicos, aparejadores y jefes de obra en plantilla. Sin dependencia de subcontratas para las tareas críticas.' },
]

const CIFRAS = [
  { value: '+350', label: 'Proyectos entregados' },
  { value: '+15', label: 'Años de experiencia' },
  { value: '10', label: 'Años garantía estructural' },
  { value: '24h', label: 'Respuesta garantizada' },
]

const AREAS = [
  'Obra nueva residencial y unifamiliar',
  'Reformas integrales de viviendas',
  'Rehabilitación de edificios y fachadas',
  'Construcción de naves industriales',
  'Reforma de locales y espacios comerciales',
  'Construcción de viviendas passivhaus',
  'Proyectos de lujo y alto standing',
  'Obra civil e infraestructuras',
]

export default function QuienesSomosPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1800&q=80')] bg-cover bg-center" />
        <div className="container-xl relative z-10 max-w-4xl">
          <p className="eyebrow text-brand-accent mb-4">Nuestra empresa</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Quiénes somos
          </h1>
          <p className="text-slate-300 text-xl max-w-2xl">
            Somos una empresa constructora valenciana fundada en 2008 con más de 350 proyectos ejecutados en Valencia y su área metropolitana. Obra nueva, reformas, rehabilitación e industria.
          </p>
        </div>
      </section>

      {/* Cifras */}
      <div className="bg-brand-accent">
        <div className="container-xl py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
            {CIFRAS.map(c => (
              <div key={c.label}>
                <p className="text-4xl font-bold">{c.value}</p>
                <p className="text-orange-100 text-sm mt-1">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Historia */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Nuestra historia</p>
              <h2 className="text-4xl font-bold text-brand-dark mb-6">Una constructora valenciana con raíces sólidas</h2>
              <p className="text-slate-600 text-lg mb-4">
                Fundamos la empresa en 2008 con un objetivo claro: ofrecer en Valencia el mismo nivel de rigor técnico y transparencia que los clientes exigen en otros mercados europeos. Empezamos con reformas residenciales en el centro de la ciudad y fuimos creciendo hasta ejecutar proyectos de obra nueva, naves industriales y rehabilitación de grandes edificios.
              </p>
              <p className="text-slate-600 text-lg mb-4">
                Hoy somos una empresa consolidada con equipo técnico propio: arquitectos técnicos, jefes de obra y operarios especializados en plantilla. No dependemos de subcontratas para las partidas críticas, lo que nos permite controlar la calidad y los plazos de principio a fin.
              </p>
              <p className="text-slate-600 text-lg">
                Nuestra sede está en Valencia capital (Carrer de Sant Vicent Màrtir, 85) y operamos en toda el área metropolitana: Paterna, Torrent, L'Eliana, Rocafort, Burjassot, Mislata, Sagunto, Alzira y municipios limítrofes.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-10 border border-slate-100">
              <p className="eyebrow mb-6">Áreas de actividad</p>
              <ul className="space-y-3">
                {AREAS.map(area => (
                  <li key={area} className="flex items-start gap-3 text-slate-700">
                    <span className="text-brand-accent font-bold mt-0.5 shrink-0">✓</span>
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-pad bg-slate-50">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow mb-4">Por qué elegirnos</p>
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Lo que nos diferencia</h2>
            <p className="text-slate-500 text-lg">No somos la constructora más barata. Somos la que mejor relación calidad-precio, transparencia y cumplimiento ofrece en Valencia.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALORES.map(v => (
              <div key={v.title} className="bg-white rounded-xl p-8 border border-slate-100 hover:shadow-premium transition-shadow duration-300">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h3 className="font-bold text-brand-dark text-xl mb-3">{v.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Garantías legales */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Garantías y certificaciones</p>
              <h2 className="text-4xl font-bold text-brand-dark mb-6">Construimos con todas las garantías legales</h2>
              <div className="space-y-6">
                {[
                  { title: 'Seguro Decenal de Daños', desc: 'Obligatorio por la Ley de Ordenación de la Edificación (LOE) para edificios de viviendas. Cubre los daños estructurales durante 10 años desde la entrega.' },
                  { title: 'Póliza de Responsabilidad Civil', desc: 'Seguro de RC que protege frente a daños a terceros durante la ejecución de la obra.' },
                  { title: 'Clasificación de Contratista', desc: 'Empresa clasificada para contratar con las Administraciones Públicas en distintas categorías de obra.' },
                  { title: 'Garantía en Instalaciones', desc: 'Garantía extendida de 2 años en instalaciones eléctricas, fontanería y climatización ejecutadas por nuestro equipo.' },
                ].map(g => (
                  <div key={g.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-brand-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="text-brand-accent font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-brand-dark mb-1">{g.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{g.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-brand-dark rounded-2xl p-10 text-white">
              <p className="eyebrow text-brand-accent mb-4">Datos de la empresa</p>
              <div className="space-y-4 text-slate-300">
                <div>
                  <p className="text-sm text-slate-400 mb-1">Nombre comercial</p>
                  <p className="font-semibold text-white">Constructora en Valencia</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Sede</p>
                  <p className="font-semibold text-white">Carrer de Sant Vicent Màrtir, 85<br/>46002 Valencia</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Teléfono</p>
                  <a href="tel:+34960731206" className="font-semibold text-white hover:text-brand-accent transition-colors">960 73 12 06</a>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Email</p>
                  <a href="mailto:info@constructoravalencia.com" className="font-semibold text-white hover:text-brand-accent transition-colors">info@constructoravalencia.com</a>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Horario</p>
                  <p className="font-semibold text-white">Lun–Vie 8:00–19:00 · Sáb 9:00–14:00</p>
                </div>
                <div>
                  <p className="text-sm text-slate-400 mb-1">Área de trabajo</p>
                  <p className="font-semibold text-white">Valencia y área metropolitana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-slate-50">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">Cuéntanos tu proyecto</p>
              <h2 className="text-4xl font-bold text-brand-dark mb-6">¿Hablamos?</h2>
              <p className="text-slate-600 text-lg mb-6">
                Si tienes un proyecto entre manos, ya sea una obra nueva, una reforma o una rehabilitación, cuéntanoslo. Respondemos en menos de 24 horas con una primera valoración y concertamos una visita gratuita.
              </p>
              <div className="space-y-3">
                <Link href="/servicios/" className="text-brand-accent hover:underline font-medium block">→ Ver todos nuestros servicios</Link>
                <Link href="/proyectos/" className="text-brand-accent hover:underline font-medium block">→ Ver proyectos realizados</Link>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-premium border border-slate-100">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
