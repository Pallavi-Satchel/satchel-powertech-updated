import { BrandPartner, Testimonial } from '../types';

export const COMPANY_INFO = {
  name: 'Satchel Powertech Private Limited',
  shortName: 'Satchel Powertech',
  tagline: 'Powering a Sustainable Future Through Smart Solar Solutions',
  altTagline: 'Complete EPC Solar Solutions Under One Roof',
  headquarters: 'Corporate Office: A-409, Logix Technova, Sector-132, Noida – 201301',
  regionalOffices: ['Noida (UP)', 'Amroha (UP)', 'Delhi NCR', 'Bangalore (Karnataka)', 'PAN India'],
  phonePrimary: '8800406355',
  phoneSecondary: '9311716926',
  emailInfo: 'info@satchelpower.com',
  emailSales: 'sales@satchelpower.com',
  emailCareers: 'careers@satchelpower.com',
  website: 'www.satchelpower.com',
  whatsappNumber: '918800406355',
  gstin: '09ABPCS5310N1ZR',
  mnreReg: 'MNRE & DISCOM Empaneled Solar EPC',
  msmeReg: 'UDYAM-UP-28-0211153',
  authorizations: [
    { title: 'Authorized Channel Partner', partner: 'Redington Solar' },
    { title: 'Authorized Distributor', partner: 'Hitachi Solar Inverters' }
  ],
  vision: "To become one of India's most trusted and preferred Solar EPC companies by delivering innovative, reliable, and sustainable solar energy solutions that power a greener future.",
  mission: "To accelerate India's clean energy transition through engineering excellence, strategic partnerships, quality execution, and customer-centric solar solutions that create lasting value for all stakeholders."
};

export const COMPANY_STATS = [
  { value: '5MW+', unit: 'MW+', label: 'Installed Capacity', desc: 'Solar projects executed & commissioned across India' },
  { value: '15+', unit: '+', label: 'Sites Completed', desc: 'Rooftop, Ground Mounted & C&I solar plants' },
  { value: '15+', unit: '+', label: 'Happy Clients', desc: 'Key institutional, industrial & corporate accounts' },
  { value: '10+', unit: '+', label: 'Qualified Experts', desc: 'In-house solar, design & structural engineers' },
  { value: '1,500', unit: 'Tons', label: 'CO₂ Offset / Year', desc: '62,500 Trees equivalent CO₂ offset over 25 years' },
  { value: '40', unit: 'Years', label: 'Power Sector Legacy', desc: 'Leadership backed by 40+ years in power distribution' }
];

export const COMPANY_STRENGTHS = [
  {
    title: 'MNRE & MSME Registered',
    description: 'Government recognized Solar EPC company ensuring compliance with national solar policy and Discom subsidy guidelines.',
    icon: 'ShieldCheck',
    badge: 'Govt Recognized'
  },
  {
    title: 'Authorized Channel Partner - Redington',
    description: 'Direct distribution tie-ups with Redington India for genuine Tier-1 solar modules, cables, and components.',
    icon: 'Award',
    badge: 'Tier-1 Supply Chain'
  },
  {
    title: 'Authorized Distributor - Hitachi Inverters',
    description: 'Official distributor and authorized service partner for Hitachi Grid-Tie & Hybrid Solar Inverters in North India.',
    icon: 'Zap',
    badge: 'Hitachi Partner'
  },
  {
    title: 'In-House Engineering & Design',
    description: 'Dedicated team of certified Electrical & Solar Design engineers utilizing PVsyst, Helioscope, and AutoCAD for maximum PR.',
    icon: 'Compass',
    badge: 'Zero Subcontracting'
  },
  {
    title: 'End-to-End Turnkey Execution',
    description: 'Complete lifecycle management: site survey, detailed engineering, discom net metering approvals, testing & commissioning.',
    icon: 'Layers',
    badge: 'Full Turnkey'
  },
  {
    title: 'PAN India Project Reach',
    description: 'Active project deployments across Uttar Pradesh, Delhi NCR, Haryana, Rajasthan, Madhya Pradesh, and Punjab.',
    icon: 'MapPin',
    badge: 'PAN India'
  }
];

