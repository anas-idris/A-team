import type { WorkProject, SelfProject } from '../types';

export function getWorkProjects(): WorkProject[] {
  return [
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
}

export function getSelfProjects(): SelfProject[] {
  return [
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
}

export function getSpentProject() {
  return {
    title: 'Spent \u2014 Smart Expense Tracker',
    description: 'Track your expenses intelligently with SMS capture, bill scanning, and deep insights. Built with Android Jetpack Compose for a seamless mobile experience.',
    tagline: 'Smart Expense Tracker',
    features: [
      { icon: '\uD83D\uDCF1', title: 'Smart Tracking', description: 'Automatically track expenses through SMS and manual entry.' },
      { icon: '\uD83D\uDCF8', title: 'Bill Scanning', description: 'Scan bills and receipts for instant expense categorization.' },
      { icon: '\uD83D\uDCCA', title: 'Deep Insights', description: 'Visual analytics and spending pattern analysis.' },
      { icon: '\uD83C\uDFAD', title: 'Multi-Vendor', description: 'Support for multiple expense categories and vendors.' },
      { icon: '\uD83D\uDCC8', title: 'Trends Analysis', description: 'Track spending trends over time with interactive charts.' },
      { icon: '\uD83D\uDD12', title: 'Secure Backup', description: 'Effortlessly import and export backup files to securely store your financial data on your device.' },
    ],
    techStack: ['Kotlin', 'Jetpack Compose', 'Room Database', 'MVVM', 'Coroutines'],
    screenshots: [
      { image: '/images/app-screenshots/list_view.png', caption: 'List View' },
      { image: '/images/app-screenshots/trends_view.png', caption: 'Trends & Insights' },
      { image: '/images/app-screenshots/add_expense.png', caption: 'Add Expense' },
      { image: '/images/app-screenshots/backup_restore.png', caption: 'Backup & Restore' },
    ],
    googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.anasidris.spent',
  };
}
