import React from 'react';
import { BRAND_PARTNERS } from '../data/companyData';
import { Award, ShieldCheck } from 'lucide-react';

export const BrandsMarquee: React.FC = () => {
  return (
    <section className="py-12 bg-white border-y border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center space-x-2 bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
          <Award className="w-3.5 h-3.5 text-emerald-600" />
          <span>Authorized OEM & Distribution Ecosystem</span>
        </div>
        <h3 className="text-lg font-bold text-slate-900">
          Trusted Tier-1 Solar PV & Inverter OEM Brands
        </h3>
        <p className="text-xs text-slate-500 mt-1">
          Authorized Channel Partner of Redington India Ltd. • Authorized Distributor for Hitachi Solar Inverters
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden">
        <div className="flex space-x-4 animate-marquee whitespace-nowrap">
          {BRAND_PARTNERS.concat(BRAND_PARTNERS).map((brand, idx) => (
            <div
              key={idx}
              className={`inline-flex items-center space-x-2 border px-4 py-2.5 rounded-xl transition-all shadow-xs ${brand.bgColor}`}
            >
              <span className={`font-black text-sm tracking-tight ${brand.textColor}`}>
                {brand.logoText}
              </span>
              <div className="h-3 w-px bg-slate-300" />
              <span className="text-[10px] font-semibold text-slate-600">
                {brand.category}
              </span>
              {brand.badge && (
                <span className="text-[9px] font-bold uppercase bg-white/80 text-slate-800 px-1.5 py-0.5 rounded border border-slate-200 shadow-2xs">
                  {brand.badge}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