export const BRAND_PARTNERS: BrandPartner[] = [
  { name: 'Hitachi Solar', category: 'Inverters', badge: 'Authorized Distributor', logoText: 'HITACHI', bgColor: 'bg-red-50 hover:bg-red-100 border-red-200', textColor: 'text-red-700' },
  { name: 'Redington', category: 'Supply Chain Partner', badge: 'Authorized Partner', logoText: 'REDINGTON', bgColor: 'bg-blue-50 hover:bg-blue-100 border-blue-200', textColor: 'text-blue-700' },
  { name: 'Adani Solar', category: 'PV Modules', badge: 'Tier-1 Mono PERC', logoText: 'ADANI SOLAR', bgColor: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200', textColor: 'text-emerald-800' },
  { name: 'Waaree Energies', category: 'PV Modules', badge: 'TopCon & Bifacial', logoText: 'WAAREE', bgColor: 'bg-amber-50 hover:bg-amber-100 border-amber-200', textColor: 'text-amber-800' },
  { name: 'Vikram Solar', category: 'PV Modules', badge: 'Tier-1 PV', logoText: 'VIKRAM SOLAR', bgColor: 'bg-orange-50 hover:bg-orange-100 border-orange-200', textColor: 'text-orange-800' },
  { name: 'Growatt', category: 'Inverters', badge: 'Grid-Tie & Hybrid', logoText: 'GROWATT', bgColor: 'bg-teal-50 hover:bg-teal-100 border-teal-200', textColor: 'text-teal-800' },
  { name: 'Sungrow', category: 'Inverters', badge: 'Utility Inverters', logoText: 'SUNGROW', bgColor: 'bg-amber-50 hover:bg-amber-100 border-amber-200', textColor: 'text-amber-700' },
  { name: 'GoodWe', category: 'Inverters & BESS', badge: 'Smart Energy', logoText: 'GOODWE', bgColor: 'bg-slate-100 hover:bg-slate-200 border-slate-300', textColor: 'text-slate-800' },
  { name: 'Polycab', category: 'Solar Cables & DCDB', badge: 'Wires & Switchgear', logoText: 'POLYCAB', bgColor: 'bg-blue-50 hover:bg-blue-100 border-blue-200', textColor: 'text-blue-800' },
  { name: 'Havells', category: 'AC Protection & Cables', badge: 'Electrical Infrastructure', logoText: 'HAVELLS', bgColor: 'bg-red-50 hover:bg-red-100 border-red-200', textColor: 'text-red-800' },
  { name: 'L&T Electrical', category: 'Switchgear & Transformers', badge: 'Substation Partner', logoText: 'LARSEN & TOUBRO', bgColor: 'bg-cyan-50 hover:bg-cyan-100 border-cyan-200', textColor: 'text-cyan-900' },
  { name: 'Schneider Electric', category: 'Protection & Automation', badge: 'Energy Management', logoText: 'SCHNEIDER', bgColor: 'bg-emerald-50 hover:bg-emerald-100 border-emerald-200', textColor: 'text-emerald-700' }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    clientName: 'Rajesh Sharma',
    designation: 'Director of Operations',
    companyOrLoc: 'OOMS Polymer Modified Bitumen Pvt. Ltd., Amroha',
    projectType: '165 kWp Industrial Rooftop System',
    category: 'industrial',
    rating: 5,
    verified: true,
    date: 'January 2025',
    quote: 'Satchel Powertech executed our 165 kWp industrial solar rooftop within 45 days. The Growatt inverters and Navitas 585Wp modules are generating over 22,000 units monthly. Our factory electricity expense dropped by 65%. Exceptional engineering precision!',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200',
    projectPhoto: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: 'Monthly Generation', value: '22,500 kWh' },
      { label: 'Bill Reduction', value: '65% Savings' },
      { label: 'Payback Period', value: '2.8 Years' }
    ],
    tags: ['Navitas 585Wp', 'Growatt 80kW+60kW', 'C&I Tax Depreciation']
  },
  {
    id: 't2',
    clientName: 'Vikram Chaudhary',
    designation: 'Lead Developer & Landowner Partner',
    companyOrLoc: 'PM Kusum Component-A, Western UP',
    projectType: '3.96 MW Ground-Mounted Kusum Project',
    category: 'kusum',
    rating: 5,
    verified: true,
    date: 'February 2025',
    quote: 'For a 3.96 MW Kusum grid-interactive solar project, discom liaison, CEIG clearances, and civil structural design are critical. Satchel Powertech managed everything smoothly from 33kV substation grid sync to final testing. True EPC leaders in India.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200',
    projectPhoto: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: 'Plant Capacity', value: '3.96 MW (3,960 kW)' },
      { label: 'Annual Green Energy', value: '5.8M Units' },
      { label: 'Substation Sync', value: '33kV UPPCL Grid' }
    ],
    tags: ['PM Kusum Scheme', 'Ground Mounted', '33kV Grid Synchronization']
  },
  {
    id: 't3',
    clientName: 'Gaurav Manchanda',
    designation: 'Infrastructure & Facilities Manager',
    companyOrLoc: 'Audi Delhi South Dealership, New Delhi',
    projectType: '94 kWp Commercial Rooftop Solar',
    category: 'commercial',
    rating: 5,
    verified: true,
    date: 'March 2025',
    quote: 'As a luxury automotive brand, structural safety and aesthetic integration were paramount. Satchel Powertech installed Vikramsolar 580Wp modules backed by an Authorized Hitachi 110kW Inverter. The real-time portal monitoring gives us complete transparency.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    projectPhoto: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: 'Inverter Brand', value: 'Hitachi 110 kW' },
      { label: 'Annual CO2 Offset', value: '110 Tons' },
      { label: 'PR Efficiency', value: '82.4%' }
    ],
    tags: ['Hitachi Solar Inverters', 'Vikram Solar 580Wp', 'Commercial EPC']
  },
  {
    id: 't4',
    clientName: 'Fr. Thomas Kuriakose',
    designation: 'Director of Healthcare Operations',
    companyOrLoc: 'St Francis Hospital & Research Centre, Indore',
    projectType: '200 kWp Institutional Rooftop Solar',
    category: 'commercial',
    rating: 5,
    verified: true,
    date: 'December 2024',
    quote: 'Hospitals require 100% uninterrupted power quality. Satchel Powertech commissioned a 200 kWp rooftop plant with Jakson 550Wp modules and dual Growatt 100kW inverters. Our operational energy bills dropped significantly while meeting environmental goals.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    projectPhoto: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: 'Plant Capacity', value: '200 kWp' },
      { label: 'Annual Savings', value: '₹18.5 Lakhs' },
      { label: 'Discom Approval', value: 'Net-Metered MPPKVVCL' }
    ],
    tags: ['Jakson 550Wp', 'Hospital Solar', 'Zero Grid Tripping']
  },
  {
    id: 't5',
    clientName: 'Suresh Viswanathan',
    designation: 'VP Engineering & Facilities',
    companyOrLoc: 'Saksoft Ltd., IT Park Noida',
    projectType: '158.4 kWp IT Campus Rooftop Solar',
    category: 'industrial',
    rating: 5,
    verified: true,
    date: 'September 2025',
    quote: 'Commissioned through Redington Solar distribution, the 158.4 kWp plant on our corporate headquarters delivers high energy yields consistently. Satchel Powertech’s zero-subcontracting engineering team handled all STAAD analysis and roof waterproofing perfectly.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    projectPhoto: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: 'Solar Capacity', value: '158.4 kWp' },
      { label: 'Modules Used', value: 'Navitas 550Wp' },
      { label: 'Distribution Partner', value: 'Redington Solar' }
    ],
    tags: ['Saksoft Corporate HQ', 'Redington Solar Partner', 'IT Park Rooftop']
  },
  {
    id: 't6',
    clientName: 'Anil Agarwal',
    designation: 'Villa Owner',
    companyOrLoc: 'Sector 15A, Noida',
    projectType: '10 kW Residential Solar + PM Surya Ghar Subsidy',
    category: 'residential',
    rating: 5,
    verified: true,
    date: 'January 2025',
    quote: 'Under PM Surya Ghar Muft Bijli Yojana, Satchel Powertech guided me step-by-step. They handled the UP NEDA application, net-metering installation, and ₹78,000 direct subsidy disbursement seamlessly. Our monthly power bill is now virtually zero!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    projectPhoto: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    metrics: [
      { label: 'System Size', value: '10 kW Grid-Tie' },
      { label: 'Govt Subsidy', value: '₹78,000 Direct Credit' },
      { label: 'Electricity Savings', value: '95% Bill Cut' }
    ],
    tags: ['PM Surya Ghar', 'Noida Net-Metering', 'UP NEDA Approved']
  }
];

