<script lang="ts">
	interface Props {
		children?: any;
		width?: 'narrow' | 'medium' | 'wide';
		class?: string;
	}

	let { children, width = 'medium', class: className = '' }: Props = $props();

	const widths = {
		narrow: 'col-span-12 lg:col-span-6 lg:col-start-4',
		medium: 'col-span-12 lg:col-span-8 lg:col-start-3',
		wide: 'col-span-12 lg:col-span-10 lg:col-start-2'
	};
</script>

<div class="{widths[width]} {className}">
	{@render children?.()}
</div>
