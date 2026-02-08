import { HeroSection } from '../components/HeroSection';
import { ProblemSection } from '../components/ProblemSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { WhyChooseUsSection } from '../components/WhyChooseUsSection';
import { FAQSection } from '../components/FAQSection';
import { CTASection } from '../components/CTASection';

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ProcessSection />
      <WhyChooseUsSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
