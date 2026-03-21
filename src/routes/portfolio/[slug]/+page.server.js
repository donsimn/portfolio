import { getPortfolioProject } from '$lib/data/content.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const project = getPortfolioProject(params.slug);

	if (!project) {
		throw error(404, 'Project not found');
	}

	return {
		project
	};
}
