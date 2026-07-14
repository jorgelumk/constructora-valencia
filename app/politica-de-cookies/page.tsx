import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Política de Cookies | ' + SITE.name,
  robots: {
    index: false,
    follow: false,
  },
}

export default function PoliticaCookiesPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Política de Cookies' }]} />
      <div className="container-xl py-20 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-3xl font-bold mb-8">Política de Cookies</h1>
          <p>
            Este sitio web, {SITE.url}, titularidad de <strong>{SITE.name}</strong>, utiliza cookies y/o tecnologías similares que almacenan y recuperan información cuando navega.
          </p>
          <h2>1. ¿Qué son las cookies?</h2>
          <p>
            Las cookies son pequeños ficheros de texto que los sitios web almacenan en el dispositivo del usuario para recordar sus preferencias y mejorar la experiencia de navegación.
          </p>
          <h2>2. Tipos de cookies que utilizamos</h2>
          <ul>
            <li><strong>Cookies técnicas:</strong> Necesarias para el correcto funcionamiento de la web.</li>
            <li><strong>Cookies de análisis:</strong> Permiten cuantificar el número de usuarios y realizar la medición y análisis estadístico del uso que hacen los usuarios del servicio ofertado.</li>
          </ul>
          <h2>3. Gestión de cookies</h2>
          <p>
            Puede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su ordenador. Para más información, póngase en contacto en {SITE.email}.
          </p>
        </div>
      </div>
    </>
  )
}
