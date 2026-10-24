import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Phone, Calculator, ArrowUp, MessageSquare } from 'lucide-react';

interface FloatingActionsProps {
  onOpenCalculator: () => void;
  onOpenQuoteModal: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({
  onOpenCalculator,
  onOpenQuoteModal
}) => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Satchel Powertech! I am interested in a solar consultation for my property.')}`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3 pointer-events-none">
      
      {/* Quick WhatsApp Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all flex items-center space-x-2 group"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-1">
          WhatsApp Us
        </span>
      </a>

      {/* Quick Direct Call Button */}
      <a
        href={`tel:${COMPANY_INFO.phonePrimary}`}
        className="pointer-events-auto p-3 bg-blue-700 hover:bg-blue-800 text-white rounded-full shadow-lg hover:scale-105 transition-all flex items-center space-x-2 group"
        title="Call Solar Expert"
      >
        <Phone className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold">
          Call Now
        </span>
      </a>

      {/* Quick Solar Calculator Shortcut */}
      <button
        onClick={onOpenCalculator}
        className="pointer-events-auto p-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-full shadow-lg hover:scale-105 transition-all flex items-center space-x-2 group"
        title="Open Solar Savings Calculator"
      >
        <Calculator className="w-5 h-5" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 whitespace-nowrap text-xs font-bold">
          Solar Calculator
        </span>
      </button>

      {/* Back to top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto p-3 bg-slate-900/90 hover:bg-slate-900 text-white rounded-full shadow-md border border-slate-700 hover:scale-105 transition-all"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

    </div>
  );
};
