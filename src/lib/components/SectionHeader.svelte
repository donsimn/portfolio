<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
		label?: string;
		align?: 'left' | 'center';
		rule?: 'none' | 'before' | 'after' | 'both';
		size?: 'sm' | 'md' | 'lg';
		class?: string;
	}

	let {
		title,
		subtitle,
		label,
		align = 'left',
		rule = 'after',
		size = 'md',
		class: className = ''
	}: Props = $props();

	const alignClasses = {
		left: 'text-left items-start',
		center: 'text-center items-center'
	};

	const sizeClasses = {
		sm: 'text-xl md:text-2xl',
		md: 'text-2xl md:text-3xl lg:text-4xl',
		lg: 'text-3xl md:text-4xl lg:text-5xl'
	};
</script>

<div class="section-header flex flex-col {alignClasses[align]} gap-6 mb-12 {className}">
	<!-- Optional Label -->
	{#if label}
		<span
			class="text-xs font-bold tracking-widest uppercase opacity-40 {align === 'center' ? 'mx-auto' : ''}"
		>
			{label}
		</span>
	{/if}

	<!-- Rule Before -->
	{#if rule === 'before' || rule === 'both'}
		<div class="w-full h-px bg-gray-200 dark:bg-gray-800"></div>
	{/if}

	<!-- Title -->
	<h2 class="{sizeClasses[size]} font-semibold tracking-tight leading-tight">
		{title}
	</h2>

	<!-- Subtitle -->
	{#if subtitle}
		<p
			class="text-base md:text-lg opacity-60 max-w-2xl {align === 'center' ? 'mx-auto' : ''} font-normal"
		>
			{subtitle}
		</p>
	{/if}

	<!-- Rule After -->
	{#if rule === 'after' || rule === 'both'}
		<div class="w-full h-px bg-gray-200 dark:bg-gray-800"></div>
	{/if}
</div>

<style>
	.section-header {
		width: 100%;
	}
</style>
