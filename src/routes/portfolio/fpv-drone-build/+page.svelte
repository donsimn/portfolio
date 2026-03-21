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
    DataRow,
    TwoColumn,
    FullColumn,
    CenteredColumn,
  } from "$lib/components";

  const metadata = [
    { label: "Completed", value: "2026.03" },
    { label: "Category", value: "Hardware" },
    { label: "Type", value: "Personal Project" },
    { label: "Status", value: "V2 Complete" },
  ];

  const hardwareSpecs = [
    { label: "Frame", value: '5" Carbon Fiber (220mm)' },
    { label: "Flight Controller", value: "F4 Flight Controller" },
    { label: "ESC", value: "35A 4-in-1 BLHeli_S" },
    { label: "Motors", value: "2306 2400KV Brushless" },
    { label: "VTX", value: "800mW 5.8GHz Video TX" },
    { label: "Camera", value: "Runcam Micro Swift 3" },
    { label: "Receiver", value: "FrSky XM+ (SBUS)" },
  ];
</script>

<svelte:head>
  <title>Custom FPV Racing Drone Build — Portfolio</title>
  <meta
    name="description"
    content="Ground-up custom FPV drone build featuring hand-soldered components and iterative hardware refinement."
  />
</svelte:head>

<Hero
  title="Custom FPV Racing Drone Build"
  subtitle="Ground-up custom FPV drone build featuring hand-soldered components, firmware tuning, and iterative hardware refinement from V1 to V2."
/>

