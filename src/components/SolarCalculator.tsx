import React, { useState, useMemo } from 'react';
import { CalculatorState } from '../types';
import { calculateSolarSavings, INDIAN_STATES_TARIFF } from '../utils/calculator';
import { 
  Calculator, Zap, IndianRupee, Sun, ShieldCheck, 
  ArrowRight, CheckCircle2, TrendingUp, Trees, Leaf, Building, Home, Factory
} from 'lucide-react';

interface SolarCalculatorProps {
  onOpenQuoteWithCalc: (prefillData: { monthlyBill: string; propertyType: any; recommendedKw: number }) => void;
}

export const SolarCalculator: React.FC<SolarCalculatorProps> = ({ onOpenQuoteWithCalc }) => {
  const [calcState, setCalcState] = useState<CalculatorState>({
    propertyType: 'residential',
    monthlyBill: 6000,
    state: 'UP',
    tariffPerUnit: 0,
    availableRoofArea: 500
  });

  const results = useMemo(() => {
    return calculateSolarSavings(calcState);
  }, [calcState]);

  const currentStateTariff = INDIAN_STATES_TARIFF[calcState.state] || INDIAN_STATES_TARIFF['UP'];

  const getEffectiveTariff = () => {
    if (calcState.propertyType === 'residential') return currentStateTariff.resTariff;
    if (calcState.propertyType === 'commercial') return currentStateTariff.comTariff;
    return currentStateTariff.indTariff;
  };

  const handleRequestQuote = () => {
    onOpenQuoteWithCalc({
      monthlyBill: `₹${calcState.monthlyBill.toLocaleString('en-IN')}`,
      propertyType: calcState.propertyType === 'residential' ? 'Residential' : calcState.propertyType === 'commercial' ? 'Commercial' : 'Industrial',
      recommendedKw: results.recommendedCapacityKw
    });
  };

  return (
    <section className="py-16 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white relative overflow-hidden" id="solar-calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>Interactive Indian Solar ROI & Subsidy Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Calculate Your Solar Savings & PM Surya Ghar Subsidy
          </h2>
          <p className="text-slate-300 text-sm mt-3">
            Estimate recommended plant capacity, Govt Central Subsidy benefit, monthly bill savings, and payback period tailored for Uttar Pradesh, Delhi NCR, and PAN India power consumers.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Input Form Controls */}
          <div className="lg:col-span-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
            
            {/* Step 1: Property Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                1. Select Installation Type
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setCalcState({ ...setCalcState, propertyType: 'residential', monthlyBill: 6000, availableRoofArea: 500 })}
                  className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all flex flex-col items-center space-y-1.5 ${
                    calcState.propertyType === 'residential'
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                      : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <Home className="w-5 h-5" />
                  <span>Residential</span>
                  <span className="text-[10px] font-normal opacity-90">PM Surya Ghar</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCalcState({ ...setCalcState, propertyType: 'commercial', monthlyBill: 35000, availableRoofArea: 2500 })}
                  className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all flex flex-col items-center space-y-1.5 ${
                    calcState.propertyType === 'commercial'
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                      : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <Building className="w-5 h-5" />
                  <span>Commercial</span>
                  <span className="text-[10px] font-normal opacity-90">Offices / Schools</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCalcState({ ...setCalcState, propertyType: 'industrial', monthlyBill: 150000, availableRoofArea: 10000 })}
                  className={`py-3 px-2 rounded-xl text-xs font-bold border transition-all flex flex-col items-center space-y-1.5 ${
                    calcState.propertyType === 'industrial'
                      ? 'bg-emerald-600 text-white border-emerald-500 shadow-md'
                      : 'bg-slate-800/80 text-slate-300 border-slate-700 hover:bg-slate-800'
                  }`}
                >
                  <Factory className="w-5 h-5" />
                  <span>Industrial</span>
                  <span className="text-[10px] font-normal opacity-90">Factory / Shed</span>
                </button>
              </div>
            </div>

            {/* Step 2: State Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                2. Select State & Discom Tariff
              </label>
              <select
                value={calcState.state}
                onChange={(e) => setCalcState({ ...calcState, state: e.target.value })}
                className="w-full bg-slate-800 border border-slate-700 rounded-xl py-3 px-4 text-sm text-white font-medium focus:outline-none focus:border-emerald-500"
              >
                {Object.entries(INDIAN_STATES_TARIFF).map(([code, info]) => (
                  <option key={code} value={code}>
                    {info.stateName} (Avg: ₹{getEffectiveTariff()}/unit)
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Monthly Electricity Bill Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  3. Average Monthly Bill (₹)
                </label>
                <span className="text-lg font-black text-amber-400">
                  ₹{calcState.monthlyBill.toLocaleString('en-IN')} / month
                </span>
              </div>
              <input
                type="range"
                min={1500}
                max={calcState.propertyType === 'residential' ? 50000 : 500000}
                step={500}
                value={calcState.monthlyBill}
                onChange={(e) => setCalcState({ ...calcState, monthlyBill: Number(e.target.value) })}
                className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 mt-1">
                <span>₹1,500</span>
                <span>₹{calcState.propertyType === 'residential' ? '50,000+' : '5,00,000+'}</span>
              </div>
            </div>

            {/* Step 4: Available Roof Area */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  4. Available Roof Area (Sq. Ft.)
                </label>
                <span className="text-sm font-bold text-slate-200">
                  {calcState.availableRoofArea.toLocaleString('en-IN')} sq. ft.
                </span>
              </div>
              <input
                type="range"
                min={100}
                max={calcState.propertyType === 'residential' ? 5000 : 50000}
                step={100}
                value={calcState.availableRoofArea}
                onChange={(e) => setCalcState({ ...calcState, availableRoofArea: Number(e.target.value) })}
                className="w-full accent-emerald-500 h-2 bg-slate-800 rounded-lg cursor-pointer"
              />
              <p className="text-[11px] text-slate-500 mt-1">
                💡 Standard solar panel requirement: Approx. 90-100 sq. ft. per 1 kW system capacity.
              </p>
            </div>

          </div>

          {/* Right Column: Calculated Results Display */}
          <div className="lg:col-span-6 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/40 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                  Estimated Financial Summary
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">Recommended Solar Solution</h3>
              </div>
              <div className="text-right">
                <span className="text-3xl font-black text-amber-400">
                  {results.recommendedCapacityKw} kW
                </span>
                <span className="block text-[10px] uppercase text-slate-400 font-bold">System Capacity</span>
              </div>
            </div>

            {/* Key Output Metrics */}
            <div className="grid grid-cols-2 gap-4 mb-6">
              
              <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl">
                <p className="text-xs text-slate-400">Estimated Total Cost</p>
                <p className="text-xl font-bold text-white mt-1">
                  ₹{results.estimatedTotalCost.toLocaleString('en-IN')}
                </p>
                <p className="text-[10px] text-slate-500 mt-0.5">Includes installation & net meter</p>
              </div>

              <div className="bg-slate-950/80 border border-emerald-500/30 p-4 rounded-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-500/10 rounded-full blur-xl" />
                <p className="text-xs text-emerald-400 font-bold">
                  {calcState.propertyType === 'residential' ? 'PM Govt. Subsidy Benefit' : 'Accelerated Depr. Tax Benefit'}
                </p>
                <p className="text-xl font-bold text-emerald-300 mt-1">
                  {calcState.propertyType === 'residential' 
                    ? `₹${results.estimatedGovtSubsidy.toLocaleString('en-IN')}` 
                    : '40% Tax Credit'}
                </p>
                <p className="text-[10px] text-slate-400 mt-0.5">
                  {calcState.propertyType === 'residential' ? 'Direct Central Bank Transfer' : 'Under Sec 32 Income Tax'}
                </p>
              </div>

            </div>

            {/* Net Investment Highlight */}
            <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-xl mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-400 font-semibold">Net Investment After Subsidy</p>
                <p className="text-2xl font-black text-white mt-0.5">
                  ₹{results.netInvestmentCost.toLocaleString('en-IN')}
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block bg-amber-400/20 text-amber-300 border border-amber-400/30 px-2.5 py-1 rounded-full text-xs font-bold">
                  {results.paybackPeriodYears} Years Payback
                </span>
                <p className="text-[10px] text-slate-400 mt-1">25-Year Linear Warranty</p>
              </div>
            </div>

            {/* Savings Projections */}
            <div className="space-y-3 mb-6 text-xs">
              <div className="flex justify-between items-center py-2 border-b border-slate-800">
                <span className="text-slate-300 flex items-center space-x-2">
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span>Monthly Electricity Bill Savings:</span>
                </span>
                <span className="font-bold text-emerald-300 text-sm">
                  ₹{results.monthlySavings.toLocaleString('en-IN')} / month
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-800">
                <span className="text-slate-300 flex items-center space-x-2">
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span>Annual Green Power Generation:</span>
                </span>
                <span className="font-bold text-white text-sm">
                  {results.annualUnitsGenerated.toLocaleString('en-IN')} kWh (Units)
                </span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-slate-800">
                <span className="text-slate-300 flex items-center space-x-2">
                  <Leaf className="w-4 h-4 text-emerald-400" />
                  <span>25-Year Cumulative Savings:</span>
                </span>
                <span className="font-bold text-emerald-400 text-sm">
                  ₹{results.twentyFiveYearSavings.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="bg-emerald-950/40 border border-emerald-500/20 p-3.5 rounded-xl mb-6 flex items-center justify-between text-xs">
              <div className="flex items-center space-x-2">
                <Trees className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-300">
                  Equivalent to planting <strong>{results.treesPlantedEquivalent} trees</strong> / year
                </span>
              </div>
              <span className="text-emerald-300 font-bold">
                {results.co2OffsetTonsPerYear} Tons CO₂ Saved
              </span>
            </div>

            {/* Action Button */}
            <button
              onClick={handleRequestQuote}
              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-slate-950 font-black rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 text-sm"
            >
              <span>Get Formal Proposal for {results.recommendedCapacityKw} kW Plant</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
