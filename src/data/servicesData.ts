import { ServiceItem } from '../types';

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'residential-solar',
    title: 'Residential Rooftop Solar',
    shortDesc: 'Turnkey solar rooftop power systems for villas, bungalows, and apartments under PM Surya Ghar Muft Bijli Yojana.',
    fullDesc: 'Satchel Powertech delivers complete residential solar rooftop solutions designed to eliminate your monthly electricity bills. We manage everything from shadow analysis, roof structure fabrication, discom net-metering approvals, to direct PM Surya Ghar subsidy application support.',
    category: 'rooftop',
    icon: 'Home',
    features: [
      'Empaneled for PM Surya Ghar subsidy (Up to ₹78,000 Govt rebate)',
      'Sub-zero electricity bills with net-metering synchronization',
      'Elevated walk-able pergola structures for functional roof usage',
      'Mobile app for live energy generation monitoring',
      '5-Year free comprehensive maintenance warranty'
    ],
    specs: {
      'System Capacities': '1 kW to 10 kW+',
      'Estimated Savings': '80% - 95% reduction in electricity bill',
      'Payback Period': '2.5 to 3.5 Years (with subsidy)',
      'Panel Warranty': '25 Years Linear Performance Warranty'
    },
    suitableFor: 'Individual House Owners, Villa Communities, Apartments & Housing Societies',
    image: 'https://images.unsplash.com/photo-1592833159057-651427233089?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'commercial-industrial-solar',
    title: 'Commercial & Industrial Solar',
    shortDesc: 'High ROI solar power plants for factories, cold storages, warehouses, office parks, and educational campuses.',
    fullDesc: 'Reduce operating overheads and maximize commercial bottom-line profits with custom solar installations. Capitalize on 40% Accelerated Depreciation tax benefits, lower peak demand charges, and achieve complete grid independence with turnkey CAPEX or OPEX models.',
    category: 'commercial',
    icon: 'Building2',
    features: [
      '40% Accelerated Depreciation tax saving in Year 1',
      'Custom railless or raised structure for metal, RCC, or shed roofs',
      'DG-PV Hybrid synchronization to save expensive diesel fuel during outages',
      'Hitachi commercial inverters with active grid power factor management',
      'Return on Investment in 3 to 4 years'
    ],
    specs: {
      'System Capacities': '10 kW to 2,000 kW (2 MW)',
      'Tariff Savings': 'Locks in electricity rate at ₹2.20/unit vs ₹8.50+/unit discom rate',
      'Roof Compatibility': 'Industrial Shed, RCC Roof, Sheet Roof, Curved Structure'
    },
    suitableFor: 'Manufacturing Plants, Warehouses, Cold Storages, Shopping Malls, Hospitals, Schools',
    image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ground-mounted-solar',
    title: 'Ground Mounted Utility Solar',
    shortDesc: 'MW-scale ground solar power plants for developers, industrial parks, and PM Kusum farmers.',
    fullDesc: 'Complete EPC engineering for large-scale utility solar power plants. From topographical surveying, geotechnical soil testing, piling, structural erection, central inverter switchyard setup, to high-voltage transmission line grid connectivity.',
    category: 'utility',
    icon: 'Sun',
    features: [
      'Full land development, boundary fencing, piling, and drainage design',
      'Bifacial solar modules with seasonal tilt or single-axis tracker support',
      'HT Substation setup (11kV / 33kV / 132kV) & Discom liaison',
      'SCADA centralized remote plant operation and string-level diagnostics'
    ],
    specs: {
      'System Capacities': '500 kW to 50 MW+',
      'Performance Ratio': '> 81% PR guaranteed',
      'Grid Integration': '11kV / 33kV Transmission Grid'
    },
    suitableFor: 'Solar Power Developers, PM Kusum Applicants, IPPs, Heavy Industrial Complexes',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'pm-kusum-projects',
    title: 'PM Kusum Solar Projects',
    shortDesc: 'Turnkey solar solutions under PM Kusum Scheme Components A, B, and C for farmers, solar power generators, and discom feeders.',
    fullDesc: 'Satchel Powertech is an experienced EPC partner for PM Kusum projects across Uttar Pradesh and North India. We assist land owners and farmers in setting up 500 kW to 2 MW decentralized solar power plants, feeder solarization, and solar water pump installations.',
    category: 'utility',
    icon: 'Tractor',
    features: [
      'Comprehensive guidance on Kusum scheme application & discom PPA',
      'Specialized engineering for rural grid stability and low voltage lines',
      'High reliability components built to withstand harsh agricultural environments',
      'Steady 25-year land lease or solar power revenue stream for farmers'
    ],
    specs: {
      'Components Covered': 'Component A (0.5MW - 2MW), Component B (Solar Pumps), Component C (Feeder Solarization)',
      'Substation Sync': 'Rural 11kV Substations'
    },
    suitableFor: 'Agricultural Landowners, Farmers, Rural Cooperatives, Solar Developers',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hybrid-bess-solar',
    title: 'Hybrid Solar + Battery Storage (BESS)',
    shortDesc: 'Smart solar power coupled with Lithium LiFePO4 battery energy storage for 24/7 backup.',
    fullDesc: 'Experience zero power interruptions. Satchel Powertech engineers advanced Hybrid Solar BESS systems that store excess daytime solar energy in high-density lithium batteries to power critical loads during night hours or grid outages.',
    category: 'storage',
    icon: 'BatteryCharging',
    features: [
      'Seamless < 10ms automatic transfer during grid failures',
      'High cycle life LiFePO4 battery technology (6000+ cycles)',
      'Peak shaving algorithm to reduce expensive discom demand charges',
      'Replaces diesel generators with clean, silent, zero-emission power'
    ],
    specs: {
      'Battery Chemistry': 'Lithium Iron Phosphate (LiFePO4)',
      'System Size': '5 kW to 500 kW Solar + 10 kWh to 1 MWh BESS'
    },
    suitableFor: 'Hospitals, Data Centers, Luxury Residences, Off-Grid Facilities, Process Industries',
    image: 'https://images.unsplash.com/photo-1558441719-6705166e03c0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'solar-om-services',
    title: 'Operation & Maintenance (O&M)',
    shortDesc: 'Comprehensive AMC and preventive maintenance to guarantee maximum plant generation and 99%+ uptime.',
    fullDesc: 'Maximize your solar plant energy yield over its 25-year lifespan. Our specialized O&M team provides scheduled robotic module cleaning, thermal imaging hot-spot inspection, inverter health checks, and rapid response breakdown repairs.',
    category: 'maintenance',
    icon: 'Wrench',
    features: [
      'Automated / Semi-automated demineralized water module washing',
      'Drone thermal infrared imaging for micro-crack & hot-spot detection',
      'SCADA string monitoring with predictive error alerts',
      'Guaranteed SLA breakdown turnaround within 24 hours'
    ],
    specs: {
      'Service Coverage': '24x7 Monitoring, Quarterly Audit, Annual Preventive Maintenance',
      'Uptime SLA': '99%+ Plant Uptime Guarantee'
    },
    suitableFor: 'Existing Solar Plant Owners, Commercial Buildings, Industrial Units, Utility Farms',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'solar-consultancy-netmetering',
    title: 'Solar Consultancy & Discom Liaison',
    shortDesc: 'DPR preparation, PVsyst yield simulations, net metering documentation, and government approvals.',
    fullDesc: 'Navigating regulatory discom approvals and government subsidies can be complex. Satchel Powertech offers end-to-end consultancy for net metering approvals in UP (UPPCL / UP NEDA), Delhi (BSES / TPDDL), Haryana (DHBVN), and Rajasthan (JVVNL).',
    category: 'consultancy',
    icon: 'FileText',
    features: [
      'Detailed Project Report (DPR) & financial IRR analysis',
      'PVsyst 3D shading & energy generation simulation',
      'Net metering application, meter testing & grid synchronization approval',
      'CEIG electrical safety clearance for plants > 100 kW'
    ],
    specs: {
      'Discoms Supported': 'UPPCL, UP NEDA, BSES Rajdhani/Yamuna, TPDDL, DHBVN, UHBVN, JVVNL',
      'Turnaround': 'Expedited clearance within standard discom timelines'
    },
    suitableFor: 'Commercial Establishments, Industrial Units, Developers, Architects & Consultants',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'electrical-infrastructure',
    title: 'Electrical Infrastructure & Substation',
    shortDesc: 'HT/LT switchgear panels, step-up transformers, cable laying, and earthing infrastructure.',
    fullDesc: 'A reliable solar plant requires robust electrical backbone engineering. Satchel Powertech builds complete ACDB/DCDB protection panels, outdoor transformers, HT metering yards, lightning protection, and chemical earthing pits.',
    category: 'utility',
    icon: 'Zap',
    features: [
      'Custom ACDB, DCDB & AJB junction box manufacturing',
      '11kV / 33kV Step-up oil & dry-type transformer installations',
      'Copper / GI chemical earthing with grid resistance < 1 Ohm',
      'Early Streamer Emission (ESE) lightning arrestors'
    ],
    specs: {
      'Standards': 'IS / IEC Compliant Electrical Switchgear',
      'Testing': 'Megger, Insulation, Relay & HT Hi-Pot Testing'
    },
    suitableFor: 'Solar Plants, Factories, Substation Upgrades, Heavy Electrical Projects',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
  }
];
