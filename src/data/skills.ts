export interface SkillCategory {
  title: string;
  description: string;
  icon: string;
  skills: {
    name: string;
    level?: string;
    badge?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend Engineering',
    description:
      'Building responsive, accessible, pixel-perfect user interfaces with modern frameworks and type-safety.',
    icon: 'Layout',
    skills: [
      { name: 'React', badge: 'Advanced' },
      { name: 'Next.js', badge: 'Advanced' },
      { name: 'TypeScript', badge: 'Proficient' },
      { name: 'JavaScript (ES6+)', badge: 'Advanced' },
      { name: 'Tailwind CSS', badge: 'Advanced' },
      { name: 'HTML5', badge: 'Expert' },
      { name: 'CSS3', badge: 'Expert' },
    ],
  },
  {
    title: 'Backend Development',
    description:
      'Architecting RESTful endpoints, auth flows, business logic, and modular server services.',
    icon: 'Server',
    skills: [
      { name: 'Node.js', badge: 'Advanced' },
      { name: 'Express.js', badge: 'Advanced' },
      { name: 'REST APIs', badge: 'Advanced' },
      { name: 'Python', badge: 'Learning / Growing' },
    ],
  },
  {
    title: 'Database & Storage',
    description:
      'Designing relational schemas, NoSQL document collections, and performant data queries.',
    icon: 'Database',
    skills: [
      { name: 'Firebase / Firestore', badge: 'Advanced' },
      { name: 'PostgreSQL', badge: 'Advanced' },
      { name: 'Prisma ORM', badge: 'Advanced' },
      { name: 'SQL', badge: 'Advanced' },
    ],
  },
  {
    title: 'Artificial Intelligence & ML',
    description:
      'Exploring machine learning algorithms, statistical data analysis, and predictive model training.',
    icon: 'Brain',
    skills: [
      { name: 'Python', badge: 'Active Practice' },
      { name: 'NumPy', badge: 'Data Processing' },
      { name: 'Pandas', badge: 'Data Analysis' },
      { name: 'Scikit-learn', badge: 'Model Training' },
    ],
  },
  {
    title: 'Tools & Deployment',
    description:
      'Version control, API exploration, testing environments, and cloud hosting infrastructure.',
    icon: 'Wrench',
    skills: [
      { name: 'Git / GitHub', badge: 'Daily Driver' },
      { name: 'Netlify', badge: 'CI/CD' },
      { name: 'VS Code', badge: 'Environment' },
      { name: 'Postman', badge: 'API Testing' },
      { name: 'Figma', badge: 'UI / Wireframes' },
    ],
  },
];

export const experienceData = [
  {
    role: 'Software Developer',
    company: 'Lisa Technologies Ltd',
    location: 'Lagos, Nigeria',
    period: 'Dec 2025 – Present',
    type: 'Current Role',
    description: [
      'Direct technical operations, internal tooling workflows, and system infrastructure to support company productivity.',
      'Evaluate software architectures, maintain server reliability, and guide IT best practices across cross-functional operations.',
      'Bridge hardware, network security, and custom software automation requirements for high-availability systems.',
    ],
  },
];

export const educationData = [
  {
    degree: 'B.Sc. in Computer Science',
    institution: 'Lagos State University of Education (LASUED)',
    location: 'Lagos, Nigeria',
    period: '2025 / 2026',
    description:
      'Comprehensive coursework covering data structures, algorithm design, software engineering, relational database management systems, and introductory artificial intelligence.',
  },
];
