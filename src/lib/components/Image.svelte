<script lang="ts">
	interface Props {
		src: string;
		alt: string;
		caption?: string;
		aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2' | '2/3' | 'auto';
		fit?: 'cover' | 'contain' | 'fill';
		border?: boolean;
		class?: string;
	}

	let {
		src,
		alt,
		caption,
		aspectRatio = 'auto',
		fit = 'cover',
		border = false,
		class: className = ''
	}: Props = $props();

	const aspectRatioStyles = {
		'16/9': 'aspect-[16/9]',
		'4/3': 'aspect-[4/3]',
		'1/1': 'aspect-square',
		'3/2': 'aspect-[3/2]',
		'2/3': 'aspect-[2/3]',
		auto: ''
	};

	const fitClasses = {
		cover: 'object-cover',
		contain: 'object-contain',
		fill: 'object-fill'
	};
</script>

<figure class="image-container {className}">
	<div
		class="image-wrapper {aspectRatioStyles[aspectRatio]} {border ? 'border-2 border-black dark:border-white' : ''} overflow-hidden"
	>
		<img src={src} alt={alt} class="w-full h-full {fitClasses[fit]}" />
	</div>
	{#if caption}
		<figcaption class="image-caption font-mono text-sm mt-2 opacity-60">
			{caption}
		</figcaption>
	{/if}
</figure>

<style>
	.image-container {
		width: 100%;
	}

	.image-wrapper {
		position: relative;
		width: 100%;
		background: var(--bg-color, #000);
	}

	img {
		display: block;
	}

	.image-caption {
		text-align: left;
		line-height: 1.4;
	}
</style>
