import React, { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Clock, DollarSign, ShieldAlert, Car, Wrench, ShieldCheck } from 'lucide-react';
import { DamageEstimateParams } from '../types';
import { calculateEstimate } from '../utils/estimatorLogic';
import { SHOP_INFO } from '../data/shopData';

interface EstimatorToolProps {
  onSelectForQuote: (params: DamageEstimateParams, estimatedCost: string) => void;
}

export const EstimatorTool: React.FC<EstimatorToolProps> = ({ onSelectForQuote }) => {
  const [params, setParams] = useState<DamageEstimateParams>({
    vehicleType: 'truck',
    panelZone: 'front_bumper',
    severity: 'moderate',
    hasInsurance: true,
    needsTowing: false,
  });

  const estimate = calculateEstimate(params);

  const vehicleOptions = [
    { id: 'truck', label: 'Truck / Pickup' },
    { id: 'suv', label: 'SUV / Crossover' },
    { id: 'sedan', label: 'Sedan / Coupe' },
    { id: 'van', label: 'Van / Commercial' },
  ] as const;

  const panelOptions = [
    { id: 'front_bumper', label: 'Front Bumper & Grill' },
    { id: 'rear_bumper', label: 'Rear Bumper & Tailgate' },
    { id: 'fender_hood', label: 'Fender / Hood' },
    { id: 'doors_rocker', label: 'Doors & Rocker Panel' },
    { id: 'quarter_panel', label: 'Rear Quarter Panel' },
    { id: 'frame_chassis', label: 'Frame & Structural Unibody' },
  ] as const;

  const severityOptions = [
    {
      id: 'minor',
      title: 'Minor',
      desc: 'Surface scuff, small dent (<2 inches), rock chips, cosmetic paint scratch',
    },
    {
      id: 'moderate',
      title: 'Moderate',
      desc: 'Deep crease, panel misaligned, bumper tear, multi-panel scrape',
    },
    {
      id: 'severe',
      title: 'Severe Collision',
      desc: 'Crushed body panel, frame shift, airbag deploy, vehicle undrivable',
    },
  ] as const;

  return (
    <section id="estimator" className="py-20 bg-slate-900 border-t border-b border-slate-800 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            Transparent Repair Pricing
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white mt-1">
            Instant Collision &amp; Body Repair Estimator
          </h2>
          <p className="text-slate-400 text-base mt-2">
            Calculate a transparent ballpark estimate based on your vehicle specifications and damage severity. Kevin verifies all measurements on-site with your insurance carrier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Step 1: Vehicle Category */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                1. Select Vehicle Type
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {vehicleOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setParams({ ...params, vehicleType: opt.id })}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold transition-all cursor-pointer text-center ${
                      params.vehicleType === opt.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    {opt.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Damaged Panel / Zone */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                2. Select Damaged Area
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {panelOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setParams({ ...params, panelZone: opt.id })}
                    className={`py-2.5 px-3 rounded-lg text-xs font-semibold text-left transition-all cursor-pointer flex items-center justify-between ${
                      params.panelZone === opt.id
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                    }`}
                  >
                    <span>{opt.label}</span>
                    {params.panelZone === opt.id && <CheckCircle2 className="w-4 h-4 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Damage Severity */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                3. Damage Severity Level
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {severityOptions.map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setParams({ ...params, severity: opt.id })}
                    className={`p-3.5 rounded-lg text-left transition-all cursor-pointer border ${
                      params.severity === opt.id
                        ? 'bg-blue-950/60 border-blue-500 text-white shadow-sm'
                        : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-850'
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-200">{opt.title}</div>
                    <div className="text-[11px] text-slate-400 mt-1 leading-normal">{opt.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Insurance & Towing Toggles */}
            <div className="bg-slate-950 p-5 rounded-xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={params.hasInsurance}
                  onChange={(e) => setParams({ ...params, hasInsurance: e.target.checked })}
                  className="w-4 h-4 rounded text-blue-600 bg-slate-900 border-slate-700 focus:ring-0"
                />
                <div>
                  <span className="text-xs font-semibold text-slate-200 block">Filing Insurance Claim</span>
                  <span className="text-[11px] text-slate-400">Direct adjuster billing (pay only your deductible)</span>
                </div>
              </label>

              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={params.needsTowing}
                  onChange={(e) => setParams({ ...params, needsTowing: e.target.checked })}
                  className="w-4 h-4 rounded text-blue-600 bg-slate-900 border-slate-700 focus:ring-0"
                />
                <div>
                  <span className="text-xs font-semibold text-slate-200 block">Car is Undrivable</span>
                  <span className="text-[11px] text-slate-400">Need local flatbed towing to 2999 Hutton Rd</span>
                </div>
              </label>
            </div>

          </div>

          {/* Output / Summary Card (5 Cols) */}
          <div className="lg:col-span-5 bg-slate-950 rounded-xl border border-slate-800 p-6 space-y-6 sticky top-28 shadow-xl">
            
            <div className="border-b border-slate-800 pb-4">
              <div className="text-xs font-semibold text-slate-400">Calculated Estimate Range</div>
              
              <div className="mt-2 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-black text-white font-mono-numbers">
                  ${estimate.minCost.toLocaleString()} – ${estimate.maxCost.toLocaleString()}
                </span>
                <span className="text-xs text-slate-400 font-medium">USD</span>
              </div>

              {params.hasInsurance && (
                <div className="mt-2 text-xs text-emerald-400 font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Typically covered by insurance (You pay your deductible only)</span>
                </div>
              )}
            </div>

            {/* Estimated Turnaround Time */}
            <div className="flex items-center justify-between text-xs py-2 px-3 bg-slate-900 rounded-lg border border-slate-800 text-slate-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="font-medium">Estimated Shop Time:</span>
              </div>
              <span className="font-bold text-white font-mono-numbers">
                {estimate.estimatedDaysMin} – {estimate.estimatedDaysMax} Business Days
              </span>
            </div>

            {/* What this repair includes */}
            <div>
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                Repair Scope &amp; Technology Included
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {estimate.processHighlights.map((hl, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-400 font-bold shrink-0">✓</span>
                    <span>{hl}</span>
                  </li>
                ))}
                {estimate.includedItems.map((item, i) => (
                  <li key={`inc-${i}`} className="flex items-start gap-2 text-slate-400">
                    <span className="text-slate-600 font-bold shrink-0">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Primary Action Button */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() =>
                  onSelectForQuote(
                    params,
                    `$${estimate.minCost.toLocaleString()} - $${estimate.maxCost.toLocaleString()}`
                  )
                }
                className="w-full py-3.5 px-4 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
              >
                <span>Request Free Written Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center text-[11px] text-slate-500">
                Or call Kevin directly at{' '}
                <a href={`tel:${SHOP_INFO.phoneRaw}`} className="text-blue-400 hover:underline font-semibold">
                  (240) 321-0939
                </a>{' '}
                for instant phone guidance.
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
