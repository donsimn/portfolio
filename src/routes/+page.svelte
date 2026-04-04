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
    Table,
    AchievementList,
    BentoAchievements,
    Spacer,
  } from "$lib/components";

  /** @type {import('./$types').PageData} */
  let { data } = $props();

  const { projects, posts } = data;
</script>

<svelte:head>
  <title>Portfolio — Simonas Z</title>
  <link rel="prefetch" as="image" href="/images/simonas1.jpg" />
</svelte:head>

<Hero
  title="Simonas Zabulionis"
  subtitle="Student / Cybersecurity / Applied Engineering"
  height="tall"
>
  <ButtonGroup align="left" gap="md">
    <Button variant="primary" size="md" href="/portfolio">View Work</Button>
    <Button variant="secondary" size="md" href="/contact">Get in Touch</Button>
  </ButtonGroup>
</Hero>

<Section padding="lg" border="bottom">
  <FullColumn>
    <SectionHeader
      title="Recognition & Experience"
      subtitle="Competitions, programs, and milestones"
      rule="after"
    />
  </FullColumn>

  <FullColumn>
    <BentoAchievements />
  </FullColumn>
</Section>

<Section padding="lg" border="bottom">
  <FullColumn>
    <SectionHeader
      title="Selected Work"
      subtitle="Featured projects"
      rule="after"
    />
  </FullColumn>

  <FullColumn>
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
  </FullColumn>

  <CenteredColumn width="narrow">
    <ButtonGroup align="center">
      <Button variant="secondary" size="lg" href="/portfolio"
        >View All Projects</Button
      >
    </ButtonGroup>
  </CenteredColumn>
</Section>

<!--
<Section padding="lg" border="bottom">
  <FullColumn>
      <SectionHeader
        title="Recent Writing"
        subtitle="Latest blog posts"
        rule="after"
      />
  </FullColumn>

  <FullColumn>
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
  </FullColumn>

  <CenteredColumn width="narrow">
      <ButtonGroup align="center">
        <Button variant="secondary" size="lg" href="/blog"
          >View All Posts</Button
        >
      </ButtonGroup>
  </CenteredColumn>
</Section>
-->

<Section padding="xl" background="inverted">
  <CenteredColumn width="medium">
    <TextBlock size="xl" align="center">
      <h2>Let's Work Together</h2>
      <p>Available for select projects and collaborations.</p>
    </TextBlock>
    <Spacer size="md" />
    <ButtonGroup align="center">
      <Button variant="inverted" size="lg" href="/contact">Contact Me</Button>
    </ButtonGroup>
  </CenteredColumn>
</Section>
