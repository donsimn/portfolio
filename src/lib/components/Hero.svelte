<script lang="ts">
	interface Props {
		title: string;
		subtitle?: string;
		image?: string;
		imageAlt?: string;
		align?: 'left' | 'center';
		height?: 'default' | 'tall' | 'full';
		overlay?: boolean;
		children?: any;
		class?: string;
	}

	let {
		title,
		subtitle,
		image,
		imageAlt = '',
		align = 'left',
		height = 'default',
		overlay = true,
		children,
		class: className = ''
	}: Props = $props();

	const heightClasses = {
		default: 'min-h-[60vh]',
		tall: 'min-h-[80vh]',
		full: 'min-h-screen'
	};

	const alignClasses = {
		left: 'text-left',
		center: 'text-center items-center'
	};
</script>

<section
	class="hero relative overflow-hidden border-b border-gray-200 dark:border-gray-800 {heightClasses[height]} {className}"
>
	<!-- Background Image -->
	{#if image}
		<div class="absolute inset-0 z-0">
			<img src={image} alt={imageAlt} class="w-full h-full object-cover" />
			{#if overlay}
				<div class="absolute inset-0 bg-black/70 dark:bg-black/80"></div>
			{/if}
		</div>
	{/if}

	<!-- Content -->
	<div
		class="relative z-10 flex flex-col justify-center {alignClasses[align]} {image && overlay ? 'text-white' : ''}"
	>
		<div class="swiss-grid h-full py-24 md:py-32">
			<div class="col-span-12 {align === 'center' ? 'mx-auto' : ''}">
				<!-- Title -->
				<h1
					class="hero-title text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[1.1] mb-6"
				>
					{@html title}
				</h1>

				<!-- Subtitle -->
				{#if subtitle}
					<p
						class="hero-subtitle text-lg md:text-xl lg:text-2xl max-w-3xl {align === 'center' ? 'mx-auto' : ''} opacity-70 font-normal tracking-normal"
					>
						{subtitle}
					</p>
				{/if}

				<!-- Optional children content -->
				{#if children}
					<div class="mt-8 max-w-3xl {align === 'center' ? 'mx-auto' : ''}">
						{@render children()}
					</div>
				{/if}
			</div>
		</div>
	</div>
</section>

<style>
	.hero-title {
		word-break: break-word;
		hyphens: auto;
	}

	.hero:has(img) .hero-title,
	.hero:has(img) .hero-subtitle {
		text-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
	}
</style>
