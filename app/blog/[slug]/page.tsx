import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import Breadcrumb from '@/components/Breadcrumb'
import CTABand from '@/components/CTABand'
import { BlogPostSchema, BreadcrumbSchema } from '@/components/JsonLd'
import { BLOG_POSTS } from '@/lib/blog-data'
import { SITE } from '@/lib/constants'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${SITE.url}/blog/${post.slug}/` },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `${SITE.url}/blog/${post.slug}/`,
      type: 'article',
      publishedTime: post.date,
      images: [{ url: post.image, alt: post.title }],
    },
  }
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogPostPage({ params }: Props) {
  const post = BLOG_POSTS.find((p) => p.slug === params.slug)
  if (!post) notFound()

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)
  const fallback = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3)

  return (
    <>
      <BlogPostSchema
        title={post.title}
        description={post.description}
        date={post.date}
        slug={post.slug}
        image={post.image}
      />
      <BreadcrumbSchema
        items={[
          { name: 'Inicio', url: `${SITE.url}/` },
          { name: 'Blog', url: `${SITE.url}/blog/` },
          { name: post.title, url: `${SITE.url}/blog/${post.slug}/` },
        ]}
      />

      <Breadcrumb
        items={[
          { name: 'Blog', href: '/blog/' },
          { name: post.title },
        ]}
      />

      <article>
        {/* Hero */}
        <div className="relative h-72 md:h-96 overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-900/20" />
          <div className="absolute bottom-0 inset-x-0 p-6 md:p-10">
            <div className="container-xl">
              <span className="bg-brand-accent text-white text-xs font-semibold px-2.5 py-1 rounded-full mb-3 inline-block">
                {post.category}
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-white max-w-3xl leading-tight">
                {post.title}
              </h1>
              <p className="text-slate-300 text-sm mt-3">
                {formatDate(post.date)} · {post.readTime} de lectura
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="container-xl section-pad">
          <div className="grid lg:grid-cols-[1fr_320px] gap-14">
            {/* Article */}
            <div>
              <p className="text-xl text-slate-600 leading-relaxed mb-8 font-medium">{post.description}</p>
              <div
                className="prose prose-slate prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-600 prose-li:text-slate-600 prose-strong:text-slate-800 prose-a:text-brand-accent prose-a:no-underline hover:prose-a:underline"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="bg-brand-accent text-white rounded-2xl p-6">
                <h3 className="font-bold text-lg mb-2">¿Tienes un proyecto en Valencia?</h3>
                <p className="text-orange-100 text-sm mb-5">Pide presupuesto gratuito en 24 horas, sin compromiso.</p>
                <a href={SITE.phoneHref} className="btn-white w-full justify-center text-sm mb-3">
                  ☎ {SITE.phone}
                </a>
                <Link href="/contacto/" className="btn-outline-white w-full justify-center text-sm">
                  Formulario online
                </Link>
              </div>

              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <h4 className="font-bold text-slate-900 mb-4">Nuestros servicios</h4>
                <ul className="space-y-2">
                  {[
                    { title: 'Obra Nueva', href: '/servicios/obra-nueva-valencia/' },
                    { title: 'Reformas Integrales', href: '/servicios/reformas-integrales-valencia/' },
                    { title: 'Rehabilitación', href: '/servicios/rehabilitacion-edificios-valencia/' },
                    { title: 'Locales Comerciales', href: '/servicios/reforma-locales-valencia/' },
                    { title: 'Naves Industriales', href: '/servicios/construccion-naves-industriales-valencia/' },
                  ].map((s) => (
                    <li key={s.href}>
                      <Link href={s.href} className="text-slate-600 hover:text-brand-accent text-sm transition-colors flex items-center gap-1.5">
                        <span className="text-brand-accent">→</span> {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {(related.length > 0 || fallback.length > 0) && (
        <section className="section-pad bg-slate-50">
          <div className="container-xl">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">Artículos relacionados</h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {(related.length > 0 ? related : fallback).map((p) => (
                <div key={p.slug} className="group flex flex-col bg-white rounded-xl overflow-hidden border border-slate-100 hover:border-orange-200 hover:shadow-md transition-all">
                  <Link href={`/blog/${p.slug}/`} className="relative h-40 overflow-hidden shrink-0 block">
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="33vw" />
                  </Link>
                  <div className="p-4 flex flex-col grow">
                    <p className="text-xs text-brand-accent font-semibold mb-1">{p.category}</p>
                    <Link href={`/blog/${p.slug}/`}>
                      <h3 className="font-semibold text-slate-900 text-sm line-clamp-2 group-hover:text-brand-accent transition-colors mb-2">{p.title}</h3>
                    </Link>
                    <p className="text-xs text-slate-600 line-clamp-3 mt-auto">{p.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABand />
    </>
  )
}
