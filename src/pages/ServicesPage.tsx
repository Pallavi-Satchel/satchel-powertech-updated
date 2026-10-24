import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/servicesData';
import { ServicesSection } from '../components/ServicesSection';
import { Zap, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesPageProps {
  onOpenQuoteWithService: (serviceTitle: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenQuoteWithService }) => {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header Banner */}
      <div className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            <Zap className="w-4 h-4 text-emerald-400" />
            <span>Turnkey Solar EPC & Grid Integration</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Our Solar EPC Services
          </h1>
          <p className="text-slate-300 text-base max-w-3xl mt-3 leading-relaxed">
            From residential rooftops under PM Surya Ghar to MW-scale utility power plants, PM Kusum agricultural projects, and hybrid storage systems.
          </p>
        </div>
      </div>

      <div className="py-12">
        <ServicesSection onOpenQuoteWithService={onOpenQuoteWithService} />
      </div>

      {/* Discom Approval Process Information Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-4">
            Discom Net Metering & Government Subsidy Process Guide
          </h3>

          <p className="text-slate-600 text-sm">
            Satchel Powertech handles all regulatory documentation and discom liaison for net metering approvals across Uttar Pradesh (UPPCL / UP NEDA), Delhi (BSES Rajdhani & Yamuna / TPDDL), Haryana (DHBVN), and Rajasthan (JVVNL).
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center mb-2">1</span>
              <strong className="block text-slate-900 text-sm mb-1">Site Survey & 3D Layout</strong>
              <p className="text-slate-500">Engineers conduct shadow analysis and structural roof integrity test.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center mb-2">2</span>
              <strong className="block text-slate-900 text-sm mb-1">Discom Feasibility</strong>
              <p className="text-slate-500">Filing net metering application with UPPCL / Discom portal for grid approval.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center mb-2">3</span>
              <strong className="block text-slate-900 text-sm mb-1">Precision Installation</strong>
              <p className="text-slate-500">Tier-1 modules, Hitachi inverters, and hot-dip galvanized mounting structure.</p>
            </div>

            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
              <span className="w-6 h-6 rounded-full bg-emerald-600 text-white font-bold text-xs flex items-center justify-center mb-2">4</span>
              <strong className="block text-slate-900 text-sm mb-1">Net Meter & Subsidy</strong>
              <p className="text-slate-500">Bi-directional net meter installation & direct PM Surya Ghar subsidy credit.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
