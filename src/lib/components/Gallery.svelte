<script lang="ts">
	interface GalleryImage {
		src: string;
		alt: string;
		caption?: string;
	}

	interface Props {
		images: GalleryImage[];
		columns?: 1 | 2 | 3 | 4;
		gap?: 'none' | 'sm' | 'md' | 'lg';
		aspectRatio?: '16/9' | '4/3' | '1/1' | '3/2' | 'auto';
		border?: boolean;
		class?: string;
	}

	let {
		images,
		columns = 2,
		gap = 'md',
		aspectRatio = '4/3',
		border = true,
		class: className = ''
	}: Props = $props();

	const columnClasses = {
		1: 'grid-cols-1',
		2: 'grid-cols-1 md:grid-cols-2',
		3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
		4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
	};

	const gapClasses = {
		none: 'gap-0',
		sm: 'gap-4',
		md: 'gap-6 md:gap-8',
		lg: 'gap-8 md:gap-12'
	};

	const aspectRatioStyles = {
		'16/9': 'aspect-[16/9]',
		'4/3': 'aspect-[4/3]',
		'1/1': 'aspect-square',
		'3/2': 'aspect-[3/2]',
		auto: ''
	};
</script>

<div class="gallery grid {columnClasses[columns]} {gapClasses[gap]} {className}">
	{#each images as image, index}
		<figure class="gallery-item">
			<div
				class="gallery-image-wrapper {aspectRatioStyles[aspectRatio]} {border ? 'border-2 border-black dark:border-white' : ''} overflow-hidden bg-black dark:bg-white"
			>
				<img src={image.src} alt={image.alt} class="w-full h-full object-cover" loading="lazy" />
			</div>
			{#if image.caption}
				<figcaption class="gallery-caption font-mono text-sm mt-2 opacity-60">
					{image.caption}
				</figcaption>
			{/if}
		</figure>
	{/each}
</div>

<style>
	.gallery {
		width: 100%;
	}

	.gallery-item {
		width: 100%;
		margin: 0;
	}

	.gallery-image-wrapper {
		position: relative;
		width: 100%;
	}

	img {
		display: block;
		transition: opacity 0.2s ease;
	}

	img:hover {
		opacity: 0.85;
	}

	.gallery-caption {
		text-align: left;
		line-height: 1.4;
	}
</style>
