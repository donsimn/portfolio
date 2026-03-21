<script lang="ts">
	interface Props {
		left?: any;
		right?: any;
		ratio?: '6-6' | '8-4' | '4-8';
		class?: string;
	}

	let { left, right, ratio = '6-6', class: className = '' }: Props = $props();

	const ratios = {
		'6-6': { left: 'col-span-12 lg:col-span-6', right: 'col-span-12 lg:col-span-6' },
		'8-4': { left: 'col-span-12 lg:col-span-8', right: 'col-span-12 lg:col-span-4' },
		'4-8': { left: 'col-span-12 lg:col-span-4', right: 'col-span-12 lg:col-span-8' }
	};
</script>

<div class="{ratios[ratio].left} {className}">
	{@render left?.()}
</div>

<div class="{ratios[ratio].right}">
	{@render right?.()}
</div>
