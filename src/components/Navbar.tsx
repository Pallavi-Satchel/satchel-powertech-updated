import React, { useState } from 'react';
import { PageView } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Phone, Mail, MapPin, Zap, ShieldCheck, Menu, X, 
  Calculator, Download, UserCheck, MessageSquare, ArrowRight,
  Sun, Award, ChevronDown
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenQuoteModal: () => void;
  onOpenDownloadModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuoteModal,
  onOpenDownloadModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; page: PageView; badge?: string }[] = [
    { label: 'Home', page: 'home' },
    { label: 'About Us', page: 'about' },
    { label: 'Services', page: 'services' },
    { label: 'Products', page: 'products' },
    { label: 'Projects', page: 'projects', badge: '25+ MW' },
    { label: 'Solar Calculator', page: 'calculator', badge: 'ROI' },
    { label: 'Downloads', page: 'downloads' },
    { label: 'News & Media', page: 'news' },
    { label: 'Careers', page: 'careers' },
    { label: 'Contact Us', page: 'contact' },
  ];

  const handleNavClick = (page: PageView) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white shadow-sm border-b border-slate-100">
      {/* Top Corporate Strip */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden lg:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <a 
              href={`tel:${COMPANY_INFO.phonePrimary}`} 
              className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-500" />
              <span>{COMPANY_INFO.phonePrimary}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.emailInfo}`} 
              className="flex items-center space-x-1.5 hover:text-emerald-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-emerald-500" />
              <span>{COMPANY_INFO.emailInfo}</span>
            </a>
            <div className="flex items-center space-x-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>Corporate HQ: Noida, Uttar Pradesh</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/60">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span className="font-medium text-emerald-300">{COMPANY_INFO.mnreReg}</span>
            </div>
            <div className="flex items-center space-x-1.5 bg-amber-500/10 text-amber-300 px-2.5 py-1 rounded-full border border-amber-500/30">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>Auth. Hitachi & Redington Partner</span>
            </div>
            <button
              onClick={() => handleNavClick('admin')}
              className={`text-slate-400 hover:text-white transition-colors text-xs font-mono px-2 py-0.5 rounded ${currentPage === 'admin' ? 'text-emerald-400 font-semibold' : ''}`}
              title="Admin CMS & Lead Portal"
            >
              Admin Portal
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Section */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            <div className="w-11 h-11 rounded-lg bg-[#1E3A8A] flex items-center justify-center text-white shadow-md shadow-blue-900/20 group-hover:bg-[#16A34A] transition-colors">
              <Sun className="w-6 h-6 text-[#F97316]" />
            </div>
            <div>
              <div className="flex items-baseline space-x-1">
                <span className="text-xl font-black tracking-tight text-[#1E3A8A]">
                  SATCHEL
                </span>
                <span className="text-xl font-black text-[#16A34A]">
                  POWERTECH
                </span>
              </div>
              <p className="text-[10px] font-bold tracking-widest text-slate-400 uppercase -mt-0.5">
                Solar EPC Partner • Noida
              </p>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`relative px-3 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center space-x-1 ${
                    isActive 
                      ? 'text-[#16A34A] bg-emerald-50/90 font-extrabold' 
                      : 'text-slate-600 hover:text-[#1E3A8A] hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="ml-1 text-[9px] font-black px-1.5 py-0.2 rounded bg-amber-100 text-amber-900 border border-amber-200">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#16A34A] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenDownloadModal}
              className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 rounded-md transition-colors flex items-center space-x-1.5"
            >
              <Download className="w-3.5 h-3.5 text-slate-600" />
              <span>Company Profile</span>
            </button>

            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 text-xs font-extrabold uppercase tracking-widest text-white bg-[#F97316] hover:bg-orange-600 rounded-md shadow-md shadow-orange-500/20 hover:shadow-lg transition-all flex items-center space-x-2 transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Get Solar Quote</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex xl:hidden items-center space-x-2">
            <button
              onClick={onOpenQuoteModal}
              className="md:hidden px-3 py-1.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg shadow-sm"
            >
              Free Quote
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-emerald-600 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-2 shadow-lg max-h-[85vh] overflow-y-auto">
          <div className="bg-emerald-50 p-3 rounded-lg text-xs text-emerald-900 border border-emerald-100 mb-2 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span className="font-medium">MNRE & MSME Registered Solar EPC</span>
            </div>
            <span className="text-[10px] bg-emerald-200 text-emerald-800 px-1.5 py-0.5 rounded font-bold">Verified</span>
          </div>

          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => handleNavClick(link.page)}
                  className={`w-full text-left px-4 py-3 text-sm font-medium rounded-lg flex items-center justify-between transition-colors ${
                    isActive 
                      ? 'bg-emerald-600 text-white font-semibold shadow-sm' 
                      : 'text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${isActive ? 'bg-white text-emerald-800' : 'bg-emerald-100 text-emerald-800'}`}>
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDownloadModal();
              }}
              className="w-full py-2.5 text-xs font-semibold text-slate-700 bg-slate-100 rounded-lg flex items-center justify-center space-x-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>PDF Profile</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full py-2.5 text-xs font-semibold text-white bg-emerald-600 rounded-lg flex items-center justify-center space-x-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Get Free Quote</span>
            </button>
          </div>

          <div className="pt-2 text-center">
            <button
              onClick={() => handleNavClick('admin')}
              className="text-xs text-slate-500 hover:text-emerald-600 font-mono underline"
            >
              Go to Admin CMS Portal
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
