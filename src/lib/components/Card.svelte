<script lang="ts">
	interface Props {
		children?: any;
		variant?: 'default' | 'bordered' | 'filled' | 'inverted';
		padding?: 'none' | 'sm' | 'md' | 'lg';
		hover?: boolean;
		href?: string;
		class?: string;
	}

	let {
		children,
		variant = 'default',
		padding = 'md',
		hover = true,
		href,
		class: className = ''
	}: Props = $props();

	const variantClasses = {
		default: 'bg-white dark:bg-black',
		bordered: 'bg-white dark:bg-black border border-gray-200 dark:border-gray-800',
		filled: 'bg-gray-50 dark:bg-gray-950',
		inverted: 'bg-black dark:bg-white text-white dark:text-black'
	};

	const paddingClasses = {
		none: 'p-0',
		sm: 'p-4 md:p-6',
		md: 'p-6 md:p-8',
		lg: 'p-8 md:p-12'
	};

	const hoverClasses = hover
		? 'transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-950'
		: '';

	const Tag = href ? 'a' : 'div';
</script>

<svelte:element
	this={Tag}
	{href}
	class="card {variantClasses[variant]} {paddingClasses[padding]} {hoverClasses} {className}"
>
	{@render children?.()}
</svelte:element>

<style>
	.card {
		display: block;
		width: 100%;
		position: relative;
	}

	a.card {
		text-decoration: none;
		color: inherit;
	}

	a.card:hover {
		cursor: pointer;
	}
</style>