export const LEADERSHIP_TEAM = [
  {
    name: 'Mr. Rakesh Kumar Agrawal',
    role: 'Managing Director & Founder',
    qualification: 'Electrical Engineer, Ex-Senior VP BSES Rajdhani Power, 40+ Years Power Sector Exp.',
    bio: 'Distinguished power sector veteran with over four decades in electrical distribution, utility coordination, and renewable infrastructure. Formerly Senior Vice President at BSES Rajdhani Power Limited.',
    image: '/src/assets/images/rakesh_agrawal_md_exact_1786015754437.jpg'
  },
  {
    name: 'Mr. H.S. Semwal',
    role: 'Director - Business Operations & Procurement (CBO)',
    qualification: 'Ex-BSES Senior Executive, 35+ Years Utility Operations & Procurement Leader',
    bio: 'Drives strategic OEM partnerships with Redington India and Hitachi Solar, managing supply chain operations, vendor empanelment, discom coordination, and corporate procurement.',
    image: '/src/assets/images/hs_semwal_exact_photo_1786015984867.jpg'
  },
  {
    name: 'Mr. Anand Agrawal',
    role: 'Business Head & Corporate Strategy',
    qualification: 'B.Tech & MBA (Energy & Operations Management)',
    bio: 'Spearheads C&I market expansion, PM Kusum solar plant executions, key account management, and strategic alliances across PAN India markets.',
    image: '/src/assets/images/anand_agrawal_original_photo_1786016593177.jpg'
  }
];

