import { getAllPortfolioProjects } from '$lib/data/content.js';

/** @type {import('./$types').PageServerLoad} */
export function load() {
	const projects = getAllPortfolioProjects();

	return {
		projects
	};
}
