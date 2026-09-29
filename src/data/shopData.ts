import { ServiceItem, ReviewItem, BeforeAfterCase } from '../types';
import { ASSET_IMAGES } from '../assets/images';

export const SHOP_INFO = {
  name: "Kevin Shaffer's Auto Body and Collision Repair",
  shortName: "Kevin Shaffer's Auto Body",
  phone: "+1 240-321-0939",
  phoneRaw: "+12403210939",
  displayPhone: "(240) 321-0939",
  address: "2999 Hutton Rd",
  city: "Oakland",
  state: "MD",
  zip: "21550",
  county: "Garrett County",
  fullAddress: "2999 Hutton Rd, Oakland, MD 21550",
  rating: 4.7,
  reviewCount: 48,
  weekdayHours: "8:00 AM – 5:00 PM",
  saturdayHours: "By Appointment / Key Drop",
  sundayHours: "Closed",
  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Kevin+Shaffer's+Auto+Body+2999+Hutton+Rd+Oakland+MD+21550",
};

export const SERVICES: ServiceItem[] = [
  {
    id: "collision-frame",
    number: "01",
    title: "Collision & Frame Repair",
    tagline: "Computerized unibody & structural laser alignment",
    description: "Major impacts compromise the vehicle structural integrity. Our heavy-duty frame machines and computerized measuring benchmarks restore your chassis to within OEM millimeter specifications.",
    keyFeatures: [
      "Hydraulic unibody pull & laser alignment",
      "Structural cross-member and pillar rebuilding",
      "Suspension mounting point verification",
      "Airbag and crumple zone safety restoration"
    ],
    turnaround: "3 – 8 business days",
    warranty: "Lifetime structural integrity guarantee",
    image: ASSET_IMAGES.collisionFrame,
    iconName: "Wrench"
  },
  {
    id: "color-matching-paint",
    number: "02",
    title: "Auto Body Painting & Factory Color Match",
    tagline: "Computerized spectrophotometer matching in a clean downdraft booth",
    description: "Nothing looks worse than a mismatched fender. Using computerized digital paint formulation and premium PPG paints, we blend seamlessly into existing panels with factory gloss and UV protection.",
    keyFeatures: [
      "Computerized optical paint formulation",
      "Down-draft heated bake spray booth",
      "Multi-stage metallic, pearl, and tri-coat finishes",
      "Factory-grade UV resistant clear coats"
    ],
    turnaround: "2 – 4 business days",
    warranty: "Lifetime paint adhesion & clear coat guarantee",
    image: ASSET_IMAGES.paintBooth,
    iconName: "Palette"
  },
  {
    id: "dent-scratch-removal",
    number: "03",
    title: "Dent & Scratch Removal",
    tagline: "Paintless Dent Repair (PDR) and deep crease repair",
    description: "From Oakland parking lot door dings to deer strikes and Appalachian hail, we utilize specialized metal contouring tools to massage dents out while preserving your vehicle's factory paint.",
    keyFeatures: [
      "Paintless Dent Repair (PDR) for minor dings",
      "Deep crease repair and body filler smoothing",
      "Rock chip touch-up and key scratch blending",
      "Panel leveling with zero ghost ripples"
    ],
    turnaround: "1 – 3 business days",
    warranty: "Permanent repair guarantee",
    image: ASSET_IMAGES.bodyDetail,
    iconName: "Sparkles"
  },
  {
    id: "bumper-replacement",
    number: "04",
    title: "Bumper Repair & Replacement",
    tagline: "Plastic welding, reinforcement bars & sensor alignment",
    description: "Modern bumpers pack complex safety sensors, blind-spot radars, and collapsible energy absorbers. We repair cracked plastic covers or install OEM replacements with full recalibration.",
    keyFeatures: [
      "Plastic thermo-welding and crack bonding",
      "OEM bumper cover sourcing and prep",
      "Parking sensor and radar bracket recalibration",
      "Reinforcement bar and absorber foam inspection"
    ],
    turnaround: "1 – 3 business days",
    warranty: "OEM fit and finish guarantee",
    iconName: "Shield"
  },
  {
    id: "insurance-assistance",
    number: "05",
    title: "Insurance Claims Assistance",
    tagline: "Direct liaison with all major insurance adjusters",
    description: "Dealing with insurance after an accident is stressful. Under Maryland law, you have the right to pick your own repair facility. We handle the digital photo estimates, adjuster walk-throughs, and supplement filings.",
    keyFeatures: [
      "Direct billing with all major auto insurance carriers",
      "Maryland Right-to-Choose shop advocacy",
      "Supplemental damage documentation & approval",
      "Rental car drop-off and pickup coordination"
    ],
    turnaround: "Immediate same-day claim processing",
    warranty: "Hassle-free guarantee",
    iconName: "FileCheck"
  },
  {
    id: "rust-detail",
    number: "06",
    title: "Rocker Panel & Weather Defense",
    tagline: "Appalachian winter salt defense & panel restoration",
    description: "Western Maryland winters take a heavy toll with road salt and moisture. We inspect and repair damaged rocker panels, wheel arches, and lower quarter panels with anti-corrosion barrier coatings.",
    keyFeatures: [
      "Salt corrosion removal and metal patch welding",
      "Inner-panel cavity wax and rust inhibitor coats",
      "Wheel arch liner and splash shield sealing",
      "Undercarriage safety inspection"
    ],
    turnaround: "2 – 4 business days",
    warranty: "Corrosion protection guarantee",
    iconName: "Hammer"
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    author: "Dave Miller",
    location: "Oakland, MD",
    rating: 5,
    date: "August 2026",
    vehicle: "2023 Ford F-150 SuperCrew",
    serviceCategory: "collision",
    headline: "Immaculate repair after a deer hit on Route 219",
    content: "Hit a big buck coming down toward Hutton late in the evening. Front grill, right fender, and headlight assembly were smashed up. Kevin handled the entire estimate with Erie Insurance in one afternoon. When I picked my truck up, you couldn't tell anything had ever happened. Color match is spot on and the panel lines are tighter than factory.",
    verified: true
  },
  {
    id: "rev-2",
    author: "Sarah Jenkins",
    location: "Deep Creek Lake, MD",
    rating: 5,
    date: "July 2026",
    vehicle: "2022 Subaru Outback",
    serviceCategory: "paint",
    headline: "Unbelievable paint match on metallic pearl white",
    content: "Someone scraped the side of my Outback in a crowded grocery parking lot in Oakland. I was terrified because pearl white is notorious for being hard to blend. Kevin Shaffer's shop did a flawless job. Honest people, fair pricing, and they had it ready two days earlier than quoted.",
    verified: true
  },
  {
    id: "rev-3",
    author: "Robert T. Vance",
    location: "Mountain Lake Park, MD",
    rating: 5,
    date: "June 2026",
    vehicle: "2021 Chevy Silverado 2500",
    serviceCategory: "collision",
    headline: "Straightened the frame and got my work truck back on the road",
    content: "I depend on my truck every day for my contracting work. Had a heavy rear-quarter collision that twisted the bed mounting. Kevin gave me a straight answer, walked me through the laser measuring specs, and got State Farm to approve all OEM parts without a fight. True craftsman who cares about his local community.",
    verified: true
  },
  {
    id: "rev-4",
    author: "Brenda K. Hinebaugh",
    location: "Friendsville, MD",
    rating: 5,
    date: "April 2026",
    vehicle: "2020 Honda CR-V",
    serviceCategory: "service",
    headline: "Friendly, helpful, and transparent from start to finish",
    content: "As someone who knows very little about cars, body shops can feel intimidating. Kevin and his crew were so respectful, explained what needed immediate repair and what was cosmetic, and saved me nearly $600 compared to the dealer estimate in Cumberland. Wouldn't take my car anywhere else in Garrett County.",
    verified: true
  },
  {
    id: "rev-5",
    author: "Mark C. Albright",
    location: "Oakland, MD",
    rating: 4,
    date: "March 2026",
    vehicle: "2019 Toyota Tacoma",
    serviceCategory: "insurance",
    headline: "Handled the insurance adjuster so I didn't have to stress",
    content: "Progressive initially tried to use cheap aftermarket bumper parts. Kevin advocated for me, showed them the fitment gaps, and got OEM replacements covered. Took an extra day waiting for the part from Pittsburgh, but the final outcome is 10/10.",
    verified: true
  },
  {
    id: "rev-6",
    author: "Jessica Lynn",
    location: "McHenry, MD",
    rating: 5,
    date: "January 2026",
    vehicle: "2024 Toyota RAV4 Hybrid",
    serviceCategory: "paint",
    headline: "Hail and dent removal looks showroom new",
    content: "Quick turnaround, pristine shop floor, and zero runaround. Kevin even buffed out an unrelated scuff on my rear door as a courtesy. Highly recommend Kevin Shaffer's Auto Body to anyone in Western MD!",
    verified: true
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-silverado",
    title: "Chevy Silverado Front-End Deer Impact",
    vehicle: "2023 Chevrolet Silverado 1500 RST",
    damageType: "Bumper crush, right fender fold, radiator support pushback",
    summary: "Complete front end restoration including OEM high-strength steel bumper, right quarter blend, and electronic front radar sensor recalibration.",
    turnaroundDays: 5,
    insuranceClaim: true,
    beforeDescription: "Severely crumpled right fender, shattered headlight housing, deformed bumper brackets, and pushed-in grill.",
    afterDescription: "Laser-aligned chassis mounts, OEM panel gaps under 3.5mm, and seamless factory dark blue metallic paint match with mirror clear coat.",
    workDone: [
      "Replaced front bumper assembly & impact absorber",
      "Laser measured unibody horns to factory 0-tolerance",
      "Prepped, primed, and multi-stage painted right fender",
      "Calibrated forward safety collision radar"
    ],
    beforeImage: ASSET_IMAGES.collisionFrame,
    afterImage: ASSET_IMAGES.heroShop
  },
  {
    id: "case-subaru",
    title: "Subaru Outback Passenger Side Crease",
    vehicle: "2022 Subaru Outback Touring",
    damageType: "T-bone glancing impact, front & rear passenger doors indented",
    summary: "Heavy side panel crease reshaped and metal worked without replacing the doors, finished with factory tri-coat pearl paint.",
    turnaroundDays: 4,
    insuranceClaim: true,
    beforeDescription: "Sharp 18-inch metal crease along the lower door swage line with scuffed paint down to bare sheet metal.",
    afterDescription: "Metal shrunk and leveled with no visible filler trace, computerized spectrophotometer pearl white blend across both doors.",
    workDone: [
      "Precision metal work and crease extraction",
      "Anti-corrosion epoxy primer application",
      "Computerized tri-coat pearl paint formulation",
      "Infrared bake cure and machine polish"
    ],
    beforeImage: ASSET_IMAGES.bodyDetail,
    afterImage: ASSET_IMAGES.paintBooth
  }
];

