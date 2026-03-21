<script lang="ts">
	interface Props {
		children?: any;
		padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
		border?: 'none' | 'top' | 'bottom' | 'both';
		background?: 'default' | 'inverted' | 'gray';
		fullWidth?: boolean;
		class?: string;
	}

	let {
		children,
		padding = 'md',
		border = 'none',
		background = 'default',
		fullWidth = false,
		class: className = ''
	}: Props = $props();

	const paddingClasses = {
		none: 'py-0',
		sm: 'py-8 md:py-12',
		md: 'py-12 md:py-16 lg:py-20',
		lg: 'py-16 md:py-24 lg:py-32',
		xl: 'py-24 md:py-32 lg:py-40'
	};

	const borderClasses = {
		none: '',
		top: 'border-t border-gray-200 dark:border-gray-800',
		bottom: 'border-b border-gray-200 dark:border-gray-800',
		both: 'border-y border-gray-200 dark:border-gray-800'
	};

	const backgroundClasses = {
		default: 'bg-white dark:bg-black',
		inverted: 'bg-black dark:bg-white text-white dark:text-black',
		gray: 'bg-gray-50 dark:bg-gray-950'
	};
</script>

<section
	class="section {paddingClasses[padding]} {borderClasses[border]} {backgroundClasses[background]} {className}"
>
	{#if fullWidth}
		{@render children?.()}
	{:else}
		<div class="swiss-grid">
			{@render children?.()}
		</div>
	{/if}
</section>

<style>
	.section {
		position: relative;
		width: 100%;
	}
</style>
