import Link from 'next/link'
import { SITE } from '@/lib/constants'

interface CTABandProps {
  title?: string
  subtitle?: string
  dark?: boolean
}

export default function CTABand({
  title = 'Presupuesto personalizado en 24 horas',
  subtitle = 'Gratuito, sin coste ni compromiso — llámanos o escríbenos ahora.',
  dark = true,
}: CTABandProps) {
  return (
    <div className={dark ? 'bg-brand-accent' : 'bg-slate-100'}>
      <div className="container-xl py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className={`text-xl md:text-2xl font-bold mb-1 ${dark ? 'text-white' : 'text-slate-900'}`}>
              {title}
            </h3>
            <p className={dark ? 'text-orange-100 text-sm' : 'text-slate-500 text-sm'}>{subtitle}</p>
          </div>
          <div className="flex flex-wrap gap-3 flex-shrink-0">
            <a href={SITE.phoneHref} className={dark ? 'btn-white' : 'btn-orange'}>
              ☎ {SITE.phone}
            </a>
            <Link href="/contacto/" className={dark ? 'btn-outline-white' : 'btn-outline-dark'}>
              Formulario online
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
