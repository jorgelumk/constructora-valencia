'use client'

import { useState } from 'react'
import { SERVICES } from '@/lib/constants'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      service: formData.get('service'),
      message: formData.get('message'),
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

  if (status === 'success') {
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
      {status === 'error' && (
        <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm mb-4">
          Hubo un error al enviar el mensaje. Por favor, llámanos directamente.
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Nombre *</label>
          <input
            name="name"
            type="text"
            required
            placeholder="Tu nombre y apellidos"
            className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Teléfono *</label>
          <input
            name="phone"
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
          name="email"
          type="email"
          required
          placeholder="tu@email.com"
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Servicio de interés</label>
        <select name="service" className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent">
          <option value="">Selecciona un servicio</option>
          {SERVICES.map((s) => (
            <option key={s.slug} value={s.titleLong}>{s.titleLong}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-700 mb-1.5">Descripción del proyecto</label>
        <textarea
          name="message"
          rows={4}
          placeholder="Cuéntanos brevemente tu proyecto: superficie, estado actual, municipio, qué necesitas…"
          className="w-full border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent resize-none"
        />
      </div>
      <div className="flex items-start gap-3">
        <input type="checkbox" required id="privacy" className="mt-0.5 accent-brand-accent" />
        <label htmlFor="privacy" className="text-xs text-slate-500">
          He leído y acepto la <a href="/politica-privacidad/" className="text-brand-accent underline">política de privacidad</a>. Mis datos serán tratados únicamente para gestionar mi solicitud.
        </label>
      </div>
      <button 
        type="submit" 
        disabled={status === 'loading'}
        className="btn-orange w-full justify-center text-base py-4 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Enviando mensaje...' : 'Enviar solicitud de presupuesto'}
      </button>
    </form>
  )
}

