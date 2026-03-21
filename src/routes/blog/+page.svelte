<script>
	import { Section, SectionHeader, Reveal } from '$lib/components';

	/** @type {import('./$types').PageData} */
	let { data } = $props();

	const { posts } = data;
</script>

<svelte:head>
	<title>Blog — Portfolio</title>
	<meta name="description" content="Thoughts on design, development, and digital craft" />
</svelte:head>

<!-- Page Header -->
<Section padding="lg" border="bottom">
	<div class="col-span-12">
		<Reveal>
			<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">Blog</h1>
			<p class="text-lg md:text-xl opacity-60 max-w-2xl">
				Thoughts on design, development, and digital craft.
			</p>
		</Reveal>
	</div>
</Section>

<!-- Blog Posts List -->
<Section padding="lg">
	<div class="col-span-12">
		<!-- Posts -->
		<div class="space-y-0">
			{#each posts as post, index}
				<Reveal delay={index * 50}>
					<article class="blog-item py-8 md:py-12 border-t-2 border-black dark:border-white first:border-t-0">
						<a href="/blog/{post.slug}" class="block group">
							<!-- Date & Tags -->
							<div class="flex flex-wrap items-center gap-3 mb-4">
								<time class="font-mono text-sm tracking-wide opacity-60">{post.date}</time>
								{#if post.tags && post.tags.length > 0}
									<span class="opacity-30">—</span>
									<div class="flex flex-wrap gap-2">
										{#each post.tags as tag}
											<span class="font-mono text-xs uppercase tracking-wider opacity-40">
												{tag}
											</span>
										{/each}
									</div>
								{/if}
							</div>

							<!-- Title -->
							<h2
								class="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-3 transition-opacity group-hover:opacity-70"
							>
								{post.title}
							</h2>

							<!-- Description -->
							<p class="text-base md:text-lg opacity-60 max-w-3xl">
								{post.description}
							</p>

							<!-- Read More Link -->
							<div class="mt-4">
								<span
									class="text-sm font-medium uppercase tracking-wider border-b border-black dark:border-white group-hover:opacity-60 transition-opacity"
								>
									Read Article →
								</span>
							</div>
						</a>
					</article>
				</Reveal>
			{/each}
		</div>
	</div>
</Section>

<style>
	.blog-item:first-child {
		padding-top: 0;
	}
</style>
