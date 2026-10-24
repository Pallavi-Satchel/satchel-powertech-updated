import React, { useState } from 'react';
import { PageView } from '../types';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Phone, Mail, MapPin, ShieldCheck, Sun, ArrowRight, CheckCircle2,
  Lock, Globe, Send, MessageSquare
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenQuoteModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuoteModal }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setNewsletterEmail('');
      }, 4000);
    }
  };

  const handleNav = (page: PageView) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Banner inside Footer: Call to Action */}
        <div className="bg-gradient-to-r from-emerald-900/90 via-slate-900 to-blue-950 border border-emerald-500/30 rounded-2xl p-8 mb-16 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-emerald-500/30">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Authorized Solar EPC Partner</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to Lower Your Electricity Expense by Up to 90%?
              </h3>
              <p className="text-slate-300 text-sm mt-2 max-w-2xl">
                Get a free site survey, customized 3D solar layout proposal, and financial payback analysis for your rooftop or commercial unit in Noida & PAN India.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                <span>Request Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleNav('calculator')}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-slate-800/90 hover:bg-slate-800 border border-slate-700 rounded-xl transition-colors"
              >
                Solar ROI Calculator
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Column 1: Company Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <Sun className="w-6 h-6 text-amber-300" />
              </div>
              <div>
                <span className="text-xl font-black text-white tracking-tight">SATCHEL </span>
                <span className="text-xl font-black text-emerald-400">POWERTECH</span>
                <p className="text-[10px] text-slate-400 uppercase font-semibold">Satchel Powertech Pvt. Ltd.</p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed pr-4">
              A premier Solar EPC company in Noida, Uttar Pradesh. Specializing in residential rooftop solar, commercial & industrial power plants, ground mounted utility projects, PM Kusum schemes, and Hitachi inverter distribution.
            </p>

            <div className="space-y-2 text-xs text-slate-300 pt-2">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.headquarters}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{COMPANY_INFO.phonePrimary} / {COMPANY_INFO.phoneSecondary}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{COMPANY_INFO.emailInfo}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px]">
              <span className="bg-slate-900 border border-slate-800 text-emerald-400 px-2.5 py-1 rounded-md font-medium">
                {COMPANY_INFO.mnreReg}
              </span>
              <span className="bg-slate-900 border border-slate-800 text-slate-300 px-2.5 py-1 rounded-md">
                MSME: {COMPANY_INFO.msmeReg}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-emerald-400 transition-colors">About Satchel Powertech</button>
              </li>
              <li>
                <button onClick={() => handleNav('projects')} className="hover:text-emerald-400 transition-colors">Our 25+ MW Projects</button>
              </li>
              <li>
                <button onClick={() => handleNav('calculator')} className="hover:text-emerald-400 transition-colors">Solar Savings Calculator</button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-emerald-400 transition-colors">Products & Hitachi Catalog</button>
              </li>
              <li>
                <button onClick={() => handleNav('downloads')} className="hover:text-emerald-400 transition-colors">Company Profile PDF</button>
              </li>
              <li>
                <button onClick={() => handleNav('careers')} className="hover:text-emerald-400 transition-colors">Career Opportunities</button>
              </li>
              <li>
                <button onClick={() => handleNav('news')} className="hover:text-emerald-400 transition-colors">News & Solar Articles</button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-emerald-400 transition-colors">Contact Office</button>
              </li>
            </ul>
          </div>

          {/* Column 3: Solar EPC Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              EPC Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 text-left">Residential Rooftop Solar</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 text-left">Commercial & Industrial Solar</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 text-left">PM Kusum Solar Scheme</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 text-left">Ground Mounted Power Plants</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 text-left">Hybrid Solar + Battery (BESS)</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 text-left">Net Metering & Discom Approvals</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 text-left">Operation & Maintenance (O&M)</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-emerald-400 text-left">Electrical Substation Setup</button></li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Discom Approvals */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-l-2 border-emerald-500 pl-2">
              Stay Updated
            </h4>
            <p className="text-xs text-slate-400 mb-3">
              Subscribe to receiving latest solar policy updates, PM Surya Ghar subsidy notifications, and green energy tips.
            </p>

            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  className="w-full bg-slate-900 border border-slate-800 rounded-lg py-2.5 px-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold py-2.5 rounded-lg transition-colors flex items-center justify-center space-x-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{subscribed ? 'Subscribed!' : 'Subscribe Newsletter'}</span>
              </button>
            </form>

            <div className="mt-6 pt-4 border-t border-slate-800/80">
              <span className="text-[11px] font-bold text-slate-300 block mb-1.5">
                Discom Approvals Supported:
              </span>
              <p className="text-[10px] text-slate-500 leading-normal">
                UPPCL (UP NEDA) • BSES Rajdhani & Yamuna • TPDDL • DHBVN • JVVNL • PSPCL
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Satchel Powertech Private Limited. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <button onClick={() => handleNav('contact')} className="hover:text-slate-300">Privacy Policy</button>
            <button onClick={() => handleNav('contact')} className="hover:text-slate-300">Terms of Service</button>
            <button 
              onClick={() => handleNav('admin')}
              className="text-slate-400 hover:text-emerald-400 font-mono text-xs flex items-center space-x-1"
            >
              <Lock className="w-3 h-3" />
              <span>Admin Portal</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
