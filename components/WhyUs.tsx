import Image from 'next/image'

const REASONS = [
  {
    icon: '🏅',
    title: '+15 años y +350 proyectos',
    desc: 'Experiencia acreditada en obra nueva, reformas, rehabilitación y naves industriales en Valencia y la Comunitat Valenciana.',
  },
  {
    icon: '👷',
    title: 'Equipo técnico propio',
    desc: 'Arquitectos, aparejadores y jefes de obra en plantilla. Sin intermediarios. Mayor control y menos sorpresas.',
  },
  {
    icon: '💰',
    title: 'Presupuesto cerrado, sin sorpresas',
    desc: 'Entregamos un presupuesto detallado antes de empezar. El precio no cambia salvo modificaciones acordadas por escrito.',
  },
  {
    icon: '📋',
    title: 'Licencias y trámites incluidos',
    desc: 'Nos ocupamos de todos los permisos: licencia de obras, cédula de habitabilidad, licencia de actividad y subvenciones.',
  },
  {
    icon: '⏱️',
    title: 'Plazo contractual garantizado',
    desc: 'Firmamos el plazo de entrega en el contrato con penalización por incumplimiento. Cumplimos lo que comprometemos.',
  },
  {
    icon: '🛡️',
    title: 'Garantía decenal en obra nueva',
    desc: '10 años de garantía estructural obligatoria en obra nueva. 2 años en instalaciones y 1 año en acabados en reformas.',
  },
]

export default function WhyUs() {
  return (
    <section className="section-pad bg-white">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="eyebrow mb-4">Por qué elegirnos</p>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-dark mb-6">
              Más de 15 años construyendo confianza en Valencia
            </h2>
            <p className="text-slate-500 text-lg md:text-xl mb-12 font-light">
              Trabajamos con rigor técnico, transparencia total y un único interlocutor para cada proyecto. Así lo han valorado nuestros más de 350 clientes.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {REASONS.map((r) => (
                <div key={r.title} className="flex gap-4">
                  <span className="text-3xl flex-shrink-0 mt-1">{r.icon}</span>
                  <div>
                    <h3 className="font-bold text-brand-dark text-base mb-2">{r.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="relative mt-10 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-premium">
              <Image
                src="/images/why-us.jpg"
                alt="Equipo de Constructora en Valencia en obra"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-brand-dark/10" />
            </div>
            {/* Floating stat */}
            <div className="absolute -bottom-6 -left-6 bg-brand-accent text-white rounded-xl p-6 shadow-premium border-2 border-white">
              <p className="text-5xl font-bold mb-1">+350</p>
              <p className="text-white/90 text-sm font-medium uppercase tracking-wide">proyectos<br />completados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
