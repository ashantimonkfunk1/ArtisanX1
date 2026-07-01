/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ChevronRight, Wrench, Shield, ArrowRight, Sparkles, AlertCircle } from 'lucide-react';
import { SERVICES } from '../data';

interface ServicesSectionProps {
  onOpenQuoteModal: (preselectedTrade?: string) => void;
  onOpenEstimator: (trade: string) => void;
  searchTerm?: string;
  filters?: { trade: string; location: string; rating: number; emergency: boolean; available: boolean };
}

export default function ServicesSection({
  onOpenQuoteModal,
  onOpenEstimator,
  searchTerm = '',
  filters,
}: ServicesSectionProps) {
  const [activeServiceTab, setActiveServiceTab] = useState<string | null>(null);

  // Filter out services based on search / main filters
  const filteredServices = SERVICES.filter((service) => {
    if (filters?.trade && filters.trade !== '') {
      return service.title.toLowerCase().includes(filters.trade.toLowerCase()) || 
             service.subTrades.some(st => st.toLowerCase().includes(filters.trade.toLowerCase()));
    }
    if (searchTerm) {
      return service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             service.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
             service.subTrades.some(st => st.toLowerCase().includes(searchTerm.toLowerCase()));
    }
    return true;
  });

  return (
    <section id="services" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest bg-brand-primary/5 px-4 py-1.5 rounded-full font-mono">
            Craft Directory
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-primary mt-4 tracking-tight">
            Our Elite Artisan Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            We provide verified masters across eight heavy-duty segments. Click any card to explore sub-trades, request direct quotations, or calculate instant material estimates.
          </p>
        </div>

        {/* Services Grid (Highly Interactive) */}
        {filteredServices.length === 0 ? (
          <div className="bg-white p-12 text-center rounded-2xl border border-dashed border-gray-200">
            <AlertCircle className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold text-brand-primary">No Matching Services Found</h3>
            <p className="text-sm text-gray-500 mt-1">Please try modifying your filter or query for other high-end Ghanaian artisans.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service) => {
              const isOpen = activeServiceTab === service.id;
              
              return (
                <div
                  key={service.id}
                  className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border ${
                    isOpen ? 'border-brand-secondary ring-2 ring-brand-secondary/20' : 'border-gray-100'
                  }`}
                >
                  {/* Card Visual Photo */}
                  <div className="relative h-48 overflow-hidden group">
                    {(service as any).splitImages ? (
                      <div className="w-full h-full flex">
                        {(service as any).splitImages.map((img: string, idx: number) => (
                          <div key={idx} className="w-1/2 h-full overflow-hidden relative border-r last:border-r-0 border-brand-primary/10">
                            <img
                              src={img}
                              alt={`${service.title} part ${idx + 1}`}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                              style={{ objectPosition: (service as any).objectPositions?.[idx] || (service as any).objectPosition || 'center' }}
                              referrerPolicy="no-referrer"
                            />
                          </div>
                        ))}
                      </div>
                    ) : (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        style={{ objectPosition: (service as any).objectPosition || 'center' }}
                        referrerPolicy="no-referrer"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-brand-primary/20 to-transparent pointer-events-none" />
                    
                    {/* Floating Trade Badge */}
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-lg font-extrabold text-white font-display">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-4">
                    <p className="text-xs text-gray-500 leading-relaxed font-medium">
                      {service.description}
                    </p>

                    {/* Sub-trades list expandable */}
                    <div className="pt-2 border-t border-gray-100">
                      <button
                        onClick={() => setActiveServiceTab(isOpen ? null : service.id)}
                        className="flex items-center justify-between w-full text-xs font-bold text-brand-primary hover:text-brand-secondary transition-colors cursor-pointer"
                      >
                        <span>{isOpen ? 'Hide Specialized Trades ▲' : 'View Specialized Trades ▼'}</span>
                        <span className="text-[10px] bg-brand-primary/5 px-2 py-0.5 rounded text-brand-primary font-mono">
                          {service.subTrades.length} Trades
                        </span>
                      </button>

                      {isOpen && (
                        <div className="mt-3 grid grid-cols-2 gap-2 bg-brand-light p-3 rounded-xl border border-gray-100 animate-fadeIn">
                          {service.subTrades.map((st, i) => (
                            <button
                              key={i}
                              onClick={() => onOpenQuoteModal(service.title + ' - ' + st)}
                              className="text-left text-[11px] text-gray-600 hover:text-brand-primary hover:font-bold transition-all py-1 px-1.5 rounded hover:bg-white flex items-center space-x-1"
                            >
                              <ChevronRight className="w-3 h-3 text-brand-secondary shrink-0" />
                              <span className="truncate">{st}</span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Quick Link Buttons */}
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <button
                        onClick={() => onOpenEstimator(service.title)}
                        className="py-2.5 bg-brand-primary/5 hover:bg-brand-primary/10 text-brand-primary text-[10px] font-bold uppercase tracking-wider rounded-xl transition-all text-center flex items-center justify-center space-x-1"
                      >
                        <Wrench className="w-3.5 h-3.5" />
                        <span>Estimator</span>
                      </button>

                      <button
                        onClick={() => onOpenQuoteModal(service.title)}
                        className="py-2.5 bg-brand-secondary hover:bg-brand-secondary/95 text-brand-primary text-[10px] font-extrabold uppercase tracking-wider rounded-xl transition-all text-center flex items-center justify-center space-x-1"
                      >
                        <span>Book Job</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Promo Bar */}
        <div className="mt-16 bg-brand-primary text-white p-8 rounded-3xl relative overflow-hidden shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-secondary/15 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h4 className="text-xl font-bold flex items-center justify-center md:justify-start space-x-2">
              <Sparkles className="w-5 h-5 text-brand-accent animate-spin-slow" />
              <span>Need an Instant Commercial Consultation?</span>
            </h4>
            <p className="text-xs text-gray-300">
              For warehouses, office block renovations, container conversions, or hotels in Accra and Tema, we assign dynamic senior civil inspectors for full-service project scopes.
            </p>
          </div>
          <button
            onClick={() => onOpenQuoteModal('Commercial/Industrial Project')}
            className="px-6 py-3 bg-brand-secondary hover:bg-brand-secondary/90 text-brand-primary font-bold text-xs uppercase tracking-wider rounded-xl shrink-0 transition-all cursor-pointer hover:scale-105"
          >
            Request Corporate Tender
          </button>
        </div>

      </div>
    </section>
  );
}
