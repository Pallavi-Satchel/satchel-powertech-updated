import { LeadSubmission } from '../types';

const LEADS_STORAGE_KEY = 'satchel_powertech_leads_v1';

const INITIAL_MOCK_LEADS: LeadSubmission[] = [
  {
    id: 'lead-101',
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    name: 'Anand Tyagi',
    email: 'anand.tyagi@oomschem.com',
    phone: '+91 98971 12345',
    city: 'Amroha',
    state: 'Uttar Pradesh',
    serviceInterest: 'Commercial & Industrial Solar',
    propertyType: 'Industrial',
    monthlyBill: '₹2,50,000',
    roofAreaSqFt: '25,000',
    message: 'Interested in 150 kW shed rooftop solar with net metering for polymer unit.',
    source: 'Website Inquiry Form',
    status: 'New'
  },
  {
    id: 'lead-102',
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    name: 'Dr. Vivek Saxena',
    email: 'viveksaxena@gmail.com',
    phone: '+91 98101 54321',
    city: 'Noida',
    state: 'Uttar Pradesh',
    serviceInterest: 'Residential Rooftop Solar',
    propertyType: 'Residential',
    monthlyBill: '₹14,500',
    roofAreaSqFt: '1,200',
    message: 'Want to apply for PM Surya Ghar subsidy for 5 kW rooftop solar in Sector 50.',
    source: 'Solar ROI Calculator',
    status: 'Contacted'
  },
  {
    id: 'lead-103',
    createdAt: new Date(Date.now() - 86400000 * 8).toISOString(),
    name: 'Suresh Kumar',
    email: 'skumar@graminpower.in',
    phone: '+91 94120 88900',
    city: 'Moradabad',
    state: 'Uttar Pradesh',
    serviceInterest: 'PM Kusum Projects',
    propertyType: 'Government / Agricultural',
    monthlyBill: '₹4,00,000',
    roofAreaSqFt: '12 Acres',
    message: 'Looking for EPC partner for 2 MW Kusum Component A ground project.',
    source: 'Download Gate (Company Profile)',
    status: 'Proposal Sent'
  }
];

export function getStoredLeads(): LeadSubmission[] {
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(INITIAL_MOCK_LEADS));
      return INITIAL_MOCK_LEADS;
    }
    return JSON.parse(raw);
  } catch (err) {
    console.error('Failed to parse stored leads:', err);
    return INITIAL_MOCK_LEADS;
  }
}

export function saveLead(leadData: Omit<LeadSubmission, 'id' | 'createdAt' | 'status'>): LeadSubmission {
  const currentLeads = getStoredLeads();
  const newLead: LeadSubmission = {
    ...leadData,
    id: `lead-${Date.now().toString().slice(-6)}`,
    createdAt: new Date().toISOString(),
    status: 'New'
  };
  const updated = [newLead, ...currentLeads];
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error saving lead:', err);
  }
  return newLead;
}

export function updateLeadStatus(id: string, status: LeadSubmission['status']): void {
  const currentLeads = getStoredLeads();
  const updated = currentLeads.map(l => l.id === id ? { ...l, status } : l);
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error updating lead status:', err);
  }
}

export function deleteLead(id: string): void {
  const currentLeads = getStoredLeads();
  const updated = currentLeads.filter(l => l.id !== id);
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Error deleting lead:', err);
  }
}
