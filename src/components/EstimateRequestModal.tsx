import React, { useState, useEffect } from 'react';
import { X, Upload, CheckCircle2, Car, Camera, AlertCircle, Phone, ArrowRight } from 'lucide-react';
import { SHOP_INFO } from '../data/shopData';
import { EstimateFormData } from '../types';

interface EstimateRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillDamageZone?: string;
  prefillEstimatedCost?: string;
}

export const EstimateRequestModal: React.FC<EstimateRequestModalProps> = ({
  isOpen,
  onClose,
  prefillDamageZone,
  prefillEstimatedCost,
}) => {
  const [formData, setFormData] = useState<EstimateFormData>({
    fullName: '',
    phone: '',
    email: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    vin: '',
    damageZone: prefillDamageZone || 'Front Bumper',
    description: '',
    insuranceCarrier: '',
    claimNumber: '',
    preferredDate: '',
    photoNames: [],
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (prefillDamageZone) {
      setFormData((prev) => ({ ...prev, damageZone: prefillDamageZone }));
    }
  }, [prefillDamageZone]);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newFiles = Array.from(e.target.files).map((f) => f.name);
      setFormData((prev) => ({
        ...prev,
        photoNames: [...prev.photoNames, ...newFiles],
      }));
    }
  };

  const removePhoto = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      photoNames: prev.photoNames.filter((_, i) => i !== index),
    }));
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your name';
    if (!formData.phone.trim() || formData.phone.length < 7) {
      errs.phone = 'Valid phone number is required for quote return';
    }
    if (!formData.vehicleMake.trim()) errs.vehicleMake = 'Vehicle make is required';
    if (!formData.vehicleModel.trim()) errs.vehicleModel = 'Vehicle model is required';
    if (!formData.vehicleYear.trim()) errs.vehicleYear = 'Year is required';
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setReferenceId(`KS-${Math.floor(100000 + Math.random() * 900000)}`);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative my-8 text-slate-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg transition-colors cursor-pointer"
          aria-label="Close Estimate Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-2xl font-black text-white">
              Estimate Request Received!
            </h3>

            <div className="text-xs font-mono text-blue-400 bg-slate-950 py-1.5 px-3 rounded inline-block">
              Reference #{referenceId}
            </div>

            <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-white">{formData.fullName}</strong>. Kevin Shaffer will review your vehicle details ({formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}) and contact you at <strong className="text-white">{formData.phone}</strong> within 1 business day.
            </p>

            <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="font-semibold text-slate-200">Need Immediate Assistance?</div>
              <p className="text-slate-400">
                If your car is undrivable or you need immediate towing advice, call Kevin directly:
              </p>
              <a
                href={`tel:${SHOP_INFO.phoneRaw}`}
                className="inline-flex items-center gap-1.5 font-bold text-blue-400 hover:underline"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{SHOP_INFO.displayPhone}</span>
              </a>
            </div>

            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="text-xs font-mono font-semibold text-blue-400">
                Fast &amp; Accurate Repair Assessment
              </div>
              <h3 className="text-2xl font-black text-white mt-1">
                Request Free Repair Estimate
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Send us photos or details of the damage. Kevin Shaffer will inspect the scope and follow up directly.
              </p>

              {prefillEstimatedCost && (
                <div className="mt-3 p-3 bg-blue-950/40 border border-blue-800/60 rounded-lg text-xs text-blue-300 flex items-center justify-between">
                  <span>Selected Calculator Bracket:</span>
                  <span className="font-bold text-white font-mono">{prefillEstimatedCost}</span>
                </div>
              )}
            </div>

            {/* Vehicle Details */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                1. Vehicle Information
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Year *</label>
                  <input
                    type="text"
                    placeholder="e.g. 2022"
                    value={formData.vehicleYear}
                    onChange={(e) => setFormData({ ...formData, vehicleYear: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                  {errors.vehicleYear && <span className="text-[10px] text-rose-400 mt-0.5 block">{errors.vehicleYear}</span>}
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Make *</label>
                  <input
                    type="text"
                    placeholder="e.g. Chevrolet"
                    value={formData.vehicleMake}
                    onChange={(e) => setFormData({ ...formData, vehicleMake: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                  {errors.vehicleMake && <span className="text-[10px] text-rose-400 mt-0.5 block">{errors.vehicleMake}</span>}
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Model *</label>
                  <input
                    type="text"
                    placeholder="e.g. Silverado 1500"
                    value={formData.vehicleModel}
                    onChange={(e) => setFormData({ ...formData, vehicleModel: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                  {errors.vehicleModel && <span className="text-[10px] text-rose-400 mt-0.5 block">{errors.vehicleModel}</span>}
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                2. Your Contact Information
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                  {errors.fullName && <span className="text-[10px] text-rose-400 mt-0.5 block">{errors.fullName}</span>}
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    placeholder="(240) 555-0123"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                  {errors.phone && <span className="text-[10px] text-rose-400 mt-0.5 block">{errors.phone}</span>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-slate-400 block mb-1">Insurance Company (if filing claim)</label>
                  <input
                    type="text"
                    placeholder="e.g. Erie Insurance, State Farm, etc."
                    value={formData.insuranceCarrier}
                    onChange={(e) => setFormData({ ...formData, insuranceCarrier: e.target.value })}
                    className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Damage Description */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                3. Damage Description
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe what happened (deer hit, parking scuff, bumper crack, airbag status, etc.)"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-white focus:outline-none focus:border-blue-500 leading-relaxed"
              />
            </div>

            {/* Photo Upload Area */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                4. Upload Photos of Damage (Recommended)
              </label>
              
              <div className="border border-dashed border-slate-700 hover:border-blue-500 rounded-xl p-4 text-center bg-slate-950/50 transition-colors">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  id="photo-upload"
                  className="hidden"
                />
                <label
                  htmlFor="photo-upload"
                  className="cursor-pointer flex flex-col items-center justify-center space-y-2 py-2"
                >
                  <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-semibold text-white">
                    Click to select damage photos from phone or computer
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Front angle, close-up of scratch/dent, and wide shot
                  </div>
                </label>
              </div>

              {/* Uploaded File List */}
              {formData.photoNames.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {formData.photoNames.map((name, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 text-xs rounded text-slate-200 border border-slate-700"
                    >
                      <span className="truncate max-w-[140px]">{name}</span>
                      <button
                        type="button"
                        onClick={() => removePhoto(i)}
                        className="text-slate-400 hover:text-rose-400 cursor-pointer"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-end gap-3 border-t border-slate-800">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2.5 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-colors cursor-pointer flex items-center gap-2"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>Submit for Free Review</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
