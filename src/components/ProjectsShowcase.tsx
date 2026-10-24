import React, { useState } from 'react';
import { FEATURED_PROJECTS } from '../data/projectsData';
import { ProjectItem } from '../types';
import { 
  Building2, MapPin, Zap, CheckCircle2, ArrowRight, X, 
  ExternalLink, Calendar, ShieldCheck, Sun, Layers, Filter
} from 'lucide-react';

interface ProjectsShowcaseProps {
  onOpenQuoteWithProject?: (projectTitle: string) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onOpenQuoteWithProject }) => {
  const [filter, setFilter] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const filteredProjects = FEATURED_PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <section className="py-20 bg-slate-900 text-white relative" id="projects-showcase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3">
              <Sun className="w-4 h-4 text-emerald-400" />
              <span>Proven Track Record • 25+ MW Installed</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Featured Solar Projects Showcase
            </h2>
            <p className="text-slate-400 text-sm mt-2 max-w-2xl">
              From landmark MW-scale PM Kusum ground power plants to precision industrial rooftop systems across Uttar Pradesh & North India.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 shrink-0">
            {[
              { label: 'All Projects', value: 'all' },
              { label: 'PM Kusum / Ground', value: 'ground-mounted' },
              { label: 'Industrial', value: 'industrial' },
              { label: 'Commercial', value: 'commercial' },
              { label: 'Residential', value: 'residential' }
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-colors ${
                  filter === tab.value
                    ? 'bg-emerald-600 text-white shadow-md'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-950/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-emerald-500/40 transition-all group flex flex-col justify-between"
            >
              {/* Image Banner */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
                
                <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-emerald-300 border border-emerald-500/30 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md">
                  {project.capacity}
                </span>

                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <div className="text-xs text-slate-300 flex items-center space-x-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span className="font-medium text-slate-200">{project.location}</span>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="bg-slate-900 border border-slate-800/80 p-3 rounded-xl text-xs space-y-1.5">
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Client:</span>
                    <span className="text-white font-semibold">{project.client}</span>
                  </div>
                  <div className="flex justify-between text-[11px]">
                    <span className="text-slate-400">Annual Gen.:</span>
                    <span className="text-emerald-300 font-bold">{project.annualGeneration}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="text-xs font-bold text-slate-300 hover:text-emerald-400 flex items-center space-x-1"
                  >
                    <span>View Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <span className="text-[10px] text-slate-500 font-mono">
                    Completed {project.completionDate}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm overflow-y-auto">
          <div 
            className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 text-white rounded-2xl shadow-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative h-64 bg-slate-950">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.title}
                className="w-full h-full object-cover opacity-50"
              />
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white bg-slate-900/80 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-emerald-600 text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded">
                  {activeProjectModal.capacity} • {activeProjectModal.category.toUpperCase()}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                  {activeProjectModal.title}
                </h3>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 max-h-[60vh] overflow-y-auto text-xs sm:text-sm">
              <p className="text-slate-300 leading-relaxed">
                {activeProjectModal.description}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-950 p-4 rounded-xl border border-slate-800 text-xs">
                <div>
                  <span className="text-slate-400 block text-[10px]">Client Name</span>
                  <span className="font-bold text-white">{activeProjectModal.client}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Location</span>
                  <span className="font-bold text-white">{activeProjectModal.location}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">Annual Generation</span>
                  <span className="font-bold text-emerald-300">{activeProjectModal.annualGeneration}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[10px]">CO₂ Offset</span>
                  <span className="font-bold text-amber-300">{activeProjectModal.co2SavedTons} Tons/Yr</span>
                </div>
              </div>

              {/* Technology Used */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Technology & Components
                </h4>
                <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-slate-300 text-xs">
                  {activeProjectModal.technology}
                </div>
              </div>

              {/* Key Highlights */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Engineering & Execution Highlights
                </h4>
                <div className="space-y-2">
                  {activeProjectModal.keyHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start space-x-2 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-xs">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
              <span className="text-xs text-slate-400">
                Turnkey Solar EPC by Satchel Powertech Pvt. Ltd.
              </span>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow transition-colors"
              >
                Close Case Study
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
