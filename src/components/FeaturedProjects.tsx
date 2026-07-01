/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Calendar, Sparkles, Sliders, ChevronRight, Eye } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data';

export default function FeaturedProjects() {
  // Track "After" state toggles for each project ID (defaults to 'after')
  const [projectStates, setProjectStates] = useState<Record<string, 'before' | 'after'>>(
    FEATURED_PROJECTS.reduce((acc, project) => {
      acc[project.id] = 'after';
      return acc;
    }, {} as Record<string, 'before' | 'after'>)
  );

  const toggleState = (projectId: string) => {
    setProjectStates((prev) => ({
      ...prev,
      [projectId]: prev[projectId] === 'after' ? 'before' : 'after'
    }));
  };

  return (
    <section id="projects" className="py-20 bg-brand-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest bg-brand-primary/5 px-4 py-1.5 rounded-full font-mono">
            Craft Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-primary mt-4 tracking-tight">
            Featured Projects & Transformations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            Toggle the <strong className="text-brand-primary font-bold">Before & After</strong> states to inspect the strict standards delivered by our artisans and monitored by our dedicated group leaders.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => {
            const showAfter = projectStates[project.id] === 'after';
            const currentImg = showAfter ? project.imageAfter : project.imageBefore;

            return (
              <div
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col"
              >
                {/* Visual Image Area */}
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={currentImg}
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-transparent to-transparent" />

                  {/* Location Tag */}
                  <div className="absolute top-4 left-4 bg-brand-primary/90 text-white px-3 py-1.5 rounded-xl border border-white/10 text-[10px] font-bold uppercase tracking-wider font-mono flex items-center space-x-1">
                    <MapPin className="w-3 h-3 text-brand-secondary" />
                    <span>{project.location}</span>
                  </div>

                  {/* Swipe State Overlay Indicator */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div className="bg-brand-secondary text-brand-primary px-3 py-1 rounded-lg text-[10px] font-extrabold uppercase tracking-widest font-mono">
                      {project.category}
                    </div>

                    {/* Active State Badge */}
                    <div className={`px-2.5 py-1 rounded text-[10px] font-extrabold uppercase tracking-widest font-mono ${
                      showAfter 
                        ? 'bg-brand-secondary text-brand-primary border border-brand-secondary' 
                        : 'bg-red-600 text-white border border-red-500'
                    }`}>
                      {showAfter ? '★ After (Finish)' : '⚠️ Before (Raw)'}
                    </div>
                  </div>

                  {/* Slider Control Center Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-brand-primary/45 backdrop-blur-[2px]">
                    <button
                      onClick={() => toggleState(project.id)}
                      className="px-5 py-2.5 bg-brand-secondary hover:bg-brand-secondary/95 text-brand-primary font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg flex items-center space-x-1.5 scale-95 group-hover:scale-100 transition-all cursor-pointer"
                    >
                      <Eye className="w-4 h-4" />
                      <span>Toggle {showAfter ? 'Before' : 'After'} State</span>
                    </button>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center text-[11px] text-gray-400 font-mono space-x-3">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        Completed: {project.year}
                      </span>
                      <span>•</span>
                      <span>Verified Standard</span>
                    </div>

                    <h3 className="text-lg font-bold text-brand-primary font-display leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed font-medium">
                      {project.description}
                    </p>
                  </div>

                  {/* Slider interactive controls below card */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-semibold text-gray-400">Transform Interactive:</span>
                    
                    {/* Before / After toggle switches */}
                    <div className="inline-flex bg-brand-light p-1 rounded-xl border border-gray-100">
                      <button
                        onClick={() => setProjectStates(prev => ({ ...prev, [project.id]: 'before' }))}
                        className={`px-3 py-1 rounded-lg text-[9px] font-extrabold uppercase tracking-wider transition-all ${
                          !showAfter 
                            ? 'bg-red-600 text-white font-mono shadow' 
                            : 'text-gray-400 hover:text-brand-primary'
                        }`}
                      >
                        Before
                      </button>
                      <button
                        onClick={() => setProjectStates(prev => ({ ...prev, [project.id]: 'after' }))}
                        className={`px-3 py-1 rounded-lg text-[9px] font-extrabold uppercase tracking-wider transition-all ${
                          showAfter 
                            ? 'bg-brand-secondary text-brand-primary font-mono shadow' 
                            : 'text-gray-400 hover:text-brand-primary'
                        }`}
                      >
                        After
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
