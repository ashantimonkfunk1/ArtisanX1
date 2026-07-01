/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ServicesSection from './components/ServicesSection';
import HowItWorks from './components/HowItWorks';
import FeaturedProjects from './components/FeaturedProjects';
import AboutFAQ from './components/AboutFAQ';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import Modals from './components/Modals';

import { 
  Job, Artisan, QuoteRequest, Notification 
} from './types';
import { 
  INITIAL_JOBS, INITIAL_ARTISANS, TESTIMONIALS, BLOG_POSTS 
} from './data';
import { Star } from 'lucide-react';

export default function App() {
  // Navigation states
  const [activeSection, setActiveSection] = useState('home');

  // Master State Arrays (Persisted via LocalStorage for real-time reactivity between dashboards)
  const [jobs, setJobs] = useState<Job[]>([]);
  const [artisans, setArtisans] = useState<Artisan[]>([]);
  const [quoteRequests, setQuoteRequests] = useState<QuoteRequest[]>([]);
  const [notifications, setNotifications] = useState<Notification[]>([]);

  // Modals States
  const [isOpenQuote, setIsOpenQuote] = useState(false);
  const [isOpenNotifications, setIsOpenNotifications] = useState(false);
  const [preselectedTrade, setPreselectedTrade] = useState('');

  // Initial State Hydration
  useEffect(() => {
    const cachedJobs = localStorage.getItem('ax_jobs');
    const cachedArtisans = localStorage.getItem('ax_artisans');
    const cachedQuotes = localStorage.getItem('ax_quotes');
    const cachedNotifications = localStorage.getItem('ax_notifications');

    if (cachedJobs) setJobs(JSON.parse(cachedJobs));
    else setJobs(INITIAL_JOBS);

    if (cachedArtisans) setArtisans(JSON.parse(cachedArtisans));
    else setArtisans(INITIAL_ARTISANS);

    if (cachedQuotes) setQuoteRequests(JSON.parse(cachedQuotes));
    else setQuoteRequests([]);

    if (cachedNotifications) {
      setNotifications(JSON.parse(cachedNotifications));
    } else {
      const initialAlerts: Notification[] = [
        {
          id: 'n-1',
          title: 'Welcome to ArtisanXpress!',
          message: 'Your premium portal is active. Ask for quotes, monitor project checklists, and pay held milestone escrow with MTN MoMo.',
          date: 'June 29, 2026',
          read: false,
          type: 'success'
        },
        {
          id: 'n-2',
          title: 'Vetting Guarantee Active',
          message: 'Every single artisan has completed full criminal records check, practical dexterity assessment, and guarantor check-offs.',
          date: 'June 29, 2026',
          read: false,
          type: 'info'
        }
      ];
      setNotifications(initialAlerts);
    }
  }, []);

  // Save states back to local storage whenever they change
  useEffect(() => {
    if (jobs.length > 0) localStorage.setItem('ax_jobs', JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    if (artisans.length > 0) localStorage.setItem('ax_artisans', JSON.stringify(artisans));
  }, [artisans]);

  useEffect(() => {
    localStorage.setItem('ax_quotes', JSON.stringify(quoteRequests));
  }, [quoteRequests]);

  useEffect(() => {
    if (notifications.length > 0) localStorage.setItem('ax_notifications', JSON.stringify(notifications));
  }, [notifications]);

  // Master State mutators
  const handleUpdateJob = (updatedJob: Job) => {
    setJobs((prevJobs) => {
      const index = prevJobs.findIndex((j) => j.id === updatedJob.id);
      if (index > -1) {
        const copy = [...prevJobs];
        copy[index] = updatedJob;
        return copy;
      } else {
        return [updatedJob, ...prevJobs];
      }
    });
  };

  const handleUpdateArtisan = (updatedArtisan: Artisan) => {
    setArtisans((prevArtisans) => {
      const index = prevArtisans.findIndex((a) => a.id === updatedArtisan.id);
      if (index > -1) {
        const copy = [...prevArtisans];
        copy[index] = updatedArtisan;
        return copy;
      } else {
        return [...prevArtisans, updatedArtisan];
      }
    });
  };

  const handleAddQuoteRequest = (newReq: QuoteRequest) => {
    setQuoteRequests((prev) => [newReq, ...prev]);
  };

  const handleUpdateQuoteRequest = (updatedReq: QuoteRequest) => {
    setQuoteRequests((prev) => prev.map(q => q.id === updatedReq.id ? updatedReq : q));
  };

  const handleAddNotification = (title: string, msg: string, type: 'info' | 'success' | 'alert') => {
    const newNotif: Notification = {
      id: 'notif-' + Math.floor(Math.random() * 10000),
      title,
      message: msg,
      date: 'Today',
      read: false,
      type
    };
    setNotifications((prev) => [newNotif, ...prev]);
  };

  const handleMarkNotificationRead = (id: string) => {
    setNotifications((prev) => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  // Navigations Scroll assistant
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Pre-fill trade and trigger quote modal from services
  const handleOpenQuoteModal = (tradeName?: string) => {
    setPreselectedTrade(tradeName || '');
    setIsOpenQuote(true);
  };

  const handleOpenEstimator = (tradeName: string) => {
    handleOpenQuoteModal(tradeName + ' Estimate');
  };

  return (
    <div className="bg-brand-light min-h-screen text-brand-dark selection:bg-brand-secondary/30 antialiased">
      
      {/* Sticky Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        notifications={notifications}
        onOpenNotifications={() => setIsOpenNotifications(true)}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      <main className="animate-fadeIn">
        {/* Hero Carousel without integrated search */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onNavigateToServices={() => handleNavigate('services')}
        />

        {/* Vetting Quality & Group Leaders Infographics */}
        <Features />

        {/* Service Cards directories with dynamic estimators triggers */}
        <ServicesSection
          onOpenQuoteModal={handleOpenQuoteModal}
          onOpenEstimator={handleOpenEstimator}
        />

        {/* Pipeline Work Process 11-Step timeline */}
        <HowItWorks />

        {/* Interactive Before & After sliders masonry gallery */}
        <FeaturedProjects />

        {/* About mandate & Core Values paired with FAQ accordions */}
        <AboutFAQ />

        {/* Client Testimonials Section */}
        <section className="py-20 bg-brand-primary text-white overflow-hidden relative">
          <div className="absolute left-0 top-0 w-full h-12 bg-repeat-x opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 40 40'%3E%3Cpath d='M0 20 L20 40 L40 20 L20 0 Z' fill='%23B6D400'/%3E%3C/svg%3E")`,
            backgroundSize: '40px'
          }} />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest bg-white/10 px-4 py-1.5 rounded-full font-mono">
                Client Reviews
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-4 font-display">
                What Ghanaian Homeowners & Property Developers Say
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-brand-dark/40 border border-white/10 p-6 rounded-2xl flex flex-col justify-between space-y-4">
                  <p className="text-xs text-gray-300 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center space-x-3 pt-3 border-t border-white/10">
                    <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-brand-secondary" />
                    <div>
                      <h4 className="text-xs font-bold text-white">{t.name}</h4>
                      <p className="text-[10px] text-brand-secondary font-semibold">{t.role} • {t.location}</p>
                      <div className="flex space-x-0.5 mt-1 text-brand-accent">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-brand-accent text-brand-accent" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog & Improvement advice section */}
        <BlogSection />
      </main>

      {/* Footer (Quick Links, Careers, dispatches, Interactive google map block) */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuoteModal={() => handleOpenQuoteModal()}
      />

      {/* Global Interactive Modals (Quote forms & Notif drawers) */}
      <Modals
        isOpenQuote={isOpenQuote}
        onCloseQuote={() => setIsOpenQuote(false)}
        preselectedTrade={preselectedTrade}
        onAddQuoteRequest={handleAddQuoteRequest}
        onAddNotification={handleAddNotification}

        isOpenNotifications={isOpenNotifications}
        onCloseNotifications={() => setIsOpenNotifications(false)}
        notifications={notifications}
        onMarkNotificationRead={handleMarkNotificationRead}
      />

    </div>
  );
}
