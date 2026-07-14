import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/Breadcrumb'
import CTABand from '@/components/CTABand'
import ContactForm from '@/components/ContactForm'
import { LocalBusinessSchema, BreadcrumbSchema } from '@/components/JsonLd'
import { PROJECTS } from '@/lib/projects-data'
import { SITE } from '@/lib/constants'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS.find((p) => p.slug === params.slug)
  if (!project) return {}
  return {
    title: `${project.title} | ${project.location} - Constructora en Valencia`,
    description: project.description,
    alternates: { canonical: `${SITE.url}/proyectos/${project.slug}/` },
    openGraph: {
      title: `${project.title} | ${project.location}`,
      description: project.description,
      url: `${SITE.url}/proyectos/${project.slug}/`,
      images: [{ url: project.image, alt: project.title }],
    },
  }
}

export default function ProjectPage({ params }: Props) {
  const project = PROJECTS.find((p) => p.slug === params.slug)
  if (!project) notFound()

  const otherProjects = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3)

  return (
    <>
      <LocalBusinessSchema
        serviceName={`Proyecto: ${project.title}`}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: `${SITE.url}/` },
          { name: 'Proyectos', url: `${SITE.url}/proyectos/` },
          { name: project.title, url: `${SITE.url}/proyectos/${project.slug}/` },
        ]}
      />

      <Breadcrumb
        items={[
          { name: 'Proyectos', href: '/proyectos/' },
          { name: project.title },
        ]}
      />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-brand-dark/20" />
        </div>
        <div className="container-xl pb-16 pt-32 relative z-10">
          <div className="flex gap-3 mb-6">
            <span className="bg-brand-accent text-white text-sm font-semibold px-3 py-1 rounded-full">
              {project.type}
            </span>
            <span className="bg-white/20 text-white text-sm font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
              {project.year}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white mb-6 max-w-4xl leading-tight">
            {project.title}
          </h1>
          <p className="text-brand-accent text-xl font-medium mb-4">📍 {project.location}</p>
          <p className="text-slate-200 text-lg max-w-2xl mb-10 font-light">{project.description}</p>
          <div className="flex flex-wrap gap-4">
            <a href={SITE.phoneHref} className="btn-orange">
              ☎ {SITE.phone}
            </a>
            <Link href="/contacto/" className="btn-outline-white">
              Pedir presupuesto
            </Link>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2">
              <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Detalles del Proyecto</h2>
              <div className="prose prose-lg text-slate-600 mb-8 max-w-none">
                <p>{project.description}</p>
                
                {project.challenge && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-brand-dark mb-3">El Reto</h3>
                    <p>{project.challenge}</p>
                  </div>
                )}
                
                {project.solution && (
                  <div className="mt-8">
                    <h3 className="text-2xl font-bold text-brand-dark mb-3">Nuestra Solución</h3>
                    <p>{project.solution}</p>
                  </div>
                )}
                
                {!project.challenge && !project.solution && (
                  <p>
                    Este proyecto en <strong>{project.location}</strong> destaca por la calidad de los materiales,
                    el cumplimiento estricto de los plazos y una ejecución técnica impecable acorde a los estándares de
                    Constructora en Valencia. Nuestro equipo se encargó de todas las fases del proyecto, asegurando un
                    resultado que supera las expectativas del cliente.
                  </p>
                )}
              </div>
              <div className="flex flex-wrap gap-2 mt-8">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-slate-100 text-slate-600 text-sm px-3 py-1.5 rounded-full font-medium border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Project Data Card */}
            <div className="bg-brand-light rounded-xl p-8 border border-slate-100 shadow-premium">
              <h3 className="text-xl font-bold text-brand-dark mb-6 border-b border-slate-200 pb-4">Ficha Técnica</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Tipo:</span>
                  <span className="text-brand-dark font-bold text-right">{project.type}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Ubicación:</span>
                  <span className="text-brand-dark font-bold text-right">{project.location}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Superficie:</span>
                  <span className="text-brand-dark font-bold text-right">{project.area}</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-slate-500 font-medium">Año:</span>
                  <span className="text-brand-dark font-bold text-right">{project.year}</span>
                </li>
              </ul>
              <div className="mt-8 pt-8 border-t border-slate-200">
                <p className="text-slate-600 text-sm mb-4 text-center">¿Tienes un proyecto similar en mente?</p>
                <a href={SITE.phoneHref} className="btn-orange w-full justify-center">
                  ☎ Llamar: {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Contact form */}
      <section className="section-pad bg-brand-light">
        <div className="container-xl max-w-2xl">
          <div className="text-center mb-12">
            <p className="eyebrow mb-4">Contacto</p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-4">Solicita tu presupuesto</h2>
            <p className="text-slate-600 text-lg font-light">Cuéntanos sobre tu idea o proyecto y te enviaremos una propuesta detallada en menos de 24 horas.</p>
          </div>
          <ContactForm />
        </div>
      </section>

      {/* Other Projects */}
      <section className="section-pad bg-brand-dark text-white relative overflow-hidden">
        <div className="container-xl relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Otros proyectos que podrían interesarte</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/proyectos/${p.slug}/`}
                className="group rounded-xl overflow-hidden border border-white/10 bg-white/5 hover:border-brand-accent transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    <span className="bg-brand-accent text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {p.type}
                    </span>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-white text-lg mb-1 group-hover:text-brand-accent transition-colors">{p.title}</h3>
                  <p className="text-slate-400 text-sm">📍 {p.location}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <CTABand />
    </>
  )
}
