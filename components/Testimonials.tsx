import { TESTIMONIALS } from '@/lib/constants'

export default function Testimonials() {
  return (
    <section className="section-pad bg-brand-dark">
      <div className="container-xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="eyebrow text-brand-accent mb-4">Opiniones de clientes</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Lo que dicen quienes ya han trabajado con nosotros
          </h2>
          <div className="flex items-center justify-center gap-2 text-brand-accent">
            <span className="text-2xl">★★★★★</span>
            <span className="text-slate-300 text-sm ml-2">4.9 de 5 — +127 valoraciones</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-brand-accent/50 transition-colors duration-300">
              <div className="text-brand-accent text-xl mb-6">{'★'.repeat(t.rating)}</div>
              <p className="text-slate-300 text-sm leading-relaxed mb-8 italic font-light">&quot;{t.text}&quot;</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-brand-accent flex items-center justify-center text-brand-dark text-sm font-bold flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-slate-400 text-xs mt-0.5">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
