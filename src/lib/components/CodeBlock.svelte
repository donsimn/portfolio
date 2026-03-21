<script lang="ts">
	interface Props {
		title?: string;
		code: string;
		language?: string;
		class?: string;
	}

	let { title, code, language = 'text', class: className = '' }: Props = $props();
</script>

<div
	class="bg-black dark:bg-white text-white dark:text-black p-8 font-mono text-sm {className}"
>
	{#if title}
		<div class="mb-4 uppercase tracking-wider opacity-60">{title}</div>
	{/if}
	<pre class="leading-relaxed"><code>{code}</code></pre>
</div>
