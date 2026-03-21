<script>
	import { Section, SectionHeader, Reveal } from '$lib/components';

	/** @type {import('./$types').PageData} */
	let { data } = $props();

	const { projects } = data;
</script>

<svelte:head>
	<title>Portfolio — Work</title>
	<meta name="description" content="Selected projects and client work" />
</svelte:head>

<!-- Page Header -->
<Section padding="lg" border="bottom">
	<div class="col-span-12">
		<Reveal>
			<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">Portfolio</h1>
			<p class="text-lg md:text-xl opacity-60 max-w-2xl">
				Selected projects and client work across branding, digital design, and development.
			</p>
		</Reveal>
	</div>
</Section>

<!-- Portfolio Grid -->
<Section padding="lg">
	<div class="col-span-12">
		<!-- 2-Column Grid on Desktop -->
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-0">
			{#each projects as project, index}
				<Reveal delay={index * 50}>
					<article
						class="portfolio-item py-8 md:py-12 border-t-2 border-black dark:border-white lg:border-r-2 lg:last:border-r-0 lg:px-8 first:border-t-0 lg:odd:pr-8 lg:even:pl-8 lg:even:pr-0"
					>
						<a href="/portfolio/{project.slug}" class="block group">
							<!-- Year & Client -->
							<div class="flex flex-wrap items-center gap-3 mb-4">
								<time class="font-mono text-sm tracking-wide opacity-60">{project.date}</time>
								{#if project.client}
									<span class="opacity-30">—</span>
									<span class="font-mono text-sm uppercase tracking-wider opacity-40">
										{project.client}
									</span>
								{/if}
							</div>

							<!-- Title -->
							<h2
								class="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-3 transition-opacity group-hover:opacity-70"
							>
								{project.title}
							</h2>

							<!-- Description -->
							<p class="text-base md:text-lg opacity-60 mb-4">
								{project.description}
							</p>

							<!-- Tags -->
							{#if project.tags && project.tags.length > 0}
								<div class="flex flex-wrap gap-2 mb-4">
									{#each project.tags as tag}
										<span
											class="font-mono text-xs uppercase tracking-wider px-2 py-1 border border-gray-300 dark:border-gray-700"
										>
											{tag}
										</span>
									{/each}
								</div>
							{/if}

							<!-- View Project Link -->
							<div class="mt-4">
								<span
									class="text-sm font-medium uppercase tracking-wider border-b border-black dark:border-white group-hover:opacity-60 transition-opacity"
								>
									View Project →
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
	.portfolio-item:first-child {
		padding-top: 0;
	}

	/* Ensure proper border layout on large screens */
	@media (min-width: 1024px) {
		.portfolio-item:nth-child(odd) {
			padding-right: 2rem;
		}

		.portfolio-item:nth-child(even) {
			padding-left: 2rem;
			padding-right: 0;
			border-right: 0;
		}

		/* First two items no top border */
		.portfolio-item:nth-child(1),
		.portfolio-item:nth-child(2) {
			border-top: 0;
		}
	}
</style>
