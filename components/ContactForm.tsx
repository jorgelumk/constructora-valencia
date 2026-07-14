'use client'

import { useState } from 'react'
import { SERVICES } from '@/lib/constants'

export default function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="text-center py-16">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">¡Mensaje enviado!</h3>
        <p className="text-slate-500">Nos pondremos en contacto contigo en menos de 24 horas.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Nombre *</label>
          <input
            type="text"
            required
            placeholder="Tu nombre y apellidos"
            className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Teléfono *</label>
          <input
            type="tel"
            required
            placeholder="Tu número de teléfono"
            className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
        <input
          type="email"
          required
          placeholder="tu@email.com"
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Servicio de interés</label>
        <select className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent">
          <option value="">Selecciona un servicio</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.slug}>{s.titleLong}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Municipio</label>
        <input
          type="text"
          placeholder="Valencia, Paterna, Torrent…"
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Descripción del proyecto</label>
        <textarea
          rows={4}
          placeholder="Cuéntanos brevemente tu proyecto: superficie, estado actual, qué necesitas…"
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent resize-none"
        />
      </div>
      <div className="flex items-start gap-3">
        <input type="checkbox" required id="privacy" className="mt-0.5 accent-brand-accent" />
        <label htmlFor="privacy" className="text-xs text-slate-500">
          He leído y acepto la <a href="/politica-privacidad/" className="text-brand-accent underline">política de privacidad</a>. Mis datos serán tratados únicamente para gestionar mi solicitud.
        </label>
      </div>
      <button type="submit" className="btn-orange w-full justify-center text-base py-4">
        Enviar solicitud de presupuesto
      </button>
    </form>
  )
}
