import React, { useState } from 'react';
import { SERVICES } from '../data/shopData';
import { ServiceItem } from '../types';
import { ArrowRight, CheckCircle2, Clock, ShieldCheck, X } from 'lucide-react';

interface ServicesSectionProps {
  onRequestService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequestService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-24 bg-slate-950 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold tracking-wider text-blue-400 uppercase">
            Comprehensive Shop Capabilities
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mt-2 leading-tight">
            Expert Collision &amp; Auto Body Repair Services
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 leading-relaxed">
            From heavy unibody frame realignment following a major collision to meticulous computerized color matching in our downdraft booth, every vehicle is restored to strict factory tolerances.
          </p>
        </div>

        {/* Asymmetric Bento-Grid Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => {
            const isFeatured = index === 0 || index === 1;

            return (
              <div
                key={service.id}
                className={`bg-slate-900/70 border border-slate-800 rounded-xl overflow-hidden flex flex-col justify-between hover:border-slate-700 transition-all duration-200 ${
                  isFeatured ? 'md:col-span-1 lg:col-span-1' : ''
                }`}
              >
                {/* Visual Image if available */}
                {service.image && (
                  <div className="relative h-48 w-full overflow-hidden bg-slate-800">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
                  </div>
                )}

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    {/* Clean editorial numbering */}
                    <div className="text-xs font-mono font-semibold text-blue-400">
                      {service.number}. Service
                    </div>

                    <h3 className="text-xl font-bold text-white mt-1">
                      {service.title}
                    </h3>

                    <p className="text-sm font-medium text-slate-300 mt-1">
                      {service.tagline}
                    </p>

                    <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key features */}
                    <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                      {service.keyFeatures.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Clean unboxed metadata footer */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-500" />
                      <span>{service.turnaround}</span>
                    </div>

                    <button
                      onClick={() => setSelectedService(service)}
                      className="text-blue-400 hover:text-blue-300 font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors"
                    >
                      <span>View Scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal for Service Deep Dive */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg cursor-pointer"
              aria-label="Close Service Details"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <div className="text-xs font-mono font-semibold text-blue-400">
                {selectedService.number}. Service Scope
              </div>
              <h3 className="text-2xl font-bold text-white mt-1">
                {selectedService.title}
              </h3>
              <p className="text-sm text-slate-300 mt-1">
                {selectedService.tagline}
              </p>
            </div>

            {selectedService.image && (
              <div className="rounded-lg overflow-hidden h-52 bg-slate-800">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedService.description}
            </p>

            <div>
              <div className="text-xs font-bold text-slate-200 uppercase tracking-wider mb-2">
                Standard Procedures &amp; Equipment
              </div>
              <ul className="space-y-2 text-xs text-slate-300">
                {selectedService.keyFeatures.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4 py-3 px-4 bg-slate-950 rounded-lg border border-slate-800 text-xs text-slate-300">
              <div>
                <span className="text-slate-500 block">Typical Turnaround:</span>
                <span className="font-semibold text-white mt-0.5 block">{selectedService.turnaround}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Guarantee:</span>
                <span className="font-semibold text-emerald-400 mt-0.5 block">{selectedService.warranty}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onRequestService(serviceName);
                }}
                className="flex-1 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer text-center"
              >
                Request Estimate for this Service
              </button>
              <button
                onClick={() => setSelectedService(null)}
                className="py-3 px-5 text-sm font-medium text-slate-300 hover:text-white bg-slate-800 rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
