<script lang="ts">
  import {
    Hero,
    Section,
    TextBlock,
    Reveal,
    TwoColumn,
    ThreeColumn,
    CenteredColumn,
    Image,
    SpecsList,
    InfoBox,
    DataRow,
    Separator,
    Spacer,
    ButtonGroup,
    Button,
  } from "$lib/components";

  const quickFacts = [
    { label: "Age", value: "17" },
    { label: "Location", value: "Basel, Switzerland" },
    { label: "Education", value: "Gymnasium Münchenstein" },
    { label: "Role", value: "TA @ TechLabs Basel" },
  ];
</script>

<svelte:head>
  <title>About — Simonas Zabulionis</title>
  <meta
    name="description"
    content="Second-year Gymnasium student and cybersecurity specialist in training."
  />
</svelte:head>

<!-- Hero -->
<Hero
  title="About"
  subtitle="Systems engineer, cyber defense scholar, and lifelong builder."
/>

<!-- Portrait + Intro -->
<Section padding="lg" border="bottom">
  <TwoColumn ratio="4-8">
    {#snippet left()}
      <Reveal>
        <Image
          src="/images/simonas1.jpg"
          alt="Simonas Zabulionis"
          aspectRatio="2/3"
          fit="cover"
          border={true}
          caption="Solothurn, 2026"
        />
      </Reveal>
    {/snippet}
    {#snippet right()}
      <Reveal delay={100}>
        <TextBlock size="lg">
          <p>
            At age 10 I wrote my first computer program on Notepad++. My passion
            for systems evolved quickly; Within a year I joined a development
            team and began building paid Discord bot features, where I got my
            first taste of professional software work.
          </p>
          <p>
            Now at 17, I am in my second year at Gymnasium Münchenstein while
            working as a teacher's assistant and all-rounder at TechLabs Basel.
            My focus has since shifted toward cybersecurity. I am heavily
            invested in the field and am currently sharpening my technical
            skills through the Swiss Army's SPARC program.
          </p>
        </TextBlock>
        <Separator spacing="sm" />
        <SpecsList items={quickFacts} />
      </Reveal>
    {/snippet}
  </TwoColumn>
</Section>

<!-- Extended Bio -->
<Section padding="lg" border="bottom">
  <CenteredColumn width="medium">
    <Reveal>
      <TextBlock size="md">
        <p>
          My technical foundation was built through years of self-directed study
          and hands-on project work. I am currently sharpening my offensive and
          defensive security skills through the Swiss Army's SPARC program — a
          rigorous pathway for young cyber defense specialists.
        </p>
        <p>
          Outside of security, I think carefully about systems design: how
          components compose, where failure surfaces emerge, and how to build
          things that are resilient by construction rather than by accident. I
          document this thinking through writing and share it here.
        </p>
      </TextBlock>
    </Reveal>
  </CenteredColumn>
</Section>

<!-- CTA -->
<Section padding="xl" background="inverted">
  <CenteredColumn width="medium">
    <Reveal>
      <TextBlock size="lg">
        <h2>Let's work together</h2>
        <p>
          Available for select projects, research collaborations, and
          internships. Get in touch to start a conversation.
        </p>
      </TextBlock>
      <Spacer size="sm" />
      <ButtonGroup align="left">
        <Button href="/contact" variant="inverted" size="lg">Contact</Button>
        <Button href="/portfolio" variant="ghost" size="lg">View Work</Button>
      </ButtonGroup>
    </Reveal>
  </CenteredColumn>
</Section>
