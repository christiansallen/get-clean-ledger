import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const faqs = [
  {
    question: 'How quickly can you get my books organized?',
    answer:
      "It depends on the volume of transactions and how far behind you are. Typically, we can complete a full cleanup within 2-4 weeks. We'll give you a specific timeline after our initial assessment.",
  },
  {
    question: 'I already use accounting software do I still need your services?',
    answer:
      "Even with software, many business owners miss errors, misclassifications, or reporting gaps. I provide hands-on accuracy and actionable insights that software alone can't deliver.",
  },
  {
    question: 'Can you handle payroll for my team?',
    answer:
      'Absolutely. Payroll is included, and we ensure your employees are paid accurately and on time every cycle.',
  },
  {
    question: 'Do I need to sign a long-term contract?',
    answer:
      'No. All our monthly services are month-to-month. We believe we should earn your business every single month. You can cancel with 30 days notice.',
  },
  {
    question: 'Will I understand the reports you give me?',
    answer:
      'Yes. Every report is designed to be clear, simple, and actionable, so you know exactly what your numbers mean and how to use them.',
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();
  return (
    <section id="faq" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-10 w-40 h-40 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse-soft"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div
            ref={leftRef}
            className={`lg:col-span-4 transition-all duration-1000 ${leftVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <h2 className="text-base font-semibold text-primary uppercase tracking-wide mb-2">
              FAQ
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Common Questions
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Everything you need to know about our services. Can't find the
              answer you're looking for?
            </p>
            <button className="inline-flex items-center justify-center rounded-full border-2 border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-700 hover:border-primary hover:text-primary transition-all">
              Contact Support
            </button>
          </div>

          <div
            ref={rightRef}
            className={`lg:col-span-8 transition-all duration-1000 ${rightVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-200 hover:border-emerald-200"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                  >
                    <span className="text-lg font-semibold text-slate-900">
                      {faq.question}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-primary flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-slate-400 flex-shrink-0" />
                    )}
                  </button>
                  <div
                    className={`px-6 text-slate-600 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-48 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    {faq.answer}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
