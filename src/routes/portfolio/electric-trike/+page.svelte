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
    FullColumn,
    Table,
  } from "$lib/components";
  import CenteredColumn from "$lib/components/CenteredColumn.svelte";
  import TwoColumn from "$lib/components/TwoColumn.svelte";

  const metadata = [
    { label: "Completed", value: "03.2024" },
    { label: "Category", value: "EV Systems Design" },
    { label: "Type", value: "Personal Project" },
  ];
</script>

<svelte:head>
  <title>Electric Trike</title>
  <meta
    name="description"
    content="Mechanical fixes, battery and power-system upgrades, advanced controller tuning, and a lot of late-night soldering."
  />
</svelte:head>
<!-- Hero Section -->
<Hero
  title="Electric Trike"
  subtitle="Mechanical fixes, battery and power-system upgrades, advanced controller tuning, and a lot of late-night soldering."
  image="/images/trike2.jpeg"
/>

<!-- Project Overview -->
<Section padding="lg" border="bottom">
  <div class="col-span-12 lg:col-span-8">
    <Reveal>
      <TextBlock size="sm" opacity={0.8}>
        <p>
          I began with a low-cost drift trike that I discovered on Facebook
          Marketplace and quickly refined it into a dependable, quick electric
          trike.
        </p>
        <p>
          A 48V 20Ah system with a 1000W direct-drive motor, a high-end
          programmable BLDC controller, appropriate disk brakes, lights, and
          safety features replaced the strapped-on 36V pack and 500W geared hub
          motor. CAD brackets, soldering, power wiring and firmware/config
          tuning were among the tasks.
        </p>
      </TextBlock>
    </Reveal>
  </div>

  <div class="col-span-12 lg:col-span-4">
    <Reveal delay={100}>
      <MetadataCard items={metadata} />
    </Reveal>
  </div>
</Section>

<Section padding="lg" border="bottom">
  <FullColumn>
    <Reveal>
      <SectionHeader title="Specs Evolution" />
    </Reveal>
  </FullColumn>
  <TwoColumn>
    {#snippet left()}
      <TextBlock opacity={0.8}>
        The trike went through several iterations, each improving reliability,
        safety, and performance. The table below shows the evolution from a
        rough prototype to a fully capable electric vehicle with proper safety
        systems.
      </TextBlock>
    {/snippet}
    {#snippet right()}
      <Table
        headers={[
          "Stage",
          "Power System",
          "Motor",
          "Controller",
          "Brakes",
          "Safety Features",
        ]}
        rows={[
          [
            "Prototype",
            "36V strapped battery",
            "500W geared hub",
            "Cheap controller",
            "Rim brakes",
            "None",
          ],
          [
            "Mid-upgrade",
            "48V 20Ah Li-ion",
            "1000W direct-drive",
            "Basic 48V controller",
            "Disk brake",
            "Basic lighting",
          ],
          [
            "Final",
            "48V 20Ah + backup",
            "1000W direct-drive",
            "Grin programmable BLDC",
            "Disk brake",
            "LED lights, horn, buzzer, switches",
          ],
        ]}
      ></Table>
    {/snippet}
  </TwoColumn>
</Section>
