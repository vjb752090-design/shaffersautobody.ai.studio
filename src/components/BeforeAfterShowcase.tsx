import React, { useState } from 'react';
import { BEFORE_AFTER_CASES } from '../data/shopData';
import { Clock, ShieldCheck, Check, ArrowRight, Eye } from 'lucide-react';

export const BeforeAfterShowcase: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'after' | 'before' | 'split'>('after');
  const [sliderPosition, setSliderPosition] = useState(50);

  const currentCase = BEFORE_AFTER_CASES[activeCaseIndex];

  return (
    <section id="showcase" className="py-24 bg-slate-900 border-t border-b border-slate-800 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
              Proven Craftsmanship
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-1">
              Before &amp; After Repair Gallery
            </h2>
            <p className="text-slate-400 text-base mt-2 max-w-2xl">
              Inspect how Kevin and his team restore crumpled metal, broken headlight housings, and twisted structural rails back to factory specifications.
            </p>
          </div>

          {/* Interactive Case Selector Tabs (Functional Buttons) */}
          <div className="flex items-center gap-1.5 p-1 bg-slate-950 rounded-lg border border-slate-800">
            {BEFORE_AFTER_CASES.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveCaseIndex(idx)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                  activeCaseIndex === idx
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Case 0{idx + 1}: {c.vehicle.split(' ')[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Main Case Study Viewport */}
        <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0">
          
          {/* Visual Showcase (7 Cols) */}
          <div className="lg:col-span-7 relative min-h-[380px] sm:min-h-[460px] bg-slate-900 flex flex-col justify-between overflow-hidden">
            
            {/* View Mode Controller */}
            <div className="absolute top-4 left-4 z-20 flex items-center gap-1 p-1 bg-slate-950/80 backdrop-blur-md rounded-lg border border-slate-700/80">
              <button
                onClick={() => setViewMode('after')}
                className={`px-3 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  viewMode === 'after' ? 'bg-blue-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                Finished (After)
              </button>
              <button
                onClick={() => setViewMode('before')}
                className={`px-3 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  viewMode === 'before' ? 'bg-amber-600 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                Accident (Before)
              </button>
              <button
                onClick={() => setViewMode('split')}
                className={`px-3 py-1 text-xs font-semibold rounded transition-colors cursor-pointer ${
                  viewMode === 'split' ? 'bg-slate-700 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                Interactive Slider
              </button>
            </div>

            {/* Image display based on viewMode */}
            {viewMode === 'after' && (
              <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px]">
                <img
                  src={currentCase.afterImage}
                  alt={`${currentCase.vehicle} after collision repair`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 z-10 text-xs font-semibold text-emerald-400 bg-slate-950/80 px-2.5 py-1 rounded border border-emerald-500/30">
                  ✓ Restored to OEM Factory Condition
                </div>
              </div>
            )}

            {viewMode === 'before' && (
              <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px]">
                <img
                  src={currentCase.beforeImage}
                  alt={`${currentCase.vehicle} before collision repair with damage`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 z-10 text-xs font-semibold text-amber-300 bg-slate-950/80 px-2.5 py-1 rounded border border-amber-500/30">
                  ⚠ Arrival Condition at 2999 Hutton Rd
                </div>
              </div>
            )}

            {viewMode === 'split' && (
              <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] select-none overflow-hidden">
                {/* After Image underneath */}
                <img
                  src={currentCase.afterImage}
                  alt="Restored repair"
                  className="absolute inset-0 w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />

                {/* Before Image clipped on top */}
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{ width: `${sliderPosition}%` }}
                >
                  <img
                    src={currentCase.beforeImage}
                    alt="Damaged condition"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ width: '100%', maxWidth: 'none' }}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-4 left-4 z-10 text-[11px] font-semibold text-amber-300 bg-slate-950/80 px-2 py-0.5 rounded">
                    Before
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 z-10 text-[11px] font-semibold text-emerald-400 bg-slate-950/80 px-2 py-0.5 rounded">
                  After
                </div>

                {/* Vertical Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize shadow-lg z-20"
                  style={{ left: `${sliderPosition}%` }}
                >
                  <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white text-slate-900 font-bold text-xs flex items-center justify-center shadow-lg border border-slate-300">
                    ↔
                  </div>
                </div>

                {/* Hidden range input over the slider */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPosition}
                  onChange={(e) => setSliderPosition(Number(e.target.value))}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
                  aria-label="Before and after comparison slider"
                />
              </div>
            )}
          </div>

          {/* Details & Specs (5 Cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-semibold text-blue-400">
                Vehicle Restoration Case Study
              </div>

              <h3 className="text-2xl font-bold text-white mt-1">
                {currentCase.title}
              </h3>

              <div className="text-sm font-medium text-slate-300 mt-1">
                {currentCase.vehicle}
              </div>

              <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                {currentCase.summary}
              </p>

              {/* Scope of Work Performed */}
              <div className="mt-5 space-y-2">
                <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  Repairs Executed:
                </div>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {currentCase.workDone.map((step, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Metrics */}
            <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4 text-xs">
              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-400 block">Repair Duration</span>
                <span className="font-bold text-white text-sm font-mono-numbers mt-0.5 block">
                  {currentCase.turnaroundDays} Business Days
                </span>
              </div>

              <div className="bg-slate-900/60 p-3 rounded-lg border border-slate-800">
                <span className="text-slate-400 block">Insurance Claim</span>
                <span className="font-bold text-emerald-400 text-sm mt-0.5 block">
                  Direct Billed ($0 Out-of-Pocket)
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
