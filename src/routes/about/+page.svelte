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
    ContactFooter,
  } from "$lib/components";

  const quickFacts = [
    { label: "Age", value: "17" },
    { label: "Location", value: "Basel, Switzerland" },
    { label: "Education", value: "Gymnasium Münchenstein" },
    { label: "Role", value: "TA @ TechLabs Basel" },
  ];

  const languages = [
    { label: "German", value: "Native" },
    { label: "English", value: "Fluent" },
    { label: "Swiss German", value: "Fluent" },
    { label: "Lithuanian", value: "Mother tongue" },
    { label: "French", value: "Intermediate" },
    { label: "Russian", value: "Beginner" },
  ];
</script>

<svelte:head>
  <title>About // Simonas Zabulionis</title>
  <meta
    name="description"
    content="Second-year Gymnasium student and cybersecurity specialist in training."
  />
</svelte:head>

<!-- Hero -->
<Hero title="About" subtitle="Second-year student at Gymnasium Münchenstein" />

<!-- Intro -->
<Section padding="lg" border="bottom">
  <CenteredColumn width="medium">
    <TextBlock size="lg">
      <p>
        At age 12 I wrote my first computer program on Notepad++. My passion for
        systems evolved quickly; Within a year I joined a development team and
        began building paid Discord bot features, where I got my first taste of
        professional software work.
      </p>
      <p>
        Now at 17, I am in my second year at Gymnasium Münchenstein while
        working as a teacher's assistant and all-rounder at TechLabs Basel. My
        focus has since shifted toward cybersecurity, where I continue to
        develop my technical skills.
      </p>
    </TextBlock>
    <Separator spacing="sm" />
    <SpecsList items={quickFacts} />
    <p class="font-mono text-xs uppercase tracking-widest opacity-40 mt-6 mb-3">
      Languages
    </p>
    <SpecsList items={languages} />
  </CenteredColumn>
</Section>

<!-- CTA -->
<ContactFooter note="basel, ch · open to projects, research & internships" />
