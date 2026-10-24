export type PageView = 
  | 'home'
  | 'about'
  | 'services'
  | 'products'
  | 'projects'
  | 'calculator'
  | 'downloads'
  | 'careers'
  | 'news'
  | 'contact'
  | 'admin';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  category: 'rooftop' | 'commercial' | 'utility' | 'storage' | 'maintenance' | 'consultancy';
  icon: string;
  features: string[];
  specs?: Record<string, string>;
  suitableFor: string;
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'residential' | 'commercial' | 'industrial' | 'government' | 'ground-mounted';
  client: string;
  location: string;
  capacity: string;
  completionDate: string;
  technology: string;
  annualGeneration: string;
  co2SavedTons: number;
  description: string;
  keyHighlights: string[];
  image: string;
  gallery?: string[];
  featured?: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'modules' | 'inverters' | 'storage' | 'structures' | 'electrical' | 'pumps' | 'ev';
  brand: string;
  shortSpec: string;
  description: string;
  features: string[];
  datasheetUrl?: string;
  warranty: string;
  image: string;
}

export interface BrandPartner {
  name: string;
  category: string;
  badge?: string;
  logoText: string;
  bgColor: string;
  textColor: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  designation: string;
  companyOrLoc: string;
  projectType: string;
  rating: number;
  quote: string;
  image?: string;
  projectPhoto?: string;
  category?: 'all' | 'industrial' | 'kusum' | 'residential' | 'commercial';
  metrics?: { label: string; value: string }[];
  tags?: string[];
  verified?: boolean;
  date?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  category: 'Policy' | 'Guide' | 'Technology' | 'Case Study' | 'Industry News';
  author: string;
  publishDate: string;
  readTime: string;
  summary: string;
  content: string[];
  tags: string[];
  image: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  type: 'Full-time' | 'Contract';
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface DownloadItem {
  id: string;
  title: string;
  category: 'Corporate' | 'Product Catalog' | 'Technical Datasheet' | 'Certificates' | 'Policy Guide';
  fileSize: string;
  fileType: string;
  description: string;
  iconName: string;
  downloadUrl?: string;
}

export interface LeadSubmission {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  state: string;
  serviceInterest: string;
  propertyType: 'Residential' | 'Commercial' | 'Industrial' | 'Government / Agricultural';
  monthlyBill?: string;
  roofAreaSqFt?: string;
  message?: string;
  source: string;
  status: 'New' | 'Contacted' | 'Proposal Sent' | 'Closed';
}

export interface CalculatorState {
  propertyType: 'residential' | 'commercial' | 'industrial';
  monthlyBill: number; // in INR
  state: string;
  tariffPerUnit: number; // in INR
  availableRoofArea: number; // in sq ft
  pincode?: string;
}

export interface CalculatorResult {
  recommendedCapacityKw: number;
  estimatedTotalCost: number;
  estimatedGovtSubsidy: number;
  netInvestmentCost: number;
  monthlySavings: number;
  annualSavings: number;
  paybackPeriodYears: number;
  twentyFiveYearSavings: number;
  annualUnitsGenerated: number;
  co2OffsetTonsPerYear: number;
  treesPlantedEquivalent: number;
}

export interface FaqItem {
  id: string;
  category: 'installation' | 'subsidy' | 'maintenance' | 'netmetering' | 'commercial';
  question: string;
  answer: string;
  tags?: string[];
  featured?: boolean;
}

