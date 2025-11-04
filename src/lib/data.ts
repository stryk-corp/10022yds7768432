import { PlaceHolderImages } from './placeholder-images';
import type { ImagePlaceholder } from './placeholder-images';

export const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#parliament', label: 'Youth Parliament' },
  { href: '#programs', label: 'Programs' },
  { href: '#opportunities', label: 'Opportunities' },
  { href: '#media', label: 'Media' },
];

export const topNavLinks = [
    { href: '#news', label: 'News' },
    { href: '#events', label: 'Events' },
    { href: '#contact', label: 'Contact' },
];

export const stats = [
  { label: 'Youth Population (est.)', value: '1,200,000' },
  { label: 'Projects Completed', value: '128+' },
  { label: 'Staff Strength', value: '422' },
  { label: 'Registered Orgs', value: '512' },
];

export const leadership = [
  { name: 'Ezenwo Nyesom Wike', title: 'FCT Minister', imageId: 'leadership_6' },
  { name: 'FCT Minister of State', title: '—', imageId: 'leadership_7' },
  { name: 'Hon. Ango Abdullahi Suleiman', title: 'Mandate Secretary', imageId: 'leadership_1' },
  { name: 'Mrs. Nathan Nancy', title: 'Permanent Secretary', imageId: 'leadership_2' },
  { name: '—', title: 'Director of Youth', imageId: 'leadership_3' },
  { name: 'Rt. Hon. Japhet Sha\'agi Kineze', title: 'FCT Youth Speaker', imageId: 'leadership_4' },
  { name: 'Hon. Amb Esther Apkovi', title: 'Deputy Speaker', imageId: 'leadership_5' },
];

export const parliamentSpeakers = [
    { title: 'Mr. Speaker', name: "Rt. Hon. Japhet Sha'agi Kineze" },
    { title: 'Deputy Speaker', name: 'Hon. Amb Esther Apkovi' }
]

export const opportunities = [
  {
    title: 'Scholarships & Exchange',
    description: 'Academic grants and exchange programs for promising youth.',
    href: '#',
  },
  {
    title: 'Internships & Jobs',
    description: 'Curated internships, mentorship and job openings.',
    href: '#',
  },
  {
    title: 'Startup & Grants',
    description: 'Seed funding, pitch support and accelerator links.',
    href: '#',
  },
];

export const mediaItems = PlaceHolderImages.filter(img => img.id.startsWith('media_'));

export const footerLinks = [
    { href: '#about', label: 'About Secretariat' },
    { href: '#parliament', label: 'Youth Parliament' },
    { href: '#opportunities', label: 'Opportunities Hub' },
    { href: '#media', label: 'Media Center' },
];

export const getImage = (id: string): ImagePlaceholder | undefined => PlaceHolderImages.find(img => img.id === id);
