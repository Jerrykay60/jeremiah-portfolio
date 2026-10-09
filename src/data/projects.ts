export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack SaaS' | 'Web Applications' | 'AI & APIs';
  description: string;
  fullDetails: string;
  features: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  status: 'Active SaaS' | 'Live in Production';
  accentColor: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 'rent-tracker',
    title: 'Rent Tracker',
    subtitle: 'Full-Stack Property Management SaaS',
    category: 'Full-Stack SaaS',
    description:
      'Full-stack property management SaaS helping Nigerian landlords and property managers track units, tenants, rent schedules, and payment arrears.',
    fullDetails:
      'Architected as a modern end-to-end multi-tenant platform. Eliminates manual spreadsheets by delivering real-time tenant ledger tracking, automated overdue alerts, payment verification, and audit logs.',
    features: [
      'Custom authentication with secure HTTP-only cookies and role-based access control',
      'Dynamic tenant onboarding, unit assignment, and rent schedule generation',
      'Arrears calculator with automated notification tracking',
      'Relational data persistence powered by Prisma ORM and SQLite',
      'Fluid interactive dashboard crafted with Framer Motion and Tailwind CSS',
    ],
    techStack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Postgresql',
      'Tailwind CSS v4',
      'Prisma',
      'SQLite',
      'Paystack',
      'Custom Auth (HTTP-only Cookies)',
      'Framer Motion',
    ],
    status: 'Active SaaS',
    accentColor: 'from-blue-600/20 to-indigo-600/10',
    featured: true,
  },
  {
    id: 'propnest',
    title: 'PropNest',
    subtitle: 'Full-Stack Property Marketplace',
    category: 'Web Applications',
    description:
      'Nigerian property marketplace connecting real estate seekers with verified property owners and certified agents for rentals and sales.',
    fullDetails:
      'Designed and deployed to address trust and discoverability deficits in the local housing sector. Features instant property search, multi-filter criteria (location, pricing, property type), direct agent inquiries, and a responsive listing portal.',
    features: [
      'Real-time property catalog synchronized via Cloud Firestore',
      'Multi-parameter search and localized filtering engine',
      'Direct messaging channel connecting prospective tenants with vetted agents',
      'Image optimization and responsive mobile-first UI',
      'Continuous deployment pipeline hosted on Netlify',
    ],
    techStack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Tailwind CSS',
      'Firebase / Firestore',
      'Netlify',
    ],
    liveUrl: 'https://propnests.org',
    githubUrl: 'https://github.com/Jerrykay60/PropNest',
    status: 'Live in Production',
    accentColor: 'from-emerald-600/20 to-teal-600/10',
    featured: true,
  },
  {
    id: 'smartbite',
    title: 'SmartBite',
    subtitle: 'Smart Food Suggestion System',
    category: 'AI & APIs',
    description:
      'Intelligent meal recommendation engine that crafts customized culinary suggestions based on budget constraints, health targets, and dietary preferences.',
    fullDetails:
      'Built to help university students and busy urban professionals make healthier, cost-efficient eating choices. Evaluates user budget profiles and nutritional restrictions to query recipe repositories and provide actionable meal preparations.',
    features: [
      'Dynamic rule-based recommendation logic adapting to ingredient availability and budget tiers',
      'Integration with public culinary recipe APIs for real-time nutritional breakdown',
      'User preference profiling and favorite meal bookmarking backed by Firebase',
      'Interactive filtering for vegetarian, high-protein, quick-cook, and low-cost diets',
    ],
    techStack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Tailwind CSS',
      'Firebase',
      'Public Recipe API',
    ],
    liveUrl: 'https://smaartbite.netlify.app',
    githubUrl: 'https://github.com/Jerrykay60/smartfoodsuggestion',
    status: 'Live in Production',
    accentColor: 'from-amber-600/20 to-orange-600/10',
    featured: true,
  },
  {
    id: 'campusfund',
    title: 'CampusFund',
    subtitle: 'Student Fundraising Platform',
    category: 'Web Applications',
    description:
      'Student crowdfunding and micro-grant platform enabling undergraduates to launch verified academic campaigns and receive transparent bank-transfer donations.',
    fullDetails:
      'Conceived and engineered to assist university students facing sudden tuition shortfalls, project expenses, or medical emergencies through community micro-giving and verified accountability.',
    features: [
      'Campaign creation workflow with student ID and credential verification steps',
      'Transparent progress indicators displaying funding targets versus receipts',
      'Direct bank-transfer payment routing with zero predatory platform cuts',
      'Real-time campaign ledger powered by Cloud Firestore',
      'Lightweight, accessible interface optimized for low-bandwidth mobile networks',
    ],
    techStack: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Tailwind CSS',
      'Firebase',
      'Netlify',
    ],
    liveUrl: 'https://campusfund.netlify.app',
    status: 'Live in Production',
    accentColor: 'from-purple-600/20 to-pink-600/10',
    featured: true,
  },
];
