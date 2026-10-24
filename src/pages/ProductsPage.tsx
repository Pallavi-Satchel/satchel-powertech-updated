import React, { useState } from 'react';
import { PRODUCTS_CATALOG } from '../data/productsData';
import { ProductItem } from '../types';
import { 
  Zap, ShieldCheck, Download, Award, CheckCircle2, X, ChevronRight, Filter
} from 'lucide-react';

interface ProductsPageProps {
  onOpenQuoteWithService: (productName: string) => void;
  onOpenDownloadModal: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onOpenQuoteWithService,
  onOpenDownloadModal
}) => {
  const [filter, setFilter] = useState<string>('all');
  const [activeProduct, setActiveProduct] = useState<ProductItem | null>(null);

  const filteredProducts = PRODUCTS_CATALOG.filter((prod) => {
    if (filter === 'all') return true;
    return prod.category === filter;
  });

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* Page Header */}
      <div className="bg-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Authorized Hitachi Distributor & Redington Supply Partner</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
            Solar Equipment & Products Catalog
          </h1>
          <p className="text-slate-300 text-base max-w-3xl mt-3 leading-relaxed">
            Tier-1 PV Modules, Hitachi Grid-Tie & Hybrid Inverters, Lithium BESS Energy Storage, Hot-Dip Galvanized Structures, and Electrical Protection Gear.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-10 pb-4 border-b border-slate-200">
          {[
            { label: 'All Equipment', value: 'all' },
            { label: 'Hitachi Inverters', value: 'inverters' },
            { label: 'Solar PV Modules', value: 'modules' },
            { label: 'Battery BESS Storage', value: 'storage' },
            { label: 'Mounting Structures', value: 'structures' },
            { label: 'Protection Gear (ACDB/DCDB)', value: 'electrical' },
            { label: 'Solar Water Pumps', value: 'pumps' }
          ].map((cat) => (
            <button
              key={cat.value}
              onClick={() => setFilter(cat.value)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                filter === cat.value
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="relative h-52 bg-slate-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-slate-900/90 text-amber-300 font-bold text-[10px] px-2.5 py-1 rounded-md border border-slate-800">
                  {product.brand}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs font-bold text-emerald-700 mt-1">{product.shortSpec}</p>
                  <p className="text-slate-600 text-xs mt-2 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-600">
                  <span className="font-bold text-slate-900 block mb-0.5">Warranty Guarantee:</span>
                  <span>{product.warranty}</span>
                </div>

                <div className="pt-2 flex items-center justify-between gap-2">
                  <button
                    onClick={() => setActiveProduct(product)}
                    className="text-xs font-bold text-slate-700 hover:text-emerald-600 flex items-center space-x-1"
                  >
                    <span>View Specifications</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteWithService(`Product Inquiry: ${product.name}`)}
                    className="px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-sm transition-colors"
                  >
                    Inquire Pricing
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      {activeProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
          <div 
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-950 text-white p-6 relative">
              <button
                onClick={() => setActiveProduct(null)}
                className="absolute top-4 right-4 p-2 text-slate-300 hover:text-white bg-white/10 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              
              <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2.5 py-1 rounded border border-amber-500/30 uppercase">
                {activeProduct.brand} • {activeProduct.category.toUpperCase()}
              </span>
              <h3 className="text-2xl font-black text-white mt-2">{activeProduct.name}</h3>
              <p className="text-xs text-emerald-400 font-medium mt-0.5">{activeProduct.shortSpec}</p>
            </div>

            <div className="p-6 space-y-5 max-h-[60vh] overflow-y-auto text-xs text-slate-700">
              <p className="leading-relaxed">{activeProduct.description}</p>

              <div>
                <h4 className="font-bold uppercase tracking-wider text-slate-500 text-[11px] mb-2">Key Product Advantages</h4>
                <div className="space-y-2">
                  {activeProduct.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 p-3.5 rounded-xl text-emerald-950">
                <strong className="block font-bold">Official Warranty & Support:</strong>
                <span>{activeProduct.warranty}</span>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <button
                onClick={onOpenDownloadModal}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-100 flex items-center space-x-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Technical Datasheet</span>
              </button>

              <button
                onClick={() => {
                  const title = activeProduct.name;
                  setActiveProduct(null);
                  onOpenQuoteWithService(`Product Inquiry: ${title}`);
                }}
                className="px-5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 rounded-xl shadow-md transition-colors"
              >
                Request Product Quote
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
