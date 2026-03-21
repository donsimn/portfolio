import { getAllPortfolioProjects, getAllBlogPosts } from '$lib/data/content.js';

/** @type {import('./$types').PageServerLoad} */
export function load() {
	const projects = getAllPortfolioProjects().slice(0, 3); // Get top 3 projects
	const posts = getAllBlogPosts().slice(0, 3); // Get top 3 blog posts

	return {
		projects,
		posts
	};
}
