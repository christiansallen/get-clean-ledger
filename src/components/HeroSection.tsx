import { ArrowRight } from 'lucide-react'
import { useOpenCalendly } from './Layout'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
export function HeroSection() {
  const openCalendly = useOpenCalendly()
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation()
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div
            ref={leftRef}
            className={`transition-opacity duration-1000 ${leftVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
          >
            <div className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-emerald-600 mr-2"></span>
              Accepting New Clients for 2026
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl mb-6 leading-tight">
              From Messy Books to{' '}
              <span className="text-primary">
                Confident Decisions in 30 Days
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Messy books and confusing numbers cost you time, money, and
              confidence. We help business owners clean up their finances fast,
              so you can make informed decisions that drive growth.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openCalendly()}
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-white shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:-translate-y-0.5 transition-all"
              >
                Book Free 1:1 Session
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-700 hover:border-primary hover:text-primary transition-all"
              >
                View Our Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
