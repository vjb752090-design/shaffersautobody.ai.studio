import { DamageEstimateParams, EstimateResult } from '../types';

export function calculateEstimate(params: DamageEstimateParams): EstimateResult {
  let baseMin = 300;
  let baseMax = 650;
  let daysMin = 1;
  let daysMax = 3;
  const processHighlights: string[] = [];
  const includedItems: string[] = [];

  // Vehicle type factor
  let multiplier = 1.0;
  if (params.vehicleType === 'truck' || params.vehicleType === 'suv') {
    multiplier = 1.25;
    includedItems.push('Heavy-duty frame & tall-panel clearance check');
  } else if (params.vehicleType === 'van') {
    multiplier = 1.2;
    includedItems.push('Sliding door mechanism & alignment calibration');
  } else {
    includedItems.push('Precision sedan bodyline fitment');
  }

  // Panel zone
  switch (params.panelZone) {
    case 'front_bumper':
      baseMin = 450;
      baseMax = 950;
      daysMin = 2;
      daysMax = 3;
      processHighlights.push('Front bumper fascia removal & structural foam inspection');
      processHighlights.push('ADAS radar / parking sensor bracket alignment');
      includedItems.push('Plastic repair/welding or OEM replacement');
      includedItems.push('PPG flex-agent clear coat application');
      break;

    case 'rear_bumper':
      baseMin = 400;
      baseMax = 850;
      daysMin = 1;
      daysMax = 3;
      processHighlights.push('Rear impact bar & blind-spot monitoring inspection');
      processHighlights.push('Exhaust heat shield clearance verification');
      includedItems.push('Bumper reinforcement test');
      includedItems.push('Reflector & lamp housing reinstallation');
      break;

    case 'fender_hood':
      baseMin = 550;
      baseMax = 1200;
      daysMin = 2;
      daysMax = 4;
      processHighlights.push('Precision panel edge gap tolerance matching (<3.5mm)');
      processHighlights.push('Hood latch safety alignment and under-hood insulator check');
      includedItems.push('Full panel strip, anti-corrosion primer & baked clear');
      includedItems.push('Adjacent door / pillar color blending');
      break;

    case 'doors_rocker':
      baseMin = 600;
      baseMax = 1450;
      daysMin = 2;
      daysMax = 5;
      processHighlights.push('Side-impact beam integrity check & power window test');
      processHighlights.push('Weather-stripping and sound dampening re-seal');
      includedItems.push('Door shell realignment or skin replacement');
      includedItems.push('Factory paint color blend with front/rear panels');
      break;

    case 'quarter_panel':
      baseMin = 750;
      baseMax = 1800;
      daysMin = 3;
      daysMax = 6;
      processHighlights.push('Welded unibody seam inspection & anti-rust cavity treatment');
      processHighlights.push('Wheel arch clearance and tail light pocket fitment');
      includedItems.push('Structural metal shaping & lead/filler smoothing');
      includedItems.push('Complete roof rail or C-pillar clear coat blending');
      break;

    case 'frame_chassis':
      baseMin = 1400;
      baseMax = 3400;
      daysMin = 4;
      daysMax = 8;
      processHighlights.push('Computerized laser unibody benchmark target analysis');
      processHighlights.push('Hydraulic tower pulls to restore OEM suspension datum points');
      includedItems.push('Laser frame diagnostic printout with before/after measurements');
      includedItems.push('Full 4-wheel alignment verification');
      break;
  }

  // Severity factor
  let severityMultiplier = 1.0;
  if (params.severity === 'minor') {
    severityMultiplier = 0.85;
    processHighlights.push('Cosmetic surface leveling and touch-up blend');
  } else if (params.severity === 'moderate') {
    severityMultiplier = 1.35;
    daysMin += 1;
    daysMax += 1;
    processHighlights.push('Medium crease metal pull, deep primer leveling & full bake');
  } else {
    severityMultiplier = 2.1;
    daysMin += 2;
    daysMax += 3;
    processHighlights.push('Heavy structural pulling, potential OEM panel replacement');
  }

  if (params.hasInsurance) {
    includedItems.push('Direct insurance estimate submission & supplement handling');
    includedItems.push('Zero out-of-pocket hassle beyond your designated deductible');
  } else {
    includedItems.push('Transparent cash/direct payment pricing with itemized invoice');
  }

  if (params.needsTowing) {
    includedItems.push('Assistance coordinating local Garrett County flatbed towing');
  }

  const minCost = Math.round((baseMin * multiplier * severityMultiplier) / 25) * 25;
  const maxCost = Math.round((baseMax * multiplier * severityMultiplier) / 25) * 25;

  return {
    minCost,
    maxCost,
    estimatedDaysMin: Math.max(1, daysMin),
    estimatedDaysMax: Math.max(daysMin + 1, daysMax),
    processHighlights,
    includedItems
  };
}

export function isShopOpenCurrently(): { isOpen: boolean; statusText: string } {
  // Oakland, MD is in Eastern Time (America/New_York)
  try {
    const now = new Date();
    const estTimeStr = now.toLocaleString("en-US", { timeZone: "America/New_York" });
    const estDate = new Date(estTimeStr);
    const day = estDate.getDay(); // 0 is Sunday, 6 is Saturday
    const hour = estDate.getHours();
    const minute = estDate.getMinutes();
    const timeInMinutes = hour * 60 + minute;

    if (day >= 1 && day <= 5) {
      // Mon - Fri: 8:00 AM to 5:00 PM (480 to 1020 mins)
      if (timeInMinutes >= 480 && timeInMinutes < 1020) {
        const remainingHours = Math.floor((1020 - timeInMinutes) / 60);
        return {
          isOpen: true,
          statusText: `Open Now · Closes at 5:00 PM (${remainingHours > 0 ? `${remainingHours}h remaining` : 'Closing soon'})`
        };
      } else if (timeInMinutes < 480) {
        return {
          isOpen: false,
          statusText: `Closed Now · Opens today at 8:00 AM`
        };
      } else {
        return {
          isOpen: false,
          statusText: `Closed for today · Opens tomorrow at 8:00 AM`
        };
      }
    } else if (day === 6) {
      return {
        isOpen: false,
        statusText: `Saturday · By Appointment & Key Drop Only`
      };
    } else {
      return {
        isOpen: false,
        statusText: `Sunday · Closed · Reopens Monday at 8:00 AM`
      };
    }
  } catch {
    return {
      isOpen: true,
      statusText: `Mon–Fri: 8:00 AM – 5:00 PM`
    };
  }
}
