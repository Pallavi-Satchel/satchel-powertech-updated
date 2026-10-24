import React from 'react';
import { COMPANY_INFO, COMPANY_STATS } from '../data/companyData';
import { 
  ShieldCheck, Award, Zap, ArrowRight, MessageSquare, 
  Download, Calculator, CheckCircle2, Sun, Sparkles, Building2
} from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onOpenDownloadModal: () => void;
  onNavigateCalculator: () => void;
  onNavigateProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenQuoteModal,
  onOpenDownloadModal,
  onNavigateCalculator,
  onNavigateProjects
}) => {
  return (
    <section className="relative bg-slate-950 text-white overflow-hidden pt-8 pb-16 lg:py-20">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-luminosity scale-105"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=2000')`
        }}
      />
      
      {/* Gradient Vignette & Glow */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Empanelment Badges Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <div className="inline-flex items-center space-x-2 text-[#16A34A] font-bold text-xs uppercase tracking-widest bg-[#16A34A]/10 border border-[#16A34A]/20 px-3.5 py-1.5 rounded-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#16A34A] animate-ping shrink-0" />
            <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
            <span>MNRE & MSME Registered Solar EPC</span>
          </div>

          <div className="inline-flex items-center space-x-2 text-amber-300 font-bold text-xs uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3.5 py-1.5 rounded-md backdrop-blur-md">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Authorized Partner: Redington India & Hitachi Solar</span>
          </div>

          <div className="inline-flex items-center space-x-2 text-blue-300 font-bold text-xs uppercase tracking-widest bg-blue-500/10 border border-blue-500/20 px-3.5 py-1.5 rounded-md backdrop-blur-md">
            <Zap className="w-4 h-4 text-blue-400" />
            <span>UP NEDA & PAN India Discom Empaneled</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-2 text-[#16A34A] font-extrabold text-xs uppercase tracking-widest">
              <span className="w-8 h-[2px] bg-[#16A34A]"></span>
              <span>Powering a Sustainable Future Through Smart Solar Solutions</span>
            </div>

            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-black text-white tracking-tighter leading-[1.1]">
              Leading Solar EPC Partner in <span className="text-[#16A34A] underline decoration-[#F97316] decoration-4 underline-offset-8">India</span>
            </h1>

            <p className="text-slate-300 text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
              Delivering turnkey solar power solutions for Residential, Commercial, Industrial, and Government projects. Specializing in Rooftop Systems, PM Kusum Scheme, Utility Ground Plants, and Hybrid Storage.
            </p>

            {/* Feature Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs font-bold uppercase tracking-wider text-slate-200">
              <div className="flex items-center space-x-2 bg-slate-900/90 border border-slate-800 p-3 rounded-md">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Up to ₹78,000 PM Subsidy</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/90 border border-slate-800 p-3 rounded-md">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>40% Tax Depreciation (C&I)</span>
              </div>
              <div className="flex items-center space-x-2 bg-slate-900/90 border border-slate-800 p-3 rounded-md">
                <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
                <span>Hitachi Inverters Distribution</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-4 text-xs font-extrabold uppercase tracking-widest text-white bg-[#F97316] hover:bg-orange-600 rounded-md shadow-xl shadow-orange-500/20 transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Get Free Consultation</span>
              </button>

              <button
                onClick={onNavigateCalculator}
                className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-white bg-[#1E3A8A] hover:bg-blue-900 border border-blue-700/50 rounded-md transition-all flex items-center justify-center space-x-2"
              >
                <Calculator className="w-4 h-4 text-[#16A34A]" />
                <span>Solar ROI Calculator</span>
              </button>

              <button
                onClick={onOpenDownloadModal}
                className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-transparent hover:bg-slate-900 rounded-md border border-slate-800 transition-colors flex items-center justify-center space-x-2"
              >
                <Download className="w-4 h-4 text-slate-400" />
                <span>Company Profile</span>
              </button>
            </div>
          </div>

          {/* Right Column: Highlight Card / Interactive Quick Quote Box */}
          <div className="lg:col-span-4">
            <div className="bg-slate-900/90 border-2 border-slate-800 rounded-xl p-6 shadow-2xl backdrop-blur-xl relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#16A34A]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-md bg-[#16A34A]/20 text-[#16A34A] flex items-center justify-center font-bold">
                    <Sun className="w-5 h-5 text-[#F97316]" />
                  </div>
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-widest text-white">Why Satchel Powertech?</h3>
                    <p className="text-[10px] text-slate-400 uppercase font-semibold">Trusted Solar EPC Partner</p>
                  </div>
                </div>
                <span className="text-[10px] bg-[#16A34A]/20 text-emerald-300 border border-[#16A34A]/30 px-2 py-0.5 rounded font-mono font-bold">
                  25+ MW
                </span>
              </div>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-start space-x-3 p-3 rounded-md bg-slate-800/60 border border-slate-700/60">
                  <Building2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-extrabold uppercase text-[11px] text-white">In-House Engineering</p>
                    <p className="text-slate-400 text-[11px] leading-snug">PVsyst 3D shading simulations & zero subcontracting guarantee.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-md bg-slate-800/60 border border-slate-700/60">
                  <Zap className="w-4 h-4 text-[#F97316] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-extrabold uppercase text-[11px] text-white">Hitachi Authorized Partner</p>
                    <p className="text-slate-400 text-[11px] leading-snug">Direct OEM supply & local field maintenance engineering support.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 rounded-md bg-slate-800/60 border border-slate-700/60">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-extrabold uppercase text-[11px] text-white">PM Kusum & Discom Liaison</p>
                    <p className="text-slate-400 text-[11px] leading-snug">End-to-end net-metering approvals across UPPCL, BSES, DHBVN.</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-800 text-center">
                <button
                  onClick={onNavigateProjects}
                  className="w-full py-2.5 bg-[#16A34A]/20 hover:bg-[#16A34A]/30 text-emerald-300 border border-[#16A34A]/30 font-bold uppercase text-[11px] tracking-wider rounded-md transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>Explore Featured 4 MW Kusum & C&I Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Editorial Feature Strip / Bottom Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-5 gap-4">
          {COMPANY_STATS.map((stat, idx) => (
            <div key={idx} className="bg-slate-900/60 border border-slate-800 p-4 rounded-md relative group hover:border-[#16A34A]/50 transition-colors">
              <span className="text-xs font-serif italic text-[#16A34A] opacity-70 block mb-0.5">0{idx + 1}</span>
              <p className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-200 mt-1">{stat.label}</p>
              <p className="text-[10px] text-slate-400 mt-0.5 hidden sm:block">{stat.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
