/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, Target, Heart, Eye, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { FAQS } from '../data';

export default function AboutFAQ() {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const values = [
    { title: 'Trust', desc: 'Triple-vetting background checks, escrow holds, and legal guarantors.' },
    { title: 'Integrity', desc: 'No sudden markups, material switching, or back-channel negotiation.' },
    { title: 'Quality', desc: 'Double-blind inspector checkpoints supervised by civil surveyors.' },
    { title: 'Innovation', desc: 'Real-time client progress logs, cost estimators, and routing engines.' },
    { title: 'Speed', desc: 'Rapid dispatch times and strict milestone completion deadlines.' },
    { title: 'Customer Satisfaction', desc: 'Dedicated liaisons and a complete dispute-resolution warranty.' }
  ];

  return (
    <div className="space-y-24">
      
      {/* ABOUT SECTION */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Elegant Column 1: Image Frame */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -left-4 -top-4 w-72 h-72 bg-brand-secondary/10 rounded-3xl -z-10 animate-pulse" />
              <div className="absolute -right-4 -bottom-4 w-72 h-72 bg-brand-accent/10 rounded-3xl -z-10" />
              
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative h-96 sm:h-[450px]">
                <img
                  src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80"
                  alt="Modern Real Estate in Cantonments, Accra"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                {/* Floating badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-brand-primary/90 backdrop-blur border border-white/10 p-5 rounded-2xl text-white">
                  <h4 className="text-sm font-bold text-brand-secondary font-display uppercase tracking-wider">Supervised Standards</h4>
                  <p className="text-[11px] text-gray-300 mt-1 leading-normal">Every artisan project receives a dedicated Group Leader to audit quality, coordinate logistics, and guarantee delivery schedules.</p>
                </div>
              </div>
            </div>

            {/* Column 2: Text Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest bg-brand-primary/5 px-4 py-1.5 rounded-full font-mono">
                The ArtisanXpress Mandate
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-primary mt-2 tracking-tight">
                Authentic Craftsmanship, Powered by Accountability.
              </h2>
              
              <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">
                ArtisanXpress connects homeowners, property developers, commercial operators, and corporate builders with carefully vetted, reference-checked, and tested master artisans across Ghana.
              </p>

              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-medium">
                Our mission is to establish the absolute gold standard for manual trades in West Africa. We protect both client deposits and artisan livelihood through our robust milestone escrow mechanism, ensuring every project is completed exactly as promised.
              </p>

              {/* Vision & Mission Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-gray-100">
                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-brand-primary flex items-center space-x-2 font-display">
                    <Target className="w-5 h-5 text-brand-secondary" />
                    <span>Our Mission</span>
                  </h4>
                  <p className="text-xs text-gray-500 leading-normal">To dignify manual trades, eradicate service friction, and deliver pristine building solutions with certified accountability.</p>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-brand-primary flex items-center space-x-2 font-display">
                    <Eye className="w-5 h-5 text-brand-accent" />
                    <span>Our Vision</span>
                  </h4>
                  <p className="text-xs text-gray-500 leading-normal">To become the absolute foremost infrastructure platform for verified dispatches, smart estimators, and quality handymen in Sub-Saharan Africa.</p>
                </div>
              </div>
            </div>

          </div>

          {/* CORE VALUES BENTO */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-brand-primary text-center mb-10 font-display">Our Core Professional Values</h3>
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
              {values.map((v, idx) => (
                <div key={idx} className="bg-brand-light p-5 rounded-2xl border border-gray-100 text-center hover:border-brand-secondary transition-all">
                  <div className="w-10 h-10 rounded-lg bg-brand-primary/5 text-brand-primary flex items-center justify-center font-bold text-sm mx-auto mb-3 font-mono">
                    0{idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-brand-primary font-display">{v.title}</h4>
                  <p className="text-[10px] text-gray-500 mt-1.5 leading-snug font-medium">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-20 bg-brand-light border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center mb-12">
            <span className="text-brand-accent text-xs font-bold uppercase tracking-widest bg-brand-primary/5 px-4 py-1.5 rounded-full font-mono">
              Knowledge Base
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary mt-3 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 mt-2">Have questions about our escrow, vetted qualifications, or group leader coordination? Find instant answers below.</p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="bg-white rounded-2xl border border-gray-150 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between text-brand-primary font-bold text-sm sm:text-base hover:bg-brand-light/50 transition-colors cursor-pointer"
                  >
                    <span className="font-display pr-4">{faq.question}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-brand-secondary shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-brand-secondary shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed font-medium animate-fadeIn">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}
