
import { Achievement, ExperienceItem, Testimonial, Service } from './types';

export const ACHIEVEMENTS: Achievement[] = [
  { id: 1, icon: 'fa-euro-sign', title: '€700k+ Total Cost Savings', description: 'Aggregated across license optimization, automation initiatives, and process efficiency improvements.' },
  { id: 2, icon: 'fa-code-branch', title: '50% API Reduction', description: 'Currently leading E-form optimization at S.W.I.F.T. to consolidate endpoints and reduce maintenance.' },
  { id: 3, icon: 'fa-bolt', title: '15-20% Efficiency Gains', description: 'Consistently delivered through workflow automation, lead time reduction, and process redesign.' },
  { id: 4, icon: 'fa-user-clock', title: '15+ FTE Equivalent Savings', description: 'Through strategic automation of ticket quality checks, invoicing processes, and field services.' },
  { id: 5, icon: 'fa-chart-pie', title: '50% Incident Volume Reduction', description: 'Achieved through strategic process redesign for hung-line check cases at British Telecom.' },
  { id: 6, icon: 'fa-users-cog', title: '21% Adoption Rate Increase', description: 'Drove PEGA workflow adoption from 14% to 35% through targeted user engagement strategies.' },
];

export const EXPERIENCE: ExperienceItem[] = [
  { id: 1, date: '2025 – Present', title: 'Functional Lead — E-form Optimization', company: 'S.W.I.F.T. | Belgium (Remote)', description: 'Leading team of specialists driving E-form optimization and API consolidation in transformation program.' },
  { id: 2, date: '2024 – 2025', title: 'Senior Order Fulfilment BA', company: 'S.W.I.F.T. | Belgium (Remote)', description: 'Optimized order processing workflows. 20% productivity improvement via SAP S/4HANA to PEGA migration.' },
  { id: 3, date: '2024 – Present', title: 'Founder & Process Expert', company: 'InnovateIT Consulting | Remote', description: 'Strategic process optimization consulting using Six Sigma, Lean & Agile methodologies for global clients.' },
  { id: 4, date: '2022 – 2024', title: 'Principal Business Operations', company: 'NTT Ltd. | Remote', description: 'Led Opp2Cash value stream standardization. €500k+ license savings. 10+ transformation projects delivered.' },
  { id: 5, date: '2015 – 2022', title: 'Agile Deployment Lead', company: 'British Telecom | Hungary', description: '7 years of progressive growth. $100k+ automation savings. 50% incident reduction.' },
];

export const SERVICES: Service[] = [
  { id: '01', title: 'Process Optimization', description: 'Unlock savings and drive long-term growth through systematic improvement.' },
  { id: '02', title: 'Process Ownership', description: 'Design, document, and implement efficient processes with full ownership.' },
  { id: '03', title: 'Agile Business Analysis', description: 'Evaluate processes, align stakeholders, and deliver strategic analytics.' },
  { id: '04', title: 'Process Evaluation', description: 'Comprehensive assessment identifying issues, risks, and benefits.' },
  { id: '05', title: 'Performance Reporting', description: 'Define KPIs and build measurement systems that drive accountability.' },
  { id: '06', title: 'Requirements Management', description: 'Bridge business stakeholders and technical teams with clarity.' },
  { id: '07', title: 'Testing & Feedback', description: 'Facilitate user testing sessions and provide actionable insights.' },
  { id: '08', title: 'Change Management', description: 'Guide organizational transitions with proven strategies.' },
  { id: '09', title: 'Strategic Process Design', description: 'Enhance efficiency and drive business success through redesign.' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 1, initials: 'MH', author: 'Miquel Herrero', role: 'VP Global Standards, NTT', text: 'Relentlessly progressing against all odds on complex projects requiring coordination across departments.' },
  { id: 2, initials: 'MS', author: 'Mark Shepherd', role: 'Director, NTT', text: 'Crucial during immense organizational change. Dedicated professional with clever techniques for process management.' },
  { id: 3, initials: 'JS', author: 'Justin Strohmenger', role: 'Principal Architect', text: 'Energetic, positive, excellent BA and PM. Clear professional communication and a natural problem solver.' },
];
