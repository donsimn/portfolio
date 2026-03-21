<script lang="ts">
	interface Props {
		title: string;
		description: string;
		year?: string;
		tags?: string[];
		image?: string;
		imageAlt?: string;
		href?: string;
		featured?: boolean;
		class?: string;
	}

	let {
		title,
		description,
		year,
		tags = [],
		image,
		imageAlt = '',
		href,
		featured = false,
		class: className = ''
	}: Props = $props();

	const Tag = href ? 'a' : 'div';
</script>

<svelte:element
	this={Tag}
	href={href || undefined}
	class="project-card group bg-white dark:bg-black border border-gray-200 dark:border-gray-800 overflow-hidden transition-all duration-300 hover:bg-gray-50 dark:hover:bg-gray-950 {featured ? 'md:col-span-2' : ''} {className}"
>
	<!-- Image -->
	{#if image}
		<div class="aspect-video w-full overflow-hidden bg-gray-200 dark:bg-gray-800">
			<img
				src={image}
				alt={imageAlt}
				class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
			/>
		</div>
	{/if}

	<!-- Content -->
	<div class="p-6 md:p-8">
		<!-- Year Label -->
		{#if year}
			<div class="mb-4">
				<span class="text-xs font-bold tracking-widest uppercase opacity-40">
					{year}
				</span>
			</div>
		{/if}

		<!-- Title -->
		<h3
			class="font-semibold mb-3 transition-opacity duration-200 group-hover:opacity-80 {featured ? 'text-2xl md:text-3xl' : 'text-lg md:text-xl'}"
		>
			{title}
		</h3>

		<!-- Description -->
		<p class="opacity-60 mb-4 {featured ? 'text-base' : 'text-sm'}">
			{description}
		</p>

		<!-- Tags -->
		{#if tags.length > 0}
			<div class="flex gap-2 flex-wrap">
				{#each tags as tag}
					<span class="text-xs px-2 py-1 border border-gray-300 dark:border-gray-700 uppercase font-medium">
						{tag}
					</span>
				{/each}
			</div>
		{/if}
	</div>
</svelte:element>

<style>
	.project-card {
		display: block;
		text-decoration: none;
		color: inherit;
	}

	a.project-card {
		cursor: pointer;
	}
</style>
