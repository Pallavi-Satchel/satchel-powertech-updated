import React, { useState } from 'react';
import { saveLead } from '../utils/leadsStorage';
import { 
  X, CheckCircle2, MessageSquare, ShieldCheck, 
  Send, User, Phone, Mail, MapPin, Building, Sparkles 
} from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillService?: string;
  prefillMonthlyBill?: string;
  prefillPropertyType?: 'Residential' | 'Commercial' | 'Industrial' | 'Government / Agricultural';
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  prefillService = 'Residential Rooftop Solar',
  prefillMonthlyBill = '',
  prefillPropertyType = 'Residential'
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Noida',
    state: 'Uttar Pradesh',
    serviceInterest: prefillService,
    propertyType: prefillPropertyType as 'Residential' | 'Commercial' | 'Industrial' | 'Government / Agricultural',
    monthlyBill: prefillMonthlyBill,
    roofAreaSqFt: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      saveLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        city: formData.city,
        state: formData.state,
        serviceInterest: formData.serviceInterest,
        propertyType: formData.propertyType,
        monthlyBill: formData.monthlyBill,
        roofAreaSqFt: formData.roofAreaSqFt,
        message: formData.message,
        source: 'Quote Request Modal'
      });
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-emerald-800 via-slate-900 to-blue-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center space-x-1.5 bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-xs font-semibold mb-2 border border-emerald-500/30">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span>MNRE & MSME Registered Solar EPC</span>
          </div>

          <h3 className="text-2xl font-black text-white tracking-tight">
            Request Free Solar Consultation & Quotation
          </h3>
          <p className="text-slate-300 text-xs mt-1">
            Fill out your requirements below to receive a custom 3D layout design, financial payback sheet, and discom subsidy guidance from Satchel Powertech engineers.
          </p>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Thank You, {formData.name}!</h4>
              <p className="text-slate-600 text-sm max-w-md mx-auto">
                Your consultation request has been received by Satchel Powertech Pvt. Ltd. Our senior solar technical engineer will call you at <strong className="text-emerald-700">{formData.phone}</strong> within 2 hours with your preliminary solar proposal.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 bg-emerald-600 text-white font-semibold rounded-xl hover:bg-emerald-700 transition-colors shadow-md"
                >
                  Close & Return to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Mobile Number */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mobile Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 93119 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                    />
                  </div>
                </div>

                {/* City & Location */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    City / Location *
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Noida, Sector 132 / Amroha / Delhi"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                    />
                  </div>
                </div>

                {/* Service Category */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Solar Service Interest *
                  </label>
                  <select
                    value={formData.serviceInterest}
                    onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white font-medium"
                  >
                    <option value="Residential Rooftop Solar">Residential Rooftop Solar (PM Surya Ghar)</option>
                    <option value="Commercial Solar Power">Commercial Solar Power System</option>
                    <option value="Industrial Solar Power Plant">Industrial Solar Plant (Accelerated Depr.)</option>
                    <option value="Ground Mounted Utility Plant">Ground Mounted Utility Solar</option>
                    <option value="PM Kusum Scheme Projects">PM Kusum Scheme Project</option>
                    <option value="Hybrid Solar + Battery BESS">Hybrid Solar + Battery BESS</option>
                    <option value="Solar Operation & Maintenance">Solar O&M / AMC Service</option>
                    <option value="Hitachi Inverter Inquiry">Hitachi Inverter Distribution Inquiry</option>
                  </select>
                </div>

                {/* Property Type */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Property Installation Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) => setFormData({ ...formData, propertyType: e.target.value as any })}
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white font-medium"
                  >
                    <option value="Residential">Residential Villa / Independent House / Apartment</option>
                    <option value="Commercial">Commercial Building / Office / Hospital / School</option>
                    <option value="Industrial">Factory / Warehouse / Cold Storage Shed</option>
                    <option value="Government / Agricultural">Agricultural Land / Government Institution</option>
                  </select>
                </div>

                {/* Average Monthly Bill */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Approx. Monthly Electricity Bill (₹)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹12,000 / month"
                    value={formData.monthlyBill}
                    onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                  />
                </div>

                {/* Approx Roof Area */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Available Roof / Land Area (Sq. Ft. / Acres)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 1,500 sq ft or 5 Acres"
                    value={formData.roofAreaSqFt}
                    onChange={(e) => setFormData({ ...formData, roofAreaSqFt: e.target.value })}
                    className="w-full px-3 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                  />
                </div>

              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Additional Details / Project Scope
                </label>
                <textarea
                  rows={2}
                  placeholder="Mention discom name (e.g. UPPCL, BSES), roof sheet type, or specific questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting Proposal Request...' : 'Submit Quote Request'}</span>
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                🔒 Your contact details are confidential and used solely by Satchel Powertech engineers to provide your solar evaluation. Zero spam guarantee.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
