<script>
  import {
    Hero,
    Section,
    SectionHeader,
    TextBlock,
    Reveal,
    Button,
    ButtonGroup,
    FullColumn,
    TwoColumn,
    CenteredColumn,
    Separator,
  } from "$lib/components";

  /** @type {import('./$types').PageData} */
  let { data } = $props();

  const { projects, posts } = data;
</script>

<svelte:head>
  <title>Portfolio — Simonas Z</title>
  <meta
    name="description"
    content="Designer and developer focused on Swiss design principles, precision, and functional beauty."
  />
</svelte:head>

<Hero
  title="Simonas Zabulionis"
  subtitle="Systems Engineer / Cyber Defense Scholar"
  height="tall"
>
  <ButtonGroup align="left" gap="md">
    <Button variant="primary" size="md" href="/portfolio">View Work</Button>
    <Button variant="secondary" size="md" href="/contact">Get in Touch</Button>
  </ButtonGroup>
</Hero>

<Section padding="lg" border="bottom">
  <FullColumn>
    <Reveal>
      <SectionHeader
        title="About"
        subtitle="Creating precise, functional digital experiences"
        rule="after"
      />
    </Reveal>
  </FullColumn>

  <TwoColumn ratio="8-4">
    {#snippet left()}
      <Reveal delay={100}>
        <TextBlock size="lg" opacity={0.8}>
          <p>
            I specialize in creating digital products that combine Swiss design
            principles with modern web technologies. Every project is built with
            attention to detail, mathematical precision, and a focus on user
            experience.
          </p>
          <p>
            My approach emphasizes clarity, hierarchy, and functional beauty. No
            unnecessary ornamentation—just pure, purposeful design.
          </p>
        </TextBlock>
      </Reveal>
    {/snippet}
    {#snippet right()}
      <Reveal delay={200}>
        <TextBlock opacity={0.6}>
          <p>
            <strong>Expertise</strong><br />
            Brand Identity<br />
            Web Design<br />
            Development<br />
            Design Systems
          </p>
        </TextBlock>
      </Reveal>
    {/snippet}
  </TwoColumn>
</Section>

<Section padding="lg" border="bottom">
  <FullColumn>
    <Reveal>
      <SectionHeader
        title="Selected Work"
        subtitle="Featured projects"
        rule="after"
      />
    </Reveal>
  </FullColumn>

  <FullColumn>
    <Reveal delay={100}>
      <div>
        {#each projects as project, index}
          <article>
            <a href="/portfolio/{project.slug}">
              <TwoColumn ratio="6-6">
                {#snippet left()}
                  <TextBlock>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </TextBlock>
                {/snippet}
                {#snippet right()}
                  <TextBlock opacity={0.6}>
                    <p>
                      {project.year}<br />
                      {#if project.client}
                        {project.client}<br />
                      {/if}
                      {#if project.tags}
                        {project.tags.join(", ")}
                      {/if}
                    </p>
                  </TextBlock>
                {/snippet}
              </TwoColumn>
            </a>
          </article>
          {#if index < projects.length - 1}
            <Separator />
          {/if}
        {/each}
      </div>
    </Reveal>
  </FullColumn>

  <CenteredColumn width="narrow">
    <Reveal delay={300}>
      <ButtonGroup align="center">
        <Button variant="secondary" size="lg" href="/portfolio"
          >View All Projects</Button
        >
      </ButtonGroup>
    </Reveal>
  </CenteredColumn>
</Section>

<Section padding="lg" border="bottom">
  <FullColumn>
    <Reveal>
      <SectionHeader
        title="Recent Writing"
        subtitle="Latest blog posts"
        rule="after"
      />
    </Reveal>
  </FullColumn>

  <FullColumn>
    <Reveal delay={100}>
      <div>
        {#each posts as post, index}
          <article>
            <a href="/blog/{post.slug}">
              <TwoColumn ratio="8-4">
                {#snippet left()}
                  <TextBlock>
                    <h3>{post.title}</h3>
                    <p>{post.description}</p>
                  </TextBlock>
                {/snippet}
                {#snippet right()}
                  <TextBlock opacity={0.6}>
                    <p>
                      {post.date}<br />
                      {#if post.tags}
                        {post.tags.join(", ")}
                      {/if}
                    </p>
                  </TextBlock>
                {/snippet}
              </TwoColumn>
            </a>
          </article>
          {#if index < posts.length - 1}
            <Separator />
          {/if}
        {/each}
      </div>
    </Reveal>
  </FullColumn>

  <CenteredColumn width="narrow">
    <Reveal delay={300}>
      <ButtonGroup align="center">
        <Button variant="secondary" size="lg" href="/blog"
          >View All Posts</Button
        >
      </ButtonGroup>
    </Reveal>
  </CenteredColumn>
</Section>

<Section padding="xl" background="inverted">
  <CenteredColumn width="medium">
    <Reveal>
      <TextBlock size="xl" align="center">
        <h2>Let's Work Together</h2>
        <p>Available for select projects and collaborations.</p>
      </TextBlock>
      <ButtonGroup align="center">
        <Button variant="inverted" size="lg" href="/contact">Contact Me</Button>
      </ButtonGroup>
    </Reveal>
  </CenteredColumn>
</Section>
