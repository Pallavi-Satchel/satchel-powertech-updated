import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS } from '../data/companyData';
import { 
  Star, 
  Quote, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Award, 
  MapPin, 
  Zap, 
  Building2, 
  ShieldCheck,
  TrendingUp,
  Sparkles,
  ExternalLink
} from 'lucide-react';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
    scale: 0.96
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.35 },
      scale: { duration: 0.35 }
    }
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    scale: 0.96,
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.25 }
    }
  })
};

type CategoryFilter = 'all' | 'industrial' | 'kusum' | 'commercial' | 'residential';

export const Testimonials: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Filter testimonials based on active category
  const filteredTestimonials = TESTIMONIALS.filter(t => {
    if (activeCategory === 'all') return true;
    return t.category === activeCategory;
  });

  // Reset index when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Handle auto-sliding timer
  useEffect(() => {
    if (!isPlaying || isHovered || filteredTestimonials.length <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(timer);
  }, [currentIndex, isPlaying, isHovered, filteredTestimonials.length]);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex(prev => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(prev => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const handleSelectSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const currentTestimonial = filteredTestimonials[currentIndex] || TESTIMONIALS[0];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#16A34A]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#1E3A8A]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-64 h-64 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 text-[#16A34A] font-extrabold text-xs uppercase tracking-widest bg-[#16A34A]/10 border border-[#16A34A]/20 px-4 py-1.5 rounded-md mb-4 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#16A34A]" />
            <span>Proven Performance • Satisfied Clients</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Trusted by India's Industrial, Commercial & Rural <span className="text-[#16A34A] underline decoration-[#F97316] decoration-4 underline-offset-8">Leaders</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base mt-4 leading-relaxed">
            Discover real-world results from rooftop installations, PM Kusum ground-mounted solar plants, and commercial sites executed by Satchel Powertech.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'industrial', label: 'Industrial & C&I' },
              { id: 'kusum', label: 'PM Kusum & Utility' },
              { id: 'commercial', label: 'Commercial & Institutional' },
              { id: 'residential', label: 'Residential Rooftop' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryFilter)}
                className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-md transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#16A34A] text-white shadow-lg shadow-[#16A34A]/20 scale-105'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-700/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Auto-sliding Carousel Container */}
        <div 
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Progress Bar for Auto-play */}
          {isPlaying && !isHovered && (
            <div className="w-full h-1 bg-slate-800 rounded-full mb-6 overflow-hidden">
              <motion.div
                key={`${currentIndex}-${activeCategory}`}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: 'linear' }}
                className="h-full bg-gradient-to-r from-[#16A34A] to-orange-500"
              />
            </div>
          )}

          {/* Slide Stage */}
          <div className="relative min-h-[520px] sm:min-h-[460px] flex items-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="w-full bg-slate-800/90 border-2 border-slate-700/80 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                
                {/* Left Column: Review Text & Client Info */}
                <div className="lg:col-span-7 space-y-6">
                  
                  {/* Top Rating & Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-700/60">
                    <div className="flex items-center space-x-1">
                      {[...Array(currentTestimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                      ))}
                      <span className="ml-2 text-xs font-black text-amber-300 font-mono">5.0 / 5.0</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      {currentTestimonial.verified && (
                        <span className="inline-flex items-center space-x-1 text-[11px] font-bold uppercase tracking-wider text-emerald-300 bg-[#16A34A]/20 border border-[#16A34A]/40 px-3 py-1 rounded-md">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#16A34A]" />
                          <span>Verified Installation</span>
                        </span>
                      )}
                      {currentTestimonial.date && (
                        <span className="text-[11px] font-semibold text-slate-400">
                          {currentTestimonial.date}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Quote Body */}
                  <div className="relative">
                    <Quote className="w-12 h-12 text-[#16A34A]/20 absolute -top-4 -left-2 pointer-events-none" />
                    <p className="text-slate-100 text-base sm:text-lg lg:text-xl font-medium leading-relaxed italic relative z-10 pl-4">
                      "{currentTestimonial.quote}"
                    </p>
                  </div>

                  {/* Key Impact Metrics Grid */}
                  {currentTestimonial.metrics && currentTestimonial.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-3 pt-2">
                      {currentTestimonial.metrics.map((m, idx) => (
                        <div key={idx} className="bg-slate-900/80 border border-slate-700/60 p-3 rounded-lg text-center">
                          <span className="block text-xs font-bold uppercase text-slate-400">{m.label}</span>
                          <span className="text-sm sm:text-base font-black text-[#16A34A] mt-0.5 block">{m.value}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Client Profile Footer */}
                  <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-4">
                      {currentTestimonial.image && (
                        <img
                          src={currentTestimonial.image}
                          alt={currentTestimonial.clientName}
                          className="w-14 h-14 rounded-full object-cover border-2 border-[#16A34A] shadow-md shrink-0"
                        />
                      )}
                      <div>
                        <h4 className="font-extrabold text-white text-base flex items-center space-x-2">
                          <span>{currentTestimonial.clientName}</span>
                          <ShieldCheck className="w-4 h-4 text-[#16A34A]" />
                        </h4>
                        <p className="text-xs font-semibold text-slate-300 mt-0.5">
                          {currentTestimonial.designation}
                        </p>
                        <p className="text-xs text-slate-400 flex items-center space-x-1 mt-0.5">
                          <MapPin className="w-3 h-3 text-orange-400 shrink-0" />
                          <span>{currentTestimonial.companyOrLoc}</span>
                        </p>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="inline-block text-xs font-extrabold uppercase tracking-wider text-orange-300 bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-md">
                        {currentTestimonial.projectType}
                      </span>
                    </div>
                  </div>

                  {/* Component Tags */}
                  {currentTestimonial.tags && currentTestimonial.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {currentTestimonial.tags.map((tag, idx) => (
                        <span key={idx} className="text-[10px] font-mono font-bold text-slate-300 bg-slate-900/90 border border-slate-700/80 px-2.5 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}

                </div>

                {/* Right Column: High Resolution Project Photo & Spec Badge */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-xl overflow-hidden border-2 border-slate-700 shadow-2xl group aspect-[4/3] bg-slate-950">
                    <img
                      src={currentTestimonial.projectPhoto || 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=800'}
                      alt={currentTestimonial.projectType}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

                    {/* Top Overlay Tag */}
                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-3 py-1 rounded-md text-[11px] font-extrabold uppercase tracking-wider text-white flex items-center space-x-1.5 shadow-lg">
                      <Zap className="w-3.5 h-3.5 text-orange-400" />
                      <span>{currentTestimonial.projectType.split(' ')[0]} {currentTestimonial.projectType.split(' ')[1]} Plant</span>
                    </div>

                    {/* Bottom Floating Info */}
                    <div className="absolute bottom-3 left-3 right-3 bg-slate-900/90 backdrop-blur-md border border-slate-700 p-3 rounded-lg text-xs text-slate-200 shadow-xl flex items-center justify-between">
                      <div>
                        <p className="font-bold text-white text-xs truncate">{currentTestimonial.companyOrLoc}</p>
                        <p className="text-[10px] text-emerald-400 font-mono font-semibold">Satchel Powertech Commissioned</p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-[#16A34A]/20 border border-[#16A34A] flex items-center justify-center shrink-0 text-[#16A34A]">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-800/60 border border-slate-700/60 p-4 rounded-xl backdrop-blur-md">
            
            {/* Play/Pause & Counter */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="p-2 rounded-md bg-slate-700/80 hover:bg-slate-700 text-slate-200 transition-colors flex items-center space-x-2 text-xs font-bold uppercase tracking-wider"
                title={isPlaying ? 'Pause Auto-slide' : 'Start Auto-slide'}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4 text-orange-400" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 text-[#16A34A]" />
                    <span>Auto Play</span>
                  </>
                )}
              </button>

              <span className="text-xs font-mono font-bold text-slate-300">
                Review <span className="text-white">{currentIndex + 1}</span> of <span className="text-slate-400">{filteredTestimonials.length}</span>
              </span>
            </div>

            {/* Thumbnail / Dot Selectors */}
            <div className="flex items-center space-x-2 overflow-x-auto max-w-full py-1 px-2">
              {filteredTestimonials.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => handleSelectSlide(idx)}
                  className={`transition-all rounded-full ${
                    idx === currentIndex
                      ? 'w-8 h-2.5 bg-[#16A34A] shadow-md shadow-[#16A34A]/40'
                      : 'w-2.5 h-2.5 bg-slate-600 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Buttons */}
            <div className="flex items-center space-x-2">
              <button
                onClick={handlePrev}
                className="p-2.5 rounded-md bg-slate-700/80 hover:bg-[#16A34A] text-white transition-all transform hover:-translate-x-0.5 shadow-md"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="p-2.5 rounded-md bg-slate-700/80 hover:bg-[#16A34A] text-white transition-all transform hover:translate-x-0.5 shadow-md"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Trust Highlights Banner */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-xl text-center">
            <p className="text-2xl font-black text-amber-400">4.98 / 5.0</p>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">Average Rating</p>
            <p className="text-[10px] text-slate-400 mt-0.5">350+ Industrial & Residential Audits</p>
          </div>

          <div className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-xl text-center">
            <p className="text-2xl font-black text-[#16A34A]">100%</p>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">On-Time Execution</p>
            <p className="text-[10px] text-slate-400 mt-0.5">Strict SLA & Discom Commissioning</p>
          </div>

          <div className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-xl text-center">
            <p className="text-2xl font-black text-blue-400">25 Years</p>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">Performance Warranty</p>
            <p className="text-[10px] text-slate-400 mt-0.5">Tier-1 Modules & Hitachi Inverters</p>
          </div>

          <div className="bg-slate-800/40 border border-slate-700/50 p-4 rounded-xl text-center">
            <p className="text-2xl font-black text-orange-400">UP NEDA</p>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-300 mt-1">Empaneled Partner</p>
            <p className="text-[10px] text-slate-400 mt-0.5">Direct Govt Subsidy Clearance</p>
          </div>
        </div>

      </div>
    </section>
  );
};
