<script>
  import {
    Hero,
    Section,
    SectionHeader,
    TextBlock,
    MetadataCard,
    SpecsList,
    InfoBox,
  } from "$lib/components";

  const metadata = [
    { label: "Completed", value: "03.2025" },
    { label: "Category", value: "Robotics" },
    { label: "Type", value: "Collaboration" },
  ];
</script>

<svelte:head>
  <title>Vex V5 Robotics OS</title>
  <meta
    name="description"
    content="BRGOS is the operating system I developed for our Vex V5 team Big Red Gears' robot, which competed twice at the Swiss National Robotics Competition."
  />
</svelte:head>
<!-- Hero Section -->
<Hero
  title="Vex V5 Robotics OS"
  subtitle="BRGOS is the operating system I developed for our Vex V5 team Big Red Gears' robot, which competed twice at the Swiss National Robotics Competition."
  image="/images/BRGOS/BRGOS1.jpeg"
/>

<!-- Project Overview -->
<Section padding="lg" border="bottom">
  <div class="col-span-12 lg:col-span-8">
    <TextBlock size="sm" opacity={0.8}>
      <p>
        My main role in the team was developing and maintaining the OS. I
        worked in a continuous feedback loop with our driver and engineer
        Jaques to refine the robots controls.
      </p>
      <p>
        I also helped designing and building the robot by diagnosing
        mechanical failure points, including stabilizing gears to prevent
        grinding under high torque.
      </p>
    </TextBlock>
  </div>

  <div class="col-span-12 lg:col-span-4">
    <MetadataCard items={metadata} />
  </div>
</Section>
