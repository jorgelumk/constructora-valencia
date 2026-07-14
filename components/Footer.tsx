import Link from 'next/link'
import { SITE, SERVICES } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="container-xl py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-brand-accent font-bold text-xl">■</span>
              <span className="font-bold text-white text-lg leading-tight">
                Constructora en<br /><span className="text-brand-accent">Valencia</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-5">
              Empresa constructora en Valencia desde {SITE.founded}. Especialistas en obra nueva, reformas integrales, rehabilitación de edificios y naves industriales.
            </p>
            <div className="space-y-2 text-sm">
              <a href={SITE.phoneHref} className="flex items-center gap-2 hover:text-brand-accent transition-colors">
                <span>☎</span> {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2 hover:text-brand-accent transition-colors">
                <span>✉</span> {SITE.email}
              </a>
              <p className="flex items-start gap-2">
                <span className="mt-0.5">📍</span>
                <span>{SITE.address.street}, {SITE.address.postalCode} {SITE.address.city}</span>
              </p>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <p className="text-white font-semibold mb-4">Servicios</p>
            <ul className="space-y-2 text-sm">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicios/${s.slug}/`} className="hover:text-brand-accent transition-colors">
                    {s.titleLong}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <p className="text-white font-semibold mb-4">Empresa</p>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-brand-accent transition-colors">Inicio</Link></li>
              <li><Link href="/servicios/" className="hover:text-brand-accent transition-colors">Todos los servicios</Link></li>
              <li><Link href="/proyectos/" className="hover:text-brand-accent transition-colors">Proyectos realizados</Link></li>
              <li><Link href="/blog/" className="hover:text-brand-accent transition-colors">Blog de construcción</Link></li>
              <li><Link href="/contacto/" className="hover:text-brand-accent transition-colors">Contacto y presupuesto</Link></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-white font-semibold mb-4">Horario de atención</p>
            <p className="text-sm leading-relaxed mb-5">{SITE.hours}</p>
            <Link
              href="/contacto/"
              className="inline-flex items-center gap-2 bg-brand-accent hover:bg-brand-accent text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-colors"
            >
              Pedir presupuesto gratis
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="container-xl py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} {SITE.name}. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <a href="/politica-privacidad/" className="hover:text-slate-300 transition-colors">Privacidad</a>
            <a href="/politica-de-cookies/" className="hover:text-slate-300 transition-colors">Cookies</a>
            <a href="/aviso-legal/" className="hover:text-slate-300 transition-colors">Aviso legal</a>
          </div>
        </div>
      </div>

      {/* Float WhatsApp button */}
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-[88px] right-6 z-50 flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold px-4 py-3 rounded-full shadow-lg transition-all hover:shadow-[#25D366]/30 hover:scale-105"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        <span className="hidden sm:inline text-sm">WhatsApp</span>
      </a>

      {/* Float phone button */}
      <a
        href={SITE.phoneHref}
        className="fixed bottom-6 md:bottom-[calc(1.5rem+3cm)] right-6 z-50 flex items-center gap-2 bg-brand-accent hover:bg-brand-accent text-white font-semibold px-4 py-3 rounded-full shadow-lg transition-all hover:shadow-brand-accent/30 hover:scale-105"
        aria-label="Llamar ahora"
      >
        <span className="text-lg">☎</span>
        <span className="hidden sm:inline text-sm">{SITE.phone}</span>
      </a>
    </footer>
  )
}
