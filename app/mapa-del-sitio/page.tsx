import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES } from '@/lib/constants'
import { BLOG_POSTS } from '@/lib/blog-data'
import { PROJECTS } from '@/lib/projects-data'

export const metadata: Metadata = {
  title: 'Mapa del Sitio | Constructora en Valencia',
  description: 'Encuentra todas las páginas de Constructora Valencia: servicios de construcción, proyectos realizados, blog y contacto.',
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://constructoravalencia.com/mapa-del-sitio/' },
}

const sections = [
  {
    icon: '🏠',
    title: 'Páginas Principales',
    color: 'from-orange-500 to-amber-500',
    links: [
      { label: 'Inicio', href: '/' },
      { label: 'Servicios', href: '/servicios/' },
      { label: 'Proyectos', href: '/proyectos/' },
      { label: 'Blog', href: '/blog/' },
      { label: 'Contacto', href: '/contacto/' },
    ],
  },
  {
    icon: '🔨',
    title: 'Servicios',
    color: 'from-blue-600 to-cyan-500',
    links: SERVICES.map((s) => ({ label: s.titleLong, href: `/servicios/${s.slug}/` })),
  },
  {
    icon: '🏗️',
    title: 'Proyectos Realizados',
    color: 'from-emerald-600 to-teal-500',
    links: PROJECTS.map((p) => ({ label: p.title, href: `/proyectos/${p.slug}/` })),
  },
  {
    icon: '📝',
    title: 'Blog',
    color: 'from-violet-600 to-purple-500',
    links: BLOG_POSTS.map((p) => ({ label: p.title, href: `/blog/${p.slug}/` })),
  },
  {
    icon: '⚖️',
    title: 'Páginas Legales',
    color: 'from-slate-500 to-slate-600',
    links: [
      { label: 'Aviso Legal', href: '/aviso-legal/' },
      { label: 'Política de Privacidad', href: '/politica-privacidad/' },
      { label: 'Política de Cookies', href: '/politica-de-cookies/' },
    ],
  },
]

export default function MapaDelSitioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-brand-dark pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80')] bg-cover bg-center" />
        <div className="container-xl relative z-10 text-center max-w-3xl mx-auto">
          <p className="eyebrow mb-4 text-brand-accent">Navegación</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Mapa del Sitio</h1>
          <p className="text-slate-300 text-lg">
            Todas las páginas de <strong className="text-white">Constructora Valencia</strong> organizadas por sección para que encuentres lo que necesitas de forma rápida.
          </p>
        </div>
      </section>

      {/* Sections */}
      <section className="section-pad bg-slate-50">
        <div className="container-xl">
          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section) => (
              <div key={section.title} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                {/* Header */}
                <div className={`bg-gradient-to-r ${section.color} p-6`}>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{section.icon}</span>
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>
                </div>
                {/* Links */}
                <ul className="p-6 space-y-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="flex items-center gap-3 text-slate-600 hover:text-brand-accent transition-colors py-2 px-3 rounded-lg hover:bg-orange-50 group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-brand-accent transition-colors shrink-0" />
                        <span className="text-sm font-medium leading-snug">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 mb-4">¿No encuentras lo que buscas?</p>
            <Link href="/contacto/" className="btn-orange">
              Contacta con nosotros
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
