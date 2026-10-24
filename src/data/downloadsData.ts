import { DownloadItem } from '../types';

export const DOWNLOADS_LIST: DownloadItem[] = [
  {
    id: 'd-company-profile',
    title: 'Satchel Powertech Corporate Profile 2026',
    category: 'Corporate',
    fileSize: '4.8 MB',
    fileType: 'PDF Document',
    description: 'Complete corporate brochure detailing 25+ MW project track record, MNRE/MSME registrations, Hitachi & Redington authorizations, and EPC capabilities.',
    iconName: 'FileText'
  },
  {
    id: 'd-hitachi-catalog',
    title: 'Hitachi Grid-Tie Solar Inverters Technical Datasheet',
    category: 'Product Catalog',
    fileSize: '3.2 MB',
    fileType: 'PDF Document',
    description: 'Detailed technical specification sheet for 3kW to 250kW Hitachi string inverters distributed by Satchel Powertech.',
    iconName: 'Zap'
  },
  {
    id: 'd-pm-surya-ghar-guide',
    title: 'PM Surya Ghar Scheme Consumer Guide & Subsidy Matrix',
    category: 'Policy Guide',
    fileSize: '1.9 MB',
    fileType: 'PDF Document',
    description: 'Step-by-step consumer checklist, document required list, and Central Govt subsidy calculator sheet for residential rooftops in UP & NCR.',
    iconName: 'HelpCircle'
  },
  {
    id: 'd-commercial-roi-brochure',
    title: 'Commercial & Industrial Solar Investment Guide',
    category: 'Corporate',
    fileSize: '2.5 MB',
    fileType: 'PDF Document',
    description: 'Financial analysis matrix, Accelerated Depreciation calculation template, and case studies of 100 kW to 2 MW industrial installations.',
    iconName: 'PieChart'
  },
  {
    id: 'd-mnre-msme-certs',
    title: 'Company Certifications & Empanelment Credentials',
    category: 'Certificates',
    fileSize: '1.4 MB',
    fileType: 'PDF Document',
    description: 'Copies of MNRE empanelment letter, MSME Registration certificate, GST & ISO compliance documents.',
    iconName: 'ShieldCheck'
  }
];
