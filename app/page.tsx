import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import ServicesGrid from '@/components/ServicesGrid'
import WhyUs from '@/components/WhyUs'
import ProjectsPreview from '@/components/ProjectsPreview'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTABand from '@/components/CTABand'
import LatestPosts from '@/components/LatestPosts'
import { LocalBusinessSchema } from '@/components/JsonLd'
import { SITE, FAQ_HOME } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Constructora en Valencia | Obra Nueva y Reformas desde 2008',
  description:
    'Empresa constructora en Valencia con +15 años de experiencia. Obra nueva, reformas integrales, rehabilitación de edificios y naves industriales. Presupuesto gratis en 24h. ☎ 960 73 12 06',
  alternates: { canonical: `${SITE.url}/` },
  openGraph: {
    title: 'Constructora en Valencia | Obra Nueva y Reformas desde 2008',
    description:
      'Empresa constructora en Valencia con +15 años de experiencia. Obra nueva, reformas integrales, rehabilitación y naves industriales. Presupuesto gratis en 24h.',
    url: `${SITE.url}/`,
  },
}

const PROCESS = [
  { num: '01', title: 'Contacto y visita', desc: 'Concertamos visita gratuita y evaluamos el proyecto in situ en Valencia o área metropolitana.' },
  { num: '02', title: 'Presupuesto en 24h', desc: 'Recibes un presupuesto cerrado y detallado, sin letra pequeña y sin sorpresas.' },
  { num: '03', title: 'Obra profesional', desc: 'Nuestro equipo ejecuta la obra con las mejores técnicas, materiales certificados y cumpliendo el plazo.' },
  { num: '04', title: 'Entrega impecable', desc: 'Te entregamos el proyecto limpio, revisado y con toda la documentación legal al día.' },
]

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema faqItems={FAQ_HOME} />
      <Hero />
      <TrustBar />
      <ServicesGrid />
      <CTABand />
      <WhyUs />

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

      <ProjectsPreview />
      <Testimonials />

      {/* FAQ */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="eyebrow mb-4">Preguntas frecuentes</p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">
              Todo lo que necesitas saber
            </h2>
          </div>
          <FAQ items={FAQ_HOME} />
        </div>
      </section>

      {/* Latest Posts */}
      <LatestPosts />


      {/* Final CTA */}
      <section className="section-pad bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80')] bg-cover bg-center" />
        <div className="container-xl text-center max-w-3xl mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            ¿Tienes un proyecto en Valencia?
          </h2>
          <p className="text-slate-300 text-xl mb-10 font-light">
            Pide tu presupuesto gratuito ahora. Te respondemos en menos de 24 horas sin ningún compromiso.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href={SITE.phoneHref} className="btn-orange">
              ☎ {SITE.phone}
            </a>
            <a href="/contacto/" className="btn-outline-white">
              Formulario de contacto
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
