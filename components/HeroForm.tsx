'use client'

import { useState } from 'react'
import { SERVICES } from '@/lib/constants'

export default function HeroForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('municipio'), // In this small form, we use municipio as part of the message/details
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!res.ok) throw new Error('Error al enviar')
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-7 w-full max-w-sm">
      {status === 'success' ? (
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
            {status === 'error' && (
              <div className="p-3 bg-red-50 text-red-600 rounded-lg text-xs mb-2">
                Hubo un error. Llámanos directamente.
              </div>
            )}
            <input
              name="name"
              type="text"
              placeholder="Tu nombre *"
              required
              className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            />
            <input
              name="phone"
              type="tel"
              placeholder="Tu teléfono *"
              required
              className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
            />
            <select name="service" className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-sm text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent">
              <option value="">¿Qué necesitas?</option>
              {SERVICES.map((s) => (
                <option key={s.slug} value={s.titleLong}>{s.titleLong}</option>
              ))}
            </select>
            <input
              name="municipio"
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
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="btn-orange w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? 'ENVIANDO...' : '¡PEDIR PRESUPUESTO GRATIS!'}
            </button>
            <p className="text-xs text-slate-400 text-center">🔒 Tus datos están seguros y no serán compartidos.</p>
          </form>
        </>
      )}
    </div>
  )
}

