<script>
	import { Section, TextBlock, Reveal } from '$lib/components';

	/** @type {import('./$types').PageData} */
	let { data } = $props();

	const { post } = data;
</script>

<svelte:head>
	<title>{post.title} — Blog</title>
	<meta name="description" content={post.description} />
</svelte:head>

<!-- Article Header -->
<Section padding="lg" border="bottom">
	<div class="col-span-12">
		<Reveal>
			<!-- Back Link -->
			<a
				href="/blog"
				class="inline-flex items-center text-sm font-medium uppercase tracking-wider mb-8 opacity-60 hover:opacity-100 transition-opacity"
			>
				← Back to Blog
			</a>

			<!-- Date & Tags -->
			<div class="flex flex-wrap items-center gap-3 mb-6">
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
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
				{post.title}
			</h1>

			<!-- Description -->
			<p class="text-xl md:text-2xl opacity-70 max-w-3xl">
				{post.description}
			</p>
		</Reveal>
	</div>
</Section>

<!-- Article Content -->
<Section padding="lg">
	<div class="col-span-12 lg:col-span-8 lg:col-start-3">
		<Reveal delay={100}>
			<article class="prose-custom">
				<!--
					WRITE YOUR BLOG CONTENT HERE
					This is a standard .svelte file - you can write any Svelte/HTML here
				-->

				<TextBlock size="lg">
					<p>
						This is an example blog post. Replace this content with your actual article content.
						You can use any Svelte components, HTML, or markdown-like formatting here.
					</p>

					<p>
						Since this is a standard <code>.svelte</code> file, you have complete control over the
						content structure. You can import components, add interactive elements, or write plain
						HTML.
					</p>
				</TextBlock>

				<!-- Example of adding a section -->
				<div class="mt-12 mb-8">
					<h2 class="text-2xl md:text-3xl font-semibold mb-4">Section Heading</h2>
					<TextBlock>
						<p>
							Add your content here. You can nest components, create custom layouts, or write
							standard HTML. The Swiss design aesthetic is maintained through the global styles.
						</p>
					</TextBlock>
				</div>

				<div class="mt-12 mb-8">
					<h2 class="text-2xl md:text-3xl font-semibold mb-4">Another Section</h2>
					<TextBlock>
						<p>
							Continue building your article with as many sections as needed. Use the
							<code>TextBlock</code> component for optimal readability and consistent styling.
						</p>
					</TextBlock>
				</div>

				<!-- Horizontal Rule -->
				<hr class="my-12 border-t-2 border-black dark:border-white" />

				<TextBlock>
					<p>
						<strong>Conclusion:</strong> Write your closing thoughts here. The metadata (title, date,
						description, tags) is pulled from <code>src/lib/data/content.js</code>.
					</p>
				</TextBlock>
			</article>
		</Reveal>
	</div>
</Section>

<!-- Back to Blog -->
<Section padding="md" border="top">
	<div class="col-span-12">
		<a
			href="/blog"
			class="inline-flex items-center text-sm font-medium uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity"
		>
			← Back to Blog
		</a>
	</div>
</Section>

<style>
	.prose-custom {
		max-width: 100%;
	}

	.prose-custom :global(code) {
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Courier New', monospace;
		background: rgba(0, 0, 0, 0.05);
		padding: 0.125em 0.25em;
		font-size: 0.9em;
	}

	:global(.dark) .prose-custom :global(code) {
		background: rgba(255, 255, 255, 0.1);
	}
</style>
