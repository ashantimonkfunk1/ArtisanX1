/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Phone, Mail, MapPin, Clock, Facebook, Instagram, 
  Linkedin, Youtube, HelpCircle, ShieldCheck, MessageSquare 
} from 'lucide-react';

interface FooterProps {
  onNavigate: (section: string) => void;
  onOpenQuoteModal: () => void;
}

export default function Footer({
  onNavigate,
  onOpenQuoteModal,
}: FooterProps) {
  
  const handleScrollToSection = (id: string) => {
    onNavigate(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* GLOBAL FOOTER SECTIONS */}
      <footer id="contact" className="bg-brand-primary text-gray-300 pt-20 pb-28 lg:pb-12 border-t border-white/5 relative overflow-hidden">
        {/* Decorative background circle grids */}
        <div className="absolute right-0 top-0 w-80 h-80 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-16 border-b border-white/10">
            
            {/* Column 1: Brand Info */}
            <div className="md:col-span-4 space-y-5">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-xl bg-white p-1 flex items-center justify-center border border-white/10 shadow">
                  <img 
                    src="https://imgur.com/CulOidn.png" 
                    alt="ArtisanXpress Logo" 
                    className="w-full h-full object-contain rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-lg font-extrabold text-white tracking-tight font-display">
                  Artisan<span className="text-brand-secondary">Xpress</span>
                </span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed font-medium">
                Ghana’s premium artisan coordination portal. Connecting property developers, office managers, and luxury homeowners with certified manual craftsmen, guarded by secure escrow milestones.
              </p>
              <div className="flex items-center space-x-3.5 text-white/50 pt-2">
                <a href="https://web.facebook.com/artisanxpress" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors"><Facebook className="w-4 h-4" /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors"><Instagram className="w-4 h-4" /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors"><Linkedin className="w-4 h-4" /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-brand-secondary transition-colors"><Youtube className="w-4 h-4" /></a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">Quick Links</h4>
              <ul className="space-y-2 text-xs font-medium text-gray-400">
                <li><button onClick={() => handleScrollToSection('home')} className="hover:text-brand-secondary transition-colors cursor-pointer text-left">Home</button></li>
                <li><button onClick={() => handleScrollToSection('services')} className="hover:text-brand-secondary transition-colors cursor-pointer text-left">Services</button></li>
                <li><button onClick={() => handleScrollToSection('how-it-works')} className="hover:text-brand-secondary transition-colors cursor-pointer text-left">How It Works</button></li>
                <li><button onClick={() => handleScrollToSection('about')} className="hover:text-brand-secondary transition-colors cursor-pointer text-left">About Us</button></li>
                <li><button onClick={() => handleScrollToSection('projects')} className="hover:text-brand-secondary transition-colors cursor-pointer text-left">Portfolio</button></li>
                <li><button onClick={() => handleScrollToSection('blog')} className="hover:text-brand-secondary transition-colors cursor-pointer text-left">Blog</button></li>
              </ul>
            </div>

            {/* Column 3: Corporate */}
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">Careers & Legal</h4>
              <ul className="space-y-2 text-xs font-medium text-gray-400">
                <li><button onClick={() => window.open('https://wa.me/233591222901', '_blank')} className="hover:text-brand-secondary transition-colors cursor-pointer text-left">Become an Artisan</button></li>
                <li><a href="#careers" className="hover:text-brand-secondary transition-colors">Careers at AX</a></li>
                <li><a href="#privacy" className="hover:text-brand-secondary transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-brand-secondary transition-colors">Terms of Escrow</a></li>
              </ul>
            </div>

            {/* Column 4: Contact details as requested */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-white font-mono">Contact Dispatch</h4>
              <ul className="space-y-3.5 text-xs text-gray-400 font-medium">
                
                {/* Phones */}
                <li className="flex items-start space-x-2.5">
                  <Phone className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5 animate-pulse" />
                  <div>
                    <p className="text-[10px] text-gray-500 font-mono uppercase">24/7 Hotlines</p>
                    <div className="space-y-0.5 text-white">
                      <a href="tel:0591222901" className="block hover:text-brand-secondary">0591222901</a>
                      <a href="tel:0591222902" className="block hover:text-brand-secondary">0591222902</a>
                      <a href="tel:0591222903" className="block hover:text-brand-secondary">0591222903</a>
                    </div>
                  </div>
                </li>

                {/* Email */}
                <li className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-brand-secondary shrink-0" />
                  <div>
                    <p className="text-[10px] text-gray-500 font-mono uppercase">Email Support</p>
                    <a href="mailto:artisanxpress1@gmail.com" className="text-white hover:text-brand-secondary">artisanxpress1@gmail.com</a>
                  </div>
                </li>

                {/* Office */}
                <li className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] text-gray-500 font-mono uppercase">Head Office</p>
                    <p className="text-white">Phersons Health College Street, Lomnava</p>
                  </div>
                </li>

                {/* Hours */}
                <li className="flex items-start space-x-2.5">
                  <Clock className="w-4 h-4 text-brand-secondary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[10px] text-gray-500 font-mono uppercase">Business Hours</p>
                    <p className="text-white">Monday – Saturday: 8:00 AM – 6:00 PM</p>
                  </div>
                </li>

              </ul>
            </div>

          </div>

          {/* INTERACTIVE MOCK MAP BLOCK */}
          <div className="mt-12 bg-white/5 border border-white/10 rounded-2xl p-5 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 space-y-2">
              <h4 className="text-sm font-bold text-white uppercase tracking-wider font-display">Airport Residential Hub</h4>
              <p className="text-[11px] text-gray-400">Our logistics dispatch yard houses our fleet of tools, material testing laboratories, and coordinator vehicles.</p>
              <div className="flex items-center space-x-1 text-[10px] text-brand-secondary font-mono">
                <ShieldCheck className="w-4 h-4 text-brand-secondary" />
                <span>Verified Location • Accra Central</span>
              </div>
            </div>
            
            {/* Beautiful Premium Interactive SVG Simulated Map as requested */}
            <div className="md:col-span-8 bg-brand-dark/60 h-40 rounded-xl border border-white/10 overflow-hidden relative flex items-center justify-center text-center">
              {/* Abstract Map Art Grid */}
              <div className="absolute inset-0 opacity-20" style={{
                backgroundImage: 'radial-gradient(circle, #B6D400 1px, transparent 1px)',
                backgroundSize: '12px 12px'
              }} />
              {/* Simulated Map Road lines */}
              <svg className="absolute inset-0 w-full h-full text-brand-secondary/15" viewBox="0 0 400 150">
                <line x1="0" y1="30" x2="400" y2="30" stroke="currentColor" strokeWidth="2" />
                <line x1="100" y1="0" x2="100" y2="150" stroke="currentColor" strokeWidth="2" />
                <line x1="280" y1="0" x2="280" y2="150" stroke="currentColor" strokeWidth="2" />
                <line x1="0" y1="110" x2="400" y2="110" stroke="currentColor" strokeWidth="1" />
                <circle cx="280" cy="30" r="15" fill="#B6D400" fillOpacity="0.2" className="animate-pulse" />
                <circle cx="280" cy="30" r="5" fill="#D4AF37" />
              </svg>

              <div className="relative z-10 p-4 space-y-1 bg-brand-primary/80 backdrop-blur-xs rounded-xl border border-white/5">
                <p className="text-xs font-bold text-white font-mono">Interactive Google Map Sandbox</p>
                <p className="text-[10px] text-gray-400">Centred at: 5.6044° N, 0.1868° W (Airport Residential Yard)</p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-[10px] bg-brand-secondary text-brand-primary font-bold uppercase tracking-wider px-3 py-1 rounded"
                >
                  Open in Maps App
                </a>
              </div>
            </div>
          </div>

          {/* Copy section */}
          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[11px] text-gray-500 font-medium font-mono">
            <p>© {new Date().getFullYear()} ArtisanXpress Ltd. All Rights Reserved. Coordinated in Accra, Ghana.</p>
            <p className="mt-2 md:mt-0">Premium African Craft Escrow Platform.</p>
          </div>

        </div>
      </footer>

      {/* FLOATING WHATSAPP BUTTON (FLOATING BOTTOM RIGHT) */}
      <a
        href="https://wa.me/233591222901"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white p-3.5 rounded-full shadow-2xl transition-all hover:scale-110 flex items-center justify-center group"
        title="Chat on WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white text-[#25D366]" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 text-xs font-bold font-mono tracking-wide whitespace-nowrap">
          WhatsApp Dispatch
        </span>
      </a>

      {/* STICKY BOTTOM NAVIGATION BAR FOR MOBILE */}
      <div className="lg:hidden fixed bottom-0 left-0 w-full z-40 bg-brand-primary border-t border-white/10 p-2 grid grid-cols-4 text-center text-[10px] text-gray-400 font-bold uppercase font-mono">
        <button 
          onClick={() => handleScrollToSection('home')}
          className="flex flex-col items-center justify-center py-1 text-brand-secondary"
        >
          <span className="text-xs">🏠</span>
          <span className="mt-0.5 text-[8px]">Home</span>
        </button>

        <button 
          onClick={() => handleScrollToSection('services')}
          className="flex flex-col items-center justify-center py-1 text-gray-400"
        >
          <span className="text-xs">🛠️</span>
          <span className="mt-0.5 text-[8px]">Services</span>
        </button>

        <button 
          onClick={onOpenQuoteModal}
          className="flex flex-col items-center justify-center py-1 text-brand-accent animate-pulse"
        >
          <span className="text-xs">🌟</span>
          <span className="mt-0.5 text-[8px]">Quote</span>
        </button>

        <a 
          href="tel:0591222901"
          className="flex flex-col items-center justify-center py-1 text-red-400"
        >
          <span className="text-xs animate-pulse">📞</span>
          <span className="mt-0.5 text-[8px]">Call AX</span>
        </a>
      </div>
    </>
  );
}
