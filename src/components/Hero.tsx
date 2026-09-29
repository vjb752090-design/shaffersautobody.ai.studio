import React from 'react';
import { Phone, ArrowRight, ShieldCheck, Star, MapPin, CheckCircle, Calculator } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';
import { ASSET_IMAGES } from '../assets/images';

interface HeroProps {
  onOpenEstimateModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimateModal }) => {
  return (
    <section className="relative min-h-[640px] lg:min-h-[720px] flex items-center bg-slate-950 overflow-hidden">
      {/* Background Photography with measured scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSET_IMAGES.heroShop}
          alt="Kevin Shaffer's Auto Body repair shop floor with alignment bay and vehicles"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl space-y-6">
          
          {/* Quiet Local Editorial Location & Rating Kicker (Zero-Pill Discipline) */}
          <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-medium text-slate-300">
            <span className="flex items-center gap-1 text-amber-400 font-semibold">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              <span>4.7 / 5.0 Rating</span>
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>48+ Verified Local Reviews</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="flex items-center gap-1 text-slate-200">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              Oakland, Maryland
            </span>
          </div>

          {/* Primary Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.1] text-balance">
            Quality Collision Repair &amp; Auto Body Services in Oakland, MD
          </h1>

          {/* Concrete Proposition Text */}
          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Honest, owner-operated craftsmanship backed by over two decades of experience. From laser-accurate frame straightening and computerized PPG color matching to full insurance claim advocacy, we get your car back to showroom safety.
          </p>

          {/* Primary Actions Block */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <a
              href={`tel:${SHOP_INFO.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-900/30 transition-all whitespace-nowrap active:scale-95"
            >
              <Phone className="w-5 h-5" />
              <span>Call (240) 321-0939</span>
            </a>

            <button
              onClick={onOpenEstimateModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-slate-100 bg-slate-900/90 hover:bg-slate-800 border border-slate-700 rounded-lg transition-all whitespace-nowrap cursor-pointer hover:border-slate-500"
            >
              <span>Get a Free Estimate</span>
              <ArrowRight className="w-4 h-4 text-blue-400" />
            </button>

            <a
              href="#estimator"
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              <Calculator className="w-4 h-4 text-slate-400" />
              <span>Cost Calculator</span>
            </a>
          </div>

          {/* Trust Metrics Adjacency (Hairline divider & clean typography) */}
          <div className="pt-8 mt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-300">
            <div>
              <div className="text-xs text-slate-400 font-medium">Shop Location</div>
              <div className="text-sm font-semibold text-white mt-0.5">2999 Hutton Rd</div>
              <div className="text-xs text-slate-400">Oakland, MD 21550</div>
            </div>

            <div>
              <div className="text-xs text-slate-400 font-medium">Repair Standards</div>
              <div className="text-sm font-semibold text-white mt-0.5">OEM Specs</div>
              <div className="text-xs text-slate-400">Laser frame alignment</div>
            </div>

            <div>
              <div className="text-xs text-slate-400 font-medium">Paint Technology</div>
              <div className="text-sm font-semibold text-white mt-0.5">PPG Downdraft</div>
              <div className="text-xs text-slate-400">Computerized blend</div>
            </div>

            <div>
              <div className="text-xs text-slate-400 font-medium">Claims Direct</div>
              <div className="text-sm font-semibold text-white mt-0.5">All Insurance</div>
              <div className="text-xs text-slate-400">MD Right-to-Choose</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
