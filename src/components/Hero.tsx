/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onNavigateToServices: () => void;
}

const BACKGROUND_SLIDES = [
  {
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1600&q=80',
    title: 'Luxury Real Estate',
    subtitle: 'Vetted standards for homes in East Legon, Cantonments, and beyond.'
  },
  {
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&w=1600&q=80',
    title: 'Precision Plumbing Installations',
    subtitle: 'From complex pumps to swimming pool filters.'
  },
  {
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1600&q=80',
    title: 'Certified Smart Electrics',
    subtitle: 'Generators, solar grids, and high-safety smart homes.'
  },
  {
    image: 'https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=1600&q=80',
    title: 'Custom Hardwood Woodworks',
    subtitle: 'Bespoke floating cabinets, pergolas, and structural doors.'
  }
];

export default function Hero({ onOpenQuoteModal, onNavigateToServices }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotating slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % BACKGROUND_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center bg-brand-primary overflow-hidden pt-20">
      
      {/* Background Slides */}
      {BACKGROUND_SLIDES.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlide ? 'opacity-35 scale-105' : 'opacity-0 scale-100'
          } transform duration-1000`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary via-brand-primary/65 to-brand-primary/20" />
        </div>
      ))}

      {/* Decorative Traditional African Kente geometric patterns in background */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-repeat-x opacity-15" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 20 L20 40 L40 20 L20 0 Z' fill='%23B6D400'/%3E%3C/svg%3E")`,
        backgroundSize: '40px'
      }} />

      {/* Hero Visual Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 py-12 lg:py-20 flex flex-col items-center">
        
        {/* Verification Tag */}
        <div className="inline-flex items-center space-x-2 bg-brand-secondary/15 border border-brand-secondary/35 px-4 py-1.5 rounded-full mb-6 animate-pulse">
          <ShieldCheck className="w-4 h-4 text-brand-secondary" />
          <span className="text-brand-secondary text-xs font-bold tracking-wider uppercase font-mono">100% Verified Ghanaian Artisans</span>
        </div>

        {/* Cinematic Title & Branding Typography */}
        <div className="text-center max-w-4xl mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-none">
            Skilled Hands.<br/>
            <span className="text-brand-secondary">Fast Delivery.</span>
          </h1>
          <p className="mt-6 text-base sm:text-xl text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Connect with Trusted, Verified Artisans Across Ghana. Book senior professionals with dedicated Group Leaders for guaranteed quality.
          </p>

          {/* Action triggers */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onNavigateToServices}
              className="w-full sm:w-auto px-8 py-4 bg-brand-secondary hover:bg-brand-secondary/90 text-brand-primary font-bold rounded-xl shadow-lg transition-transform hover:scale-[1.03] cursor-pointer"
            >
              Find an Artisan
            </button>
            <button
              onClick={() => window.open('https://wa.me/233591222901', '_blank')}
              className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/25 text-white border border-white/20 font-bold rounded-xl transition-transform hover:scale-[1.03] cursor-pointer"
            >
              Become an Artisan
            </button>
            <button
              onClick={onOpenQuoteModal}
              className="w-full sm:w-auto px-8 py-4 bg-transparent hover:bg-brand-accent hover:text-brand-primary text-brand-accent border border-brand-accent/35 font-bold rounded-xl transition-transform hover:scale-[1.03] cursor-pointer flex items-center justify-center space-x-1"
            >
              <Sparkles className="w-4 h-4 animate-spin-slow" />
              <span>Get Free Quote</span>
            </button>
          </div>
        </div>

        {/* Live Counters */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl text-center animate-fadeIn">
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-brand-secondary font-mono">1,240+</h4>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Verified Artisans</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-brand-accent font-mono">99.4%</h4>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Job Success Rate</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-brand-secondary font-mono">15 Mins</h4>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Avg Response Time</p>
          </div>
          <div className="bg-white/5 border border-white/10 p-4 rounded-xl">
            <h4 className="text-2xl sm:text-3xl font-extrabold text-white font-mono">GHS 0.00</h4>
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mt-1">Free Inspection Quote</p>
          </div>
        </div>

      </div>
    </div>
  );
}
