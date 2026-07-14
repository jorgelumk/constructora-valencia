import type { Metadata } from 'next'
import Breadcrumb from '@/components/Breadcrumb'
import ContactForm from '@/components/ContactForm'
import { LocalBusinessSchema } from '@/components/JsonLd'
import { SITE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contacto y Presupuesto Gratis | Constructora en Valencia',
  description:
    'Contacta con Constructora en Valencia para solicitar presupuesto gratuito en 24h. ☎ 960 73 12 06 · Carrer de Sant Vicent Màrtir, 85, Valencia. Lunes a viernes de 8:00 a 19:00.',
  alternates: { canonical: `${SITE.url}/contacto/` },
}

const INFO_ITEMS = [
  { icon: '☎', label: 'Teléfono', value: SITE.phone, href: SITE.phoneHref },
  { icon: '✉', label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: '📍', label: 'Dirección', value: `${SITE.address.street}, ${SITE.address.postalCode} ${SITE.address.city}`, href: undefined },
  { icon: '🕐', label: 'Horario', value: SITE.hours, href: undefined },
]

export default function ContactoPage() {
  return (
    <>
      <LocalBusinessSchema />
      <Breadcrumb items={[{ name: 'Contacto' }]} />

      <section className="bg-slate-900 text-white py-20">
        <div className="container-xl">
          <p className="eyebrow text-brand-accent mb-3">Hablemos de tu proyecto</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contacta con nosotros
          </h1>
          <p className="text-slate-400 text-lg max-w-xl">
            Solicita tu presupuesto gratuito. Te respondemos en menos de 24 horas sin ningún compromiso.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Solicita presupuesto gratis</h2>
              <p className="text-slate-500 mb-8">Rellena el formulario y nos pondremos en contacto contigo en menos de 24 horas.</p>
              <ContactForm />
            </div>

            {/* Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Información de contacto</h2>
              <div className="space-y-6 mb-10">
                {INFO_ITEMS.map((item) => (
                  <div key={item.label} className="flex gap-4">
                    <span className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm text-slate-500 mb-0.5">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="font-semibold text-slate-900 hover:text-brand-accent transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-slate-900">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden bg-slate-100 h-64 flex items-center justify-center border border-slate-200">
                <div className="text-center text-slate-400">
                  <p className="text-3xl mb-2">🗺️</p>
                  <p className="font-medium text-slate-600">Carrer de Sant Vicent Màrtir, 85</p>
                  <p className="text-sm">46002 Valencia</p>
                  <a
                    href="https://maps.google.com/?q=Carrer+de+Sant+Vicent+Màrtir+85+Valencia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-brand-accent text-sm font-medium hover:underline"
                  >
                    Ver en Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
