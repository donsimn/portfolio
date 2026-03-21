<script lang="ts">
	interface Props {
		children?: any;
		title?: string;
		inverted?: boolean;
		size?: 'sm' | 'md' | 'lg';
		class?: string;
	}

	let { children, title, inverted = true, size = 'md', class: className = '' }: Props = $props();

	const sizeClasses = {
		sm: 'p-4 text-xs',
		md: 'p-6 text-xs',
		lg: 'p-8 text-sm'
	};

	const colorClasses = inverted
		? 'bg-black dark:bg-white text-white dark:text-black'
		: 'bg-white dark:bg-black text-black dark:text-white border-2 border-black dark:border-white';
</script>

<div class="info-box font-mono {sizeClasses[size]} {colorClasses} {className}">
	{#if title}
		<div class="mb-4 uppercase tracking-wider opacity-60">{title}</div>
	{/if}
	<div class="info-box-content">
		{@render children?.()}
	</div>
</div>

<style>
	.info-box-content {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.info-box-content :global(> *) {
		margin: 0;
	}
</style>
