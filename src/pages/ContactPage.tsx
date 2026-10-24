import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { saveLead } from '../utils/leadsStorage';
import { 
  Phone, Mail, MapPin, MessageSquare, Send, CheckCircle2, 
  Clock, ShieldCheck, Building2, Globe 
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: 'Noida',
    state: 'Uttar Pradesh',
    serviceInterest: 'General Inquiry',
    propertyType: 'Residential' as any,
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    saveLead({
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      state: formData.state,
      serviceInterest: formData.serviceInterest,
      propertyType: formData.propertyType,
      message: formData.message,
      source: 'Contact Us Form'
    });
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent('Hello Satchel Powertech! I am contacting you from your website for a solar query.')}`;

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>Satchel Powertech Corporate Office • Logix Technova, Sector 132 Noida</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Get In Touch With Our Solar Engineers
          </h1>
          <p className="text-slate-300 text-base max-w-3xl mt-3 leading-relaxed">
            Have a question about rooftop solar, PM Surya Ghar subsidy, commercial 40% tax depreciation, or Hitachi inverter distribution? We are here to help.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Office Info & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-slate-900 border-b border-slate-100 pb-3">
                Corporate Headquarters
              </h3>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold text-sm">Noida Corporate Office:</strong>
                    <span>{COMPANY_INFO.headquarters}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold text-sm">Phone Lines:</strong>
                    <span>{COMPANY_INFO.phonePrimary} / {COMPANY_INFO.phoneSecondary}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold text-sm">Email Inquiries:</strong>
                    <span>{COMPANY_INFO.emailInfo} / {COMPANY_INFO.emailSales}</span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-bold text-sm">Working Hours:</strong>
                    <span>Monday - Saturday: 9:30 AM - 6:30 PM (IST)</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Action */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow transition-colors flex items-center justify-center space-x-2"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Start Instant WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Regional Network */}
            <div className="bg-slate-900 text-white p-6 rounded-2xl space-y-3 text-xs">
              <h4 className="font-bold text-amber-300 text-sm">Regional Presence Across North India:</h4>
              <p className="text-slate-300 leading-relaxed">
                Noida HQ • Amroha Office • Delhi NCR Operations • Jaipur Regional Hub • Moradabad PM Kusum Desk
              </p>
              <div className="pt-2 text-[11px] text-emerald-400 font-semibold">
                {COMPANY_INFO.mnreReg}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form & Map Preview */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-1">Send Us a Direct Message</h3>
              <p className="text-slate-500 text-xs mb-6">Our technical team responds within 2 hours during working hours.</p>

              {submitted ? (
                <div className="text-center py-10 space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Message Received!</h4>
                  <p className="text-slate-600 text-xs max-w-md mx-auto">
                    Thank you {formData.name}. Your inquiry has been submitted to Satchel Powertech Pvt. Ltd. A senior engineer will contact you at {formData.phone}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-5 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Priyanshu Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Mobile Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 93119 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      />
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">City / Location *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Noida / Amroha"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Inquiry Topic</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl font-medium"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Residential Rooftop Solar (PM Surya Ghar)">Residential Rooftop Solar (PM Surya Ghar)</option>
                      <option value="Commercial & Industrial Solar Plant">Commercial & Industrial Solar Plant</option>
                      <option value="PM Kusum Solar Project">PM Kusum Solar Project</option>
                      <option value="Hitachi Inverter Distribution">Hitachi Inverter Distribution</option>
                      <option value="Solar O&M / Maintenance">Solar O&M / Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Message / Requirements</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share details about your rooftop area, monthly bill, or specific questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-colors flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message To Engineers</span>
                  </button>
                </form>
              )}
            </div>

            {/* Google Map Mockup */}
            <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-4 bg-slate-900 text-white flex justify-between items-center text-xs">
                <span className="font-bold flex items-center space-x-1.5">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Google Map Location • Logix Technova, Sector 132, Noida, UP</span>
                </span>
                <span className="text-[10px] text-slate-400 font-mono">Pin: 201301</span>
              </div>
              <div className="h-64 bg-slate-200 relative flex items-center justify-center text-center p-6">
                <img
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
                  alt="Map Location"
                  className="absolute inset-0 w-full h-full object-cover opacity-60"
                />
                <div className="relative z-10 bg-slate-950/90 text-white p-4 rounded-xl border border-slate-800 shadow-xl max-w-sm">
                  <p className="font-bold text-emerald-400 text-xs">Satchel Powertech Corporate HQ</p>
                  <p className="text-[11px] text-slate-300 mt-1">409, 5th Floor, Block -A, Logix Technova, Sector 132, Noida, Uttar Pradesh 201301</p>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-[10px] font-bold text-amber-300 underline"
                  >
                    Open in Google Maps
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};
