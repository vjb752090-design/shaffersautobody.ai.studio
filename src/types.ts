export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  keyFeatures: string[];
  turnaround: string;
  warranty: string;
  image?: string;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  vehicle: string;
  serviceCategory: 'collision' | 'paint' | 'insurance' | 'service';
  headline: string;
  content: string;
  verified: boolean;
}

export interface BeforeAfterCase {
  id: string;
  title: string;
  vehicle: string;
  damageType: string;
  summary: string;
  turnaroundDays: number;
  insuranceClaim: boolean;
  beforeDescription: string;
  afterDescription: string;
  workDone: string[];
  beforeImage: string;
  afterImage: string;
}

export interface DamageEstimateParams {
  vehicleType: 'sedan' | 'truck' | 'suv' | 'van';
  panelZone: 'front_bumper' | 'rear_bumper' | 'fender_hood' | 'doors_rocker' | 'quarter_panel' | 'frame_chassis';
  severity: 'minor' | 'moderate' | 'severe';
  hasInsurance: boolean;
  needsTowing: boolean;
}

export interface EstimateResult {
  minCost: number;
  maxCost: number;
  estimatedDaysMin: number;
  estimatedDaysMax: number;
  processHighlights: string[];
  includedItems: string[];
}

export interface EstimateFormData {
  fullName: string;
  phone: string;
  email: string;
  vehicleYear: string;
  vehicleMake: string;
  vehicleModel: string;
  vin?: string;
  damageZone: string;
  description: string;
  insuranceCarrier?: string;
  claimNumber?: string;
  preferredDate?: string;
  photoNames: string[];
}
