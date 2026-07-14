'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useRef } from 'react'
import { SERVICES } from '@/lib/constants'

export default function ServicesGrid() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <div className="text-center max-w-3xl mx-auto mb-16 relative">
          <p className="eyebrow mb-4">Nuestros servicios</p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Todo lo que necesitas para construir o renovar
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-light">
            Una sola empresa para todos los proyectos de construcción, reforma y rehabilitación.
          </p>
          
          {/* Controles de scroll móvil */}
          <div className="flex justify-center gap-4 mt-8 lg:hidden">
            <button 
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-brand-dark hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-colors"
              aria-label="Desplazar a la izquierda"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-brand-dark hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-colors"
              aria-label="Desplazar a la derecha"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        {/* Contenedor de servicios */}
        <div 
          ref={scrollRef}
          className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory hide-scrollbar pb-8 lg:pb-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {SERVICES.map((service, i) => (
            <article 
              key={service.slug} 
              className="min-w-[85vw] sm:min-w-[45vw] lg:min-w-0 snap-center group rounded-xl overflow-hidden bg-white hover:shadow-premium transition-all duration-500 border border-slate-100 flex flex-col"
            >
              <Link href={`/servicios/${service.slug}/`} className="relative h-56 overflow-hidden block shrink-0">
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
