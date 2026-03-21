<script lang="ts">
	interface Props {
		children?: any;
		variant?: 'primary' | 'secondary' | 'ghost' | 'inverted';
		size?: 'sm' | 'md' | 'lg' | 'xl';
		fullWidth?: boolean;
		href?: string;
		type?: 'button' | 'submit' | 'reset';
		disabled?: boolean;
		onclick?: (e: MouseEvent) => void;
		class?: string;
	}

	let {
		children,
		variant = 'primary',
		size = 'md',
		fullWidth = false,
		href,
		type = 'button',
		disabled = false,
		onclick,
		class: className = ''
	}: Props = $props();

	const variantClasses = {
		primary:
			'bg-black dark:bg-white text-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200',
		secondary:
			'border border-gray-300 dark:border-gray-700 text-black dark:text-white hover:bg-gray-100 hover:border-gray-400 dark:hover:bg-gray-900 dark:hover:border-gray-600',
		ghost: 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-900',
		inverted:
			'bg-white dark:bg-black text-black dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-800'
	};

	const sizeClasses = {
		sm: 'px-4 py-2 text-xs',
		md: 'px-5 py-2.5 text-sm',
		lg: 'px-6 py-3 text-base',
		xl: 'px-8 py-4 text-lg'
	};

	const Tag = href ? 'a' : 'button';
</script>

<svelte:element
	this={Tag}
	href={href || undefined}
	type={href ? undefined : type}
	{disabled}
	{onclick}
	class="btn {variantClasses[variant]} {sizeClasses[size]} {fullWidth ? 'w-full' : ''} {disabled ? 'opacity-50 cursor-not-allowed' : ''} {className}"
>
	{@render children?.()}
</svelte:element>

<style>
	.btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-weight: 500;
		text-transform: uppercase;
		letter-spacing: 0.05em;
		transition: all 0.2s ease;
		cursor: pointer;
		text-decoration: none;
		font-family: inherit;
		white-space: nowrap;
	}

	.btn:disabled {
		pointer-events: none;
	}

	.btn:active {
		transform: translateY(1px);
	}
</style>
