<script lang="ts">
	import {
		Hero,
		Section,
		SectionHeader,
		TextBlock,
		Grid,
		ProjectCard,
		Button,
		Reveal
	} from '$lib/components';
</script>

<svelte:head>
	<title>Home — Portfolio</title>
</svelte:head>

<!-- Hero Section -->
<Hero
	title="Digital Designer<br />& Developer"
	subtitle="Crafting precise, functional, and beautiful digital experiences through Swiss design principles."
	height="tall"
>
	<div class="flex flex-col sm:flex-row gap-4">
		<Button variant="primary" size="md">View My Work</Button>
		<Button variant="secondary" size="md">Get in Touch</Button>
	</div>
</Hero>

<!-- About Section -->
<Section padding="lg" border="bottom">
	<div class="col-span-12">
		<Reveal>
			<SectionHeader
				label="About"
				title="Precision Through Design"
				subtitle="Creating impactful digital experiences at the intersection of form and function."
				rule="after"
			/>
		</Reveal>
	</div>

	<div class="col-span-12 lg:col-span-8">
		<Reveal delay={100}>
			<TextBlock size="lg" opacity={0.8}>
				<p>
					I specialize in creating digital products that combine <strong>Swiss design principles</strong>
					with modern web technologies. Every project is built with attention to detail, mathematical
					precision, and a focus on user experience.
				</p>
				<p>
					My approach emphasizes clarity, hierarchy, and functional beauty. No unnecessary
					ornamentation—just pure, purposeful design.
				</p>
			</TextBlock>
		</Reveal>
	</div>
</Section>

<!-- Featured Work Section -->
<Section padding="lg" border="bottom">
	<div class="col-span-12">
		<Reveal>
			<SectionHeader label="Selected Work" title="Featured Projects" rule="after" />
		</Reveal>
	</div>

	<div class="col-span-12">
		<Reveal delay={100}>
			<Grid cols={2} gap="lg">
				<ProjectCard
					title="Project Alpha"
					description="Brand identity & web design for tech startup"
					year="2026"
					tags={['Branding', 'Web Design']}
					featured={true}
				/>

				<ProjectCard
					title="Project Beta"
					description="E-commerce platform redesign"
					year="2026"
					tags={['UX/UI', 'Development']}
				/>

				<ProjectCard
					title="Project Gamma"
					description="Mobile app design system"
					year="2025"
					tags={['Design System', 'Mobile']}
				/>

				<ProjectCard
					title="Project Delta"
					description="SaaS dashboard interface"
					year="2025"
					tags={['Interface', 'Data Viz']}
				/>

				<ProjectCard
					title="Project Epsilon"
					description="Marketing website for fintech company"
					year="2025"
					tags={['Web Design', 'Animation']}
				/>
			</Grid>
		</Reveal>
	</div>

	<div class="col-span-12 flex justify-center mt-12">
		<Reveal delay={200}>
			<Button variant="secondary" size="lg">View All Projects</Button>
		</Reveal>
	</div>
</Section>

<!-- CTA Section -->
<Section padding="xl" background="inverted">
	<div class="col-span-12 lg:col-span-8 lg:col-start-3 text-center">
		<Reveal>
			<h2 class="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">Let's Work Together</h2>
			<TextBlock size="lg" align="center" opacity={0.9} class="mb-8">
				<p>
					Available for freelance projects and collaborations. Let's create something exceptional.
				</p>
			</TextBlock>
			<Button variant="inverted" size="lg">Contact Me</Button>
		</Reveal>
	</div>
</Section>
