/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import * as Icons from 'lucide-react';
import { WHY_CHOOSE_US } from '../data';

export default function Features() {
  
  // Dynamic Icon Renderer
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck': return <Icons.ShieldCheck className="w-8 h-8 text-brand-secondary" />;
      case 'Zap': return <Icons.Zap className="w-8 h-8 text-brand-secondary animate-pulse" />;
      case 'Award': return <Icons.Trophy className="w-8 h-8 text-brand-secondary" />;
      case 'Lock': return <Icons.Lock className="w-8 h-8 text-brand-secondary" />;
      case 'DollarSign': return <Icons.CreditCard className="w-8 h-8 text-brand-secondary" />;
      case 'UserCheck': return <Icons.UserCheck className="w-8 h-8 text-brand-secondary" />;
      case 'TrendingUp': return <Icons.TrendingUp className="w-8 h-8 text-brand-secondary" />;
      case 'Users': return <Icons.Users className="w-8 h-8 text-brand-secondary" />;
      default: return <Icons.Wrench className="w-8 h-8 text-brand-secondary" />;
    }
  };

  return (
    <section id="why-leaders" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Why Choose Us */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest bg-brand-primary/5 px-4 py-1.5 rounded-full font-mono">
            Vetting Excellence
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-primary mt-4 tracking-tight">
            Why Choose ArtisanXpress?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            We are redefining the artisan industry in West Africa by combining digital accountability, strict skill-checks, and in-person professional coordination.
          </p>
        </div>

        {/* Why Choose Us Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {WHY_CHOOSE_US.map((item, idx) => (
            <div
              key={idx}
              className="group bg-brand-light p-6 rounded-2xl border border-gray-100 hover:border-brand-secondary/40 hover:bg-white shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer"
            >
              <div className="w-14 h-14 bg-brand-primary rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {renderIcon(item.icon)}
              </div>
              <h3 className="text-lg font-bold text-brand-primary group-hover:text-brand-secondary transition-colors font-display">
                {item.title}
              </h3>
              <p className="mt-2.5 text-xs text-gray-500 font-medium leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic Infographic: Why Group Leaders? */}
        <div className="bg-brand-primary text-white rounded-3xl p-8 lg:p-12 overflow-hidden relative shadow-2xl">
          {/* Subtle gold accent circle glow */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-brand-secondary/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Infographic Copy */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-brand-accent text-xs font-bold uppercase tracking-wider bg-white/10 px-3.5 py-1.5 rounded-full font-mono">
                The ArtisanXpress Safeguard
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                Every Job Has A Dedicated Group Leader.
              </h3>
              <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                We believe that premium craftsmanship requires professional accountability. You will never have to chase, negotiate, or argue with craftsmen. Your dedicated Group Leader is a certified civil surveyor, architectural designer, or master project supervisor.
              </p>

              {/* Bullet Benefits */}
              <div className="space-y-3.5">
                {[
                  'Zero Direct Dispute Friction: The Group Leader handles all scope-of-work compliance.',
                  'Milestone Verification: Payment release is contingent on senior engineer approval.',
                  'Material Quality Auditing: Preventing cheap materials substitution and cheating.',
                  'Structured Progress Logs: Daily photos and checklist completions posted directly to your Portal.'
                ].map((bullet, index) => (
                  <div key={index} className="flex items-start space-x-3 text-xs sm:text-sm text-gray-200">
                    <Icons.CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Infographic Visual representation */}
            <div className="lg:col-span-7 bg-brand-dark/50 border border-white/10 p-6 sm:p-8 rounded-2xl relative">
              <div className="absolute top-4 right-4 flex items-center space-x-1.5 px-3 py-1 rounded bg-brand-secondary/15 border border-brand-secondary/35">
                <div className="w-2 h-2 bg-brand-secondary rounded-full animate-ping" />
                <span className="text-[10px] font-bold text-brand-secondary uppercase tracking-widest font-mono">Active Monitoring</span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-white mb-6 flex items-center space-x-2">
                <Icons.Activity className="w-5 h-5 text-brand-accent" />
                <span>Structural Project Coordination Pipeline</span>
              </h4>

              {/* Dashboard Layout Infographic */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                
                {/* Step 1: Group Leader */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-3">
                    <Icons.ShieldAlert className="w-6 h-6" />
                  </div>
                  <h5 className="text-xs font-bold text-white">1. Site Inspection</h5>
                  <p className="text-[10px] text-gray-400 mt-1 leading-snug">Leader takes laser dimensions and generates catalogued itemized quotes.</p>
                </div>

                {/* Step 2: Artisan Deployment */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center relative">
                  <div className="hidden sm:block absolute top-1/2 -right-3 -translate-y-1/2 z-10 text-brand-accent font-mono text-xs">→</div>
                  <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-3">
                    <Icons.Wrench className="w-6 h-6" />
                  </div>
                  <h5 className="text-xs font-bold text-white">2. Artisan Dispatch</h5>
                  <p className="text-[10px] text-gray-400 mt-1 leading-snug">Vetted specialists are routed directly. Materials delivered on schedule.</p>
                </div>

                {/* Step 3: Verification Check */}
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-brand-secondary/15 flex items-center justify-center text-brand-secondary mb-3">
                    <Icons.Award className="w-6 h-6 text-brand-secondary" />
                  </div>
                  <h5 className="text-xs font-bold text-white">3. Quality Sign-Off</h5>
                  <p className="text-[10px] text-gray-400 mt-1 leading-snug">Double-blind audit checks performed. Client rates and releases held escrow.</p>
                </div>

              </div>

              {/* Quality Seal */}
              <div className="mt-6 p-4 rounded-xl bg-brand-secondary/10 border border-brand-secondary/30 flex items-center space-x-3">
                <Icons.UserCheck className="w-6 h-6 text-brand-secondary shrink-0" />
                <div>
                  <h6 className="text-xs font-bold text-white uppercase tracking-wider font-display">Guarantee of Competence</h6>
                  <p className="text-[11px] text-gray-300 leading-normal">Our Group Leaders remain on site to oversee the work. You never pay a single pesewa for standard inspection.</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
