'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type Project = {
  id: number | string
  slug: string
  title: string
  description: string
  image: string
  location: string
  area: string
  year: string
  type: string
  tags: string[]
}

export default function ProjectsClient({
  projects,
  projectTypes,
}: {
  projects: Project[]
  projectTypes: string[]
}) {
  const [filter, setFilter] = useState('Todos')

  const filteredProjects = filter === 'Todos' ? projects : projects.filter(p => p.type === filter)

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-10">
        {projectTypes.map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors cursor-pointer ${
              type === filter
                ? 'bg-brand-accent text-white border-brand-accent'
                : 'bg-white text-slate-600 border-slate-200 hover:border-orange-300'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredProjects.map((project) => (
          <article key={project.id} className="group bg-white rounded-2xl flex flex-col h-full overflow-hidden border border-slate-100 hover:border-brand-accent/50 hover:shadow-premium transition-all duration-300">
            <Link href={`/proyectos/${project.slug}/`} className="relative h-56 overflow-hidden block shrink-0">
              <Image
                src={project.image}
                alt={`${project.title} — ${project.location}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="bg-brand-accent text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                  {project.type}
                </span>
                <span className="bg-brand-dark/80 text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-sm">
                  {project.year}
                </span>
              </div>
            </Link>
            <div className="p-6 flex flex-col flex-grow">
              <Link href={`/proyectos/${project.slug}/`}>
                <h2 className="font-bold text-brand-dark text-xl mb-2 group-hover:text-brand-accent transition-colors">{project.title}</h2>
              </Link>
              <p className="text-brand-accent text-sm font-bold mb-3">
                📍 {project.location} · {project.area}
              </p>
              <p className="text-slate-500 text-sm leading-relaxed flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-5 mb-5">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-brand-light text-slate-600 text-xs px-2.5 py-1 rounded-full border border-slate-200">
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/proyectos/${project.slug}/`}
                className="text-brand-dark hover:text-brand-accent font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-wider mt-auto"
              >
                Ver proyecto <span className="text-brand-accent">→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
