<script lang="ts">
	interface Props {
		title?: string;
		code: string;
		language?: string;
		fontSize?: 'xs' | 'sm' | 'base';
		maxHeight?: string;
		class?: string;
	}

	let { title, code, language = 'text', fontSize = 'sm', maxHeight, class: className = '' }: Props = $props();

	const fontSizeClass = {
		xs: 'text-xs',
		sm: 'text-sm',
		base: 'text-base'
	}[fontSize];
</script>

<div
	class="bg-black dark:bg-white text-white dark:text-black p-8 font-mono {fontSizeClass} {className}"
>
	{#if title}
		<div class="mb-4 uppercase tracking-wider opacity-60">{title}</div>
	{/if}
	<pre
		class="leading-relaxed overflow-x-auto {maxHeight ? 'overflow-y-auto' : ''}"
		style={maxHeight ? `max-height: ${maxHeight}` : undefined}
	><code>{code}</code></pre>
</div>
