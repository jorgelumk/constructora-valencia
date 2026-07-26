import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Constructora en Paterna | Obra Nueva y Reformas',
  description: 'Empresa constructora en Paterna especializada en obra nueva, reformas integrales y naves industriales. +15 años trabajando en Paterna y el Camp de Túria. Presupuesto en 24h.',
  alternates: { canonical: 'https://constructoravalencia.com/constructora-paterna/' },
  openGraph: {
    title: 'Constructora en Paterna | Obra Nueva y Reformas',
    description: 'Empresa constructora en Paterna con +15 años de experiencia. Especialistas en obra nueva, reformas y naves industriales en el área metropolitana de Valencia.',
    url: 'https://constructoravalencia.com/constructora-paterna/',
  },
}

const PROYECTOS_PATERNA = [
  { title: 'Plataforma Logística 2.400 m²', desc: 'Nave industrial de gran escala en el Polígono L'Oliveral, ejecutada en plazo y con todos los permisos gestionados.', icon: '🏭' },
  { title: 'Nave Industrial Paterna', desc: 'Construcción de nave industrial con oficinas integradas en el Parque Tecnológico de Paterna.', icon: '🔩' },
  { title: 'Rehabilitación Comunitaria', desc: 'Rehabilitación de zaguán y ascensor a cota cero en comunidad de vecinos de Paterna.', icon: '🏢' },
]

const SERVICIOS_PATERNA = [
  { title: 'Obra nueva en Paterna', desc: 'Construcción de chalets unifamiliares y viviendas de obra nueva en urbanizaciones de Paterna y alrededores.', href: '/servicios/obra-nueva-valencia/' },
  { title: 'Naves industriales', desc: 'Especialistas en construcción de naves en el Parque Tecnológico y polígonos industriales de Paterna.', href: '/servicios/construccion-naves-industriales-valencia/' },
  { title: 'Reformas integrales', desc: 'Reforma completa de viviendas, locales y oficinas en Paterna con garantía de plazo.', href: '/servicios/reformas-integrales-valencia/' },
  { title: 'Rehabilitación de edificios', desc: 'Fachadas, ascensores y mejoras de eficiencia energética con gestión de subvenciones incluida.', href: '/servicios/rehabilitacion-edificios-valencia/' },
]

export default function ConstructoraPaterna() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Constructora en Paterna' }]} />

      {/* Hero */}
      <section className="relative bg-brand-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80')] bg-cover bg-center" />
        <div className="container-xl relative z-10 max-w-4xl">
          <p className="eyebrow text-brand-accent mb-4">📍 Paterna · Valencia</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Constructora en Paterna
          </h1>
          <p className="text-slate-300 text-xl mb-8 max-w-2xl">
            Empresa constructora con sede en Valencia y amplia presencia en Paterna. Ejecutamos obra nueva, reformas integrales y naves industriales en el Parque Tecnológico y toda el área metropolitana.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contacto/" className="btn-orange">Pedir presupuesto gratis</Link>
            <a href="tel:+34960731206" className="btn-outline-white">📞 960 73 12 06</a>
          </div>
        </div>
      </section>

      {/* Por qué Paterna */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Paterna y el Camp de Túria</p>
              <h2 className="text-4xl font-bold text-brand-dark mb-6">Conocemos Paterna como la palma de la mano</h2>
              <p className="text-slate-600 text-lg mb-4">
                Paterna es uno de los municipios con mayor actividad constructora del área metropolitana de Valencia. El Parque Tecnológico, los polígonos industriales y el constante crecimiento residencial de urbanizaciones como La Cañada o Valterna hacen de Paterna un mercado exigente que requiere constructoras de confianza.
              </p>
              <p className="text-slate-600 text-lg mb-6">
                Con más de 15 años ejecutando proyectos en Paterna, conocemos la normativa municipal, los tiempos de licencia del Ayuntamiento y las características del terreno de cada zona. Eso se traduce en menos imprevistos y más cumplimiento de plazo.
              </p>
              <ul className="space-y-3 text-slate-700">
                {['Licencias de obra gestionadas por nuestro equipo técnico', 'Maquinaria y equipos propios — sin subcontratas intermediarias', 'Un solo interlocutor durante toda la obra', 'Garantía decenal en estructuras'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand-accent font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-premium">
              <Image src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80" alt="Construcción en Paterna Valencia" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-pad bg-slate-50">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-4">Servicios en Paterna</p>
            <h2 className="text-4xl font-bold text-brand-dark mb-4">¿Qué construimos en Paterna?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICIOS_PATERNA.map(s => (
              <Link key={s.href} href={s.href} className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-premium hover:border-brand-accent/30 transition-all duration-300 group">
                <h3 className="font-bold text-brand-dark text-lg mb-3 group-hover:text-brand-accent transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-4">Obra ejecutada</p>
            <h2 className="text-4xl font-bold text-brand-dark mb-4">Proyectos realizados en Paterna</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {PROYECTOS_PATERNA.map(p => (
              <div key={p.title} className="bg-slate-50 rounded-xl p-8 border border-slate-100">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="font-bold text-brand-dark text-lg mb-2">{p.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="section-pad bg-brand-dark">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow text-brand-accent mb-4">Presupuesto sin compromiso</p>
              <h2 className="text-4xl font-bold text-white mb-6">¿Tienes un proyecto en Paterna?</h2>
              <p className="text-slate-300 text-lg mb-6">Cuéntanos qué necesitas y te enviamos un presupuesto detallado en menos de 24 horas. Visita técnica gratuita en Paterna y toda el área metropolitana.</p>
              <div className="space-y-3 text-slate-300">
                <p>📞 <a href="tel:+34960731206" className="hover:text-brand-accent transition-colors">960 73 12 06</a></p>
                <p>✉️ <a href="mailto:info@constructoravalencia.com" className="hover:text-brand-accent transition-colors">info@constructoravalencia.com</a></p>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
