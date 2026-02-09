import type { ElementType } from 'react';
import { BookOpen, Calculator, Users, Shield } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    title: 'Bookkeeping Cleanup',
    description:
      'Behind on your books? We catch you up, reconcile accounts, and organize everything so you are tax-ready.',
    icon: BookOpen,
  },
  {
    title: 'Monthly Bookkeeping',
    description:
      'Hands-off financial management. We handle transactions, categorization, and reconciliation every single month.',
    icon: Calculator,
  },
  {
    title: 'Payroll Management',
    description:
      'Seamless payroll processing, benefits administration, and compliance handling for your growing team.',
    icon: Users,
  },
  {
    title: 'Financial Reporting',
    description:
      'Crystal clear P&L, Balance Sheet, and Cash Flow statements delivered monthly.',
    icon: Shield,
  },
];

export function ServicesSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#059669 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      ></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-reverse -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-opacity duration-1000 ${headerVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-base font-semibold text-primary uppercase tracking-wide mb-2">
            Our Expertise
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Grow
          </h3>
          <p className="text-lg text-slate-600">
            From day-to-day bookkeeping to accurate monthly reports, we handle
            the numbers so you can focus on the business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: { title: string; description: string; icon: ElementType };
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-emerald-100 transition-all duration-300 group ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="h-12 w-12 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
        <service.icon className="h-6 w-6" />
      </div>
      <h4 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h4>
      <p className="text-slate-600 leading-relaxed">{service.description}</p>
    </div>
  );
}
