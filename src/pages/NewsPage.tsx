import React, { useState } from 'react';
import { BLOGS_LIST } from '../data/blogsData';
import { BlogArticle } from '../types';
import { BookOpen, Calendar, Clock, User, X, ChevronRight, Tag } from 'lucide-react';

export const NewsPage: React.FC = () => {
  const [activeArticle, setActiveArticle] = useState<BlogArticle | null>(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Header */}
      <div className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span>Solar Knowledge Center & Industry Insights</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            News, Policy Updates & Solar Guides
          </h1>
          <p className="text-slate-300 text-base max-w-3xl mt-3 leading-relaxed">
            Stay informed on PM Surya Ghar Muft Bijli Yojana, PM Kusum scheme policies, commercial tax depreciation benefits, and inverter technology advances.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOGS_LIST.map((article) => (
            <div
              key={article.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between group"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-emerald-600 text-white font-bold text-[10px] uppercase px-2.5 py-1 rounded">
                  {article.category}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="flex items-center space-x-3 text-[11px] text-slate-500 mb-2">
                    <span className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3 text-emerald-600" />
                      <span>{article.publishDate}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <p className="text-slate-600 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 font-medium">
                    By {article.author}
                  </span>

                  <button
                    onClick={() => setActiveArticle(article)}
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center space-x-1"
                  >
                    <span>Read Article</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div 
            className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-950 text-white p-6 relative">
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded uppercase">
                {activeArticle.category}
              </span>
              <h3 className="text-2xl font-black text-white mt-2 leading-snug">{activeArticle.title}</h3>
              <p className="text-xs text-slate-400 mt-1">Published on {activeArticle.publishDate} • By {activeArticle.author}</p>
            </div>

            <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto text-sm text-slate-700 leading-relaxed">
              {activeArticle.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}

              <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
                {activeArticle.tags.map((tag, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] font-semibold px-2.5 py-1 rounded-md flex items-center space-x-1">
                    <Tag className="w-3 h-3 text-emerald-600" />
                    <span>#{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 text-right">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow"
              >
                Close Article Reader
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
