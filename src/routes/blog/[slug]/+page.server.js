import { getBlogPost } from '$lib/data/content.js';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export function load({ params }) {
	const post = getBlogPost(params.slug);

	if (!post) {
		throw error(404, 'Post not found');
	}

	return {
		post
	};
}
