<script lang="ts">
	interface Props {
		size?: 'sm' | 'md' | 'lg' | 'xl';
		class?: string;
	}

	let { size = 'md', class: className = '' }: Props = $props();

	const sizes = {
		sm: 'mt-4',
		md: 'mt-8',
		lg: 'mt-12',
		xl: 'mt-16'
	};
</script>

<div class="col-span-12 {sizes[size]} {className}"></div>
