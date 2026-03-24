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
  <title>5" FPV Drone</title>
  <meta
    name="description"
    content="A hands-on build that evolved through rapid iteration: soldering, CAD changes, firmware tuning, radio upgrades, and a full power-system redesign."
  />
</svelte:head>
<!-- Hero Section -->
<Hero
  title={'5" FPV Drone'}
  image="/images/drone2.jpeg"
  subtitle="A hands-on build that evolved through rapid iteration: soldering, CAD changes, firmware tuning, radio upgrades, and a full power-system redesign."
/>

<!-- Project Overview -->
<Section padding="lg" border="bottom">
  <TwoColumn ratio="8-4">
    {#snippet left()}
      <Reveal>
        <TextBlock size="sm" opacity={0.8}>
          I began this project with an entry-level F4 FC/ESC stack and a
          3D-printed PLA frame. Carbon-fiber PLA prints, an ELRS radio and UART
          receiver, a Walksnail Avatar HD video system, and ultimately a used 5"
          carbon frame with 1800KV motors and 6S batteries were all added to the
          build over the course of several months.
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

<Section padding="lg" border="bottom">
  <FullColumn>
    <Reveal>
      <SectionHeader title="Specs Evolution" />
    </Reveal>
  </FullColumn>
  <TwoColumn>
    {#snippet left()}
      <TextBlock opacity={0.8}>
        The drone went through three major iterations, each pushing performance
        and complexity further. The table below shows how the build evolved from
        an early 3D-printed prototype to a fully capable 5" FPV drone,
        highlighting the changes in frame, power system, electronics, and
        control that enabled each step forward.
      </TextBlock>
    {/snippet}
    {#snippet right()}
      <Table
        headers={[
          "Power System",
          "Frame",
          "Flight Controller",
          "ESC",
          "Motors",
          "Radio",
          "Video",
          "Safety",
        ]}
        rows={[
          [
            "3s",
            "PLA",
            "F4 V3s Plus",
            "45A No-Name",
            "JMT Mini 3100KV",
            "PPM",
            "None",
            "None",
          ],
          [
            "3s",
            "Carbon Fiber PLA",
            "F4 V3s Plus",
            "45A No-Name",
            "JMT Mini 3100KV",
            "CRSF/ELRS",
            "None",
            "None",
          ],
          [
            "6s",
            "5-inch Carbon Fiber",
            "SpeedyBee F405 V4",
            "55A SpeedyBee",
            "XING 1800KV",
            "CSRF/ELRS",
            "Walksnail Avatar HD Pro",
            "Buzzer, Strobe- and LED-lights",
          ],
        ]}
      ></Table>
    {/snippet}
  </TwoColumn>
</Section>
