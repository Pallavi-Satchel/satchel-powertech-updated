import React from 'react';
import { SolarCalculator } from '../components/SolarCalculator';
import { HelpCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CalculatorPageProps {
  onOpenQuoteWithCalc: (prefill: any) => void;
}

export const CalculatorPage: React.FC<CalculatorPageProps> = ({ onOpenQuoteWithCalc }) => {
  return (
    <div className="bg-slate-950 min-h-screen">
      <div className="pt-8 pb-12">
        <SolarCalculator onOpenQuoteWithCalc={onOpenQuoteWithCalc} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 text-white">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl space-y-6">
          <h3 className="text-xl font-bold text-white border-b border-slate-800 pb-4">
            How Is My Solar ROI & PM Surya Ghar Subsidy Calculated?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-slate-300">
            <div className="space-y-2">
              <strong className="text-amber-400 font-bold block text-sm">Residential Central Subsidy (CFA)</strong>
              <p className="leading-relaxed">
                Under PM Surya Ghar Muft Bijli Yojana, Central Govt provides ₹30,000 for 1 kW, ₹60,000 for 2 kW, and a maximum of ₹78,000 for 3 kW and above directly credited to applicant's bank account.
              </p>
            </div>

            <div className="space-y-2">
              <strong className="text-emerald-400 font-bold block text-sm">40% Accelerated Depreciation (C&I)</strong>
              <p className="leading-relaxed">
                Commercial and industrial power consumers claim 40% income tax depreciation in Year 1 under Sec 32 of Income Tax Act, significantly lowering corporate tax liability.
              </p>
            </div>

            <div className="space-y-2">
              <strong className="text-blue-400 font-bold block text-sm">Discom Net Metering Credit</strong>
              <p className="leading-relaxed">
                Excess solar energy generated during daytime peak hours is exported to UPPCL / Discom grid. Net meter credits roll over to offset evening electricity consumption.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
