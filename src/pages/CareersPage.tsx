import React, { useState } from 'react';
import { JOB_OPENINGS } from '../data/careersData';
import { JobOpening } from '../types';
import { saveLead } from '../utils/leadsStorage';
import { Briefcase, MapPin, CheckCircle2, Send, X, User, Phone, Mail, Upload } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [activeJob, setActiveJob] = useState<JobOpening | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantExperience, setApplicantExperience] = useState('');
  const [resumeText, setResumeText] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (activeJob) {
      saveLead({
        name: applicantName,
        email: applicantEmail,
        phone: applicantPhone,
        city: 'Career Applicant',
        state: activeJob.location,
        serviceInterest: `Job Application: ${activeJob.title}`,
        propertyType: 'Commercial',
        message: `Exp: ${applicantExperience}. Resume/Bio: ${resumeText}`,
        source: 'Career Page Form'
      });
      setSubmitted(true);
    }
  };

  const handleCloseModal = () => {
    setActiveJob(null);
    setSubmitted(false);
    setApplicantName('');
    setApplicantPhone('');
    setApplicantEmail('');
    setApplicantExperience('');
    setResumeText('');
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header Banner */}
      <div className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <span>Join Satchel Powertech Engineering Team</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Build Your Career in Clean Renewable Energy
          </h1>
          <p className="text-slate-300 text-base max-w-3xl mt-3 leading-relaxed">
            We are hiring passionate Solar Design Engineers, Site Project Managers, and Industrial Sales Specialists across Noida & North India.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-6">
          {JOB_OPENINGS.map((job) => (
            <div
              key={job.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-3 max-w-2xl">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-1 rounded-md">
                    {job.department}
                  </span>
                  <span className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2.5 py-1 rounded-md flex items-center space-x-1">
                    <MapPin className="w-3 h-3" />
                    <span>{job.location}</span>
                  </span>
                  <span className="bg-amber-100 text-amber-800 text-[10px] font-bold px-2.5 py-1 rounded-md">
                    Exp: {job.experience}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{job.description}</p>
              </div>

              <div className="shrink-0">
                <button
                  onClick={() => setActiveJob(job)}
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md transition-colors w-full md:w-auto"
                >
                  Apply For Position
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Application Modal */}
      {activeJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div 
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-950 text-white p-6 relative">
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded uppercase">
                {activeJob.department}
              </span>
              <h3 className="text-xl font-bold text-white mt-1">{activeJob.title}</h3>
              <p className="text-xs text-slate-400 mt-0.5">{activeJob.location} • {activeJob.experience}</p>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">Application Submitted!</h4>
                  <p className="text-slate-600 text-xs">
                    Thank you {applicantName}. Our HR team will review your application for {activeJob.title} and contact you at {applicantPhone}.
                  </p>
                  <button
                    onClick={handleCloseModal}
                    className="mt-4 px-5 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl"
                  >
                    Close Window
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyanshu Sharma"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Mobile Phone *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 93119 XXXXX"
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      />
                    </div>
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@email.com"
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Years of Solar / Engineering Experience</label>
                    <input
                      type="text"
                      placeholder="e.g. 3.5 Years in Rooftop Solar Design"
                      value={applicantExperience}
                      onChange={(e) => setApplicantExperience(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Brief Summary of Qualification & Project Track Record</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Paste your resume summary or LinkedIn profile link here..."
                      value={resumeText}
                      onChange={(e) => setResumeText(e.target.value)}
                      className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-colors"
                  >
                    Submit Job Application
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
