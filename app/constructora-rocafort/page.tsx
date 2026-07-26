import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Constructora en Rocafort | Chalets y Obra Nueva Valencia',
  description: 'Constructora en Rocafort especializada en chalets de obra nueva y reformas de alto standing. Más de 15 años ejecutando proyectos en Rocafort y l\'Horta Nord. Presupuesto en 24h.',
  alternates: { canonical: 'https://constructoravalencia.com/constructora-rocafort/' },
  openGraph: {
    title: 'Constructora en Rocafort | Chalets y Obra Nueva Valencia',
    description: 'Empresa constructora de confianza en Rocafort. Chalets exclusivos, obra nueva y reformas en uno de los municipios más exclusivos de Valencia.',
    url: 'https://constructoravalencia.com/constructora-rocafort/',
  },
}

const SERVICIOS_ROCAFORT = [
  { title: 'Chalets de obra nueva', desc: 'Construcción de chalets exclusivos en Rocafort y Massalfassar. Diseño arquitectónico y calidades de primera línea.', href: '/servicios/construccion-viviendas-unifamiliares-valencia/' },
  { title: 'Viviendas de lujo', desc: 'Construcción de alta gama con materiales premium, domótica integrada y acabados exclusivos para el exigente mercado de Rocafort.', href: '/servicios/construccion-lujo-alta-calidad-valencia/' },
  { title: 'Reformas integrales', desc: 'Reforma completa de chalets y viviendas en Rocafort, con diseño interior y gestión integral del proyecto.', href: '/servicios/reformas-integrales-valencia/' },
  { title: 'Piscinas de obra', desc: 'Diseño y construcción de piscinas de obra con spa, cascadas y zonas de jardín integradas en tu chalet.', href: '/servicios/construccion-piscinas-valencia/' },
]

export default function ConstructoraRocafort() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: 'Constructora en Rocafort' }]} />

      {/* Hero */}
      <section className="relative bg-brand-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1800&q=80')] bg-cover bg-center" />
        <div className="container-xl relative z-10 max-w-4xl">
          <p className="eyebrow text-brand-accent mb-4">📍 Rocafort · L'Horta Nord</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Constructora en Rocafort
          </h1>
          <p className="text-slate-300 text-xl mb-8 max-w-2xl">
            Rocafort es uno de los municipios más exclusivos de la provincia de Valencia. Sus urbanizaciones de baja densidad y la alta demanda de vivienda de calidad nos han llevado a especializarnos en construcción de lujo y chalets a medida en este municipio.
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
              <p className="eyebrow mb-4">El municipio más exclusivo del área metropolitana</p>
              <h2 className="text-4xl font-bold text-brand-dark mb-6">Construimos tu hogar en Rocafort</h2>
              <p className="text-slate-600 text-lg mb-4">
                Rocafort combina la exclusividad residencial con la proximidad a Valencia capital. Con una renta per cápita de las más altas de la Comunitat Valenciana y urbanizaciones consolidadas de alta calidad, construir en Rocafort exige un nivel técnico y estético que pocas constructoras pueden ofrecer.
              </p>
              <p className="text-slate-600 text-lg mb-6">
                Hemos ejecutado varios proyectos de viviendas unifamiliares en Rocafort, incluyendo el chalet de La Llorona (incluido en nuestro portfolio). Conocemos la normativa urbanística local, los materiales que funcionan en la zona y las expectativas del cliente tipo de Rocafort.
              </p>
              <ul className="space-y-3 text-slate-700">
                {[
                  'Proyectos de alto standing con diseño de arquitecto',
                  'Gestión integral: proyecto, licencia, obra y entrega',
                  'Materiales certificados y proveedores de primera',
                  'Seguro decenal + póliza de responsabilidad civil',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand-accent font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-premium">
              <Image src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" alt="Chalet exclusivo en Rocafort Valencia" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-pad bg-slate-50">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-4">Servicios en Rocafort</p>
            <h2 className="text-4xl font-bold text-brand-dark mb-4">¿Qué podemos construir en Rocafort?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICIOS_ROCAFORT.map(s => (
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
              <h2 className="text-4xl font-bold text-white mb-6">¿Tienes un proyecto en Rocafort?</h2>
              <p className="text-slate-300 text-lg mb-6">Cuéntanos qué necesitas y te enviamos un presupuesto detallado en menos de 24 horas. Realizamos visita técnica gratuita en Rocafort y toda l'Horta Nord.</p>
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
