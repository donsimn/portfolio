<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	interface Props {
		children?: any;
		maxWidth?: 'default' | 'wide' | 'full';
		noPadding?: boolean;
		class?: string;
	}

	let { children, maxWidth = 'default', noPadding = false, class: className = '' }: Props = $props();

	const maxWidthClasses = {
		default: 'max-w-[1440px]',
		wide: 'max-w-[1920px]',
		full: 'max-w-full'
	};
</script>

<div
	in:fade={{ duration: 400, easing: cubicOut }}
	out:fade={{ duration: 300, easing: cubicOut }}
	class="w-full {maxWidthClasses[maxWidth]} mx-auto {noPadding ? '' : 'px-gutter'} {className}"
>
	<div class="swiss-grid">
		{@render children?.()}
	</div>
</div>
