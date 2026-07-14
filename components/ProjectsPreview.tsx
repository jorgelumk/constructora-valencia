import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '@/lib/projects-data'

export default function ProjectsPreview() {
  const featured = PROJECTS.slice(0, 6)

  return (
    <section className="section-pad bg-brand-light">
      <div className="container-xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <p className="eyebrow mb-4">Portfolio</p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark">
              Proyectos realizados en Valencia
            </h2>
          </div>
          <Link href="/proyectos/" className="btn-outline-dark flex-shrink-0">
            Ver todos los proyectos
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((project) => (
            <Link 
              key={project.id} 
              href={`/proyectos/${project.slug}`}
              className="group rounded-xl overflow-hidden bg-white hover:shadow-premium transition-all duration-500 border border-slate-100 flex flex-col"
            >
              <article className="flex flex-col flex-grow">
                <div className="relative h-64 overflow-hidden shrink-0">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.location}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-brand-dark/90 backdrop-blur-sm text-brand-accent text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wider">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-bold text-brand-dark text-xl mb-2 group-hover:text-brand-accent transition-colors duration-300">{project.title}</h3>
                  <p className="text-slate-500 text-sm mb-4 font-medium">
                    📍 {project.location} <span className="text-brand-accent mx-1">·</span> {project.area} <span className="text-brand-accent mx-1">·</span> {project.year}
                  </p>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-light">{project.description}</p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
