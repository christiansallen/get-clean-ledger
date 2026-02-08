import { createContext, useContext } from 'react';
import { Toaster } from 'sonner';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useOpenCalendly as useCalendly } from './CalendlyModal';

const CalendlyContext = createContext<() => void>(() => {});
export const useOpenCalendly = () => useContext(CalendlyContext);

export function Layout({ children }: { children: React.ReactNode }) {
  const openCalendly = useCalendly();

  return (
    <CalendlyContext.Provider value={openCalendly}>
      <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-emerald-100 selection:text-emerald-900">
        <Navbar />
        {children}
        <Footer />
        <Toaster position="bottom-center" richColors />
      </div>
    </CalendlyContext.Provider>
  );
}
