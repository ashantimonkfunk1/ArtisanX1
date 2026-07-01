/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sparkles, X, Upload, MapPin, Bell, Trash2, ShieldCheck, Mail, Phone, Calendar } from 'lucide-react';
import { QuoteRequest, Notification } from '../types';

interface ModalsProps {
  isOpenQuote: boolean;
  onCloseQuote: () => void;
  preselectedTrade: string;
  onAddQuoteRequest: (newReq: QuoteRequest) => void;
  onAddNotification: (title: string, msg: string, type: 'info' | 'success' | 'alert') => void;

  isOpenNotifications: boolean;
  onCloseNotifications: () => void;
  notifications: Notification[];
  onMarkNotificationRead: (id: string) => void;
}

export default function Modals({
  isOpenQuote,
  onCloseQuote,
  preselectedTrade,
  onAddQuoteRequest,
  onAddNotification,

  isOpenNotifications,
  onCloseNotifications,
  notifications,
  onMarkNotificationRead,
}: ModalsProps) {
  // Quote states
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [trade, setTrade] = useState('Plumbing');
  const [desc, setDesc] = useState('');
  const [location, setLocation] = useState('East Legon, Accra');
  const [urgency, setUrgency] = useState<'routine' | 'medium' | 'emergency'>('routine');
  const [photos, setPhotos] = useState<string[]>([]);
  const [photoInput, setPhotoInput] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const [submittedName, setSubmittedName] = useState('');

  // Update preselected trade when modal opens
  useEffect(() => {
    if (preselectedTrade) {
      setTrade(preselectedTrade.split(' - ')[0]);
      setDesc(preselectedTrade.includes(' - ') ? `Specialized requirements for: ${preselectedTrade}` : '');
    }
  }, [preselectedTrade, isOpenQuote]);

  const handleAddPhoto = () => {
    if (photoInput.trim()) {
      setPhotos([...photos, photoInput]);
      setPhotoInput('');
    } else {
      setPhotos([...photos, 'https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80']);
    }
  };

  const handleSubmitQuoteForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!desc.trim()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const newReq: QuoteRequest = {
      id: 'req-' + Math.floor(Math.random() * 1000),
      clientName,
      phone: clientPhone,
      email: clientEmail,
      trade,
      description: desc,
      location,
      urgency,
      status: 'pending',
      dateCreated: new Date().toISOString().split('T')[0],
      photos: photos.length > 0 ? photos : ['https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80']
    };

    try {
      const response = await fetch('https://formspree.io/f/xykqdzzd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: clientName,
          phone: clientPhone,
          email: clientEmail,
          trade: trade,
          description: desc,
          location: location,
          urgency: urgency,
          photos: photos.length > 0 ? photos : ['https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80']
        })
      });

      if (response.ok) {
        onAddQuoteRequest(newReq);
        onAddNotification(
          'New Quote Tender Logged',
          `Tender for ${trade} in ${location} received. Assigned coordinator will contact you shortly.`,
          'success'
        );

        // Transition to success screen
        setSubmittedName(clientName);
        setShowSuccessScreen(true);
      } else {
        const data = await response.json();
        if (data && data.errors) {
          setSubmitError(data.errors.map((err: any) => err.message).join(', '));
        } else {
          setSubmitError('Failed to send message to Formspree. Please try again.');
        }
      }
    } catch (err) {
      setSubmitError('An error occurred while sending the message. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* 1. GLOBAL GET QUOTE MODAL */}
      {isOpenQuote && (
        <div className="fixed inset-0 bg-brand-dark/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 border border-gray-150 shadow-2xl relative animate-fadeIn">
            
            {/* Close button */}
            <button
              onClick={() => {
                setShowSuccessScreen(false);
                onCloseQuote();
              }}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-brand-primary font-bold p-1.5 rounded-full transition-all cursor-pointer"
            >
              ✕
            </button>

            {showSuccessScreen ? (
              <div className="flex flex-col items-center justify-center py-8 text-center space-y-6 animate-fadeIn text-brand-primary">
                <div className="w-16 h-16 bg-brand-secondary/20 rounded-full flex items-center justify-center text-brand-secondary text-3xl font-extrabold animate-bounce">
                  ✓
                </div>
                <div className="space-y-3">
                  <h4 className="text-xl font-bold font-display">
                    Thank You, {submittedName || 'Valued Client'}!
                  </h4>
                  <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed font-semibold">
                    Your request has been successfully received. We really appreciate your booking. Our dedicated coordinator will review your request and get back to you within 15 minutes!
                  </p>
                </div>
                <button
                  onClick={() => {
                    setShowSuccessScreen(false);
                    setClientName('');
                    setClientPhone('');
                    setClientEmail('');
                    setDesc('');
                    setPhotos([]);
                    onCloseQuote();
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-brand-secondary to-brand-accent text-brand-primary font-bold uppercase tracking-wider rounded-xl hover:scale-105 transition-all shadow-md cursor-pointer"
                >
                  Got it, Thanks!
                </button>
              </div>
            ) : (
              <>
                {/* Header */}
            <div className="space-y-1 mb-5">
              <span className="text-[10px] bg-brand-secondary text-brand-primary font-bold px-2.5 py-1 rounded-full uppercase tracking-widest font-mono">Tender Dispatcher</span>
              <h4 className="text-xl font-bold text-brand-primary font-display mt-2 flex items-center space-x-1.5">
                <Sparkles className="w-5 h-5 text-brand-accent animate-spin-slow" />
                <span>Request Premium Free Quote</span>
              </h4>
              <p className="text-xs text-gray-500">Submit parameters. Group Leaders survey requirements and response within hours.</p>
            </div>

            <form onSubmit={handleSubmitQuoteForm} className="space-y-4 text-xs font-medium text-brand-primary">
              
              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                <div>
                  <label className="block text-gray-400 font-bold uppercase font-mono mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full bg-brand-light rounded-xl border border-gray-200 px-3 py-3 outline-none focus:border-brand-primary"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 font-bold uppercase font-mono mb-1">Contact Phone</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 054 321 0987"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full bg-brand-light rounded-xl border border-gray-200 px-3 py-3 outline-none focus:border-brand-primary font-mono"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 font-bold uppercase font-mono mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. name@example.com"
                    value={clientEmail}
                    onChange={(e) => setClientEmail(e.target.value)}
                    className="w-full bg-brand-light rounded-xl border border-gray-200 px-3 py-3 outline-none focus:border-brand-primary"
                  />
                </div>
              </div>

              {/* Trade & Location */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-gray-400 font-bold uppercase font-mono mb-1">Select Trade Sector</label>
                  <select
                    value={trade}
                    onChange={(e) => setTrade(e.target.value)}
                    className="w-full bg-brand-light rounded-xl border border-gray-200 px-3 py-3 outline-none focus:border-brand-primary font-bold cursor-pointer"
                  >
                    <option value="Plumbing">Plumbing Works</option>
                    <option value="Electrical">Electrical Works</option>
                    <option value="Woodworks">Woodworks & Carpentry</option>
                    <option value="Painting">Painting & Waterproofing</option>
                    <option value="Masonry">Masonry & POP Ceilings</option>
                    <option value="Metal Works">Metal Works Fabrication</option>
                    <option value="Cleaning Services">Cleaning Services</option>
                    <option value="Interior & Exterior Decor">Interior & Exterior Decor</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-gray-400 font-bold uppercase font-mono mb-1">Property Location District</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-brand-light rounded-xl border border-gray-200 px-3 py-3 outline-none focus:border-brand-primary font-bold cursor-pointer"
                  >
                    <option value="East Legon, Accra">East Legon, Accra</option>
                    <option value="Airport Residential, Accra">Airport Residential, Accra</option>
                    <option value="Cantonments, Accra">Cantonments, Accra</option>
                    <option value="Trasacco Valley, Accra">Trasacco Valley, Accra</option>
                    <option value="Tema Community 25, Tema">Tema Community 25, Tema</option>
                    <option value="Kumasi">Kumasi</option>
                    <option value="Takoradi">Takoradi</option>
                    <option value="Cape Coast">Cape Coast</option>
                    <option value="Tamale">Tamale</option>
                  </select>
                </div>
              </div>

              {/* Urgency & Photos */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-gray-400 font-bold uppercase font-mono mb-1">Project Urgency</label>
                  <div className="flex bg-brand-light p-1 rounded-xl border border-gray-200">
                    <button
                      type="button"
                      onClick={() => setUrgency('routine')}
                      className={`flex-1 py-1.5 text-center rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                        urgency === 'routine' ? 'bg-brand-primary text-white shadow' : 'text-gray-500'
                      }`}
                    >
                      Routine
                    </button>
                    <button
                      type="button"
                      onClick={() => setUrgency('medium')}
                      className={`flex-1 py-1.5 text-center rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                        urgency === 'medium' ? 'bg-brand-accent text-brand-primary shadow' : 'text-gray-500'
                      }`}
                    >
                      Medium
                    </button>
                    <button
                      type="button"
                      onClick={() => setUrgency('emergency')}
                      className={`flex-1 py-1.5 text-center rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all ${
                        urgency === 'emergency' ? 'bg-red-600 text-white shadow' : 'text-gray-500'
                      }`}
                    >
                      Urgent 🚨
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-400 font-bold uppercase font-mono mb-1">Attach Drawings / Site Photos</label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Paste image URL (or leave empty)"
                      value={photoInput}
                      onChange={(e) => setPhotoInput(e.target.value)}
                      className="flex-1 bg-brand-light rounded-xl border border-gray-200 px-3 py-2.5 outline-none"
                    />
                    <button
                      type="button"
                      onClick={handleAddPhoto}
                      className="px-3 bg-brand-primary text-brand-secondary rounded-xl font-bold uppercase"
                    >
                      Add
                    </button>
                  </div>
                </div>
              </div>

              {/* Photos List */}
              {photos.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {photos.map((ph, i) => (
                    <div key={i} className="relative w-12 h-12 rounded-lg overflow-hidden border border-gray-200 shrink-0">
                      <img src={ph} alt="Upload preview" className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => setPhotos(photos.filter((_, idx) => idx !== i))}
                        className="absolute top-0 right-0 bg-red-600 text-white rounded-full p-0.5"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}

              {/* Description */}
              <div>
                <label className="block text-gray-400 font-bold uppercase font-mono mb-1">Describe Scope & Layout Requirements</label>
                <textarea
                  rows={3}
                  required
                  value={desc}
                  onChange={(e) => setDesc(e.target.value)}
                  placeholder="Detail your requests. For woodworks, describe drawer numbers, hardwood types. For solar, specify home loads..."
                  className="w-full bg-brand-light rounded-xl border border-gray-200 p-3 outline-none focus:border-brand-primary"
                />
              </div>

              {/* Submit */}
              {submitError && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-xs font-semibold">
                  ⚠️ Error: {submitError}
                </div>
              )}

              <div className="pt-2 flex justify-end items-center space-x-3">
                {isSubmitting && (
                  <span className="text-xs text-gray-400 font-mono animate-pulse">
                    Sending to Formspree...
                  </span>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-gradient-to-r from-brand-secondary to-brand-accent text-brand-primary font-bold uppercase tracking-wider rounded-xl hover:scale-105 transition-all shadow-md cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Dispatch Quotation Request'}
                </button>
              </div>

            </form>
          </>
        )}

          </div>
        </div>
      )}

      {/* 2. LIVE NOTIFICATIONS CENTER DRAWER */}
      {isOpenNotifications && (
        <div className="fixed inset-0 bg-brand-dark/50 backdrop-blur-xs z-50 flex justify-end">
          <div className="bg-white max-w-sm w-full h-full p-6 shadow-2xl relative flex flex-col justify-between border-l border-gray-100 animate-slideLeft">
            
            <div className="space-y-6 flex-1 overflow-y-auto">
              {/* Header */}
              <div className="flex justify-between items-center pb-4 border-b">
                <h4 className="text-base font-bold text-brand-primary flex items-center space-x-2 font-display">
                  <Bell className="w-5 h-5 text-brand-secondary" />
                  <span>Your Dispatch Logs</span>
                </h4>
                <button
                  onClick={onCloseNotifications}
                  className="p-1.5 bg-gray-150 rounded-full text-brand-primary text-xs font-bold"
                >
                  ✕
                </button>
              </div>

              {/* List */}
              <div className="space-y-3">
                {notifications.length === 0 ? (
                  <p className="text-xs text-gray-400 text-center py-10">No recent dispatches logged.</p>
                ) : (
                  notifications.map((n) => (
                    <div
                      key={n.id}
                      onClick={() => onMarkNotificationRead(n.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer relative ${
                        n.read ? 'bg-brand-light border-gray-100 opacity-60' : 'bg-brand-primary/5 border-brand-primary/20 hover:bg-white'
                      }`}
                    >
                      {!n.read && <div className="absolute top-3.5 right-3.5 w-2 h-2 bg-brand-secondary rounded-full" />}
                      <h5 className="text-xs font-bold text-brand-primary">{n.title}</h5>
                      <p className="text-[11px] text-gray-500 mt-1 leading-normal">{n.message}</p>
                      <p className="text-[9px] text-gray-400 font-mono mt-2">{n.date}</p>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="pt-4 border-t">
              <button
                onClick={onCloseNotifications}
                className="w-full py-3 bg-brand-primary text-brand-secondary font-bold text-xs uppercase tracking-wider rounded-xl text-center"
              >
                Close Logs
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
