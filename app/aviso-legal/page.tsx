import type { Metadata } from 'next'
import { SITE } from '@/lib/constants'
import Breadcrumb from '@/components/Breadcrumb'

export const metadata: Metadata = {
  title: 'Aviso Legal | ' + SITE.name,
  robots: {
    index: false,
    follow: false,
  },
}

export default function AvisoLegalPage() {
  return (
    <>
      <Breadcrumb items={[{ name: 'Aviso Legal' }]} />
      <div className="container-xl py-20 bg-white min-h-screen">
        <div className="max-w-3xl mx-auto prose prose-slate">
          <h1 className="text-3xl font-bold mb-8">Aviso Legal</h1>
          <p>
            En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los siguientes datos: la empresa titular de dominio web es <strong>{SITE.name}</strong>, con domicilio a estos efectos en {SITE.address.street}, {SITE.address.postalCode} {SITE.address.city} correo electrónico de contacto: {SITE.email}.
          </p>
          <h2>Usuarios</h2>
          <p>
            El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las Condiciones Generales de Uso aquí reflejadas.
          </p>
          <h2>Uso del portal</h2>
          <p>
            {SITE.url} proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante, &quot;los contenidos&quot;) en Internet pertenecientes a {SITE.name} a los que el USUARIO pueda tener acceso. El USUARIO asume la responsabilidad del uso del portal.
          </p>
          <h2>Protección de datos</h2>
          <p>
            {SITE.name} cumple con las directrices de la normativa vigente en protección de datos y vela por garantizar un correcto uso y tratamiento de los datos personales del usuario.
          </p>
          <h2>Propiedad intelectual e industrial</h2>
          <p>
            {SITE.name} por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial de su página web, así como de los elementos contenidos en la misma.
          </p>
        </div>
      </div>
    </>
  )
}
