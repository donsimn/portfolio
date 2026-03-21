<script lang="ts">
	interface Props {
		children?: any;
		span?: number | { base?: number; lg?: number; md?: number };
		start?: number | { base?: number; lg?: number; md?: number };
		class?: string;
	}

	let { children, span = 12, start, class: className = '' }: Props = $props();

	// Generate responsive column span classes
	const spanClass = $derived(
		typeof span === 'number'
			? `col-span-${span}`
			: [
					span.base ? `col-span-${span.base}` : 'col-span-12',
					span.md && `md:col-span-${span.md}`,
					span.lg && `lg:col-span-${span.lg}`
				]
					.filter(Boolean)
					.join(' ')
	);

	// Generate responsive column start classes
	const startClass = $derived(
		!start
			? ''
			: typeof start === 'number'
				? `col-start-${start}`
				: [
						start.base && `col-start-${start.base}`,
						start.md && `md:col-start-${start.md}`,
						start.lg && `lg:col-start-${start.lg}`
					]
						.filter(Boolean)
						.join(' ')
	);
</script>

<div class="{spanClass} {startClass} {className}">
	{@render children?.()}
</div>
