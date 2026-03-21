<script lang="ts">
	interface Props {
		children?: any;
		separator?: boolean;
		muted?: boolean;
		class?: string;
	}

	let { children, separator = false, muted = false, class: className = '' }: Props = $props();
</script>

<div class="data-row {className}" class:separator class:muted>
	{@render children?.()}
</div>

<style>
	.data-row {
		margin: 0;
	}

	.data-row.separator {
		margin-top: 1rem;
		padding-top: 1rem;
		border-top: 1px solid currentColor;
	}

	.data-row.muted {
		opacity: 0.6;
	}
</style>
