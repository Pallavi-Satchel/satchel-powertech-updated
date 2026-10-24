import React, { useState } from 'react';
import { saveLead } from '../utils/leadsStorage';
import { X, Download, FileText, CheckCircle2, ShieldCheck, Mail, Phone, User } from 'lucide-react';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentTitle?: string;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({
  isOpen,
  onClose,
  documentTitle = 'Satchel Powertech Corporate Profile 2026'
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [downloadReady, setDownloadReady] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveLead({
      name,
      email,
      phone,
      city: 'PDF Download Gate',
      state: 'Pan India',
      serviceInterest: `Download: ${documentTitle}`,
      propertyType: 'Commercial',
      source: 'Download Gate (PDF Profile)'
    });
    setDownloadReady(true);
  };

  const handleDownloadFile = () => {
    // Generate a dummy text file blob representing the brochure for demonstration
    const blob = new Blob([
      `SATCHEL POWERTECH PRIVATE LIMITED
Corporate Profile 2026
Tagline: Engineering Clean Energy for a Sustainable Future
Address: Corporate Office: 409, 5th Floor, Block -A, Logix Technova, Sector 132, Noida, Uttar Pradesh 201301
Website: https://satchelpowertech.com
Phone: +91 93119 44917
Empanelment: MNRE / UP NEDA Empaneled Solar EPC
Official Partners: Authorized Channel Partner of Redington India Ltd. & Authorized Distributor of Hitachi Solar Inverters
Track Record: 25+ MW Installed Capacity | 350+ Projects Completed
Featured Key Projects:
- 4 MW PM Kusum Solar Project (Amroha, UP)
- 165 kW Industrial Solar Project (OOMS Polymers)
- 100 kW Commercial Solar (Sector 63, Noida)
- 60 kW Hybrid BESS (Greater Noida West)
- 5 kW Residential PM Surya Ghar (Jaypee Greens, Noida)`
    ], { type: 'text/plain' });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${documentTitle.replace(/[^a-zA-Z0-9]/g, '_')}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-gradient-to-r from-emerald-800 to-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="flex items-center space-x-2 text-amber-300 text-xs font-semibold mb-2">
            <FileText className="w-4 h-4" />
            <span>Corporate Document Download</span>
          </div>
          
          <h3 className="text-xl font-bold text-white">
            {documentTitle}
          </h3>
          <p className="text-slate-300 text-xs mt-1">
            Please provide your details below to receive instant access to the official PDF catalog and credentials.
          </p>
        </div>

        <div className="p-6">
          {downloadReady ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-slate-900">Your Download is Ready!</h4>
              <p className="text-slate-600 text-xs max-w-sm mx-auto">
                Thank you, {name}. Click below to download <strong>{documentTitle}</strong>.
              </p>
              
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={handleDownloadFile}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Document Now</span>
                </button>
                <button
                  onClick={onClose}
                  className="text-xs text-slate-500 hover:text-slate-700 pt-2"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikram Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Corporate / Personal Email *</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Mobile Number *</label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                  <input
                    type="tel"
                    required
                    placeholder="+91 93119 XXXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Unlock & Download Document</span>
                </button>
              </div>

              <p className="text-[10px] text-slate-500 text-center">
                Empaneled MNRE Solar EPC • Authorized Hitachi Inverter Partner
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
