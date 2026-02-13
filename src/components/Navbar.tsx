import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { useOpenCalendly } from './Layout';

function navigateToSection(href: string, callback?: () => void) {
  const hash = window.location.hash;
  // If we're on a subpage (e.g. #/privacy), go home first then scroll
  if (hash.startsWith('#/')) {
    window.location.hash = '';
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      callback?.();
    }, 100);
  } else {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    callback?.();
  }
}

export function Navbar() {
  const openCalendly = useOpenCalendly();
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-20 items-center justify-between">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2"
          >
            <img src="/clean-ledger-logo.png" alt="Clean Ledger logo" className="h-9 w-9 rounded-lg animate-fade-in" />
            <span className="text-xl font-bold text-slate-900">Clean Ledger</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  navigateToSection(link.href);
                }}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => openCalendly()}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all"
            >
              Book Free Session
            </button>
          </div>

          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white absolute w-full shadow-lg">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-slate-600 hover:bg-gray-50 hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  navigateToSection(link.href);
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 px-3 pb-2">
              <button
                onClick={() => openCalendly()}
                className="w-full inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-700"
              >
                Book Free Session
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
