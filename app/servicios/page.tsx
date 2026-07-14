import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/Breadcrumb'
import CTABand from '@/components/CTABand'
import { SERVICES, SITE } from '@/lib/constants'
import { LocalBusinessSchema } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Servicios de Construcción y Reforma en Valencia',
  description:
    'Todos los servicios de Constructora en Valencia: obra nueva, reformas integrales, rehabilitación, locales comerciales, baños y cocinas, naves industriales y promoción inmobiliaria.',
  alternates: { canonical: `${SITE.url}/servicios/` },
}

export default function ServiciosPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[{ name: 'Servicios' }]} />

      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow mb-3">Lo que hacemos</p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-5">
              Servicios de Constructora en Valencia
            </h1>
            <p className="text-slate-500 text-lg">
              Desde la obra nueva hasta la última reforma. Una sola empresa para todos tus proyectos de construcción en Valencia y área metropolitana.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <article key={service.slug} className="group rounded-2xl overflow-hidden border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                <Link href={`/servicios/${service.slug}/`} className="relative h-52 overflow-hidden block">
                  <Image
                    src={service.image}
                    alt={service.titleLong}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent" />
                  <span className="absolute bottom-3 left-3 text-3xl">{service.icon}</span>
                </Link>
                <div className="p-6">
                  <Link href={`/servicios/${service.slug}/`}>
                    <h2 className="font-bold text-slate-900 text-lg mb-2 group-hover:text-brand-accent transition-colors">{service.titleLong}</h2>
                  </Link>
                  <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.description}</p>
                  <ul className="space-y-1.5 mb-6">
                    {service.features.slice(0, 3).map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="text-brand-accent font-bold">✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/servicios/${service.slug}/`} className="btn-orange w-full justify-center text-sm">
                    Ver servicio completo
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand />
    </>
  )
}
