import { MetadataRoute } from 'next'
import { SITE, SERVICES } from '@/lib/constants'
import { BLOG_POSTS } from '@/lib/blog-data'
import { PROJECTS } from '@/lib/projects-data'

export default function sitemap(): MetadataRoute.Sitemap {
  const serviceUrls = SERVICES.map((s) => ({
    url: `${SITE.url}/servicios/${s.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const blogUrls = BLOG_POSTS.map((p) => ({
    url: `${SITE.url}/blog/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const projectUrls = PROJECTS.map((p) => ({
    url: `${SITE.url}/proyectos/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'yearly' as const,
    priority: 0.5,
  }))

  return [
    { url: `${SITE.url}/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${SITE.url}/servicios/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE.url}/proyectos/`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE.url}/blog/`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE.url}/contacto/`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.6 },
    ...serviceUrls,
    ...blogUrls,
    ...projectUrls,
  ]
}
