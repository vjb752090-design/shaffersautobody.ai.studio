import React, { useState } from 'react';
import { Star, CheckCircle, ShieldCheck, ThumbsUp, MessageSquare } from 'lucide-react';
import { REVIEWS, SHOP_INFO } from '../data/shopData';

export const ReviewsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'collision' | 'paint' | 'insurance' | 'service'>('all');

  const filteredReviews = activeCategory === 'all'
    ? REVIEWS
    : REVIEWS.filter((r) => r.serviceCategory === activeCategory);

  return (
    <section id="reviews" className="py-24 bg-slate-900 border-t border-b border-slate-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with 4.7 Rating Summary */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              Garrett County Community Reputation
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-1">
              Top-Rated Local Auto Body Shop
            </h2>
            <p className="text-slate-400 text-base mt-2 max-w-2xl">
              Real reviews from drivers in Oakland, Deep Creek Lake, Mountain Lake Park, and across Western Maryland who count on Kevin Shaffer for honest repairs.
            </p>
          </div>

          {/* Rating Summary Box */}
          <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex items-center gap-5 shrink-0">
            <div>
              <div className="text-4xl font-black text-white font-mono-numbers">
                {SHOP_INFO.rating}
              </div>
              <div className="flex items-center gap-1 text-amber-400 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
            </div>

            <div className="border-l border-slate-800 pl-5 text-xs text-slate-400 space-y-1">
              <div className="font-semibold text-white">4.7 / 5.0 Star Rating</div>
              <div>Over 48+ verified Google reviews</div>
              <div className="text-emerald-400 font-medium">98% recommendation rate</div>
            </div>
          </div>
        </div>

        {/* Filter Controls (Interactive Functional Buttons) */}
        <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800 w-fit mb-8 overflow-x-auto max-w-full">
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'collision', label: 'Collision & Frame' },
            { id: 'paint', label: 'Paint & Color Match' },
            { id: 'insurance', label: 'Insurance Handling' },
            { id: 'service', label: 'Customer Care' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id as any)}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                activeCategory === tab.id
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors"
            >
              <div className="space-y-3">
                {/* Stars and date */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs text-slate-500 font-mono-numbers">{review.date}</span>
                </div>

                <h3 className="text-sm font-bold text-white leading-snug">
                  &ldquo;{review.headline}&rdquo;
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {review.content}
                </p>
              </div>

              {/* Author & Vehicle Metadata (Zero-Pill Discipline: Unboxed with separators) */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white flex items-center gap-1.5">
                      <span>{review.author}</span>
                      {review.verified && (
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400" aria-label="Verified Customer" />
                      )}
                    </div>
                    <div className="flex items-center gap-1.5 text-[11px] text-slate-500 mt-0.5">
                      <span>{review.location}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-slate-400">{review.vehicle}</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
