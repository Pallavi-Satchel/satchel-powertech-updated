import React, { useState } from 'react';
import { SERVICES_LIST } from '../data/servicesData';
import { ServiceItem } from '../types';
import { 
  Home, Building2, Sun, Tractor, BatteryCharging, Wrench, FileText, Zap,
  CheckCircle2, ArrowRight, ShieldCheck, X, ChevronRight, HelpCircle
} from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteWithService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteWithService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home': return <Home className="w-6 h-6" />;
      case 'Building2': return <Building2 className="w-6 h-6" />;
      case 'Sun': return <Sun className="w-6 h-6" />;
      case 'Tractor': return <Tractor className="w-6 h-6" />;
      case 'BatteryCharging': return <BatteryCharging className="w-6 h-6" />;
      case 'Wrench': return <Wrench className="w-6 h-6" />;
      case 'FileText': return <FileText className="w-6 h-6" />;
      case 'Zap': return <Zap className="w-6 h-6" />;
      default: return <Sun className="w-6 h-6" />;
    }
  };

  return (
    <section className="py-20 bg-white text-slate-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-bold mb-3 border border-emerald-200">
            <Zap className="w-4 h-4 text-emerald-600" />
            <span>Turnkey Solar EPC Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Comprehensive Solar & Electrical Infrastructure
          </h2>
          <p className="text-slate-600 text-base mt-3">
            From residential rooftops to MW-scale utility power plants, PM Kusum projects, and hybrid storage systems — Satchel Powertech delivers end-to-end engineering excellence.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((service) => (
            <div
              key={service.id}
              className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden hover:shadow-lg transition-all flex flex-col group hover:-translate-y-1"
            >
              {/* Image Preview */}
              <div className="relative h-44 overflow-hidden bg-slate-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-emerald-600 flex items-center justify-center shadow-md">
                  {renderIcon(service.icon)}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="text-xs font-bold text-slate-700 hover:text-emerald-600 flex items-center space-x-1"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteWithService(service.title)}
                    className="px-3 py-1.5 text-xs font-semibold bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors shadow-sm"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detailed Service Specifications Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div 
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="relative h-56 bg-slate-900 text-white">
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover opacity-40 mix-blend-overlay"
              />
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 text-slate-200 hover:text-white bg-slate-950/60 rounded-full transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300 bg-amber-500/20 px-2.5 py-1 rounded border border-amber-500/30">
                  {selectedService.category.toUpperCase()} SOLUTION
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Overview & Scope
                </h4>
                <p className="text-slate-700 text-sm leading-relaxed">
                  {selectedService.fullDesc}
                </p>
              </div>

              {/* Suitable For */}
              <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-xs text-emerald-900">
                <strong className="font-bold text-emerald-950">Ideal For: </strong>
                <span>{selectedService.suitableFor}</span>
              </div>

              {/* Key Features */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Key Service Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/60">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              {selectedService.specs && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                    Technical Specifications
                  </h4>
                  <div className="bg-slate-900 text-slate-200 p-4 rounded-xl text-xs space-y-2">
                    {Object.entries(selectedService.specs).map(([key, val]) => (
                      <div key={key} className="flex justify-between py-1 border-b border-slate-800 last:border-0">
                        <span className="text-slate-400 font-semibold">{key}:</span>
                        <span className="text-emerald-300 font-medium text-right">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer Modal CTAs */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-slate-500 font-medium">
                MNRE Empaneled • Authorized Hitachi Inverter Distributor
              </span>
              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-1/2 sm:w-auto px-4 py-2.5 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onOpenQuoteWithService(title);
                  }}
                  className="w-1/2 sm:w-auto px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-colors"
                >
                  Request Consultation
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
