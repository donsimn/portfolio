<script lang="ts">
	interface Props {
		direction?: 'horizontal' | 'vertical';
		thickness?: 'thin' | 'medium' | 'thick';
		spacing?: 'none' | 'sm' | 'md' | 'lg';
		opacity?: number;
		class?: string;
	}

	let {
		direction = 'horizontal',
		thickness = 'thin',
		spacing = 'none',
		opacity = 1,
		class: className = ''
	}: Props = $props();

	const thicknessClasses = {
		horizontal: {
			thin: 'h-px',
			medium: 'h-0.5',
			thick: 'h-1'
		},
		vertical: {
			thin: 'w-px',
			medium: 'w-0.5',
			thick: 'w-1'
		}
	};

	const spacingClasses = {
		horizontal: {
			none: 'my-0',
			sm: 'my-4',
			md: 'my-8',
			lg: 'my-12'
		},
		vertical: {
			none: 'mx-0',
			sm: 'mx-4',
			md: 'mx-8',
			lg: 'mx-12'
		}
	};

	const sizeClass = direction === 'horizontal' ? 'w-full' : 'h-full';
</script>

<div
	class="divider bg-black dark:bg-white {sizeClass} {thicknessClasses[direction][thickness]} {spacingClasses[direction][spacing]} {className}"
	style="opacity: {opacity};"
	role="separator"
/>

<style>
	.divider {
		flex-shrink: 0;
	}
</style>
