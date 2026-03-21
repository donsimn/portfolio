<script lang="ts">
	import { Section, SectionHeader, TextBlock, Reveal } from '$lib/components';
</script>

<svelte:head>
	<title>About — Portfolio</title>
	<meta name="description" content="About me and my work" />
</svelte:head>

<!-- Page Header -->
<Section padding="lg" border="bottom">
	<div class="col-span-12">
		<Reveal>
			<h1 class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">About</h1>
			<p class="text-xl md:text-2xl opacity-70 max-w-3xl">
				Digital designer and developer focused on Swiss design principles, precision, and functional beauty.
			</p>
		</Reveal>
	</div>
</Section>

<!-- Bio Section -->
<Section padding="lg" border="bottom">
	<div class="col-span-12 lg:col-span-8 lg:col-start-3">
		<Reveal delay={100}>
			<TextBlock size="lg">
				<p>
					I specialize in creating digital products that combine Swiss design methodology with
					modern web technologies. My work emphasizes clarity, hierarchy, and mathematical precision.
				</p>
				<p>
					Every project is an opportunity to push the boundaries of what's possible while
					maintaining a focus on usability, accessibility, and timeless aesthetics.
				</p>
			</TextBlock>
		</Reveal>
	</div>
</Section>

<!-- Services Section -->
<Section padding="lg" border="bottom">
	<div class="col-span-12">
		<Reveal>
			<SectionHeader title="Services" rule="after" size="md" />
		</Reveal>
	</div>

	<div class="col-span-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
		<Reveal delay={100}>
			<div>
				<h3 class="text-xl font-semibold mb-2">Brand Identity</h3>
				<p class="text-base opacity-60">
					Logo design, visual systems, and comprehensive brand guidelines.
				</p>
			</div>
		</Reveal>

		<Reveal delay={150}>
			<div>
				<h3 class="text-xl font-semibold mb-2">Web Design</h3>
				<p class="text-base opacity-60">
					Responsive websites and web applications built with modern frameworks.
				</p>
			</div>
		</Reveal>

		<Reveal delay={200}>
			<div>
				<h3 class="text-xl font-semibold mb-2">Design Systems</h3>
				<p class="text-base opacity-60">
					Scalable component libraries and documentation for teams.
				</p>
			</div>
		</Reveal>

		<Reveal delay={250}>
			<div>
				<h3 class="text-xl font-semibold mb-2">UX Strategy</h3>
				<p class="text-base opacity-60">
					User research, information architecture, and interaction design.
				</p>
			</div>
		</Reveal>

		<Reveal delay={300}>
			<div>
				<h3 class="text-xl font-semibold mb-2">Development</h3>
				<p class="text-base opacity-60">
					Front-end development with React, Svelte, and modern tooling.
				</p>
			</div>
		</Reveal>

		<Reveal delay={350}>
			<div>
				<h3 class="text-xl font-semibold mb-2">Consulting</h3>
				<p class="text-base opacity-60">
					Design audits, technical reviews, and strategic guidance.
				</p>
			</div>
		</Reveal>
	</div>
</Section>

<!-- Contact CTA -->
<Section padding="xl" background="inverted">
	<div class="col-span-12 text-center">
		<Reveal>
			<h2 class="text-3xl md:text-4xl font-semibold mb-6">Let's work together</h2>
			<p class="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
				Available for select projects. Get in touch to discuss your needs.
			</p>
			<a
				href="mailto:hello@example.com"
				class="inline-block font-mono text-sm uppercase tracking-wider px-6 py-3 border-2 border-current hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors"
			>
				[SEND MESSAGE]
			</a>
		</Reveal>
	</div>
</Section>
