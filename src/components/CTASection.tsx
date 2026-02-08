import { ArrowRight } from 'lucide-react';
import { useOpenCalendly } from './Layout';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function CTASection() {
  const openCalendly = useOpenCalendly();
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-emerald-500 blur-3xl animate-float"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 rounded-full bg-emerald-800 blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 border-4 border-emerald-500/10 rounded-full animate-spin-slow -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to Take Control of Your Finances?
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Stop worrying about your books and start focusing on your business
            growth. Schedule your free consultation today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => openCalendly()}
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-emerald-500/20 hover:bg-emerald-400 hover:scale-105 transition-all duration-200"
            >
              Book Free Session
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <p className="text-slate-400 text-sm mt-4 sm:mt-0 sm:ml-4">
              No credit card required &bull; Free 30-min strategy call
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
