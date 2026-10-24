import React, { useState } from 'react';
import { PageView } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { DownloadModal } from './components/DownloadModal';
import { FloatingActions } from './components/FloatingActions';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CalculatorPage } from './pages/CalculatorPage';
import { DownloadsPage } from './pages/DownloadsPage';
import { CareersPage } from './pages/CareersPage';
import { NewsPage } from './pages/NewsPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPage } from './pages/AdminPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  
  const [quotePrefill, setQuotePrefill] = useState({
    serviceTitle: 'Residential Rooftop Solar',
    monthlyBill: '',
    propertyType: 'Residential' as any
  });

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const handleOpenQuoteWithService = (serviceTitle: string) => {
    setQuotePrefill({
      serviceTitle,
      monthlyBill: '',
      propertyType: serviceTitle.toLowerCase().includes('residential') ? 'Residential' : serviceTitle.toLowerCase().includes('industrial') ? 'Industrial' : 'Commercial'
    });
    setIsQuoteModalOpen(true);
  };

  const handleOpenQuoteWithCalc = (calcData: { monthlyBill: string; propertyType: any; recommendedKw: number }) => {
    setQuotePrefill({
      serviceTitle: `Solar Proposal (${calcData.recommendedKw} kW)`,
      monthlyBill: calcData.monthlyBill,
      propertyType: calcData.propertyType
    });
    setIsQuoteModalOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
            onOpenQuoteWithService={handleOpenQuoteWithService}
            onOpenQuoteWithCalc={handleOpenQuoteWithCalc}
          />
        );
      case 'about':
        return (
          <AboutPage
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesPage
            onOpenQuoteWithService={handleOpenQuoteWithService}
          />
        );
      case 'products':
        return (
          <ProductsPage
            onOpenQuoteWithService={handleOpenQuoteWithService}
            onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
          />
        );
      case 'projects':
        return <ProjectsPage />;
      case 'calculator':
        return <CalculatorPage onOpenQuoteWithCalc={handleOpenQuoteWithCalc} />;
      case 'downloads':
        return <DownloadsPage />;
      case 'careers':
        return <CareersPage />;
      case 'news':
        return <NewsPage />;
      case 'contact':
        return <ContactPage />;
      case 'admin':
        return <AdminPage />;
      default:
        return (
          <HomePage
            onNavigate={setCurrentPage}
            onOpenQuoteModal={handleOpenQuoteModal}
            onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
            onOpenQuoteWithService={handleOpenQuoteWithService}
            onOpenQuoteWithCalc={handleOpenQuoteWithCalc}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Top Navbar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        onOpenQuoteModal={handleOpenQuoteModal}
        onOpenDownloadModal={() => setIsDownloadModalOpen(true)}
      />

      {/* Main Page View */}
      <main className="flex-1">
        {renderCurrentPage()}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={setCurrentPage}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Floating Action Buttons */}
      <FloatingActions
        onOpenCalculator={() => {
          setCurrentPage('calculator');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenQuoteModal={handleOpenQuoteModal}
      />

      {/* Primary Quotation / Consultation Modal */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        prefillService={quotePrefill.serviceTitle}
        prefillMonthlyBill={quotePrefill.monthlyBill}
        prefillPropertyType={quotePrefill.propertyType}
      />

      {/* Corporate Profile PDF Download Gate Modal */}
      <DownloadModal
        isOpen={isDownloadModalOpen}
        onClose={() => setIsDownloadModalOpen(false)}
      />

    </div>
  );
}
