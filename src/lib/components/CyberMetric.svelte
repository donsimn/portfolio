<script lang="ts">
	interface Props {
		label: string;
		value: string;
		status?: 'default' | 'success' | 'warning' | 'danger' | 'info';
		class?: string;
	}

	let { label, value, status = 'default', class: className = '' }: Props = $props();

	const statusColors = {
		default: 'text-black dark:text-white',
		success: 'text-green-600 dark:text-green-400',
		warning: 'text-yellow-600 dark:text-yellow-400',
		danger: 'text-red-600 dark:text-red-400',
		info: 'text-blue-600 dark:text-blue-400'
	};

	const statusBorders = {
		default: 'border-gray-300 dark:border-gray-700',
		success: 'border-green-600 dark:border-green-400',
		warning: 'border-yellow-600 dark:border-yellow-400',
		danger: 'border-red-600 dark:border-red-400',
		info: 'border-blue-600 dark:border-blue-400'
	};
</script>

<div class="cyber-metric inline-flex items-center gap-2 {className}">
	<!-- Label -->
	<span class="font-mono text-xs uppercase tracking-widest opacity-60">
		{label}:
	</span>

	<!-- Value Badge -->
	<span
		class="font-mono text-xs font-bold uppercase tracking-wider px-2 py-1 border {statusBorders[status]} {statusColors[status]}"
	>
		[{value}]
	</span>
</div>

<style>
	.cyber-metric {
		white-space: nowrap;
	}
</style>
