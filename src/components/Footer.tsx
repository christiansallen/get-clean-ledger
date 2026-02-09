import { Linkedin, Mail } from 'lucide-react';
import { toast } from 'sonner';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Footer() {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12"
        >
          <div
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <div className="flex items-center gap-2 mb-6">
              <img src="/logo.svg" alt="Clean Ledger logo" className="h-9 w-9 rounded-lg" />
              <span className="text-xl font-bold text-white">Clean Ledger</span>
            </div>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Modern bookkeeping and accounting services for ambitious business
              owners. We turn your numbers into actionable insights.
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/joanvillarallen/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h4 className="text-white font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Bookkeeping Cleanup
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Monthly Bookkeeping
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Payroll Management
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-400 transition-colors">
                  Financial Reporting
                </a>
              </li>
            </ul>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <h4 className="text-white font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText('joan@getcleanledger.com');
                    toast.success('Email copied to clipboard');
                  }}
                  className="flex items-start gap-3 hover:text-emerald-400 transition-colors cursor-pointer"
                >
                  <Mail className="h-5 w-5 text-emerald-500 mt-0.5" />
                  <span>joan@getcleanledger.com</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Clean Ledger Accounting, LLC. All
            rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#/privacy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#/terms" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
