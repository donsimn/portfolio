<script lang="ts">
	interface MetadataItem {
		label: string;
		value: string;
	}

	interface Props {
		items: MetadataItem[];
		class?: string;
	}

	let { items, class: className = '' }: Props = $props();
</script>

<div class="font-mono text-sm space-y-2 opacity-60 {className}">
	{#each items as item}
		<div class="flex justify-between border-b border-current pb-2">
			<span>{item.label}</span>
			<span>{item.value}</span>
		</div>
	{/each}
</div>
