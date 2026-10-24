import React from 'react';
import { PageView } from '../types';
import { Hero } from '../components/Hero';
import { BrandsMarquee } from '../components/BrandsMarquee';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { SolarCalculator } from '../components/SolarCalculator';
import { ServicesSection } from '../components/ServicesSection';
import { ProjectsShowcase } from '../components/ProjectsShowcase';
import { Testimonials } from '../components/Testimonials';
import { FAQSection } from '../components/FAQSection';

interface HomePageProps {
  onNavigate: (page: PageView) => void;
  onOpenQuoteModal: () => void;
  onOpenDownloadModal: () => void;
  onOpenQuoteWithService: (serviceTitle: string) => void;
  onOpenQuoteWithCalc: (prefill: any) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenQuoteModal,
  onOpenDownloadModal,
  onOpenQuoteWithService,
  onOpenQuoteWithCalc
}) => {
  return (
    <div className="space-y-0">
      <Hero
        onOpenQuoteModal={onOpenQuoteModal}
        onOpenDownloadModal={onOpenDownloadModal}
        onNavigateCalculator={() => onNavigate('calculator')}
        onNavigateProjects={() => onNavigate('projects')}
      />
      <BrandsMarquee />
      <WhyChooseUs
        onOpenQuoteModal={onOpenQuoteModal}
        onOpenDownloadModal={onOpenDownloadModal}
      />
      <SolarCalculator onOpenQuoteWithCalc={onOpenQuoteWithCalc} />
      <ServicesSection onOpenQuoteWithService={onOpenQuoteWithService} />
      <ProjectsShowcase />
      <Testimonials />
      <FAQSection onOpenQuoteModal={onOpenQuoteModal} />
    </div>
  );
};

