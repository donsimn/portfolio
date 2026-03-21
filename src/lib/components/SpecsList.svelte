<script lang="ts">
	interface SpecItem {
		label: string;
		value: string;
	}

	interface Props {
		items: SpecItem[];
		labelOpacity?: boolean;
		class?: string;
	}

	let { items, labelOpacity = true, class: className = '' }: Props = $props();
</script>

<div class="space-y-3 font-mono text-sm {className}">
	{#each items as item}
		<div class="flex justify-between border-b border-current pb-2">
			<span class={labelOpacity ? 'opacity-60' : ''}>{item.label}</span>
			<span>{item.value}</span>
		</div>
	{/each}
</div>