export const INSURANCE_PARTNERS = [
  { name: "Erie Insurance", popularInMD: true },
  { name: "State Farm", popularInMD: true },
  { name: "Progressive", popularInMD: true },
  { name: "Geico", popularInMD: true },
  { name: "Allstate", popularInMD: true },
  { name: "Nationwide", popularInMD: true },
  { name: "USAA", popularInMD: true },
  { name: "Travelers", popularInMD: true },
  { name: "Liberty Mutual", popularInMD: false },
  { name: "Farm Bureau", popularInMD: true }
];

export const FAQS = [
  {
    question: "Do I have to use the body shop that my insurance company suggests?",
    answer: "No! Under Maryland State Insurance Law (§ 27-906), you have the absolute legal right to choose any licensed repair shop you trust. Insurance companies may recommend their 'preferred' network shops to save their own costs, but they cannot force you or penalize you for choosing Kevin Shaffer's Auto Body. We work directly with all insurance adjusters to get your claim paid."
  },
  {
    question: "How do I get an estimate for the damage?",
    answer: "You can stop by our shop at 2999 Hutton Rd in Oakland during regular business hours (8 AM – 5 PM M-F) for an in-person visual inspection. You can also use our online Estimate Request tool on this page to upload clear photos of the damage from several angles; Kevin will review them and call or email you with an initial assessment."
  },
  {
    question: "Will the new paint match the rest of my car?",
    answer: "Yes, 100%. We utilize computerized spectrophotometers to scan your vehicle's exact current paint tone (accounting for sun aging and clear coat depth). We mix OEM formulas on-site and blend into adjacent panels inside our heated down-draft spray booth to ensure an undetectable factory finish."
  },
  {
    question: "How long will my vehicle repairs take?",
    answer: "Turnaround depends on the extent of damage and parts availability. Minor bumper and dent repairs are usually completed in 1 to 3 days. More extensive collision repairs involving frame alignment or multiple replacement panels typically take 4 to 8 business days. We keep you updated every step of the way."
  },
  {
    question: "What if my car is not drivable?",
    answer: "If your car cannot be safely driven from the accident scene, instruct your tow truck driver to drop it off at Kevin Shaffer's Auto Body & Collision Repair, 2999 Hutton Rd, Oakland, MD 21550. If after hours, we have a secure drop area and key box. Call us at (240) 321-0939 and we will notify your insurance carrier."
  },
  {
    question: "Do you offer a warranty on collision repairs?",
    answer: "Yes. All structural repairs, metalwork, and paint applications performed by Kevin Shaffer's Auto Body come with our shop's Lifetime Workmanship Guarantee for as long as you own the vehicle."
  }
];
