<script lang="ts">
	interface Props {
		col1?: any;
		col2?: any;
		col3?: any;
		class?: string;
	}

	let { col1, col2, col3, class: className = '' }: Props = $props();
</script>

<div class="col-span-12 lg:col-span-4 {className}">
	{@render col1?.()}
</div>

<div class="col-span-12 lg:col-span-4">
	{@render col2?.()}
</div>

<div class="col-span-12 lg:col-span-4">
	{@render col3?.()}
</div>
