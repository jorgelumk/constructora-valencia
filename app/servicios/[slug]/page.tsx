import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/Breadcrumb'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import ContactForm from '@/components/ContactForm'
import WhyUs from '@/components/WhyUs'
import ProjectsPreview from '@/components/ProjectsPreview'
import Testimonials from '@/components/Testimonials'
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/JsonLd'
import { SERVICES, SITE } from '@/lib/constants'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDesc,
    alternates: { canonical: `${SITE.url}/servicios/${service.slug}/` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDesc,
      url: `${SITE.url}/servicios/${service.slug}/`,
      images: [{ url: service.image, alt: service.titleLong }],
    },
  }
}

const PROCESS = [
  { num: '01', title: 'Contacto y visita', desc: 'Concertamos visita gratuita y evaluamos el proyecto in situ en Valencia o área metropolitana.' },
  { num: '02', title: 'Presupuesto en 24h', desc: 'Recibes un presupuesto cerrado y detallado, sin letra pequeña y sin sorpresas.' },
  { num: '03', title: 'Obra profesional', desc: 'Nuestro equipo ejecuta la obra con las mejores técnicas, materiales certificados y cumpliendo el plazo.' },
  { num: '04', title: 'Entrega impecable', desc: 'Te entregamos el proyecto limpio, revisado y con toda la documentación legal al día.' },
]

export default function ServicePage({ params }: Props) {
  const service = SERVICES.find((s) => s.slug === params.slug)
  if (!service) notFound()

  const otherServices = SERVICES.filter((s) => s.slug !== service.slug).slice(0, 4)

  return (
    <>
      <LocalBusinessSchema
        serviceName={service.titleLong}
        faqItems={service.faqs}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: `${SITE.url}/` },
          { name: 'Servicios', url: `${SITE.url}/servicios/` },
          { name: service.titleLong, url: `${SITE.url}/servicios/${service.slug}/` },
        ]}
      />

      <Breadcrumb
        items={[
          { name: 'Servicios', href: '/servicios/' },
          { name: service.titleLong },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={service.image}
            alt={service.titleLong}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/20" />
        </div>
        <div className="container-xl pb-16 pt-32 relative z-10">
          <span className="text-5xl mb-6 block">{service.icon}</span>
          <p className="eyebrow text-brand-accent mb-4">{service.subtitle}</p>
          <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white mb-6 max-w-4xl leading-tight">
            {service.titleLong}
          </h1>
          <p className="text-slate-200 text-xl max-w-2xl mb-10 font-light">{service.description}</p>
          <div className="flex flex-wrap gap-4">
            <a href={SITE.phoneHref} className="btn-orange">
              ☎ {SITE.phone}
            </a>
            <Link href="/contacto/" className="btn-outline-white">
              Pedir presupuesto gratis
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="eyebrow mb-4">Qué incluye</p>
              <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-8">
                Todo lo que necesitas para tu proyecto de {service.title.toLowerCase()}
              </h2>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed font-light">{service.description}</p>
              <ul className="space-y-6">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-brand-light border border-brand-accent/20 text-brand-accent flex items-center justify-center text-sm font-bold flex-shrink-0 shadow-sm">✓</span>
                    <span className="text-brand-dark text-lg font-medium">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div className="bg-brand-light rounded-xl p-10 border border-slate-100 shadow-premium">
              <h3 className="text-2xl font-bold text-brand-dark mb-3">¿Tienes un proyecto de {service.title.toLowerCase()}?</h3>
              <p className="text-slate-600 text-base mb-8">Pide presupuesto ahora. Te respondemos en menos de 24 horas, sin coste ni compromiso.</p>
              <div className="space-y-4">
                <a href={SITE.phoneHref} className="btn-orange w-full justify-center">
                  ☎ Llamar: {SITE.phone}
                </a>
                <Link href="/contacto/" className="btn-outline-dark w-full justify-center">
                  Formulario de contacto
                </Link>
              </div>
              <div className="mt-8 pt-8 border-t border-slate-200 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-bold text-brand-dark text-2xl">+15</p>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mt-1">años exp.</p>
                </div>
                <div>
                  <p className="font-bold text-brand-dark text-2xl">+350</p>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mt-1">proyectos</p>
                </div>
                <div>
                  <p className="font-bold text-brand-dark text-2xl">24h</p>
                  <p className="text-slate-500 text-xs uppercase tracking-wider mt-1">respuesta</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso */}
      <section className="section-pad bg-brand-light">
        <div className="container-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow mb-4">Cómo trabajamos</p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">
              Un proceso claro de principio a fin
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {PROCESS.map((step) => (
              <div key={step.num} className="relative pl-8 border-l-2 border-brand-accent/30 hover:border-brand-accent transition-colors duration-300">
                <span className="text-6xl font-bold text-brand-dark/5 absolute -left-5 top-[-10px] leading-none select-none">{step.num}</span>
                <div className="relative">
                  <h3 className="font-bold text-brand-dark text-xl mb-3 mt-1">{step.title}</h3>
                  <p className="text-slate-500 text-base leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WhyUs />
      <ProjectsPreview />
      <Testimonials />
      <CTABand />

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow mb-4">Preguntas frecuentes</p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">
              Dudas sobre {service.titleLong.toLowerCase()}
            </h2>
          </div>
          <FAQ items={service.faqs} />
        </div>
      </section>

      {/* Contact form */}
      <section className="section-pad bg-brand-light">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Contacto</p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Solicita tu presupuesto gratuito</h2>
            <p className="text-slate-600 text-lg font-light">Cuéntanos tu proyecto de {service.title.toLowerCase()} y te enviamos un presupuesto detallado en menos de 24 horas.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Other services */}
      <section className="section-pad bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80')] bg-cover bg-center" />
        <div className="container-xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Otros servicios que pueden interesarte</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}/`}
                className="flex items-center gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-brand-accent hover:bg-white/10 transition-all group"
              >
                <span className="text-3xl group-hover:scale-110 transition-transform">{s.icon}</span>
                <span className="font-bold text-white text-sm uppercase tracking-wide">{s.titleLong}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
