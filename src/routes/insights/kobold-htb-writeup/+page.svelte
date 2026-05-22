<script>
  import { isMobile } from "$lib";
  import {
    Hero,
    Section,
    SectionHeader,
    TextBlock,
    Reveal,
    MetadataCard,
    CodeBlock,
    TwoColumn,
    ThreeColumn,
    FullColumn,
    CenteredColumn,
    Spacer,
  } from "$lib/components";
  import Image from "$lib/components/Image.svelte";
  import {
    opener,
    methodology,
    recon,
    recon_code_0,
    initial_access,
    initial_access_code_0,
    privilege_escalation,
    the_oops,
    key_insight,
  } from "obsidian:kobold-htb-writeup";

  const metadata = [
    { label: "Published", value: "22.05.2026" },
    { label: "Category", value: "Writeup" },
    { label: "Machine", value: "Kobold" },
    { label: "Reading Time", value: "2 min" },
  ];
</script>

<svelte:head>
  <title>Kobold HTB Writeup</title>
  <meta name="description" content="" />
</svelte:head>

<Hero
  title="Kobold HTB Writeup"
  subtitle="A documentation of my tought process and approach to solving Kobold on HackTheBox."
/>

<Section padding="sm" border="bottom">
  <TwoColumn ratio="8-4">
    {#snippet left()}{/snippet}
    {#snippet right()}
      <Reveal delay={100}>
        <MetadataCard items={metadata} />
      </Reveal>
    {/snippet}
  </TwoColumn>
</Section>

<Section padding="lg" border="bottom">
  <FullColumn>
    <TextBlock size="md" opacity={0.8}>
      {@html opener}
    </TextBlock>
  </FullColumn>
  <Spacer />
  <CenteredColumn>
    <TextBlock size="md" opacity={0.8}>
      <h3>Methodology</h3>
      {@html methodology}
    </TextBlock>
  </CenteredColumn>
</Section>
<Section>
  {#if $isMobile}
    <CenteredColumn>
      <TextBlock size="md" opacity={0.8}>
        <h3>Reconnaissance</h3>
        {@html recon.split("<br>")[0]}
      </TextBlock>
      <br />
      <CodeBlock
        title="NMAP SCAN OUTPUT"
        code={recon_code_0.code}
        fontSize="xs"
      />
      <TextBlock size="md" opacity={0.8}>
        {@html recon.split("<br>").splice(1).join("<br>")}
      </TextBlock>
    </CenteredColumn>
  {:else}
    <TwoColumn ratio="6-6">
      {#snippet left()}
        <TextBlock size="md" opacity={0.8}>
          <h3>Reconnaissance</h3>
          {@html recon}
        </TextBlock>
      {/snippet}
      {#snippet right()}
        <CodeBlock
          title="NMAP SCAN OUTPUT"
          code={recon_code_0.code}
          fontSize="xs"
        />
      {/snippet}
    </TwoColumn>
  {/if}
</Section>
<Section>
  <CenteredColumn>
    <TextBlock size="md" opacity={0.8}>
      <h3>Initial Access</h3>

      {@html initial_access.split("<br>")[0]}
    </TextBlock>
    <br />
    <CodeBlock
      title="INITIAL PAYLOAD"
      code={initial_access_code_0.code}
      language="json"
      fontSize="xs"
    />
    <TextBlock size="md" opacity={0.8}>
      {@html initial_access.split("<br>").splice(1).join("<br>")}
    </TextBlock>
  </CenteredColumn>
</Section>
<Section>
  <TwoColumn>
    {#snippet left()}
      <TextBlock size="md" opacity={0.8}>
        <h3>Privilege Escalation</h3>
        {@html privilege_escalation}
      </TextBlock>
    {/snippet}
    {#snippet right()}
      <TextBlock size="md" opacity={0.8}>
        <h3>The Oops</h3>
        {@html the_oops}
      </TextBlock>
    {/snippet}
  </TwoColumn>
</Section>
<Section>
  <CenteredColumn>
    <TextBlock size="md" opacity={0.8}>
      <h3>Key Insight</h3>
      {@html key_insight}
    </TextBlock>
  </CenteredColumn>
</Section>
