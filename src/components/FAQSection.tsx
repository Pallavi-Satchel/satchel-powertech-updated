import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/companyData';
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  Sparkles, 
  PhoneCall, 
  MessageSquare, 
  ShieldCheck, 
  Zap, 
  Award, 
  CheckCircle2, 
  X,
  ArrowRight,
  BookOpen
} from 'lucide-react';

interface FAQSectionProps {
  onOpenQuoteModal?: () => void;
}

type CategoryType = 'all' | 'subsidy' | 'installation' | 'maintenance' | 'netmetering' | 'commercial';

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openId, setOpenId] = useState<string | null>('faq-1'); // Default first item open

  const categories = [
    { id: 'all', label: 'All Questions', icon: HelpCircle },
    { id: 'subsidy', label: 'Govt Subsidies & PM Surya Ghar', icon: Award },
    { id: 'installation', label: 'Installation & Engineering', icon: Zap },
    { id: 'maintenance', label: 'Maintenance & Warranty', icon: ShieldCheck },
    { id: 'netmetering', label: 'Net-Metering & Discom', icon: CheckCircle2 },
    { id: 'commercial', label: 'Commercial & C&I Benefits', icon: Sparkles },
  ];

  const filteredFaqs = useMemo(() => {
    return FAQ_ITEMS.filter((faq) => {
      const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        faq.question.toLowerCase().includes(query) ||
        faq.answer.toLowerCase().includes(query) ||
        (faq.tags && faq.tags.some((tag) => tag.toLowerCase().includes(query)));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  const handleQuickSearch = (keyword: string) => {
    setSearchQuery(keyword);
    setActiveCategory('all');
  };

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      {/* Decorative SVG grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-[#16A34A] font-extrabold text-xs uppercase tracking-widest bg-emerald-100/80 border border-emerald-200 px-4 py-1.5 rounded-md mb-3">
            <HelpCircle className="w-4 h-4 text-[#16A34A]" />
            <span>Answers to Your Solar Questions</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#1E3A8A] tracking-tight leading-tight">
            Frequently Asked <span className="text-[#16A34A] underline decoration-[#F97316] decoration-4 underline-offset-8">Questions</span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base mt-4 leading-relaxed">
            Everything you need to know about rooftop solar installation, PM Surya Ghar subsidies up to ₹78,000, Hitachi inverter warranties, and UPPCL/Discom net-metering approvals.
          </p>

          {/* Search Bar Input */}
          <div className="mt-8 relative max-w-2xl mx-auto">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. 'subsidy', 'Hitachi', 'net metering', 'payback')..."
                className="w-full pl-12 pr-10 py-3.5 bg-white border-2 border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 text-sm font-medium focus:outline-none focus:border-[#16A34A] focus:ring-4 focus:ring-emerald-500/10 shadow-sm transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Quick Search Tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-3 text-xs text-slate-500">
              <span className="font-semibold text-slate-400">Popular topics:</span>
              {[
                'PM Surya Ghar',
                'Hitachi Inverter',
                'Net Metering',
                '40% Tax Savings',
                '25-Yr Warranty'
              ].map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleQuickSearch(tag)}
                  className="px-2.5 py-1 bg-white border border-slate-200 rounded-md hover:border-[#16A34A] hover:text-[#16A34A] font-semibold transition-colors shadow-2xs"
                >
                  #{tag}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryType)}
                className={`px-4 py-2.5 text-xs font-bold uppercase tracking-wider rounded-md transition-all flex items-center space-x-2 ${
                  isActive
                    ? 'bg-[#1E3A8A] text-white shadow-md shadow-blue-900/20 scale-105'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200 hover:text-[#1E3A8A]'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-[#F97316]' : 'text-slate-500'}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Accordion List Container */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredFaqs.length === 0 ? (
            <div className="bg-white border-2 border-dashed border-slate-200 rounded-2xl p-12 text-center space-y-4">
              <BookOpen className="w-12 h-12 text-slate-300 mx-auto" />
              <h3 className="text-lg font-bold text-slate-800">No matching questions found</h3>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                We couldn't find any FAQs matching "{searchQuery}". Contact our technical team directly for immediate assistance.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-5 py-2.5 bg-[#16A34A] text-white text-xs font-bold uppercase tracking-wider rounded-md hover:bg-emerald-700 transition-colors"
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq, index) => {
              const isOpen = openId === faq.id;

              return (
                <div
                  key={faq.id}
                  className={`bg-white border-2 rounded-xl transition-all overflow-hidden ${
                    isOpen
                      ? 'border-[#16A34A] shadow-md shadow-emerald-600/5'
                      : 'border-slate-200/90 hover:border-slate-300 shadow-2xs'
                  }`}
                >
                  {/* Question Accordion Header */}
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 select-none focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-start space-x-3.5">
                      <span className={`w-7 h-7 rounded-md flex items-center justify-center font-mono text-xs font-black shrink-0 mt-0.5 ${
                        isOpen
                          ? 'bg-[#16A34A] text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}>
                        {index + 1 < 10 ? `0${index + 1}` : index + 1}
                      </span>
                      <div>
                        <h3 className={`text-base sm:text-lg font-bold transition-colors ${
                          isOpen ? 'text-[#1E3A8A]' : 'text-slate-900'
                        }`}>
                          {faq.question}
                        </h3>

                        {faq.featured && !isOpen && (
                          <span className="inline-block mt-1 text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded">
                            Popular Question
                          </span>
                        )}
                      </div>
                    </div>

                    <div className={`p-2 rounded-lg transition-transform duration-300 shrink-0 ${
                      isOpen ? 'bg-emerald-50 text-[#16A34A] rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Expandable Answer Content */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-0 border-t border-slate-100 space-y-4">
                          <p className="text-slate-700 text-sm sm:text-base leading-relaxed mt-4 font-normal">
                            {faq.answer}
                          </p>

                          {/* Tag Chips */}
                          {faq.tags && faq.tags.length > 0 && (
                            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
                              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Related:</span>
                              {faq.tags.map((tag, idx) => (
                                <span
                                  key={idx}
                                  className="text-[10px] font-mono font-bold text-[#1E3A8A] bg-blue-50 border border-blue-200 px-2.5 py-0.5 rounded"
                                >
                                  #{tag}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          )}
        </div>

        {/* Still Have Questions CTA Banner */}
        <div className="mt-16 bg-[#1E3A8A] text-white rounded-2xl p-8 sm:p-10 shadow-xl border border-blue-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#16A34A]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center space-x-2 text-amber-300 font-bold text-xs uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-md">
                <PhoneCall className="w-4 h-4 text-amber-400" />
                <span>Need Personalized Guidance?</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                Have a unique query about your rooftop or factory solar project?
              </h3>
              <p className="text-slate-200 text-sm max-w-2xl">
                Speak directly with our senior power distribution and PV engineers at Satchel Powertech Pvt. Ltd. We offer free feasibility site surveys and subsidy assistance across India.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0 w-full lg:w-auto">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-extrabold uppercase tracking-widest text-white bg-[#F97316] hover:bg-orange-600 rounded-md shadow-lg transition-all flex items-center justify-center space-x-2 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Request Free Site Survey</span>
              </button>

              <a
                href="tel:9311944917"
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-md transition-colors flex items-center justify-center space-x-2"
              >
                <PhoneCall className="w-4 h-4 text-[#16A34A]" />
                <span>Call +91 93119 44917</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
