import React from 'react';
import { Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Shop Brand & About */}
          <div className="space-y-4">
            <div className="text-lg font-bold text-white tracking-tight">
              Kevin Shaffer&apos;s Auto Body
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              Oakland, Maryland&apos;s trusted local auto body and collision repair shop. Computerized unibody frame repair, factory PPG color matching, and full insurance claim support.
            </p>
            <div className="text-emerald-400 flex items-center gap-1.5 text-xs font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Lifetime Workmanship Guarantee</span>
            </div>
          </div>

          {/* Col 2: Services Quick Links */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Repair Services
            </div>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-white transition-colors">Collision &amp; Frame Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Computerized Color Matching</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Paintless Dent Repair (PDR)</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Bumper Replacement &amp; Sensors</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Winter Salt &amp; Rocker Panels</a></li>
            </ul>
          </div>

          {/* Col 3: Hours & Facility */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Shop Schedule
            </div>
            <div className="space-y-1.5 text-slate-300">
              <div className="flex justify-between">
                <span>Mon – Fri:</span>
                <span className="text-white font-mono-numbers">{SHOP_INFO.weekdayHours}</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-slate-400">By Appt / Key Drop</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-slate-400">Closed</span>
              </div>
            </div>
            <div className="text-slate-400 pt-2 text-[11px]">
              24/7 drop box available at front office door for late-night tow-ins.
            </div>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Shop Location
            </div>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>2999 Hutton Rd, Oakland, MD 21550</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${SHOP_INFO.phoneRaw}`} className="text-white hover:text-blue-400 font-bold">
                  {SHOP_INFO.displayPhone}
                </a>
              </div>
              <div className="pt-1">
                <a
                  href={SHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-xs"
                >
                  Get Directions in Google Maps →
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
          <div>
            &copy; {new Date().getFullYear()} Kevin Shaffer&apos;s Auto Body and Collision Repair. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Garrett County, MD</span>
            <span>·</span>
            <span>Oakland · Deep Creek Lake · Mountain Lake Park</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
