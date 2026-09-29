import React from 'react';
import { MapPin, Phone, Clock, Navigation, ShieldAlert, KeyRound, ExternalLink } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';
import { isShopOpenCurrently } from '../utils/estimatorLogic';

export const LocationAndHours: React.FC = () => {
  const shopStatus = isShopOpenCurrently();

  return (
    <section id="contact" className="py-24 bg-slate-950 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            Oakland, Maryland Shop Facility
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-1">
            Visit Our Shop &amp; Directions
          </h2>
          <p className="text-slate-400 text-base mt-2">
            Conveniently located on Hutton Road in Garrett County, easily accessible from Oakland, Mountain Lake Park, Loch Lynn Heights, and Deep Creek Lake.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Shop Details & Operating Hours (5 Cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            
            {/* Contact Card */}
            <div className="bg-slate-900/80 p-6 rounded-2xl border border-slate-800 space-y-6">
              
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Address &amp; Direct Line
                </div>
                <div className="mt-3 space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-base font-bold text-white">2999 Hutton Rd</div>
                      <div className="text-sm text-slate-400">Oakland, MD 21550</div>
                      <div className="text-xs text-slate-500 mt-0.5">Garrett County · Western Maryland</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 pt-2 border-t border-slate-800/80">
                    <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                    <div>
                      <div className="text-xs text-slate-400">Main Office / Estimates</div>
                      <a
                        href={`tel:${SHOP_INFO.phoneRaw}`}
                        className="text-lg font-bold text-white hover:text-blue-400 transition-colors"
                      >
                        {SHOP_INFO.displayPhone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Operating Schedule */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Shop Hours
                  </span>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded ${shopStatus.isOpen ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-400'}`}>
                    {shopStatus.isOpen ? 'Open Now' : 'Closed Now'}
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                    <span className="text-slate-300 font-medium">Monday – Friday</span>
                    <span className="text-white font-mono-numbers font-semibold">8:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-slate-800/50">
                    <span className="text-slate-400">Saturday</span>
                    <span className="text-slate-400">By Appointment / Secure Key Drop</span>
                  </div>
                  <div className="flex justify-between py-1.5">
                    <span className="text-slate-400">Sunday</span>
                    <span className="text-slate-500">Closed</span>
                  </div>
                </div>
              </div>

              {/* Quick Direction CTA */}
              <a
                href={SHOP_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Open in Google Maps / GPS</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

            </div>

            {/* After-Hours & Emergency Key Drop Card */}
            <div className="bg-slate-900/60 p-5 rounded-2xl border border-slate-800 text-xs space-y-2">
              <div className="flex items-center gap-2 text-amber-400 font-bold">
                <KeyRound className="w-4 h-4" />
                <span>24/7 After-Hours Vehicle Key Drop</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Dropping your vehicle off outside regular shop hours? Park in our secure front bay, place your keys inside an envelope with your contact details into our heavy-duty mail slot on the front office door, and call us to confirm.
              </p>
            </div>

          </div>

          {/* Interactive Map Visual (7 Cols) */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col min-h-[420px]">
            
            {/* Custom Styled Map Surface */}
            <div className="relative flex-1 bg-slate-950 p-6 flex flex-col justify-between overflow-hidden">
              
              {/* Map grid lines / styling backdrop */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#38bdf8" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </div>

              {/* Highway & road simulation lines */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <svg className="w-full h-full" viewBox="0 0 600 400" preserveAspectRatio="none">
                  <path d="M 0 220 Q 300 180 600 240" fill="none" stroke="#64748b" strokeWidth="8" />
                  <path d="M 280 0 Q 320 200 360 400" fill="none" stroke="#64748b" strokeWidth="6" />
                  <path d="M 120 400 Q 290 230 450 60" fill="none" stroke="#3b82f6" strokeWidth="3" strokeDasharray="6,6" />
                </svg>
              </div>

              {/* Road names on map */}
              <div className="relative z-10 flex justify-between items-start text-[11px] font-mono text-slate-500">
                <div>Route 219 (Garrett Hwy) ↔ Oakland Town Center</div>
                <div>Deep Creek Lake (15 Mins) →</div>
              </div>

              {/* Center Shop Pin */}
              <div className="relative z-10 self-center text-center my-auto py-6">
                <div className="inline-block relative">
                  <div className="w-14 h-14 rounded-full bg-blue-600/30 animate-ping absolute inset-0" />
                  <div className="relative w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl border-2 border-white mx-auto">
                    <MapPin className="w-7 h-7" />
                  </div>
                </div>

                <div className="mt-3 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700 shadow-xl inline-block">
                  <div className="text-sm font-black text-white">Kevin Shaffer&apos;s Auto Body</div>
                  <div className="text-xs text-blue-400 font-medium">2999 Hutton Rd, Oakland, MD</div>
                  <div className="text-[11px] text-emerald-400 mt-0.5">Closes 5:00 PM · Free Estimates</div>
                </div>
              </div>

              {/* Map Footer Bar */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-800/80 bg-slate-900/80 -mx-6 -mb-6 p-4">
                <div className="text-xs text-slate-300">
                  <span className="font-semibold text-white">Landmark:</span> Minutes from Oakland center, on MD-39 / Hutton Rd.
                </div>
                <a
                  href={SHOP_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 text-xs font-semibold text-slate-100 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Get Driving Directions</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
