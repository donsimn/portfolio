<script>
  import {
    Hero,
    Section,
    SectionHeader,
    TextBlock,
    Reveal,
    MetadataCard,
    SpecsList,
    InfoBox,
  } from "$lib/components";
  import FullColumn from "$lib/components/FullColumn.svelte";
  import Table from "$lib/components/Table.svelte";
  import TwoColumn from "$lib/components/TwoColumn.svelte";

  const metadata = [
    { label: "Completed", value: "04.2025" },
    { label: "Category", value: "Hardware" },
    { label: "Type", value: "Personal Project" },
  ];
</script>

<svelte:head>
  <title>AI-Driven Problem Management Engine MVP</title>
  <meta
    name="description"
    content="During my summer internship at Roche I was given the oppertunity to design and code a system, that processes bulk incident data to cluster and analyze their root cause."
  />
</svelte:head>
<!-- Hero Section -->
<Hero
  title={"AI-Driven Problem Management Engine MVP"}
  image="/images/PM-code.png"
  subtitle="During my summer internship at Roche I was given the oppertunity to design and code a system, that processes bulk incident data to cluster and analyze their root cause."
/>
<!-- Project Overview -->
<Section padding="lg" border="bottom">
  <TwoColumn ratio="8-4">
    {#snippet left()}
      <Reveal>
        <TextBlock size="sm" opacity={0.8}>
          <p>
            Problem Management means manually reviewing large volumes of
            incident data to identify root causes. The goal of this project was
            automating this time consuming task using LLMs and a vector
            database.
          </p>
        </TextBlock>
      </Reveal>
    {/snippet}
    {#snippet right()}
      <Reveal delay={100}>
        <MetadataCard items={metadata} />
      </Reveal>
    {/snippet}
  </TwoColumn>
</Section>
