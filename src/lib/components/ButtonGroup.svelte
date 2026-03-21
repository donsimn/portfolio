<script lang="ts">
	interface Props {
		children?: any;
		align?: 'left' | 'center' | 'right';
		direction?: 'horizontal' | 'vertical';
		gap?: 'sm' | 'md' | 'lg';
		class?: string;
	}

	let {
		children,
		align = 'left',
		direction = 'horizontal',
		gap = 'md',
		class: className = ''
	}: Props = $props();

	const alignClasses = {
		left: 'justify-start',
		center: 'justify-center',
		right: 'justify-end'
	};

	const directionClasses = {
		horizontal: 'flex-row',
		vertical: 'flex-col'
	};

	const gapClasses = {
		sm: 'gap-2',
		md: 'gap-4',
		lg: 'gap-6'
	};
</script>

<div
	class="button-group flex {directionClasses[direction]} {alignClasses[align]} {gapClasses[gap]} {className}"
>
	{@render children?.()}
</div>