export const MILESTONES = [
  { year: '2019', title: 'Company Foundation in Noida', desc: 'Satchel Powertech Pvt. Ltd. established with a core mandate for high quality solar EPC services.' },
  { year: '2020', title: 'Authorized Partner Tie-Up', desc: 'Empaneled as Authorized Channel Partner of Redington India Ltd. and Hitachi Solar Inverters.' },
  { year: '2022', title: 'Crossed 10 MW Landmark', desc: 'Executed over 100+ commercial, industrial, and residential rooftop projects in North India.' },
  { year: '2024', title: 'Utility Scale & PM Kusum Expansion', desc: 'Awarded landmark 4 MW PM Kusum Solar Project in Amroha along with 165 kW OOMS Polymers project.' },
  { year: '2026', title: '25+ MW Milestone & Smart Storage', desc: 'Expanding aggressively in Hybrid Solar BESS, EV Charging Infrastructure, and PAN India solar consultancy.' }
];

export const FAQ_ITEMS: import('../types').FaqItem[] = [
  {
    id: 'faq-1',
    category: 'subsidy',
    question: 'How much subsidy can I get under the PM Surya Ghar Muft Bijli Yojana?',
    answer: 'Under the PM Surya Ghar Muft Bijli Yojana, residential homeowners in India can receive up to ₹78,000 direct central government subsidy. Specifically: ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW or higher capacity systems. As an MNRE and UP NEDA empaneled EPC vendor, Satchel Powertech handles your entire portal registration, feasibility submission, and subsidy clearance directly to your bank account.',
    tags: ['PM Surya Ghar', 'Government Subsidy', 'Residential Solar', 'UP NEDA'],
    featured: true
  },
  {
    id: 'faq-2',
    category: 'installation',
    question: 'How long does it take to complete a solar rooftop installation?',
    answer: 'For residential systems (3 kW to 10 kW), the physical installation is completed in just 2 to 3 days. Commercial and industrial projects (50 kW to 500 kW+) typically take 3 to 6 weeks, including 3D PVsyst shading analysis, structural engineering, STAAD analysis, and cable trenching. Discom net-metering synchronization takes an additional 10-15 business days depending on local utility approvals.',
    tags: ['Turnkey Execution', 'Timeline', 'Rooftop Solar'],
    featured: true
  },
  {
    id: 'faq-3',
    category: 'maintenance',
    question: 'What warranties and maintenance services does Satchel Powertech provide?',
    answer: 'We provide a 25-Year Linear Performance Warranty on Tier-1 Solar Modules (Waaree, Adani, Vikram, Gautam Solar) guaranteeing at least 80% output after 25 years. As an Authorized Distributor for Hitachi Solar Inverters and Growatt systems, we offer 5 to 10 years comprehensive inverter warranties with local service engineering support in Noida/NCR. We also offer 1-year complimentary Operation & Maintenance (O&M) covering quarterly panel washing, thermal inspection, and remote SCADA monitoring.',
    tags: ['25-Year Warranty', 'Hitachi Inverters', 'O&M Services', 'Maintenance'],
    featured: true
  },
  {
    id: 'faq-4',
    category: 'netmetering',
    question: 'How does Net-Metering work with UPPCL / BSES / local Discoms?',
    answer: 'Net-metering replaces your traditional electricity meter with a bi-directional smart meter. When your solar system generates more power than your site consumes during the day, the excess electricity flows back into the discom grid, earning energy credits. At the end of the billing cycle, your discom bills you only for the net units consumed. Satchel Powertech manages end-to-end liaison with UPPCL, BSES, DHBVN, PVVNL, and MPPKVVCL.',
    tags: ['Net Metering', 'UPPCL', 'BSES', 'Bi-Directional Meter'],
    featured: false
  },
  {
    id: 'faq-5',
    category: 'commercial',
    question: 'What are the financial and tax tax benefits for Commercial & Industrial (C&I) solar?',
    answer: 'Commercial and industrial businesses in India enjoy 40% Accelerated Depreciation (AD) under Income Tax rules in the first year of solar plant commissioning. Additionally, solar power generated on-site replaces grid tariff rates (₹8 to ₹11/unit) with an effective solar cost of ₹2.20 to ₹2.80/unit. Most C&I projects achieve complete capital payback within 2.5 to 3.5 years.',
    tags: ['Tax Savings', '40% Depreciation', 'C&I ROI', 'Commercial EPC'],
    featured: true
  },
  {
    id: 'faq-6',
    category: 'installation',
    question: 'Will solar panels damage or compromise my building rooftop?',
    answer: 'Not at all. Satchel Powertech uses custom-fabricated hot-dip galvanized structural steel raised on elevated concrete anchor blocks (paddles). We perform non-penetrative structural mounting where necessary and perform roof STAAD analysis to ensure wind load resistance up to 170 km/h without drilling through waterproofing layers.',
    tags: ['Structural Integrity', 'Roof Safety', 'Galvanized Steel'],
    featured: false
  },
  {
    id: 'faq-7',
    category: 'subsidy',
    question: 'How does Satchel Powertech assist with PM Kusum Scheme projects?',
    answer: 'Satchel Powertech specializes in PM Kusum Component-A, B, and C projects across Uttar Pradesh and North India. We assist farmers, land developers, and cooperatives in site feasibility, 33kV substation grid interconnection engineering, BOQ procurement, and CEIG statutory clearances. Our team has successfully executed and finalized 3.96 MW Kusum projects.',
    tags: ['PM Kusum', 'Agricultural Solar', '33kV Substation', 'Ground Mounted'],
    featured: false
  },
  {
    id: 'faq-8',
    category: 'maintenance',
    question: 'How often do solar panels require cleaning and servicing?',
    answer: 'In North India (NCR / UP / Rajasthan), panels should be cleaned every 15 to 20 days with soft pressurized water to remove dust, pollen, and pollution soot. A dusty panel can drop generation by 8% to 15%. Satchel Powertech provides automated sprinkler washing options and manual cleaning contracts under our AMC plans.',
    tags: ['Panel Washing', 'Preventive Maintenance', 'Cleaning Contract'],
    featured: false
  }
];

