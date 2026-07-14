import Link from 'next/link'
import Image from 'next/image'
import { BLOG_POSTS } from '@/lib/blog-data'

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function LatestPosts() {
  // Solo los últimos 3 posts
  const recentPosts = BLOG_POSTS.slice(0, 3)

  return (
    <section className="section-pad bg-brand-light">
      <div className="container-xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow mb-4">Nuestro blog</p>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
            Últimos artículos
          </h2>
          <p className="text-slate-500 text-lg md:text-xl font-light">
            Consejos de construcción, reformas y normativa en Valencia.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7 mb-10">
          {recentPosts.map((post) => (
            <article key={post.slug} className="group bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-brand-accent/50 hover:shadow-premium transition-all duration-300 flex flex-col">
              <Link href={`/blog/${post.slug}/`} className="relative h-48 overflow-hidden block">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-accent text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow-sm">
                      {post.category}
                    </span>
                  </div>
              </Link>
              <div className="p-6 flex flex-col grow">
                  <p className="text-slate-400 text-xs mb-3 font-medium uppercase tracking-wider">{formatDate(post.date)} · {post.readTime}</p>
                  <Link href={`/blog/${post.slug}/`}>
                    <h3 className="font-bold text-brand-dark text-lg leading-snug mb-3 group-hover:text-brand-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 mb-4 grow">{post.description}</p>
                  <Link href={`/blog/${post.slug}/`} className="text-brand-dark hover:text-brand-accent font-bold text-sm inline-flex items-center gap-2 group-hover:gap-3 transition-all uppercase tracking-wider mt-auto">
                    Leer artículo <span className="text-brand-accent">→</span>
                  </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog/" className="btn-outline">
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  )
}
