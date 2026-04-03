import { readable } from 'svelte/store';
import { browser } from '$app/environment';

const MOBILE_BREAKPOINT = 768;

export const isMobile = readable(false, (set) => {
	if (!browser) return;

	const query = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
	set(query.matches);

	const handler = (e: MediaQueryListEvent) => set(e.matches);
	query.addEventListener('change', handler);

	return () => query.removeEventListener('change', handler);
});
