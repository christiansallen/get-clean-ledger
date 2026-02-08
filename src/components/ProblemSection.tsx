import { DollarSign, TrendingDown, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const problems = [
  {
    title: 'Overpaid Taxes',
    icon: DollarSign,
    points: [
      'Deductions get missed',
      'Expenses are miscategorized',
      'Income looks higher than it really is',
    ],
  },
  {
    title: 'Bad Decisions',
    icon: TrendingDown,
    points: [
      "You don't know what's actually profitable",
      'Pricing, hiring, and spending are guesses',
      'One wrong move = months of lost profit',
    ],
  },
  {
    title: 'Time + Cleanup Costs',
    icon: Clock,
    points: [
      'Last-minute tax scrambles',
      'Extra accounting fees to fix preventable messes',
      '40–80 hours wasted every year',
    ],
  },
];

export function ProblemSection() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  return (
    <section className="py-20 bg-slate-800 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      ></div>
      <div className="absolute top-0 left-0 w-80 h-80 bg-slate-900 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-900 rounded-full mix-blend-multiply filter blur-3xl opacity-40 translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 transition-opacity duration-1000 ${headerVisible ? 'opacity-100 animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 className="text-base font-semibold text-slate-400 uppercase tracking-wide mb-2">
            The Problem
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Messy Books Cost You More Than You Think
          </h3>
          <p className="text-lg text-slate-400">
            When your finances are disorganized, the damage goes far beyond a
            cluttered spreadsheet.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <ProblemCard key={index} problem={problem} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  problem,
  index,
}: {
  problem: (typeof problems)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600/50 hover:border-red-500/30 hover:bg-slate-700/70 transition-all duration-300 group ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative h-12 w-12 rounded-lg bg-red-500/15 flex items-center justify-center text-red-400 mb-6 group-hover:bg-red-500 group-hover:text-white transition-all duration-300">
        <problem.icon
          className="h-6 w-6 animate-pulse"
          style={{ animationDuration: '3s' }}
        />
        <div
          className="absolute inset-0 rounded-lg bg-red-500/20 animate-ping opacity-0 group-hover:opacity-100"
          style={{ animationDuration: '2s' }}
        ></div>
      </div>
      <h4 className="text-xl font-bold text-white mb-4">{problem.title}</h4>
      <ul className="space-y-3">
        {problem.points.map((point, i) => (
          <li key={i} className="flex items-start gap-2 text-slate-300">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-400/60 flex-shrink-0"></span>
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
