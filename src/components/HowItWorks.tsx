/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, Activity, ShieldCheck, Star } from 'lucide-react';
import { WORK_PROCESS } from '../data';

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest bg-brand-primary/5 px-4 py-1.5 rounded-full font-mono">
            Standard Operating Protocol
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-primary mt-4 tracking-tight">
            How ArtisanXpress Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            We follow a rigorous quality-controlled roadmap for every single engagement, ensuring complete transparency, security, and top-tier execution.
          </p>
        </div>

        {/* 11-Step Interactive Horizontal Timeline (Desktop) & Vertical Timeline (Mobile) */}
        
        {/* Desktop Interactive Row (hidden on small screens) */}
        <div className="hidden lg:block relative mb-12">
          {/* Horizontal Line connector */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 z-0" />
          <div 
            className="absolute top-1/2 left-0 h-1 bg-brand-secondary -translate-y-1/2 z-0 transition-all duration-500" 
            style={{ width: `${(activeStep / (WORK_PROCESS.length - 1)) * 100}%` }}
          />

          <div className="relative z-10 flex justify-between">
            {WORK_PROCESS.map((step, idx) => {
              const isCompleted = idx <= activeStep;
              const isActive = idx === activeStep;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className="flex flex-col items-center group cursor-pointer"
                >
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold font-mono text-xs transition-all duration-300 border-2 ${
                      isActive
                        ? 'bg-brand-secondary border-brand-secondary text-brand-primary scale-110 shadow-lg shadow-brand-secondary/30'
                        : isCompleted
                        ? 'bg-brand-primary border-brand-primary text-brand-secondary'
                        : 'bg-white border-gray-200 text-gray-400 group-hover:border-gray-400 group-hover:text-gray-600'
                    }`}
                  >
                    {step.step}
                  </div>
                  <span
                    className={`mt-3 text-[10px] font-bold tracking-wider uppercase max-w-[80px] text-center leading-tight transition-colors ${
                      isActive
                        ? 'text-brand-primary'
                        : isCompleted
                        ? 'text-brand-primary/80'
                        : 'text-gray-400 group-hover:text-gray-600'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Details Panel (Desktop) */}
        <div className="hidden lg:block bg-brand-light border border-gray-100 rounded-3xl p-8 mb-16 relative shadow-sm">
          <div className="absolute top-4 right-6 text-brand-primary/20 font-mono text-8xl font-black select-none pointer-events-none">
            {WORK_PROCESS[activeStep].step}
          </div>
          <div className="flex items-start space-x-6 max-w-3xl">
            <div className="w-16 h-16 rounded-2xl bg-brand-primary flex items-center justify-center text-brand-secondary shrink-0 shadow">
              <span className="text-xl font-bold font-mono">{WORK_PROCESS[activeStep].step}</span>
            </div>
            <div>
              <span className="text-brand-secondary text-[11px] font-bold uppercase tracking-wider font-mono">Stage {WORK_PROCESS[activeStep].step} of 11</span>
              <h3 className="text-2xl font-extrabold text-brand-primary mt-1 font-display">
                {WORK_PROCESS[activeStep].title}
              </h3>
              <p className="mt-3 text-sm text-gray-600 leading-relaxed font-medium">
                {WORK_PROCESS[activeStep].desc}
              </p>
              
              {/* Extra details based on stage */}
              <div className="mt-5 flex items-center space-x-4">
                {activeStep === 4 && (
                  <div className="text-xs text-brand-primary bg-brand-secondary/15 px-3 py-1.5 rounded-lg border border-brand-secondary/35 flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-brand-secondary" />
                    <span>Your deposit is escrowed and backed by refund guarantees.</span>
                  </div>
                )}
                {activeStep === 6 && (
                  <div className="text-xs text-brand-primary bg-brand-secondary/15 px-3 py-1.5 rounded-lg border border-brand-secondary/35 flex items-center space-x-1.5">
                    <Activity className="w-4 h-4 text-brand-secondary" />
                    <span>Group Leader performs double checking on material specifications.</span>
                  </div>
                )}
                {activeStep === 10 && (
                  <div className="text-xs text-brand-accent bg-brand-primary/10 px-3 py-1.5 rounded-lg border border-brand-accent/35 flex items-center space-x-1.5">
                    <Star className="w-4 h-4 text-brand-accent fill-brand-accent" />
                    <span>Rate your artisan to unlock their milestone escrow disbursement!</span>
                  </div>
                )}
                <button
                  onClick={() => setActiveStep((prev) => (prev + 1) % WORK_PROCESS.length)}
                  className="text-xs font-bold text-brand-primary hover:text-brand-secondary transition-colors flex items-center space-x-1.5 cursor-pointer ml-auto"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline Layout (Visible only on medium/small screens) */}
        <div className="lg:hidden space-y-6">
          {WORK_PROCESS.map((step, idx) => (
            <div
              key={idx}
              className="bg-brand-light border border-gray-100 p-5 rounded-2xl flex items-start space-x-4 relative"
            >
              <div className="w-10 h-10 rounded-full bg-brand-primary text-brand-secondary font-bold font-mono text-xs flex items-center justify-center shrink-0 shadow">
                {step.step}
              </div>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-brand-primary uppercase tracking-wide">
                  {step.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
