import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { EstimatorTool } from './components/EstimatorTool';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { InsuranceGuide } from './components/InsuranceGuide';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationAndHours } from './components/LocationAndHours';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { EstimateRequestModal } from './components/EstimateRequestModal';
import { DamageEstimateParams } from './types';
import { SHOP_INFO } from './data/shopData';
import { Phone, Shield, Wrench, CheckCircle, Clock } from 'lucide-react';

export default function App() {
  const [isEstimateModalOpen, setIsEstimateModalOpen] = useState(false);
  const [modalPrefillZone, setModalPrefillZone] = useState<string | undefined>(undefined);
  const [modalPrefillCost, setModalPrefillCost] = useState<string | undefined>(undefined);

  const handleOpenEstimateModal = (prefillZone?: string, prefillCost?: string) => {
    setModalPrefillZone(prefillZone);
    setModalPrefillCost(prefillCost);
    setIsEstimateModalOpen(true);
  };

  const handleSelectEstimateForQuote = (
    params: DamageEstimateParams,
    estimatedCost: string
  ) => {
    const zoneLabels: Record<string, string> = {
      front_bumper: 'Front Bumper & Grill',
      rear_bumper: 'Rear Bumper & Tailgate',
      fender_hood: 'Fender / Hood',
      doors_rocker: 'Doors & Rocker Panel',
      quarter_panel: 'Rear Quarter Panel',
      frame_chassis: 'Frame & Structural Unibody',
    };
    handleOpenEstimateModal(
      `${params.vehicleType.toUpperCase()} - ${zoneLabels[params.panelZone]} (${params.severity})`,
      estimatedCost
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Navigation Bar */}
      <Header onOpenEstimateModal={() => handleOpenEstimateModal()} />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenEstimateModal={() => handleOpenEstimateModal()} />

        {/* Why Choose Kevin Shaffer's Banner / Trust Bar */}
        <section className="py-12 bg-slate-900/90 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Owner-Operated Craftsmanship</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    You speak directly with Kevin Shaffer and master technicians who physically work on your vehicle, not an impersonal service desk.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Lifetime Workmanship Warranty</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    Every frame straightening, metal pull, and computerized paint finish is guaranteed for as long as you own your vehicle.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Fast Turnaround &amp; Towing</h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    We order OEM parts ahead of arrival, coordinate flatbed towing across Garrett County, and streamline insurance approvals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Cost & Damage Estimator Tool */}
        <EstimatorTool onSelectForQuote={handleSelectEstimateForQuote} />

        {/* Core Capabilities Bento Grid */}
        <ServicesSection onRequestService={(name) => handleOpenEstimateModal(name)} />

        {/* Interactive Before & After Repair Showcase */}
        <BeforeAfterShowcase />

        {/* Direct Insurance Claims Walkthrough */}
        <InsuranceGuide onOpenEstimateModal={() => handleOpenEstimateModal('Insurance Claim')} />

        {/* Verified Customer Reviews */}
        <ReviewsSection />

        {/* Shop Location, Live Map & Directions */}
        <LocationAndHours />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Final Conversion Banner */}
        <section className="py-16 bg-gradient-to-r from-blue-950 via-slate-900 to-slate-950 border-t border-slate-800 text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              Need Collision or Auto Body Repair in Garrett County?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Stop by 2999 Hutton Rd in Oakland, call us directly, or upload photos of your damage for an honest, fast estimate.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href={`tel:${SHOP_INFO.phoneRaw}`}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call (240) 321-0939</span>
              </a>
              <button
                onClick={() => handleOpenEstimateModal()}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-slate-100 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-all cursor-pointer"
              >
                Request Free Photo Estimate
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Quiet Professional Footer */}
      <Footer />

      {/* Free Estimate Request Modal */}
      <EstimateRequestModal
        isOpen={isEstimateModalOpen}
        onClose={() => setIsEstimateModalOpen(false)}
        prefillDamageZone={modalPrefillZone}
        prefillEstimatedCost={modalPrefillCost}
      />

      {/* Mobile Sticky Quick Action Bar (adheres to 15% mobile viewport cap) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-4 py-2.5 flex items-center justify-between gap-3 shadow-2xl">
        <a
          href={`tel:${SHOP_INFO.phoneRaw}`}
          className="flex-1 py-2.5 px-3 text-xs font-bold text-white bg-blue-600 rounded-lg flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Call (240) 321-0939</span>
        </a>
        <button
          onClick={() => handleOpenEstimateModal()}
          className="flex-1 py-2.5 px-3 text-xs font-bold text-slate-200 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>Free Estimate</span>
        </button>
      </div>
    </div>
  );
}
