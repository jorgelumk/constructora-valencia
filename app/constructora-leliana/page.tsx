import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: "Constructora en L'Eliana | Chalets y Viviendas de Lujo",
  description: "Empresa constructora en L'Eliana especializada en chalets de obra nueva, viviendas de lujo y reformas integrales en el Camp de Túria. Presupuesto gratuito en 24h.",
  alternates: { canonical: "https://constructoravalencia.com/constructora-leliana/" },
  openGraph: {
    title: "Constructora en L'Eliana | Chalets y Viviendas de Lujo",
    description: "Tu constructora de confianza en L'Eliana para chalets, viviendas unifamiliares y reformas de alto standing.",
    url: "https://constructoravalencia.com/constructora-leliana/",
  },
}

const SERVICIOS_LELIANA = [
  { title: 'Chalets de obra nueva', desc: "Construcción de chalets unifamiliares a medida en L'Eliana, Bétera y el Camp de Túria. Diseño personalizado con arquitecto.", href: '/servicios/construccion-viviendas-unifamiliares-valencia/' },
  { title: 'Construcción de lujo', desc: "Viviendas premium con materiales de primera, domótica, piscina y acabados de alto standing en las mejores urbanizaciones de L'Eliana.", href: '/servicios/construccion-lujo-alta-calidad-valencia/' },
  { title: 'Passivhaus en L\'Eliana', desc: "Casas passivhaus certificadas con consumo energético casi nulo. Perfectas para el microclima privilegiado de L'Eliana.", href: '/servicios/construccion-casas-pasivas-valencia/' },
  { title: 'Piscinas y jardines', desc: "Diseño y construcción de piscinas de obra con espacios exteriores integrados en tu chalet de L'Eliana.", href: '/servicios/construccion-piscinas-valencia/' },
]

export default function ConstructoraLeliana() {
  return (
    <>
      <Breadcrumb items={[{ label: 'Inicio', href: '/' }, { label: "Constructora en L'Eliana" }]} />

      {/* Hero */}
      <section className="relative bg-brand-dark pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800&q=80')] bg-cover bg-center" />
        <div className="container-xl relative z-10 max-w-4xl">
          <p className="eyebrow text-brand-accent mb-4">📍 L'Eliana · Camp de Túria</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Constructora en L'Eliana
          </h1>
          <p className="text-slate-300 text-xl mb-8 max-w-2xl">
            L'Eliana es sinónimo de vivienda de calidad en la provincia de Valencia. Construimos chalets, viviendas de lujo y casas passivhaus en L'Eliana y todo el Camp de Túria desde hace más de 15 años.
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
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-premium order-2 lg:order-1">
              <Image src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" alt="Chalet de obra nueva en L'Eliana Valencia" fill className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <p className="eyebrow mb-4">El municipio de referencia del Camp de Túria</p>
              <h2 className="text-4xl font-bold text-brand-dark mb-6">¿Por qué construir en L'Eliana?</h2>
              <p className="text-slate-600 text-lg mb-4">
                L'Eliana combina la tranquilidad de la sierra con una excelente conexión con Valencia capital. Sus urbanizaciones de baja densidad, el microclima privilegiado y la alta calidad de vida hacen que sea uno de los municipios más demandados para construir una vivienda familiar.
              </p>
              <p className="text-slate-600 text-lg mb-6">
                El nivel exigente del mercado de L'Eliana nos ha obligado a especializarnos en construcción de calidad, desde viviendas convencionales hasta proyectos passivhaus o de lujo. Hemos ejecutado más de 20 obras en el municipio y conocemos en profundidad la normativa urbanística local.
              </p>
              <ul className="space-y-3 text-slate-700">
                {[
                  "Proyectos entregados en L'Eliana, Bétera y Riba-roja de Túria",
                  'Especialistas en construcción passivhaus y de lujo',
                  'Licencias de obra gestionadas con el Ayuntamiento',
                  'Garantía decenal + seguro de responsabilidad civil',
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-brand-accent font-bold mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="section-pad bg-slate-50">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow mb-4">Servicios en L'Eliana</p>
            <h2 className="text-4xl font-bold text-brand-dark mb-4">¿Qué podemos construir para ti?</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICIOS_LELIANA.map(s => (
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
              <h2 className="text-4xl font-bold text-white mb-6">¿Tienes un proyecto en L'Eliana?</h2>
              <p className="text-slate-300 text-lg mb-6">Cuéntanos qué necesitas y te enviamos un presupuesto detallado en menos de 24 horas. Realizamos visita técnica gratuita en L'Eliana y todo el Camp de Túria.</p>
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
