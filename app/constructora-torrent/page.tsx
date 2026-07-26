import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Constructora en Torrent | Obra Nueva y Reformas',
  description: 'Constructora en Torrent con más de 15 años de experiencia. Obra nueva, reformas integrales y rehabilitación de edificios en Torrent y l\'Horta Sud. Presupuesto en 24h.',
  alternates: { canonical: 'https://constructoravalencia.com/constructora-torrent/' },
  openGraph: {
    title: 'Constructora en Torrent | Obra Nueva y Reformas',
    description: 'Empresa constructora de confianza en Torrent. Obra nueva, reformas y rehabilitación con gestión de licencias incluida.',
    url: 'https://constructoravalencia.com/constructora-torrent/',
  },
}

const SERVICIOS_TORRENT = [
  { title: 'Obra nueva en Torrent', desc: 'Construcción de viviendas unifamiliares y chalés en Torrent, Picanya y l\'Horta Sud con diseño personalizado.', href: '/servicios/obra-nueva-valencia/' },
  { title: 'Reformas integrales', desc: 'Reforma completa de pisos, chalets y locales en Torrent. Calidades premium con garantía de plazo y precio cerrado.', href: '/servicios/reformas-integrales-valencia/' },
  { title: 'Rehabilitación de fachadas', desc: 'Mejora energética de edificios, sistemas SATE y gestión de subvenciones Next Generation para comunidades de Torrent.', href: '/servicios/rehabilitacion-edificios-valencia/' },
  { title: 'Construcción de piscinas', desc: 'Diseño y construcción de piscinas de obra en chalets y urbanizaciones de Torrent.', href: '/servicios/construccion-piscinas-valencia/' },
]

export default function ConstructoraTorrent() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Constructora en Torrent' }]} />

      {/* Hero */}
      <section className="relative bg-brand-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80')] bg-cover bg-center" />
        <div className="container-xl relative z-10 max-w-4xl">
          <p className="eyebrow text-brand-accent mb-4">📍 Torrent · L'Horta Sud</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Constructora en Torrent
          </h1>
          <p className="text-slate-300 text-xl mb-8 max-w-2xl">
            Segunda ciudad del área metropolitana de Valencia con gran actividad constructora. Llevamos más de 15 años ejecutando proyectos de obra nueva, reformas y rehabilitación en Torrent y toda l'Horta Sud.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contacto/" className="btn-orange">Pedir presupuesto gratis</Link>
            <a href="tel:+34960731206" className="btn-outline-white">📞 960 73 12 06</a>
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="eyebrow mb-4">Torrent y L'Horta Sud</p>
              <h2 className="text-4xl font-bold text-brand-dark mb-6">Tu constructora de confianza en Torrent</h2>
              <p className="text-slate-600 text-lg mb-4">
                Torrent es la segunda ciudad más poblada de la provincia de Valencia, con una intensa actividad constructora tanto en vivienda residencial como en rehabilitación de edificios del casco antiguo. La alta demanda de obra nueva en urbanizaciones y la gran cantidad de edificios de los años 70 y 80 que requieren rehabilitación hacen de Torrent un mercado prioritario para nosotros.
              </p>
              <p className="text-slate-600 text-lg mb-6">
                Gestionamos directamente las licencias de obra con el Ayuntamiento de Torrent, conocemos los plazos reales y tenemos equipos estables en la zona, lo que elimina los tiempos muertos habituales en otras constructoras.
              </p>
              <ul className="space-y-3 text-slate-700">
                {['Tramitación de licencias ante el Ayuntamiento de Torrent', 'Gestión de subvenciones de la Generalitat Valenciana', 'Equipos propios — sin dependencia de subcontratas', 'Presupuesto cerrado sin costes ocultos'].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand-accent font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-premium">
              <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80" alt="Constructora en Torrent Valencia" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-pad bg-slate-50">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-4">Servicios en Torrent</p>
            <h2 className="text-4xl font-bold text-brand-dark mb-4">¿Qué podemos hacer por ti en Torrent?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICIOS_TORRENT.map(s => (
              <Link key={s.href} href={s.href} className="bg-white rounded-xl p-6 border border-slate-100 hover:shadow-premium hover:border-brand-accent/30 transition-all duration-300 group">
                <h3 className="font-bold text-brand-dark text-lg mb-3 group-hover:text-brand-accent transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Form */}
      <section className="section-pad bg-brand-dark">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow text-brand-accent mb-4">Presupuesto sin compromiso</p>
              <h2 className="text-4xl font-bold text-white mb-6">¿Tienes un proyecto en Torrent?</h2>
              <p className="text-slate-300 text-lg mb-6">Cuéntanos qué necesitas y te enviamos un presupuesto detallado en menos de 24 horas. Realizamos visita técnica gratuita en Torrent y toda l'Horta Sud.</p>
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
