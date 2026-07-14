import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import CTABand from '@/components/CTABand'
import { BLOG_POSTS, BLOG_CATEGORIES } from '@/lib/blog-data'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog de Construcción en Valencia | Guías y Consejos',
  description:
    'Blog de Constructora en Valencia: guías de precios, consejos de reforma, normativa de obras, subvenciones y todo lo que necesitas saber sobre construcción en Valencia.',
  alternates: { canonical: `${SITE.url}/blog/` },
}

import BlogClient from '@/components/BlogClient'

export default function BlogPage() {

  return (
    <>
      <Breadcrumb items={[{ name: 'Blog' }]} />

      <section className="bg-slate-900 text-white py-20">
        <div className="container-xl">
          <p className="eyebrow text-brand-accent mb-3">Nuestro blog</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Blog de Construcción en Valencia
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Guías de precios, consejos de reforma, normativa de obras, subvenciones y todo lo que necesitas saber antes de lanzarte a un proyecto.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl">
          <BlogClient posts={BLOG_POSTS} categories={BLOG_CATEGORIES} />
        </div>
      </section>

      <CTABand />
    </>
  )
}
