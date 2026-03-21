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
    slug: 'demystifying-buffer-overflows',
    title: 'Demystifying Buffer Overflows',
    date: '2026.03.21',
    description:
      'A technical breakdown of stack-based buffer overflow vulnerabilities, their exploitation mechanics, and modern mitigation strategies.',
    thumbnail: '/images/blog/buffer-overflow.jpg',
    tags: ['Security', 'Exploitation', 'Systems']
  },
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
    slug: 'brgos',
    title: 'Vex V5 Robotics OS',
    date: 'Nov 2024 - Mar 2025',
    description:
      'BRGOS is the operating system I developed for our Vex V5 team Big Red Gears\' robot, which competed twice at the Swiss National Robotics Competition.',
    thumbnail: '/images/BRGOS4.jpeg',
    tags: ['Robotics', 'C++', 'Colaboration'],
    client: 'Team Big Red Gears',
    year: '2024'
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
