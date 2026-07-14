'use client'

import Link from 'next/link'
import { useState } from 'react'
import { SITE, SERVICES } from '@/lib/constants'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

  const categories = Array.from(new Set(SERVICES.map((s) => s.category)))

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="container-xl">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <span className="text-brand-accent font-bold text-xl leading-none">■</span>
            <span className="font-bold text-slate-900 text-base md:text-lg leading-tight">
              Constructora en<br className="hidden sm:block" />{' '}
              <span className="text-brand-accent">Valencia</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">

            {/* Servicios dropdown (Mega Menu) */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-accent transition-colors">
                Servicios
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] max-w-[90vw] bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {categories.map((cat) => (
                    <div key={cat}>
                      <h3 className="text-sm font-bold text-slate-900 mb-3 border-b border-slate-100 pb-2">{cat}</h3>
                      <ul className="space-y-1">
                        {SERVICES.filter((s) => s.category === cat).map((s) => (
                          <li key={s.slug}>
                            <Link
                              href={`/servicios/${s.slug}/`}
                              className="flex items-start gap-3 p-2 hover:bg-slate-50 rounded-lg transition-colors group/link"
                            >
                              <span className="text-xl leading-none mt-0.5">{s.icon}</span>
                              <div>
                                <div className="text-sm font-medium text-slate-700 group-hover/link:text-brand-accent">{s.title}</div>
                                <div className="text-xs text-slate-500 mt-0.5 line-clamp-2 leading-tight">{s.shortDesc}</div>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/proyectos/" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-accent transition-colors">
              Proyectos
            </Link>
            <Link href="/blog/" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-accent transition-colors">
              Blog
            </Link>
            <Link href="/contacto/" className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-brand-accent transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a href={SITE.phoneHref} className="text-sm font-semibold text-slate-700 hover:text-brand-accent transition-colors">
              ☎ {SITE.phone}
            </a>
            <Link href="/contacto/" className="btn-orange text-sm py-2 px-4">
              Presupuesto gratis
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
            aria-label="Abrir menú"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-4 max-h-[80vh] overflow-y-auto">
          <div className="container-xl space-y-1">

            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center justify-between w-full px-3 py-2.5 font-medium text-slate-700 hover:text-brand-accent rounded-lg hover:bg-slate-50"
            >
              Servicios
              <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {servicesOpen && (
              <div className="pl-4 space-y-4 py-2 mb-2 bg-slate-50/50 rounded-lg">
                {categories.map((cat) => (
                  <div key={cat}>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 px-3 pt-2">{cat}</div>
                    <div className="space-y-1">
                      {SERVICES.filter((s) => s.category === cat).map((s) => (
                        <Link
                          key={s.slug}
                          href={`/servicios/${s.slug}/`}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center gap-3 px-3 py-2 text-sm text-slate-600 hover:text-brand-accent rounded-lg hover:bg-white transition-colors"
                        >
                          <span className="text-lg">{s.icon}</span> 
                          <span className="font-medium">{s.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Link href="/proyectos/" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 font-medium text-slate-700 hover:text-brand-accent rounded-lg hover:bg-slate-50">
              Proyectos
            </Link>
            <Link href="/blog/" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 font-medium text-slate-700 hover:text-brand-accent rounded-lg hover:bg-slate-50">
              Blog
            </Link>
            <Link href="/contacto/" onClick={() => setMenuOpen(false)} className="block px-3 py-2.5 font-medium text-slate-700 hover:text-brand-accent rounded-lg hover:bg-slate-50">
              Contacto
            </Link>

            <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
              <a href={SITE.phoneHref} className="btn-outline-dark w-full justify-center py-2.5 text-sm">
                ☎ {SITE.phone}
              </a>
              <Link href="/contacto/" onClick={() => setMenuOpen(false)} className="btn-orange w-full justify-center py-2.5 text-sm">
                Presupuesto gratis
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
