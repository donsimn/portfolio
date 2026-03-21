<script lang="ts">
	interface Props {
		spacing?: 'sm' | 'md' | 'lg' | 'xl';
		opacity?: number;
		class?: string;
	}

	let { spacing = 'md', opacity = 0.2, class: className = '' }: Props = $props();

	const spacingClasses = {
		sm: 'my-4',
		md: 'my-12',
		lg: 'my-16',
		xl: 'my-24'
	};
</script>

<div
	class="separator {spacingClasses[spacing]} {className}"
	style="height: 2px; background: currentColor; opacity: {opacity};"
></div>
