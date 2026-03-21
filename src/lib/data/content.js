/**
 * Metadata Registry for Blog Posts and Portfolio Projects
 * Central source of truth for all content metadata
 */

/**
 * Blog Posts Registry
 * @type {Array<{slug: string, title: string, date: string, description: string, thumbnail?: string, tags?: string[]}>}
 */
export const blogPosts = [
  {
    slug: 'swiss-design-principles',
    title: 'The Timeless Beauty of Swiss Design Principles',
    date: '2026.03.15',
    description:
      'Exploring how Swiss design methodology influences modern digital interfaces through grid systems, typography, and minimalism.',
    thumbnail: '/images/blog/swiss-design.jpg',
    tags: ['Design', 'Typography', 'Minimalism']
  },
  {
    slug: 'building-with-sveltekit',
    title: 'Building Modern Web Apps with SvelteKit',
    date: '2026.02.28',
    description:
      'A deep dive into SvelteKit architecture, server-side rendering, and why it\'s becoming the framework of choice for performance-conscious developers.',
    thumbnail: '/images/blog/sveltekit.jpg',
    tags: ['Development', 'SvelteKit', 'JavaScript']
  },
  {
    slug: 'typography-hierarchy',
    title: 'Creating Visual Hierarchy with Typography',
    date: '2026.02.10',
    description:
      'Understanding how type scale, weight, and spacing create clear information hierarchies in digital design.',
    thumbnail: '/images/blog/typography.jpg',
    tags: ['Typography', 'Design', 'Theory']
  },
  {
    slug: 'dark-mode-design',
    title: 'Designing for Dark Mode',
    date: '2026.01.22',
    description:
      'Best practices for implementing dark mode in web applications while maintaining accessibility and visual consistency.',
    thumbnail: '/images/blog/dark-mode.jpg',
    tags: ['Design', 'Accessibility', 'UI']
  },
  {
    slug: 'grid-systems',
    title: 'Mastering Grid Systems in Web Design',
    date: '2026.01.05',
    description:
      'How to leverage CSS Grid and mathematical precision to create harmonious, responsive layouts.',
    thumbnail: '/images/blog/grid-systems.jpg',
    tags: ['CSS', 'Layout', 'Design']
  }
];

/**
 * Portfolio Projects Registry
 * @type {Array<{slug: string, title: string, date: string, description: string, thumbnail?: string, tags?: string[], client?: string, year?: string}>}
 */
export const portfolioProjects = [
  {
    slug: 'techcorp-rebrand',
    title: 'TechCorp Brand Identity Redesign',
    date: '2026.03.01',
    description:
      'Complete brand overhaul for a Silicon Valley tech startup, including logo design, brand guidelines, and digital presence.',
    thumbnail: '/images/portfolio/techcorp.jpg',
    tags: ['Branding', 'Identity', 'Web Design'],
    client: 'TechCorp Inc.',
    year: '2026'
  },
  {
    slug: 'ecommerce-platform',
    title: 'E-Commerce Platform Redesign',
    date: '2026.02.15',
    description:
      'UX/UI redesign of a major e-commerce platform, focusing on conversion optimization and mobile-first experiences.',
    thumbnail: '/images/portfolio/ecommerce.jpg',
    tags: ['UX/UI', 'E-Commerce', 'Mobile'],
    client: 'ShopFlow',
    year: '2026'
  },
  {
    slug: 'fintech-dashboard',
    title: 'FinTech Analytics Dashboard',
    date: '2026.01.20',
    description:
      'Data visualization and dashboard design for a financial technology platform serving enterprise clients.',
    thumbnail: '/images/portfolio/fintech.jpg',
    tags: ['Dashboard', 'Data Viz', 'SaaS'],
    client: 'FinanceFlow',
    year: '2026'
  },
  {
    slug: 'mobile-app-design',
    title: 'Health & Fitness Mobile App',
    date: '2025.12.10',
    description:
      'Native mobile app design system and user experience for a health tracking application.',
    thumbnail: '/images/portfolio/fitness-app.jpg',
    tags: ['Mobile', 'Design System', 'Health'],
    client: 'FitTrack',
    year: '2025'
  },
  {
    slug: 'saas-marketing-site',
    title: 'SaaS Marketing Website',
    date: '2025.11.05',
    description:
      'Marketing website design and development for a B2B SaaS platform, with focus on conversion and storytelling.',
    thumbnail: '/images/portfolio/saas-site.jpg',
    tags: ['Web Design', 'Marketing', 'Development'],
    client: 'CloudBase',
    year: '2025'
  },
  {
    slug: 'design-system',
    title: 'Enterprise Design System',
    date: '2025.10.18',
    description:
      'Comprehensive design system built for a Fortune 500 company, including component library and documentation.',
    thumbnail: '/images/portfolio/design-system.jpg',
    tags: ['Design System', 'Components', 'Enterprise'],
    client: 'MegaCorp',
    year: '2025'
  }
];

/**
 * Get blog post by slug
 * @param {string} slug
 * @returns {object|null}
 */
export function getBlogPost(slug) {
  return blogPosts.find((post) => post.slug === slug) || null;
}

/**
 * Get portfolio project by slug
 * @param {string} slug
 * @returns {object|null}
 */
export function getPortfolioProject(slug) {
  return portfolioProjects.find((project) => project.slug === slug) || null;
}

/**
 * Get all blog posts sorted by date (newest first)
 * @returns {Array}
 */
export function getAllBlogPosts() {
  return [...blogPosts].sort((a, b) => {
    const dateA = new Date(a.date.replace(/\./g, '-'));
    const dateB = new Date(b.date.replace(/\./g, '-'));
    return dateB - dateA;
  });
}

/**
 * Get all portfolio projects sorted by date (newest first)
 * @returns {Array}
 */
export function getAllPortfolioProjects() {
  return [...portfolioProjects].sort((a, b) => {
    const dateA = new Date(a.date.replace(/\./g, '-'));
    const dateB = new Date(b.date.replace(/\./g, '-'));
    return dateB - dateA;
  });
}
