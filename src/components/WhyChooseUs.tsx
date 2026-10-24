import React from 'react';
import { COMPANY_STRENGTHS, COMPANY_INFO } from '../data/companyData';
import { 
  ShieldCheck, Award, Zap, Compass, Layers, MapPin, 
  CheckCircle2, ArrowRight, Sun, Cpu, Check
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
  onOpenDownloadModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  onOpenQuoteModal,
  onOpenDownloadModal
}) => {
  return (
    <section className="py-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[#16A34A] font-extrabold text-xs uppercase tracking-widest mb-3">
            <span className="w-8 h-[2px] bg-[#16A34A]"></span>
            <span>Why Partner With Satchel Powertech</span>
            <span className="w-8 h-[2px] bg-[#16A34A]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#1E3A8A] tracking-tight">
            Engineering Precision & Uncompromised Quality
          </h2>
          <p className="text-slate-600 text-base mt-3 leading-relaxed">
            We bring institutional rigor, authorized OEM partnerships, and end-to-end execution to every solar rooftop, ground-mounted, and PM Kusum installation across India.
          </p>
        </div>

        {/* Strengths Infographic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {COMPANY_STRENGTHS.map((strength, idx) => (
            <div 
              key={idx}
              className="bg-white border-2 border-slate-200/80 rounded-xl p-6 shadow-sm hover:border-[#16A34A] hover:shadow-md transition-all hover:-translate-y-1 group relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 rounded-md bg-emerald-50 text-[#16A34A] flex items-center justify-center group-hover:bg-[#16A34A] group-hover:text-white transition-colors shadow-sm font-bold">
                  {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                  {idx === 1 && <Award className="w-5 h-5" />}
                  {idx === 2 && <Zap className="w-5 h-5" />}
                  {idx === 3 && <Compass className="w-5 h-5" />}
                  {idx === 4 && <Layers className="w-5 h-5" />}
                  {idx === 5 && <MapPin className="w-5 h-5" />}
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-serif italic text-slate-400">0{idx + 1}</span>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#16A34A] bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-md">
                    {strength.badge}
                  </span>
                </div>
              </div>

              <h3 className="text-base font-extrabold text-[#1E3A8A] mb-2 uppercase tracking-tight">
                {strength.title}
              </h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                {strength.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Banner: Authorized Partnerships */}
        <div className="bg-[#1E3A8A] text-white rounded-xl p-8 shadow-xl border border-blue-900 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 text-amber-300 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest">
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>Authorized Strategic OEM Empanelment</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Authorized Partner of Redington India & Hitachi Solar Inverters
              </h3>

              <p className="text-slate-200 text-sm leading-relaxed">
                Satchel Powertech maintains direct distribution tie-ups with <strong className="text-white">Redington India Ltd.</strong> for genuine Tier-1 solar modules (Adani, Waaree, Vikram) and serves as the <strong className="text-emerald-300">Authorized Distributor for Hitachi Solar Inverters</strong> in North India. Enjoy direct manufacturer warranty support and zero counterfeit supply risk.
              </p>

              <div className="flex flex-wrap gap-4 pt-2 text-xs font-bold uppercase tracking-wider">
                <span className="flex items-center space-x-1.5 text-emerald-400">
                  <Check className="w-4 h-4" />
                  <span>Hitachi Inverter Warranty Support</span>
                </span>
                <span className="flex items-center space-x-1.5 text-emerald-400">
                  <Check className="w-4 h-4" />
                  <span>Redington Supply Chain Integration</span>
                </span>
                <span className="flex items-center space-x-1.5 text-emerald-400">
                  <Check className="w-4 h-4" />
                  <span>25-Year Linear Module Guarantee</span>
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                onClick={onOpenQuoteModal}
                className="w-full py-3.5 px-6 bg-[#F97316] hover:bg-orange-600 text-white font-extrabold uppercase tracking-widest text-xs rounded-md shadow-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenDownloadModal}
                className="w-full py-3.5 px-6 bg-slate-900/80 hover:bg-slate-900 text-white font-bold uppercase tracking-wider text-xs rounded-md border border-slate-700 transition-colors flex items-center justify-center space-x-2"
              >
                <span>Download Partner Certificates</span>
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
