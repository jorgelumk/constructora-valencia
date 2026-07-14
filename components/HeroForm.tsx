'use client'

import { useState } from 'react'
import { SERVICES } from '@/lib/constants'

export default function HeroForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-7 w-full max-w-sm">
      {sent ? (
        <div className="text-center py-6">
          <div className="text-4xl mb-3">✅</div>
          <p className="font-bold text-slate-900 text-lg mb-1">¡Recibido!</p>
          <p className="text-slate-500 text-sm">Te llamamos en menos de 24 horas.</p>
        </div>
      ) : (
        <>
          <div className="mb-5">
            <h2 className="font-bold text-slate-900 text-lg">¡Te llamamos gratis!</h2>
            <p className="text-slate-500 text-sm mt-1">Rellena tus datos y te contactamos hoy mismo.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="Tu nombre *"
              required
              className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            />
            <input
              type="tel"
              placeholder="Tu teléfono *"
              required
              className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            />
            <select className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent">
              <option value="">¿Qué necesitas?</option>
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.slug}>{s.titleLong}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Municipio (Valencia, Paterna…)"
              className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            />
            <div className="flex items-start gap-2 mt-2">
              <input type="checkbox" id="acceptConditions" required className="mt-1" />
              <label htmlFor="acceptConditions" className="text-xs text-slate-500">
                Acepto la <a href="/politica-privacidad/" className="text-brand-accent hover:underline" target="_blank">política de privacidad</a> y el tratamiento de mis datos.
              </label>
            </div>
            <button type="submit" className="btn-orange w-full justify-center">
              ¡PEDIR PRESUPUESTO GRATIS!
            </button>
            <p className="text-xs text-slate-400 text-center">🔒 Tus datos están seguros y no serán compartidos.</p>
          </form>
        </>
      )}
    </div>
  )
}
