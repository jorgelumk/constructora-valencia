import { STATS } from '@/lib/constants'

const TRUST_ITEMS = [
  { icon: '⚡', text: 'Presupuesto en 24 horas' },
  { icon: '📋', text: 'Plazos contractuales' },
  { icon: '🏛️', text: 'Licencias incluidas' },
  { icon: '📍', text: 'Área metropolitana BCN' },
  { icon: '⭐', text: '+127 valoraciones 5★' },
]

export default function TrustBar() {
  return (
    <>
      {/* Stats row */}
      <div className="bg-brand-accent">
        <div className="container-xl py-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="text-3xl md:text-4xl font-bold">{s.value}</p>
                <p className="text-orange-200 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust items */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="container-xl py-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {TRUST_ITEMS.map((t) => (
              <span key={t.text} className="flex items-center gap-2 text-slate-300 text-sm">
                <span>{t.icon}</span> {t.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
