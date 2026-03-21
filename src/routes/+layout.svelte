<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let { children } = $props();
	let darkMode = $state(false);

	// Initialize dark mode from localStorage
	onMount(() => {
		const stored = localStorage.getItem('darkMode');
		darkMode = stored === 'true';
		updateDarkMode();
	});

	function toggleDarkMode() {
		darkMode = !darkMode;
		if (browser) {
			localStorage.setItem('darkMode', String(darkMode));
			updateDarkMode();
		}
	}

	function updateDarkMode() {
		if (browser) {
			if (darkMode) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	}
</script>

<svelte:head>
	<title>Portfolio</title>
	<meta name="description" content="Swiss-style portfolio" />
</svelte:head>

<div class="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
	<!-- Dark mode toggle -->
	<button
		onclick={toggleDarkMode}
		class="fixed bottom-4 right-4 md:top-6 md:bottom-auto md:right-6 z-50 w-10 h-10 md:w-12 md:h-12 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-900 hover:border-gray-400 dark:hover:border-gray-600 transition-colors duration-200"
		aria-label="Toggle dark mode"
	>
		<span class="text-lg md:text-xl">{darkMode ? '☀' : '☾'}</span>
	</button>

	<!-- Navigation -->
	<Navigation />

	<!-- Main content -->
	{@render children()}
</div>
