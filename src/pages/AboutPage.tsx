import React from 'react';
import { COMPANY_INFO, LEADERSHIP_TEAM, MILESTONES, COMPANY_STRENGTHS } from '../data/companyData';
import { 
  ShieldCheck, Award, Zap, Compass, Target, Heart, Eye, 
  Users, CheckCircle2, ArrowRight, Building2, MapPin
} from 'lucide-react';

interface AboutPageProps {
  onOpenQuoteModal: () => void;
  onOpenDownloadModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuoteModal, onOpenDownloadModal }) => {
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      
      {/* Page Header Banner */}
      <div className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            <Building2 className="w-4 h-4 text-emerald-400" />
            <span>Corporate Profile • Noida Headquarters</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            About Satchel Powertech Pvt. Ltd.
          </h1>
          <p className="text-slate-300 text-base max-w-3xl mt-3 leading-relaxed">
            A professionally managed Solar EPC Company in India committed to delivering sustainable clean energy for Residential, Commercial, Industrial, and Government power consumers.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Company Overview Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded border border-emerald-200">
              Engineering Excellence Since 2019
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              Your Trusted Partner for Turnkey Solar EPC & Grid Infrastructure
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Satchel Powertech Private Limited is an Indian Solar EPC (Engineering, Procurement, Construction) leader headquartered in Noida, Uttar Pradesh. We specialize in end-to-end solar power solutions ranging from 1 kW residential rooftop systems to multi-MW ground-mounted plants, PM Kusum projects, and hybrid storage systems.
            </p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Empaneled with MNRE and UP NEDA, Satchel Powertech serves as the <strong>Authorized Channel Partner of Redington India Ltd.</strong> and <strong>Authorized Distributor for Hitachi Solar Inverters</strong>. Our in-house engineering team manages every project milestone with zero subcontracting — ensuring maximum performance ratio and long-term asset reliability.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-3 text-xs">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block">MNRE & MSME Empaneled</span>
                <span className="text-slate-500">{COMPANY_INFO.mnreReg}</span>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <span className="font-bold text-slate-900 block">Hitachi & Redington Partner</span>
                <span className="text-slate-500">Tier-1 Direct OEM Supply</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=1000"
                alt="Satchel Powertech Solar EPC"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent p-6 flex flex-col justify-end text-white">
                <p className="text-2xl font-black text-amber-300">25+ Megawatts</p>
                <p className="text-xs text-slate-200">Installed Solar Capacity Across India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-emerald-900 text-white p-8 rounded-2xl shadow-xl space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 bg-emerald-800 rounded-xl flex items-center justify-center text-amber-300">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Vision</h3>
            <p className="text-emerald-100 text-xs leading-relaxed italic">
              "{COMPANY_INFO.vision}"
            </p>
          </div>

          <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center text-emerald-400">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Mission</h3>
            <p className="text-slate-300 text-xs leading-relaxed italic">
              "{COMPANY_INFO.mission}"
            </p>
          </div>

          <div className="bg-blue-950 text-white p-8 rounded-2xl shadow-xl space-y-4 relative overflow-hidden">
            <div className="w-12 h-12 bg-blue-900 rounded-xl flex items-center justify-center text-blue-300">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Core Pillars</h3>
            <ul className="text-slate-300 text-xs space-y-2">
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>40+ Years Power Distribution Legacy</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Strategic OEM Alliances (Hitachi & Redington)</span>
              </li>
              <li className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>End-to-End EPC Under One Roof</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Leadership Team */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 px-3 py-1 rounded">
              Management & Leadership Profile
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-2">
              Corporate Business Team
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Driven by distinguished power sector veterans with deep expertise in utility operations and renewable energy transition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP_TEAM.map((member, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                <div className="p-6 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{member.name}</h3>
                    <p className="text-xs font-bold text-emerald-700">{member.role}</p>
                    <p className="text-[11px] text-slate-500 font-medium">{member.qualification}</p>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Advisory Support & Experienced Leadership Team Section */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-950 to-emerald-950 text-white rounded-2xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded">
              Strategic Advisory Support
            </span>
            <h3 className="text-2xl font-black text-white">
              Backed by 35+ Years BSES Power Distribution Veterans
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              To further strengthen its technical and operational capabilities, Satchel Powertech is supported by retired senior professionals from BSES Delhi and the power distribution sector possessing more than 35 years of experience in utility operations, electrical distribution systems, project execution, regulatory compliance, and safety management.
            </p>
            <p className="text-slate-300 text-xs leading-relaxed">
              Their valuable guidance enhances our ability to execute complex solar projects, coordinate with utilities and government agencies, and maintain the highest standards of engineering excellence and operational reliability.
            </p>
          </div>

          <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-xl space-y-3">
            <h4 className="text-sm font-bold text-emerald-400 uppercase tracking-wider">Our Dedicated Team Includes:</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-200">
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Solar Project Engineers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Electrical Design Engineers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Structural Engineers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Project Managers</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Site Supervisors</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>ITI & Diploma Technicians</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Safety & Regulatory Compliance Professionals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Journey Timeline */}
        <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-white">Company Growth Timeline</h2>
            <p className="text-slate-400 text-xs mt-1">Milestones from foundation to 25+ MW EPC leadership.</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-4 sm:before:left-1/2 before:-ml-px before:w-0.5 before:bg-slate-800">
            {MILESTONES.map((item, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600 text-white font-bold text-xs shrink-0 shadow-lg border-4 border-slate-950 z-10">
                  {item.year}
                </div>
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] bg-slate-900 border border-slate-800 p-5 rounded-2xl shadow-md">
                  <h3 className="font-bold text-amber-300 text-sm">{item.title}</h3>
                  <p className="text-slate-300 text-xs mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8">
          <button
            onClick={onOpenQuoteModal}
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg transition-colors inline-flex items-center space-x-2 text-sm"
          >
            <span>Partner With Satchel Powertech Today</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
