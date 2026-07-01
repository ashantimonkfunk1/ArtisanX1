/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Calendar, User, Clock, Heart, Share2, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';

export default function BlogSection() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [likes, setLikes] = useState<Record<string, number>>(
    BLOG_POSTS.reduce((acc, p) => {
      acc[p.id] = Math.floor(Math.random() * 40) + 15;
      return acc;
    }, {} as Record<string, number>)
  );

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikes(prev => ({
      ...prev,
      [id]: prev[id] + 1
    }));
  };

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-secondary text-xs font-bold uppercase tracking-widest bg-brand-primary/5 px-4 py-1.5 rounded-full font-mono">
            ArtisanXpress Blog
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-primary mt-4 tracking-tight">
            Construction & Home Improvement Advice
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 font-medium">
            Read pro-level advice, step-by-step home safety checks, decorative painting formulas, and solar guide designs curated directly by our master engineers.
          </p>
        </div>

        {/* Blog Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => {
            const numLikes = likes[post.id];

            return (
              <div
                key={post.id}
                onClick={() => setSelectedPost(post)}
                className="bg-brand-light rounded-3xl overflow-hidden border border-gray-150 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
              >
                {/* Visual Cover */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-brand-primary/90 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-lg border border-white/10 font-mono">
                    {post.category}
                  </div>
                </div>

                {/* Body details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-[11px] text-gray-400 font-mono">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1" />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-brand-primary leading-snug font-display hover:text-brand-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-gray-500 leading-relaxed font-medium line-clamp-3">
                      {post.snippet}
                    </p>
                  </div>

                  {/* Actions & Author footer */}
                  <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold text-[10px] font-mono">
                        {post.author[0]}
                      </div>
                      <span className="text-[10px] text-gray-500 font-bold">{post.author.split('(')[0].trim()}</span>
                    </div>

                    <div className="flex items-center space-x-3 text-xs font-mono">
                      <button 
                        onClick={(e) => handleLike(post.id, e)}
                        className="flex items-center text-gray-400 hover:text-red-500 transition-colors"
                        title="Like this article"
                      >
                        <Heart className="w-3.5 h-3.5 mr-1 fill-transparent hover:fill-red-500" />
                        <span>{numLikes}</span>
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* DETAILED BLOG POST MODAL READER */}
      {selectedPost && (
        <div className="fixed inset-0 bg-brand-dark/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 border border-gray-100 shadow-2xl relative animate-fadeIn">
            
            {/* Close */}
            <button
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 bg-gray-100 hover:bg-gray-200 text-brand-primary font-bold p-1.5 rounded-full transition-all cursor-pointer"
            >
              ✕
            </button>

            {/* Modal Body */}
            <div className="space-y-6">
              
              <span className="text-brand-secondary text-xs font-bold uppercase tracking-wider bg-brand-primary/5 px-3 py-1.5 rounded-full font-mono">
                {selectedPost.category}
              </span>

              <h3 className="text-xl sm:text-2xl font-extrabold text-brand-primary font-display leading-tight">
                {selectedPost.title}
              </h3>

              <div className="flex items-center space-x-4 text-xs text-gray-400 border-y border-gray-100 py-3 font-mono">
                <span className="flex items-center">
                  <User className="w-4 h-4 mr-1.5 text-brand-secondary" />
                  {selectedPost.author}
                </span>
                <span>•</span>
                <span>{selectedPost.date}</span>
                <span>•</span>
                <span>{selectedPost.readTime}</span>
              </div>

              {/* Cover cover */}
              <div className="h-64 rounded-2xl overflow-hidden shadow">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
              </div>

              {/* Full Content */}
              <div className="text-xs sm:text-sm text-gray-600 leading-relaxed font-medium space-y-4">
                <p>{selectedPost.content}</p>

                {selectedPost.bullets && (
                  <ul className="space-y-3 my-4">
                    {selectedPost.bullets.map((b, idx) => (
                      <li key={idx} className="bg-brand-light/75 border border-gray-150 rounded-2xl p-4 flex items-start space-x-3.5 shadow-xs">
                        <span className="w-6 h-6 rounded-full bg-brand-secondary text-brand-primary flex items-center justify-center font-extrabold text-xs shrink-0 font-mono">
                          {idx + 1}
                        </span>
                        <div>
                          <h4 className="font-bold text-brand-primary text-xs sm:text-sm">{b.title}</h4>
                          <p className="text-[11px] sm:text-xs text-gray-500 mt-1 leading-relaxed">{b.desc}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                <p>
                  At <strong className="text-brand-primary">ArtisanXpress</strong>, we implement strict, multi-layered quality check-offs on all jobs. Every project listed on our client dashboard receives a senior group leader to inspect and guarantee material standards against cheating or cost inflation.
                </p>
                <p className="text-[11px] text-gray-400 italic">
                  Disclaimer: This blog article is curated for information purposes. Always hire certified, tested handymen from our official app portals before conducting heavy-duty wiring or deep drilling dispatches.
                </p>
              </div>

              {/* Modal actions */}
              <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                <span className="text-xs text-brand-primary font-bold">Thank you for reading!</span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2 bg-brand-primary text-white text-xs font-bold uppercase rounded-xl"
                >
                  Close Article
                </button>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
