import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import CTABand from '@/components/CTABand'
import { PROJECTS, PROJECT_TYPES } from '@/lib/projects-data'
import { SITE } from '@/lib/constants'
import ProjectsClient from '@/components/ProjectsClient'

export const metadata: Metadata = {
  title: 'Proyectos Realizados en Valencia | Portfolio de Obras',
  description:
    'Portfolio de obras de Constructora en Valencia: obra nueva, reformas integrales, rehabilitación, naves industriales y locales comerciales. +350 proyectos ejecutados.',
  alternates: { canonical: `${SITE.url}/proyectos/` },
}

export default function ProyectosPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Proyectos' }]} />

      <section className="bg-slate-900 text-white py-20">
        <div className="container-xl">
          <p className="eyebrow text-brand-accent mb-3">Nuestro trabajo</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Proyectos realizados en Valencia
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Más de 350 proyectos completados en Valencia y área metropolitana. Obra nueva, reformas, rehabilitación, naves industriales y locales comerciales.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl">
          <ProjectsClient projects={PROJECTS} projectTypes={PROJECT_TYPES} />
        </div>
      </section>

      <CTABand
        title="¿Quieres que tu proyecto sea el siguiente?"
        subtitle="Pide presupuesto gratuito en 24 horas. Sin compromiso."
      />
    </>
  )
}
