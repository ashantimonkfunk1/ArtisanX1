/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Bell, Sparkles } from 'lucide-react';
import { Notification } from '../types';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
  notifications: Notification[];
  onOpenNotifications: () => void;
  onOpenQuoteModal: () => void;
}

export default function Navbar({
  activeSection,
  onNavigate,
  notifications,
  onOpenNotifications,
  onOpenQuoteModal,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'how-it-works', label: 'How It Works' },
    { id: 'why-leaders', label: 'Why Group Leaders' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'blog', label: 'Blog' },
    { id: 'faq', label: 'FAQs' },
    { id: 'contact', label: 'Contact' }
  ];

  const unreadCount = notifications.filter(n => !n.read).length;

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-primary/95 shadow-lg backdrop-blur-md py-3'
          : 'bg-gradient-to-b from-brand-primary/90 to-brand-primary/20 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-white p-1 shadow-md border border-white/20">
              <img 
                src="https://imgur.com/CulOidn.png" 
                alt="ArtisanXpress Logo" 
                className="w-full h-full object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-brand-accent rounded-full animate-ping" />
            </div>
            <div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                Artisan<span className="text-brand-secondary">Xpress</span>
              </span>
              <p className="text-[9px] font-semibold text-brand-accent tracking-widest uppercase -mt-1 font-mono">Verified • Ghana</p>
            </div>
          </div>

          {/* Desktop Public Nav */}
          <nav className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide transition-colors ${
                  activeSection === item.id
                    ? 'text-brand-secondary bg-white/10'
                    : 'text-gray-200 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Quick Action Group */}
          <div className="hidden sm:flex items-center space-x-3">
            {/* Quick Urgent Request Widget */}
            <a
              href="tel:0591222901"
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-red-600/20 border border-red-500/30 text-red-200 hover:bg-red-600 hover:text-white transition-all text-xs font-semibold rounded-lg"
              title="24/7 Emergency Dispatch"
            >
              <Phone className="w-3.5 h-3.5 text-red-400 animate-pulse" />
              <span>0591222901</span>
            </a>

            {/* Notifications Button */}
            <button
              onClick={onOpenNotifications}
              className="relative p-2 rounded-xl bg-white/10 text-gray-200 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
            >
              <Bell className="w-4.5 h-4.5" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white font-mono text-[10px] font-bold rounded-full flex items-center justify-center border-2 border-brand-primary">
                  {unreadCount}
                </span>
              )}
            </button>

            {/* Main Action Trigger */}
            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-2 bg-gradient-to-r from-brand-secondary to-brand-accent text-brand-primary font-bold text-xs tracking-wider uppercase rounded-xl hover:shadow-lg hover:shadow-brand-secondary/20 hover:scale-105 transition-all cursor-pointer flex items-center space-x-1"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Mobile Menu & Notif Trigger */}
          <div className="xl:hidden flex items-center space-x-3">
            {/* Notifications Mobile */}
            <button
              onClick={onOpenNotifications}
              className="relative p-2 rounded-lg bg-white/10 text-gray-200"
            >
              <Bell className="w-4 h-4" />
              {unreadCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 text-white font-mono text-[9px] font-bold rounded-full flex items-center justify-center">
                  {unreadCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-white/10 text-gray-200 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-brand-primary/95 backdrop-blur-lg border-t border-white/10">
          <div className="px-4 pt-4 pb-6 space-y-3">
            
            <div className="space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium ${
                    activeSection === item.id
                      ? 'text-brand-secondary bg-white/10 font-semibold'
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <a
                href="tel:0591222901"
                className="flex items-center justify-center space-x-2 w-full py-2.5 bg-red-600/30 text-red-200 border border-red-500/20 text-xs font-bold rounded-xl"
              >
                <Phone className="w-4 h-4 text-red-400 animate-pulse" />
                <span>Call Emergency: 0591222901</span>
              </a>

              <button
                onClick={() => { onOpenQuoteModal(); setIsOpen(false); }}
                className="w-full py-3 bg-gradient-to-r from-brand-secondary to-brand-accent text-brand-primary font-extrabold text-xs uppercase tracking-wider rounded-xl shadow-lg"
              >
                Request Free Quote
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
