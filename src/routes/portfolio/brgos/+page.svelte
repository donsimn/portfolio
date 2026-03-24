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
    <Reveal>
      <TextBlock size="sm" opacity={0.8}>
        <p>
          My main function in the team was developing and maintaining the OS. I
          worked in a continuous feedback loop with our driver and engineer
          Jaques to refine the robots controls.
        </p>
        <p>
          Beyond software, I contributed directly to the mechanical engineering
          of the robot. I helped diagnosing mechanical failure points and
          implementing design improvements, including stabilizing gear systems
          to prevent grinding under high torque.
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
