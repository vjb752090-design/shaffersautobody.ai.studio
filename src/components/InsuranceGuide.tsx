import React from 'react';
import { ShieldCheck, FileCheck, CheckCircle2, Phone, AlertCircle, ArrowRight } from 'lucide-react';
import { INSURANCE_PARTNERS, SHOP_INFO } from '../data/shopData';

interface InsuranceGuideProps {
  onOpenEstimateModal: () => void;
}

export const InsuranceGuide: React.FC<InsuranceGuideProps> = ({ onOpenEstimateModal }) => {
  return (
    <section id="insurance" className="py-24 bg-slate-950 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            Stress-Free Claim Processing
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-1">
            We Handle Your Insurance Claim from Start to Finish
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 leading-relaxed">
            In Maryland, you have the legal right to choose where your car is repaired. Don&apos;t let an insurance rep push you to an out-of-town high-volume chain. Kevin Shaffer works directly with all insurance adjusters to get OEM parts and factory repairs approved.
          </p>
        </div>

        {/* 4-Step Claim Process */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h3 className="text-base font-bold text-white">Report the Claim</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Call your insurance company to report the incident and obtain a claim number. Tell them you are having your vehicle repaired at Kevin Shaffer&apos;s Auto Body in Oakland, MD.
            </p>
          </div>

          <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h3 className="text-base font-bold text-white">Drop Off or Tow</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Bring your car to 2999 Hutton Rd. If undrivable, have your flatbed tow driver deliver it directly to our secure lot. We take complete custody and photograph all damage.
            </p>
          </div>

          <div className="bg-slate-900/60 p-6 rounded-xl border border-blue-500/30 bg-blue-950/20 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h3 className="text-base font-bold text-white">We Handle the Adjuster</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Kevin coordinates the inspection directly with your insurance adjuster, submits digital measurements, and files any necessary supplements for hidden internal damage.
            </p>
          </div>

          <div className="bg-slate-900/60 p-6 rounded-xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
              04
            </div>
            <h3 className="text-base font-bold text-white">Pick Up &amp; Drive</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              We bill the insurance carrier directly. You inspect your pristine vehicle, pay only your agreed insurance deductible (if applicable), and drive home with our Lifetime Warranty.
            </p>
          </div>
        </div>

        {/* Maryland Legal Notice Box */}
        <div className="bg-slate-900 rounded-xl border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Maryland Insurance Code § 27-906 Protection</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              You Have the Legal Right to Choose Your Body Shop
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              No insurance company or claims representative can legally dictate where your vehicle is repaired. By choosing Kevin Shaffer&apos;s Auto Body, you ensure your repairs are done locally by experienced craftsmen using certified procedures, rather than outsourced cost-cutting operations.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <button
              onClick={onOpenEstimateModal}
              className="w-full sm:w-auto px-5 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer text-center"
            >
              Submit Claim for Review
            </button>
            <a
              href={`tel:${SHOP_INFO.phoneRaw}`}
              className="w-full sm:w-auto px-5 py-3 text-xs font-bold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors text-center"
            >
              Call for Insurance Advice
            </a>
          </div>
        </div>

        {/* Insurance Carriers We Work With */}
        <div className="mt-12">
          <div className="text-xs font-medium text-slate-400 mb-4 text-center sm:text-left">
            Trusted by policyholders of all major regional and national carriers:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {INSURANCE_PARTNERS.map((carrier, idx) => (
              <div
                key={idx}
                className="py-3 px-4 bg-slate-900/50 rounded-lg border border-slate-800/80 text-center text-xs font-semibold text-slate-300"
              >
                {carrier.name}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
