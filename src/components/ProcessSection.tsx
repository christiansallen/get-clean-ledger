import type { ElementType } from 'react';
import { Phone, Search, Sparkles, LineChart } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const steps = [
  {
    number: '01',
    title: 'Book a Free Call',
    description:
      'We discuss your current situation, pain points, and goals to see if we are a good fit.',
    icon: Phone,
  },
  {
    number: '02',
    title: 'We Audit Your Books',
    description:
      'Our team performs a deep-dive diagnostic of your financial records to identify issues.',
    icon: Search,
  },
  {
    number: '03',
    title: 'Clean & Organize',
    description:
      'We fix errors, reconcile accounts, and set up a streamlined system for the future.',
    icon: Sparkles,
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description:
      'Receive accurate monthly reports that help you understand and manage your numbers.',
    icon: LineChart,
  },
];

type Step = { number: string; title: string; description: string; icon: ElementType };

export function ProcessSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-soft translate-x-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-20 transition-opacity duration-1000 ${headerVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide mb-2">
            How It Works
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Simple Path to Financial Clarity
          </h3>
          <p className="text-lg text-slate-600">
            We have refined our onboarding process to be as smooth and painless
            as possible for busy business owners.
          </p>
        </div>

        <div className="hidden md:block relative">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-slate-100 via-emerald-100 to-slate-100 -translate-y-1/2 z-0"></div>
          <div className="grid md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <DesktopStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>

        <div className="md:hidden relative">
          <div className="absolute left-[27px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-200 via-emerald-100 to-slate-100 z-0"></div>
          <div className="space-y-8 relative z-10">
            {steps.map((step, index) => (
              <MobileStep key={index} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function DesktopStep({ step, index }: { step: Step; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center bg-white p-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="w-16 h-16 rounded-full bg-white border-4 border-emerald-50 flex items-center justify-center mb-6 shadow-sm relative group hover:border-emerald-200 transition-colors">
        <step.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
        <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold border-2 border-white">
          {step.number}
        </div>
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h4>
      <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
    </div>
  );
}

function MobileStep({ step, index }: { step: Step; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });
  return (
    <div
      ref={ref}
      className={`flex gap-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="flex-shrink-0 relative">
        <div className="w-14 h-14 rounded-full bg-white border-4 border-emerald-100 flex items-center justify-center shadow-sm">
          <step.icon className="h-5 w-5 text-primary" />
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold border-2 border-white">
          {step.number}
        </div>
      </div>
      <div className="pt-2 pb-4">
        <h4 className="text-lg font-bold text-slate-900 mb-1.5">{step.title}</h4>
        <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
      </div>
    </div>
  );
}
