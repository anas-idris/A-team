import type { SocialLink, WorkProject, SelfProject, ProductProject, ContactInfo } from '../types';

export const socialLinks: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/anas-idris/', icon: 'linkedin' },
];

export const skills = [
  'CSM', 'SAFe Agile 6.0', 'Agile/Scrum', 'Jira', 'Confluence',
  'MS Project', 'Service Now', 'Risk Management', 'Stakeholder Management',
  'SDLC', 'AI Driven Development',
];

export const aboutMe = {
  intro: 'Anas Idris',
  role: 'Project/Product Manager',
  summary: 'Project/Product Manager with 10+ years leading cross-functional teams to deliver complex software projects on time and under budget. Certified Scrum Master and SAFe Agile 6.0 practitioner specializing in Agile, Scrum, and hybrid methodologies.',
  whoIAm: "I've always loved the challenge of turning a vague idea into a clear, working strategy. Coming from an IT background, I've spent my time navigating digital transformations and system implementations, which taught me how to get business stakeholders and technical teams on the same page. I believe the best way to sharpen these skills isn't just by watching tutorials; it's by rolling up my sleeves and building projects designed for actual, real-world scenarios.",
  whatIBring: [
    'Proven track record of delivering complex, multi-phase projects',
    '95%+ on-time delivery rate across all projects',
    'Experience leading teams of 15+ members',
    'Expertise in Agile, Scrum, and hybrid methodologies',
    'Championing AI-driven development practices that enhance productivity, innovation, and product quality',
  ],
};

export const quickLinks = [
  {
    href: '/work-projects',
    title: 'Work Projects',
    description: 'Explore my professional project portfolio including enterprise solutions and digital transformations.',
  },
  {
    href: '/self-projects',
    title: 'Self Projects',
    description: 'Discover personal projects and applications I\'ve built from concept to deployment.',
  },
  {
    href: '/contact',
    title: 'Get In Touch',
    description: 'Have a project in mind? Let\'s discuss how I can help bring your vision to life.',
  },
];

export const workProjects: WorkProject[] = [
  {
    title: 'Accor',
    description: 'Led digital transformation initiatives for one of the world\'s largest hospitality groups, enhancing guest experience platforms and loyalty program infrastructure across multiple properties and regions.',
    category: 'Hospitality Tech',
    year: '2023',
    tags: ['Hospitality', 'Digital Transformation', 'Enterprise'],
    link: 'https://all.accor.com/a/en.html',
  },
  {
    title: 'Vijay Sales',
    description: 'Managed end-to-end e-commerce platform development for India\'s leading consumer electronics retailer, driving online sales growth and integrating omnichannel shopping experiences.',
    category: 'E-Commerce',
    year: '2023',
    tags: ['E-Commerce', 'Retail', 'Omnichannel'],
    link: 'https://www.vijaysales.com/',
  },
  {
    title: 'Wizcare',
    description: 'Wizvalue is a factory-to-consumer (F2C) e-commerce platform by Cossmic Products that delivers premium, FDA-approved personal care, hygiene, and household cleaning essentials directly to consumers. Operating as a "House of Brands," it consolidates value-driven labels like WiZ Care, Kara, ThinkSkin, and Wiz Cleen to provide affordable, high-quality products at direct-from-factory prices.',
    category: 'Healthcare',
    year: '2022',
    tags: ['Healthcare', 'E-Commerce', 'F2C', 'D2C'],
    link: 'https://www.wizvalue.com/',
  },
  {
    title: 'Track and Trace',
    description: 'Coordinated implementation of pharmaceutical track and trace system for Roche, ensuring regulatory compliance, supply chain visibility, and patient safety across distribution networks.',
    category: 'Life Sciences',
    year: '2022',
    tags: ['Life Sciences', 'Supply Chain', 'Regulatory'],
    link: 'https://trackandtrace.roche.com/',
  },
  {
    title: 'Agent Jacks Bar Mobile App',
    description: 'Delivered a mobile ordering and engagement application for Agent Jacks Bar, enabling seamless drink ordering, table management, and personalized customer experiences.',
    category: 'Mobile App',
    year: '2021',
    tags: ['Mobile', 'F&B', 'Customer Engagement'],
    link: 'https://play.google.com/store/apps/details?id=com.aurus.agentjacksbar',
  },
  {
    title: 'Drinx Exchange',
    description: 'Designed to make you interact with drinks and music at the bar like no other bar has before, DRINX EXCHANGE is India\'s newest concept and theme bar. Besides the concept of a stock exchange in the bar, DRINX EXCHANGE allows you to interact with smart devices and virtual reality where you can see the latest prices of drinks, market crash announcements, special offers and much more.',
    category: 'Mobile App',
    year: '2021',
    tags: ['Mobile', 'Bar Tech', 'VR', 'Gamification'],
    link: 'https://play.google.com/store/apps/details?id=com.drinx.app',
  },
  {
    title: 'Westbridge',
    description: 'Led digital platform development for The Westbridge hospitality venue, creating integrated booking systems, event management tools, and customer-facing digital experiences.',
    category: 'Hospitality',
    year: '2020',
    tags: ['Hospitality', 'Events', 'Digital Platform'],
    link: 'https://www.thewestbridge.com/',
  },
];

export const selfProjects: SelfProject[] = [
  {
    id: 'spent',
    title: 'Spent \u2014 Smart Expense Tracker',
    description: 'Track your expenses intelligently with SMS capture, bill scanning, and deep insights. Built with Android Jetpack Compose for a seamless mobile experience.',
    category: 'Mobile App',
    year: '2024',
    tags: ['Android', 'Kotlin', 'Jetpack Compose', 'Android Studio'],
    link: '/self-projects/spent',
  },
];

export const spentProject: ProductProject = {
  title: 'Spent \u2014 Smart Expense Tracker',
  description: 'Track your expenses intelligently with SMS capture, bill scanning, and deep insights. Built with Android Jetpack Compose for a seamless mobile experience.',
  tagline: 'Smart Expense Tracker',
  features: [
    { icon: '\uD83D\uDCF1', title: 'Smart Tracking', description: 'Automatically track expenses through SMS and manual entry.' },
    { icon: '\uD83D\uDCF8', title: 'Bill Scanning', description: 'Scan bills and receipts for instant expense categorization.' },
    { icon: '\uD83D\uDCCA', title: 'Deep Insights', description: 'Visual analytics and spending pattern analysis.' },
    { icon: '\uD83C\uDFAD', title: 'Multi-Vendor', description: 'Support for multiple expense categories and vendors.' },
    { icon: '\uD83D\uDCC8', title: 'Trends Analysis', description: 'Track spending trends over time with interactive charts.' },
    { icon: '\uD83D\uDD12', title: 'Secure Backup', description: 'Export and import backup files to save your data locally on your device.' },
  ],
  techStack: ['Kotlin', 'Jetpack Compose', 'Room Database', 'MVVM', 'Coroutines'],
  screenshots: [
    { image: '/images/app-screenshots/list_view.png', caption: 'List View' },
    { image: '/images/app-screenshots/trends_view.png', caption: 'Trends & Insights' },
    { image: '/images/app-screenshots/add_expense.png', caption: 'Add Expense' },
    { image: '/images/app-screenshots/backup_restore.png', caption: 'Backup & Restore' },
  ],
};

export const contactInfo: ContactInfo = { email: 'anasidris@outlook.com', phone: '' };
