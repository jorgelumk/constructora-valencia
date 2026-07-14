import Image from 'next/image'
import Link from 'next/link'
import { SITE } from '@/lib/constants'
import HeroForm from './HeroForm'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1800&q=80"
          alt="Constructora en Valencia — obra en ejecución"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/40" />
      </div>

      <div className="container-xl py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div>
            <p className="eyebrow text-brand-accent mb-6">Especialistas en Valencia desde {SITE.founded}</p>
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold text-white leading-tight mb-8">
              Constructora en <br className="hidden md:block"/>
              <em className="not-italic text-brand-accent">Valencia</em>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed font-light">
              Tu empresa constructora de confianza en Valencia y área metropolitana. Más de 15 años ejecutando proyectos con rigor técnico, diseño innovador y entrega garantizada en plazo.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <a href={SITE.phoneHref} className="btn-orange">
                ☎ Llamar ahora
              </a>
              <Link href="/contacto/" className="btn-outline-white">
                Pedir presupuesto gratis
              </Link>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {['Presupuesto en 24h', 'Plazos garantizados', 'Licencias incluidas', 'Garantía decenal', '+350 proyectos'].map((t) => (
                <span key={t} className="flex items-center gap-2 text-slate-300 text-sm tracking-wide">
                  <span className="text-brand-accent font-bold">✓</span> {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:flex justify-end hidden">
            <HeroForm />
          </div>
        </div>
      </div>

      {/* Mobile form CTA */}
      <div className="lg:hidden absolute bottom-0 inset-x-0 bg-brand-dark/95 backdrop-blur-md py-4 border-t border-white/10">
        <div className="container-xl flex gap-3">
          <a href={SITE.phoneHref} className="btn-orange flex-1 justify-center text-sm">
            ☎ Llamar
          </a>
          <Link href="/contacto/" className="btn-outline-white flex-1 justify-center text-sm">
            Presupuesto
          </Link>
        </div>
      </div>
    </section>
  )
}
