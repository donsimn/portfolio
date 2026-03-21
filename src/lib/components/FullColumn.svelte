<script lang="ts">
	interface Props {
		children?: any;
		class?: string;
	}

	let { children, class: className = '' }: Props = $props();
</script>

<div class="col-span-12 {className}">
	{@render children?.()}
</div>
