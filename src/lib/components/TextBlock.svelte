<script lang="ts">
	interface Props {
		children?: any;
		size?: 'sm' | 'md' | 'lg' | 'xl';
		maxWidth?: 'narrow' | 'default' | 'wide' | 'full';
		align?: 'left' | 'center';
		weight?: 'light' | 'normal' | 'medium' | 'bold';
		opacity?: number;
		class?: string;
	}

	let {
		children,
		size = 'md',
		maxWidth = 'default',
		align = 'left',
		weight = 'normal',
		opacity = 1,
		class: className = ''
	}: Props = $props();

	// Optimal line length for readability
	const maxWidthClasses = {
		narrow: 'max-w-prose', // ~65ch
		default: 'max-w-2xl', // ~42rem
		wide: 'max-w-4xl', // ~56rem
		full: 'max-w-full'
	};

	const sizeClasses = {
		sm: 'text-sm md:text-base',
		md: 'text-base md:text-lg',
		lg: 'text-lg md:text-xl',
		xl: 'text-xl md:text-2xl'
	};

	const alignClasses = {
		left: 'text-left',
		center: 'text-center mx-auto'
	};

	const weightClasses = {
		light: 'font-light',
		normal: 'font-normal',
		medium: 'font-medium',
		bold: 'font-bold'
	};
</script>

<div
	class="text-block {sizeClasses[size]} {maxWidthClasses[maxWidth]} {alignClasses[align]} {weightClasses[weight]} {className}"
	style="opacity: {opacity};"
>
	{@render children?.()}
</div>

<style>
	.text-block {
		line-height: 1.6;
		letter-spacing: -0.01em;
	}

	.text-block :global(p) {
		margin-bottom: 1.25em;
	}

	.text-block :global(p:last-child) {
		margin-bottom: 0;
	}

	.text-block :global(strong) {
		font-weight: 700;
		opacity: 1;
	}

	.text-block :global(em) {
		font-style: italic;
	}

	.text-block :global(a) {
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 2px;
		transition: opacity 0.2s ease;
	}

	.text-block :global(a:hover) {
		opacity: 0.6;
	}

	.text-block :global(ul),
	.text-block :global(ol) {
		margin-left: 1.5em;
		margin-bottom: 1.25em;
	}

	.text-block :global(li) {
		margin-bottom: 0.5em;
	}

	.text-block :global(code) {
		font-family: 'Courier New', monospace;
		background: rgba(0, 0, 0, 0.05);
		padding: 0.125em 0.25em;
		font-size: 0.9em;
	}

	:global(.dark) .text-block :global(code) {
		background: rgba(255, 255, 255, 0.1);
	}
</style>
