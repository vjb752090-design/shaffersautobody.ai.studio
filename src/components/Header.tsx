import React, { useState } from 'react';
import { Phone, Menu, X, Shield, Clock } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';
import { isShopOpenCurrently } from '../utils/estimatorLogic';

interface HeaderProps {
  onOpenEstimateModal: (prefillZone?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenEstimateModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shopStatus = isShopOpenCurrently();

  return (
    <>
      {/* Top emergency / quick contact bar */}
      <div className="bg-slate-900 border-b border-slate-800 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-medium text-slate-200">
              <span className={`w-2 h-2 rounded-full ${shopStatus.isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`} />
              {shopStatus.statusText}
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-400">2999 Hutton Rd, Oakland, MD 21550</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline text-slate-400">Towing drop-off & insurance welcome</span>
            <a
              href={`tel:${SHOP_INFO.phoneRaw}`}
              className="flex items-center gap-1 font-semibold text-blue-400 hover:text-blue-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SHOP_INFO.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Strict Top Bar Contract: Brand | Links | Action */}
      <header className="sticky top-0 z-40 bg-slate-950/95 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-black tracking-tight text-white hover:text-blue-400 transition-colors whitespace-nowrap"
          >
            Kevin Shaffer&apos;s Auto Body
          </a>

          {/* Zone 2: Clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-300">
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#estimator" className="hover:text-white transition-colors">Cost Calculator</a>
            <a href="#showcase" className="hover:text-white transition-colors">Before & After</a>
            <a href="#insurance" className="hover:text-white transition-colors">Insurance Claims</a>
            <a href="#reviews" className="hover:text-white transition-colors">Reviews</a>
            <a href="#contact" className="hover:text-white transition-colors">Directions & Hours</a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${SHOP_INFO.phoneRaw}`}
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 text-sm font-medium text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-lg transition-colors whitespace-nowrap"
              aria-label="Direct Call Kevin Shaffer"
            >
              <Phone className="w-4 h-4 text-blue-400" />
              <span>Call (240) 321-0939</span>
            </a>

            <button
              onClick={() => onOpenEstimateModal()}
              className="px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-sm transition-all whitespace-nowrap cursor-pointer active:scale-95"
            >
              Get Free Estimate
            </button>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-slate-900 border-b border-slate-800 px-4 py-6 space-y-4">
            <nav className="flex flex-col space-y-3 text-base font-medium text-slate-300">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white transition-colors"
              >
                Services
              </a>
              <a
                href="#estimator"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white transition-colors"
              >
                Cost Calculator
              </a>
              <a
                href="#showcase"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white transition-colors"
              >
                Before & After
              </a>
              <a
                href="#insurance"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white transition-colors"
              >
                Insurance Claims
              </a>
              <a
                href="#reviews"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white transition-colors"
              >
                Customer Reviews
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="py-1 hover:text-white transition-colors"
              >
                Directions & Hours
              </a>
            </nav>

            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href={`tel:${SHOP_INFO.phoneRaw}`}
                className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-slate-800 rounded-lg border border-slate-700 hover:bg-slate-700"
              >
                <Phone className="w-4 h-4 text-blue-400" />
                Call (240) 321-0939
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimateModal();
                }}
                className="w-full py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 text-center"
              >
                Request Free Photo Estimate
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
