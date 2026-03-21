<script lang="ts">
	interface Props {
		children?: any;
		columns?: 1 | 2 | 3;
		class?: string;
	}

	let { children, columns = 2, class: className = '' }: Props = $props();

	const columnClasses = {
		1: 'grid-cols-1',
		2: 'grid-cols-1 lg:grid-cols-2',
		3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
	};
</script>

<div class="project-grid grid {columnClasses[columns]} gap-0 {className}">
	{@render children?.()}
</div>

<style>
	.project-grid {
		border-top: 2px solid;
		border-color: inherit;
	}

	.project-grid :global(> *) {
		border-bottom: 2px solid;
		border-right: 2px solid;
		border-color: inherit;
	}

	/* Remove right border on last item in row */
	@media (min-width: 1024px) {
		.project-grid.grid-cols-1.lg\:grid-cols-2 :global(> *:nth-child(2n)) {
			border-right: 0;
		}
	}

	@media (min-width: 1024px) {
		.project-grid.grid-cols-1.md\:grid-cols-2.lg\:grid-cols-3 :global(> *:nth-child(3n)) {
			border-right: 0;
		}
	}

	@media (max-width: 1023px) and (min-width: 768px) {
		.project-grid.grid-cols-1.md\:grid-cols-2.lg\:grid-cols-3 :global(> *:nth-child(2n)) {
			border-right: 0;
		}
	}
</style>
