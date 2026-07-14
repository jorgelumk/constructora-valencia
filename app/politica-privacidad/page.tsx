import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Política de Privacidad | ' + SITE.name,
  robots: {
    index: false,
    follow: false,
  },
}

export default function PoliticaPrivacidadPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Política de Privacidad' }]} />
      <div className="container-xl py-20 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>
          <p>
            En <strong>{SITE.name}</strong> valoramos su privacidad. Esta Política de Privacidad describe cómo recopilamos, utilizamos, procesamos y distribuimos su información, incluidos los Datos Personales que se recopilan a través de nuestro sitio web {SITE.url}.
          </p>
          <h2>1. Información que recopilamos</h2>
          <p>
            Podemos recopilar información personal que usted nos proporciona directamente cuando nos contacta por correo electrónico a {SITE.email}, a través del número de teléfono {SITE.phone}, o llenando formularios en nuestra web.
          </p>
          <h2>2. Uso de la información</h2>
          <p>
            Utilizamos la información recopilada para proporcionarle información sobre nuestros servicios de construcción y reformas en Valencia, así como para mejorar su experiencia en el sitio.
          </p>
          <h2>3. Derechos del usuario</h2>
          <p>
            Usted tiene derecho a acceder, rectificar o eliminar sus datos personales en cualquier momento. Para ejercer estos derechos, comuníquese con nosotros a {SITE.email}.
          </p>
          <h2>4. Seguridad</h2>
          <p>
            Tomamos medidas razonables para proteger la información que proporciona contra pérdida, robo y uso indebido, así como acceso no autorizado.
          </p>
        </div>
      </div>
    </>
  )
}
