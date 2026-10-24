import { JobOpening } from '../types';

export const JOB_OPENINGS: JobOpening[] = [
  {
    id: 'j-solar-design-engineer',
    title: 'Senior Solar Design Engineer (PVsyst & AutoCAD)',
    department: 'Engineering & Design',
    location: 'Noida Corporate Office (Sector 132, Logix Technova)',
    experience: '3 - 5 Years',
    type: 'Full-time',
    description: 'We are hiring a skilled Solar Design Engineer to create 3D shading analysis, PVsyst energy yield reports, electrical single line diagrams (SLD), and structural layouts for industrial and utility solar plants.',
    responsibilities: [
      'Prepare detailed engineering drawings (SLD, Cable Schedules, Roof Layouts) in AutoCAD',
      'Conduct 3D shadow analysis using PVsyst, Helioscope, and SketchUp',
      'Select and size solar PV modules, Hitachi inverters, DCDB/ACDB, and cables',
      'Liaise with site project managers and discom technical inspectors'
    ],
    requirements: [
      'B.Tech / Diploma in Electrical / Renewable Energy Engineering',
      'Hands-on mastery of PVsyst, AutoCAD, and Excel financial modeling',
      'Prior experience in commercial or PM Kusum solar plant design'
    ]
  },
  {
    id: 'j-site-project-manager',
    title: 'Site Project Manager - Utility & C&I Solar',
    department: 'Project Execution',
    location: 'Site Deputations (UP / Rajasthan / NCR)',
    experience: '4 - 7 Years',
    type: 'Full-time',
    description: 'Looking for a dynamic Project Manager to lead site construction, piling, structure erection, cable trenching, transformer testing, and commissioning for MW scale solar projects.',
    responsibilities: [
      'Supervise civil, mechanical, and electrical site teams for timely project handover',
      'Maintain strict Quality Assurance (QA) and Safety (HSE) standards on site',
      'Manage material logistics, vendor deliveries, and discom inspection coordination',
      'Submit daily progress reports (DPR) to head office'
    ],
    requirements: [
      'Degree / Diploma in Civil or Electrical Engineering',
      'Proven track record of managing at least 2 MW+ solar plant commissioning',
      'Willingness to travel across North India site locations'
    ]
  },
  {
    id: 'j-b2b-sales-manager',
    title: 'Assistant Manager - B2B Solar Sales (Industrial)',
    department: 'Business Development',
    location: 'Noida / Delhi NCR',
    experience: '2 - 5 Years',
    type: 'Full-time',
    description: 'Responsible for driving industrial and commercial solar EPC sales across manufacturing hubs in UP, Haryana, and NCR.',
    responsibilities: [
      'Identify industrial power consumers, cold storages, and factory owners',
      'Present ROI & financial payback proposals including Accelerated Depreciation',
      'Lead negotiations and close turnkey EPC contracts',
      'Maintain strong relationships with regional industrial trade associations'
    ],
    requirements: [
      'B.Tech / MBA with renewable energy / industrial equipment sales experience',
      'Strong communication skills and deep understanding of discom tariffs in North India',
      'Valid driving license and local network in NCR industrial clusters'
    ]
  }
];
