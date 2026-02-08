import { Clock, ShieldCheck, TrendingUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const results = [
  {
    icon: Clock,
    stat: '20+',
    unit: 'Hours',
    label: 'Saved every month',
    description:
      'Direct support and quick turnaround so you can stop wrestling with spreadsheets and focus on your business.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: ShieldCheck,
    stat: '99.9%',
    unit: '',
    label: 'Accuracy guaranteed',
    description:
      'Every transaction categorized correctly. Every report double-checked. No surprises at tax time.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: TrendingUp,
    stat: '30',
    unit: 'Days',
    label: 'To financial clarity',
    description:
      'Month-to-month flexibility with no long-term contracts. We earn your trust every single month.',
    color: 'bg-emerald-50 text-emerald-600',
  },
];

export function WhyChooseUsSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  return (
    <section id="why-us" className="py-24 bg-emerald-600 overflow-hidden relative">
      <div className="absolute top-1/3 left-10 w-32 h-32 border-4 border-white/10 rounded-full opacity-20 animate-spin-slow"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-emerald-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
      <div className="absolute top-[-5%] right-[-5%] w-96 h-96 rounded-full bg-white blur-3xl opacity-10 animate-float-reverse"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 ${headerVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-base font-semibold text-emerald-200 uppercase tracking-wide mb-2">
            Why Choose Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            More Than Just Data Entry.
            <br />
            We Are Your Financial Partner.
          </h3>
          <p className="text-lg text-emerald-100">
            Most bookkeepers just record history. We help you write the future.
            Our proactive approach ensures you never miss a deduction or a
            growth opportunity.
          </p>
        </div>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {results.map((result, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
              style={{
                transitionDelay: `${index * 150}ms`,
                opacity: cardsVisible ? 1 : 0,
                transform: cardsVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'all 0.7s ease',
              }}
            >
              <div
                className={`h-14 w-14 rounded-xl ${result.color} flex items-center justify-center mb-4`}
              >
                <result.icon className="h-7 w-7" />
              </div>
              <div className="flex items-baseline justify-center gap-1.5 mb-1">
                <span className="text-4xl font-bold text-slate-900">{result.stat}</span>
                {result.unit && (
                  <span className="text-lg font-semibold text-slate-400">{result.unit}</span>
                )}
              </div>
              <p className="text-sm font-semibold text-slate-700 mb-3">{result.label}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{result.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
