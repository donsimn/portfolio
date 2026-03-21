<script lang="ts">
	interface Props {
		children?: any;
		title?: string;
		variant?: 'default' | 'warning' | 'success' | 'danger';
		class?: string;
	}

	let {
		children,
		title = 'INFO',
		variant = 'default',
		class: className = ''
	}: Props = $props();

	const variantClasses = {
		default: 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white',
		warning:
			'bg-black dark:bg-white text-yellow-400 dark:text-yellow-600 border-yellow-400 dark:border-yellow-600',
		success:
			'bg-black dark:bg-white text-green-400 dark:text-green-600 border-green-400 dark:border-green-600',
		danger:
			'bg-black dark:bg-white text-red-400 dark:text-red-600 border-red-400 dark:border-red-600'
	};
</script>

<div class="info-card border-2 {variantClasses[variant]} p-6 my-6 {className}">
	<!-- Header -->
	<div class="flex items-center gap-3 mb-4 pb-3 border-b border-current opacity-80">
		<span class="font-mono text-xs uppercase tracking-widest">
			[{title}]
		</span>
	</div>

	<!-- Content -->
	<div class="info-content">
		{@render children?.()}
	</div>
</div>

<style>
	.info-card {
		position: relative;
		width: 100%;
	}

	.info-content {
		line-height: 1.6;
	}

	.info-content :global(p) {
		margin-bottom: 0.75rem;
	}

	.info-content :global(p:last-child) {
		margin-bottom: 0;
	}

	.info-content :global(strong) {
		font-weight: 700;
	}

	.info-content :global(code) {
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Courier New', monospace;
		background: rgba(255, 255, 255, 0.1);
		padding: 0.125em 0.25em;
		font-size: 0.9em;
	}

	:global(.dark) .info-content :global(code) {
		background: rgba(0, 0, 0, 0.2);
	}
</style>
