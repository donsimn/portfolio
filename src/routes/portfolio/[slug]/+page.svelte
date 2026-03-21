<script>
	import { Section, TextBlock, Reveal, Grid } from '$lib/components';

	/** @type {import('./$types').PageData} */
	let { data } = $props();

	const { project } = data;
</script>

<svelte:head>
	<title>{project.title} — Portfolio</title>
	<meta name="description" content={project.description} />
</svelte:head>

<!-- Project Header -->
<Section padding="lg" border="bottom">
	<div class="col-span-12">
		<Reveal>
			<!-- Back Link -->
			<a
				href="/portfolio"
				class="inline-flex items-center text-sm font-medium uppercase tracking-wider mb-8 opacity-60 hover:opacity-100 transition-opacity"
			>
				← Back to Portfolio
			</a>

			<!-- Date & Client -->
			<div class="flex flex-wrap items-center gap-3 mb-6">
				<time class="font-mono text-sm tracking-wide opacity-60">{project.date}</time>
				{#if project.client}
					<span class="opacity-30">—</span>
					<span class="font-mono text-sm uppercase tracking-wider opacity-40">
						{project.client}
					</span>
				{/if}
				{#if project.year}
					<span class="opacity-30">—</span>
					<span class="font-mono text-sm tracking-wide opacity-40">
						{project.year}
					</span>
				{/if}
			</div>

			<!-- Title -->
			<h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
				{project.title}
			</h1>

			<!-- Description -->
			<p class="text-xl md:text-2xl opacity-70 max-w-3xl mb-6">
				{project.description}
			</p>

			<!-- Tags -->
			{#if project.tags && project.tags.length > 0}
				<div class="flex flex-wrap gap-2">
					{#each project.tags as tag}
						<span
							class="font-mono text-xs uppercase tracking-wider px-2 py-1 border border-gray-300 dark:border-gray-700"
						>
							{tag}
						</span>
					{/each}
				</div>
			{/if}
		</Reveal>
	</div>
</Section>

<!-- Project Overview -->
<Section padding="lg" border="bottom">
	<div class="col-span-12 lg:col-span-8 lg:col-start-3">
		<Reveal delay={100}>
			<div class="space-y-8">
				<div>
					<h2 class="text-2xl md:text-3xl font-semibold mb-4">Overview</h2>
					<TextBlock>
						<p>
							This is an example portfolio project page. Replace this content with details about
							your project, the challenge, your approach, and the results.
						</p>
					</TextBlock>
				</div>

				<!-- Project Details Grid -->
				<div class="grid grid-cols-2 gap-8 py-8 border-t-2 border-b-2 border-gray-200 dark:border-gray-800">
					<div>
						<h3 class="font-mono text-xs uppercase tracking-wider opacity-40 mb-2">Role</h3>
						<p class="text-lg font-medium">Lead Designer</p>
					</div>
					<div>
						<h3 class="font-mono text-xs uppercase tracking-wider opacity-40 mb-2">Timeline</h3>
						<p class="text-lg font-medium">3 Months</p>
					</div>
					<div>
						<h3 class="font-mono text-xs uppercase tracking-wider opacity-40 mb-2">Deliverables</h3>
						<p class="text-lg font-medium">Brand Identity, Website</p>
					</div>
					<div>
						<h3 class="font-mono text-xs uppercase tracking-wider opacity-40 mb-2">Year</h3>
						<p class="text-lg font-medium">{project.year}</p>
					</div>
				</div>
			</div>
		</Reveal>
	</div>
</Section>

<!-- Project Content -->
<Section padding="lg">
	<div class="col-span-12">
		<Reveal delay={150}>
			<!--
				WRITE YOUR PROJECT CONTENT HERE
				This is a standard .svelte file - add images, case study content, etc.
			-->

			<div class="space-y-16">
				<!-- Challenge Section -->
				<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
					<div class="lg:col-span-4">
						<h2 class="text-2xl md:text-3xl font-semibold sticky top-8">The Challenge</h2>
					</div>
					<div class="lg:col-span-8">
						<TextBlock size="lg">
							<p>
								Describe the challenge or problem you were solving. What were the client's goals?
								What constraints did you face? What made this project unique?
							</p>
						</TextBlock>
					</div>
				</div>

				<!-- Horizontal Rule -->
				<hr class="border-t-2 border-black dark:border-white" />

				<!-- Solution Section -->
				<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
					<div class="lg:col-span-4">
						<h2 class="text-2xl md:text-3xl font-semibold sticky top-8">The Solution</h2>
					</div>
					<div class="lg:col-span-8">
						<TextBlock size="lg">
							<p>
								Explain your approach. What was your design strategy? What tools or methods did you
								use? How did you solve the problem?
							</p>
						</TextBlock>

						<!-- Example: Image Placeholder -->
						<div
							class="mt-8 aspect-video bg-gray-200 dark:bg-gray-800 flex items-center justify-center"
						>
							<span class="font-mono text-sm opacity-40">Project Image</span>
						</div>
					</div>
				</div>

				<!-- Horizontal Rule -->
				<hr class="border-t-2 border-black dark:border-white" />

				<!-- Results Section -->
				<div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
					<div class="lg:col-span-4">
						<h2 class="text-2xl md:text-3xl font-semibold sticky top-8">The Results</h2>
					</div>
					<div class="lg:col-span-8">
						<TextBlock size="lg">
							<p>
								Share the outcomes. What impact did your work have? Include metrics, feedback, or
								other success indicators.
							</p>
						</TextBlock>

						<!-- Example: Stats Grid -->
						<div class="grid grid-cols-3 gap-4 mt-8">
							<div class="text-center py-8 border border-gray-200 dark:border-gray-800">
								<div class="text-4xl font-bold mb-2">150%</div>
								<div class="font-mono text-xs uppercase opacity-40">Engagement</div>
							</div>
							<div class="text-center py-8 border border-gray-200 dark:border-gray-800">
								<div class="text-4xl font-bold mb-2">2.5x</div>
								<div class="font-mono text-xs uppercase opacity-40">Conversion</div>
							</div>
							<div class="text-center py-8 border border-gray-200 dark:border-gray-800">
								<div class="text-4xl font-bold mb-2">95%</div>
								<div class="font-mono text-xs uppercase opacity-40">Satisfaction</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Reveal>
	</div>
</Section>

<!-- Back to Portfolio -->
<Section padding="md" border="top">
	<div class="col-span-12">
		<a
			href="/portfolio"
			class="inline-flex items-center text-sm font-medium uppercase tracking-wider opacity-60 hover:opacity-100 transition-opacity"
		>
			← Back to Portfolio
		</a>
	</div>
</Section>
