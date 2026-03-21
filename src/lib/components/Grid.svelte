<script lang="ts">
	interface Props {
		children?: any;
		cols?: 1 | 2 | 3 | 4 | 6 | 12;
		gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
		responsive?: boolean;
		style?: 'default' | 'masonry' | 'bordered';
		class?: string;
	}

	let {
		children,
		cols = 3,
		gap = 'md',
		responsive = true,
		style = 'default',
		class: className = ''
	}: Props = $props();

	// Column configurations
	const colClasses = responsive
		? {
				1: 'grid-cols-1',
				2: 'grid-cols-1 md:grid-cols-2',
				3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
				4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
				6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
				12: 'grid-cols-4 md:grid-cols-6 lg:grid-cols-12'
			}
		: {
				1: 'grid-cols-1',
				2: 'grid-cols-2',
				3: 'grid-cols-3',
				4: 'grid-cols-4',
				6: 'grid-cols-6',
				12: 'grid-cols-12'
			};

	const gapClasses = {
		none: 'gap-0',
		sm: 'gap-4',
		md: 'gap-6 md:gap-8',
		lg: 'gap-8 md:gap-12',
		xl: 'gap-12 md:gap-16'
	};

	const styleClasses = {
		default: '',
		masonry: 'auto-rows-auto',
		bordered: 'gap-px bg-gray-200 dark:bg-gray-800'
	};
</script>

<div class="grid-wrapper {className}">
	<div class="grid {colClasses[cols]} {gapClasses[gap]} {styleClasses[style]}">
		{@render children?.()}
	</div>
</div>

<style>
	.grid-wrapper {
		width: 100%;
	}

	/* Masonry-style layout support */
	.grid.auto-rows-auto {
		grid-auto-rows: auto;
	}

	/* Bordered grid cells */
	:global(.grid.gap-px > *) {
		background: white;
	}

	:global(.dark .grid.gap-px > *) {
		background: black;
	}
</style>
