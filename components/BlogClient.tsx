'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

type BlogPost = {
  slug: string
  title: string
  description: string
  image: string
  date: string
  category: string
  readTime: string
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogClient({
  posts,
  categories,
}: {
  posts: BlogPost[]
  categories: string[]
}) {
  const [filter, setFilter] = useState('Todos')

  const filteredPosts = filter === 'Todos' ? posts : posts.filter(p => p.category === filter)
  
  const featured = filteredPosts[0]
  const rest = filteredPosts.slice(1)

  return (
    <>
      <div className="flex flex-wrap gap-2 mb-12">
        {['Todos', ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border cursor-pointer transition-colors ${
              cat === filter
                ? 'bg-brand-accent text-white border-brand-accent'
                : 'bg-white text-slate-600 border-slate-200 hover:border-orange-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {featured ? (
        <div className="group block mb-14">
          <div className="grid lg:grid-cols-2 gap-8 rounded-2xl overflow-hidden border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all">
            <Link href={`/blog/${featured.slug}/`} className="relative h-64 lg:h-auto overflow-hidden block">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </Link>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-orange-100 text-brand-accent text-xs font-semibold px-2.5 py-1 rounded-full">{featured.category}</span>
                <span className="text-slate-400 text-xs">{formatDate(featured.date)} · {featured.readTime} lectura</span>
              </div>
              <Link href={`/blog/${featured.slug}/`}>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-brand-accent transition-colors">
                  {featured.title}
                </h2>
              </Link>
              <p className="text-slate-500 leading-relaxed">{featured.description}</p>
              <Link href={`/blog/${featured.slug}/`} className="mt-6 text-brand-accent font-semibold inline-flex items-center gap-1">
                Leer artículo <span>→</span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center text-slate-500 mb-14">No se encontraron artículos en esta categoría.</div>
      )}

      {rest.length > 0 && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {rest.map((post) => (
            <article key={post.slug} className="group rounded-2xl overflow-hidden border border-slate-100 hover:border-orange-200 hover:shadow-lg transition-all duration-300 flex flex-col">
              <Link href={`/blog/${post.slug}/`} className="relative h-48 overflow-hidden block">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-brand-accent text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
              </Link>
              <div className="p-5 flex flex-col grow">
                  <p className="text-slate-400 text-xs mb-2">{formatDate(post.date)} · {post.readTime} lectura</p>
                  <Link href={`/blog/${post.slug}/`}>
                    <h2 className="font-bold text-slate-900 text-sm leading-snug mb-2 group-hover:text-brand-accent transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">{post.description}</p>
              </div>
            </article>
          ))}
        </div>
      )}
    </>
  )
}