<Section padding="lg" border="bottom">
  <TwoColumn ratio="8-4">
    {#snippet right()}
      <Reveal delay={100}>
        <MetadataCard items={metadata} />
      </Reveal>
    {/snippet}
  </TwoColumn>

  <FullColumn>
    <Reveal>
      <TextBlock size="lg" opacity={0.8}>
        <p>
          This project documents the complete build process of a custom 5-inch
          freestyle FPV racing drone, from initial component selection through
          two major hardware iterations. Every connection was hand-soldered,
          every parameter hand-tuned, resulting in a high-performance aircraft
          capable of aggressive maneuvers and cinematic flight.
        </p>
      </TextBlock>
    </Reveal>
  </FullColumn>
</Section>

<Section padding="lg" border="bottom">
  <FullColumn>
    <Reveal>
      <SectionHeader
        title="Hardware Stack"
        subtitle="Component selection and assembly process"
      />
    </Reveal>
  </FullColumn>

  <TwoColumn ratio="6-6">
    {#snippet left()}
      <Reveal delay={100}>
        <TextBlock>
          <h3>Core Components</h3>
        </TextBlock>
        <SpecsList items={hardwareSpecs} />
      </Reveal>
    {/snippet}
    {#snippet right()}
      <Reveal delay={200}>
        <TextBlock opacity={0.8}>
          <h3>Build Process</h3>
          <p>
            The build began with careful frame assembly, ensuring all arms were
            secure and aligned. Each component was meticulously positioned to
            optimize weight distribution and minimize cable lengths—critical
            factors for flight performance and durability.
          </p>
          <p>
            All connections were hand-soldered using lead-free solder and proper
            flux technique. Power distribution required careful planning: the
            battery leads run through the frame to a central PDB, which feeds
            the ESC stack and VTX through heavy gauge wire rated for 35A
            continuous.
          </p>
          <p>
            Signal wiring proved most challenging. The SBUS receiver, Betaflight
            OSD, and camera all required precise UART connections. A single
            reversed polarity or crossed signal line would prevent proper
            initialization—errors caught and corrected through systematic
            testing.
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
        title="Software Configuration"
        subtitle="Betaflight tuning and optimization"
      />
    </Reveal>
  </FullColumn>

  <TwoColumn ratio="8-4">
    {#snippet left()}
      <Reveal delay={100}>
        <TextBlock opacity={0.8}>
          <p>
            Running Betaflight 4.3, the flight controller required extensive
            configuration. Initial setup involved configuring UART ports for the
            receiver and OSD, setting motor direction and ESC protocol
            (DSHOT600), and calibrating the accelerometer.
          </p>
          <p>
            PID tuning consumed the majority of configuration time. Starting
            with conservative default values, I progressively increased P and D
            gains while monitoring motor temperature and gyro noise in Blackbox
            logs. The goal: tight control authority without oscillation or
            excessive heat buildup.
          </p>
          <p>
            Filter configuration proved equally critical. Modern Betaflight uses
            dynamic notch filters to eliminate motor noise from gyro data.
            Proper filter tuning reduced propwash oscillation significantly,
            resulting in smoother footage and more predictable handling
            characteristics.
          </p>
        </TextBlock>
      </Reveal>
    {/snippet}
    {#snippet right()}
      <Reveal delay={200}>
        <InfoBox title="Final PID Values">
          <DataRow>ROLL: P=42 I=65 D=35</DataRow>
          <DataRow>PITCH: P=45 I=70 D=38</DataRow>
          <DataRow>YAW: P=38 I=60 D=0</DataRow>
          <DataRow separator muted>Rates: 720°/s max</DataRow>
          <DataRow muted>RC Expo: 0.25</DataRow>
          <DataRow muted>Super Rate: 0.70</DataRow>
        </InfoBox>
      </Reveal>
    {/snippet}
  </TwoColumn>
</Section>

<Section padding="lg" border="bottom">
  <FullColumn>
    <Reveal>
      <SectionHeader
        title="V1 vs V2 Iterations"
        subtitle="Evolution through testing and failure"
      />
    </Reveal>
  </FullColumn>

  <TwoColumn ratio="6-6">
    {#snippet left()}
      <Reveal delay={100}>
        <TextBlock opacity={0.8}>
          <h3>Version 1: Initial Build</h3>
          <p>
            The V1 configuration prioritized cost over performance. Budget
            motors and a generic frame resulted in mediocre flight
            characteristics. Excessive motor vibration contaminated gyro data,
            requiring aggressive filtering that introduced latency.
          </p>
          <p>
            Flight testing revealed several issues: arm flex during aggressive
            maneuvers, VTX overheating due to poor airflow, and insufficient
            current capacity causing voltage sag under full throttle. These
            limitations defined the V2 upgrade path.
          </p>
          <p>
            Crash damage accumulated quickly. Fragile frame arms cracked after
            moderate impacts, requiring repairs that compromised structural
            integrity. The decision was made: complete hardware refresh.
          </p>
        </TextBlock>
      </Reveal>
    {/snippet}
    {#snippet right()}
      <Reveal delay={200}>
        <TextBlock opacity={0.8}>
          <h3>Version 2: Performance Upgrade</h3>
          <p>
            V2 addressed every V1 weakness. A premium carbon fiber frame with
            5mm arms eliminated flex entirely. High-quality motors with tighter
            manufacturing tolerances reduced vibration by an order of magnitude,
            enabling more aggressive filtering profiles.
          </p>
          <p>
            Upgraded ESCs with 35A continuous rating eliminated voltage sag.
            Improved VTX mounting with dedicated heatsinking solved thermal
            issues. The result: consistent performance across entire battery
            packs, even during aggressive freestyle.
          </p>
          <p>
            Flight characteristics transformed completely. Locked-in feel,
            instant response to stick inputs, and dramatically improved propwash
            handling. The V2 configuration represents the culmination of
            iterative refinement driven by real-world testing and failure
            analysis.
          </p>
        </TextBlock>
      </Reveal>
    {/snippet}
  </TwoColumn>
</Section>

<Section padding="lg">
  <CenteredColumn width="medium">
    <Reveal>
      <TextBlock size="lg" opacity={0.8}>
        <h3>Key Learnings</h3>
        <p>
          This project reinforced fundamental engineering principles: measure
          twice, solder once; systematic testing beats intuition; quality
          components justify their cost; and iteration is the path to
          optimization.
        </p>
        <p>
          Beyond technical skills, the build developed patience and precision.
          Hand-soldering tiny pads under magnification, debugging obscure
          firmware issues, and analyzing Blackbox logs all require meticulous
          attention to detail—skills transferable to any hardware or systems
          engineering domain.
        </p>
      </TextBlock>
    </Reveal>
  </CenteredColumn>
</Section>
