import React, { useState } from 'react';
import { DOWNLOADS_LIST } from '../data/downloadsData';
import { DownloadItem } from '../types';
import { DownloadModal } from '../components/DownloadModal';
import { Download, FileText, ShieldCheck, Zap, PieChart, HelpCircle } from 'lucide-react';

export const DownloadsPage: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<string | null>(null);

  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileText': return <FileText className="w-6 h-6 text-emerald-600" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-600" />;
      case 'HelpCircle': return <HelpCircle className="w-6 h-6 text-blue-600" />;
      case 'PieChart': return <PieChart className="w-6 h-6 text-purple-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      default: return <FileText className="w-6 h-6 text-emerald-600" />;
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            <Download className="w-4 h-4 text-emerald-400" />
            <span>Official Corporate Downloads & Documentation</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Brochures, Catalogues & Certificates
          </h1>
          <p className="text-slate-300 text-base max-w-3xl mt-3 leading-relaxed">
            Download company profile PDF, Hitachi inverter datasheets, PM Surya Ghar subsidy guidelines, and MNRE empanelment credentials.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DOWNLOADS_LIST.map((doc) => (
            <div
              key={doc.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                    {renderIcon(doc.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                    {doc.fileSize} • {doc.fileType}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-slate-900">{doc.title}</h3>
                  <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{doc.description}</p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6">
                <button
                  onClick={() => setSelectedDoc(doc.title)}
                  className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download File Now</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedDoc && (
        <DownloadModal
          isOpen={true}
          onClose={() => setSelectedDoc(null)}
          documentTitle={selectedDoc}
        />
      )}

    </div>
  );
};
