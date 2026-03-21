import { getAllBlogPosts } from '$lib/data/content.js';

/** @type {import('./$types').PageServerLoad} */
export function load() {
	const posts = getAllBlogPosts();

	return {
		posts
	};
}
