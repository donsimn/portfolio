/**
 * Metadata Registry for Blog Posts and Portfolio Projects
 * Central source of truth for all content metadata
 */

/**
 * Blog Posts Registry
 * @type {Array<{slug: string, title: string, date: string, description: string, thumbnail?: string, tags?: string[]}>}
 */
export const blogPosts = [

];

/*
 *   {
    slug: 'demystifying-buffer-overflows',
    title: 'Demystifying Buffer Overflows',
    date: '2026.03.21',
    description:
      'A technical breakdown of stack-based buffer overflow vulnerabilities, their exploitation mechanics, and modern mitigation strategies.',
    thumbnail: '/images/blog/buffer-overflow.jpg',
    tags: ['Security', 'Exploitation', 'Systems']
  }
 * */

/**
 * Portfolio Projects Registry
 * @type {Array<{slug: string, title: string, date: string, description: string, thumbnail?: string, tags?: string[], client?: string, year?: string}>}
 */
export const portfolioProjects = [
  {
    slug: 'ai-pm-engine-mvp',
    title: 'AI-Driven Problem Management Engine MVP',
    date: 'Jul 2025',
    description: 'During my summer internship at Roche I was given the opportunity to design and code a system, that processes bulk incident data to cluster and analyze their root cause.',
    thumbnail: '',
    tags: ['Problem Management', 'Vector Database', 'Typescript'],
    client: 'Roche',
    year: '2025'
  },
  {
    slug: 'brgos',
    title: 'Vex V5 Robotics OS',
    date: 'Nov 2024 - Mar 2025',
    description:
      'BRGOS is the operating system I developed for our Vex V5 team Big Red Gears\' robot, which competed twice at the Swiss National Robotics Competition.',
    thumbnail: '/images/BRGOS4.jpeg',
    tags: ['Robotics', 'C++', 'Collaboration'],
    client: 'Team Big Red Gears',
    year: '2024'
  },
  {
    slug: 'electric-trike',
    title: 'Electric Trike',
    date: 'Nov 2023 - May 2024',
    description: 'Mechanical fixes, battery and power-system upgrades, advanced controller tuning, and a lot of late-night soldering.',
    thumbnail: '',
    tags: ['Mechanical Engineering', 'Soldering', 'Baserunner'],
    client: 'Personal Project',
    year: '2023'
  },
  {
    slug: 'fpv-drone',
    title: '5" FPV Drone',
    date: 'Mar 2025 - Apr 2026',
    description: 'What started as an experiment testing 3D-printed drone frames, quickly grew into a fully fledged 5-inch FPV drone.',
    thumbnail: '',
    tags: ['Soldering', 'Iterative Design', 'Betaflight'],
    client: 'Personal Project',
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
