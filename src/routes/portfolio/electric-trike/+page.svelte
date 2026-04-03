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
          I was bored on my phone browsing through Facebook Marketplace when a
          particular listing caught my attention. Two adult-sized drift trikes
          made for riding down hills for only 200 CHF!
        </p>
        <p>
          That was the start of a 4 month journey full of late-night soldering,
          prototyping, wiring and researching, which resulted in a fully
          electric trike, balancing comfort, performace and reliability.
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
        <p>
          I categorised my upgrades into 3 main stages. The prototype was built
          entirely from scrap parts in my basement and I was just focused on
          getting the trike to drive for the first time.<br /> The main upgades
          of the next stage, were a 48V Li-ion battery and a 1000W direct-drive
          motor. With the huge power increase I had to make sure I wasn't soley
          relying on rim brakes, so I installed disc brakes.<br /> The final
          trike was equipped with a
          <a href="https://ebikes.ca/product-info/grin-products/baserunner.html"
            >Grin Technologies Baserunner</a
          >
          which allowed for regenerative breaking and a 10km/h speed boost through
          a technique called <i>Field Weakening</i>.
        </p>
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
