import Link from 'next/link'
import Image from 'next/image'
import { SERVICES } from '@/lib/constants'

export default function ServicesGrid() {
  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-4">Nuestros servicios</p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Todo lo que necesitas para construir o renovar en Valencia
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-light">
            Una sola empresa para todos los proyectos de construcción, reforma y rehabilitación en Valencia y área metropolitana.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-8 gap-6">
          {SERVICES.map((service, i) => (
            <article 
              key={service.slug} 
              className={`group rounded-xl overflow-hidden bg-white hover:shadow-premium transition-all duration-500 border border-slate-100 flex flex-col xl:col-span-2 ${
                i === 4 ? 'xl:col-start-2' : ''
              }`}
            >
              <Link href={`/servicios/${service.slug}/`} className="relative h-56 overflow-hidden block">
                <Image
                  src={service.image}
                  alt={service.titleLong}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={i < 4}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <span className="absolute bottom-4 left-4 text-3xl text-white transform group-hover:-translate-y-2 transition-transform duration-500">{service.icon}</span>
              </Link>
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-xs text-brand-accent font-bold uppercase tracking-widest mb-2">{service.subtitle}</p>
                <Link href={`/servicios/${service.slug}/`}>
                  <h3 className="font-bold text-brand-dark text-xl mb-3 group-hover:text-brand-accent transition-colors">{service.titleLong}</h3>
                </Link>
                <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow">{service.shortDesc}</p>
                <Link
                  href={`/servicios/${service.slug}/`}
                  className="text-brand-dark hover:text-brand-accent font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-wider mt-auto"
                >
                  Ver servicio <span className="text-brand-accent">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
