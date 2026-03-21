<script>
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
		Spacer
	} from '$lib/components';

	const metadata = [
		{ label: 'Published', value: '2026.03.21' },
		{ label: 'Category', value: 'Security' },
		{ label: 'Reading Time', value: '12 min' }
	];

	const codeExample = `#include <string.h>

void vulnerable_function(char *input) {
    char buffer[64];
    strcpy(buffer, input);  // No bounds checking
    printf("Buffer contains: %s\\n", buffer);
}

int main(int argc, char *argv[]) {
    if (argc > 1) {
        vulnerable_function(argv[1]);
    }
    return 0;
}`;
</script>

<svelte:head>
	<title>Demystifying Buffer Overflows — Blog</title>
	<meta
		name="description"
		content="A technical breakdown of stack-based buffer overflow vulnerabilities and their exploitation mechanics."
	/>
</svelte:head>

<Hero
	title="Demystifying Buffer Overflows"
	subtitle="A technical breakdown of stack-based buffer overflow vulnerabilities, their exploitation mechanics, and modern mitigation strategies."
/>

<Section padding="lg" border="bottom">
	<TwoColumn ratio="8-4">
		{#snippet left()}
			<Reveal>
				<TextBlock size="lg" opacity={0.8}>
					<p>
						Buffer overflow vulnerabilities represent one of the most fundamental and historically
						significant classes of security flaws in software systems. Despite being well-understood
						for decades, they continue to appear in modern codebases, making them a critical topic for
						security professionals and systems programmers.
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

<Section padding="lg" border="bottom">
	<FullColumn>
		<Reveal>
			<SectionHeader
				title="Technical Deep Dive"
				subtitle="Understanding the mechanics of stack-based buffer overflows"
			/>
		</Reveal>
	</FullColumn>

	<TwoColumn ratio="6-6">
		{#snippet left()}
			<Reveal delay={100}>
				<TextBlock opacity={0.8}>
					<h3>The Stack Architecture</h3>
					<p>
						The call stack is a fundamental data structure in program execution. Each function call
						creates a new stack frame containing local variables, saved registers, and the return
						address—the instruction pointer that determines where execution resumes after the function
						completes.
					</p>
					<p>
						When a buffer overflow occurs, data written beyond the allocated buffer boundary can
						overwrite adjacent memory locations, including critical control data like the return
						address. This corruption allows attackers to redirect program execution to arbitrary code.
					</p>
				</TextBlock>
			</Reveal>
		{/snippet}
		{#snippet right()}
			<Reveal delay={200}>
				<TextBlock opacity={0.8}>
					<h3>Exploitation Mechanics</h3>
					<p>
						Classic exploitation involves crafting input that overflows a buffer, overwrites the saved
						return address, and redirects execution to attacker-controlled shellcode. The payload
						structure typically includes a NOP sled, shellcode, and the target return address.
					</p>
					<p>
						Modern exploitation has evolved significantly due to security mitigations. Techniques like
						return-oriented programming (ROP) chain together existing code snippets to bypass
						non-executable stack protections, while information leaks defeat address space layout
						randomization (ASLR).
					</p>
				</TextBlock>
			</Reveal>
		{/snippet}
	</TwoColumn>

	<Spacer size="md" />

	<FullColumn>
		<Reveal delay={300}>
			<CodeBlock title="Example: Vulnerable C Code" code={codeExample} language="c" />
		</Reveal>
	</FullColumn>
</Section>

<Section padding="lg" border="bottom">
	<FullColumn>
		<Reveal>
			<SectionHeader
				title="Mitigation Strategies"
				subtitle="Modern defenses against buffer overflow attacks"
			/>
		</Reveal>
	</FullColumn>

	<ThreeColumn>
		{#snippet col1()}
			<Reveal delay={100}>
				<TextBlock opacity={0.8}>
					<h3>Stack Canaries</h3>
					<p>
						Compiler-inserted values placed between buffers and control data. Any overflow attempting
						to reach the return address must corrupt the canary, which is verified before function
						return, terminating execution if modified.
					</p>
				</TextBlock>
			</Reveal>
		{/snippet}
		{#snippet col2()}
			<Reveal delay={200}>
				<TextBlock opacity={0.8}>
					<h3>ASLR & DEP</h3>
					<p>
						Address Space Layout Randomization randomizes memory addresses, making exploit reliability
						difficult. Data Execution Prevention marks stack and heap memory as non-executable,
						preventing direct shellcode execution.
					</p>
				</TextBlock>
			</Reveal>
		{/snippet}
		{#snippet col3()}
			<Reveal delay={300}>
				<TextBlock opacity={0.8}>
					<h3>Safe Functions</h3>
					<p>
						Using bounds-checked alternatives like strncpy, snprintf, and modern memory-safe languages
						(Rust, Go) eliminates entire vulnerability classes. Static analysis tools can identify
						dangerous function usage during development.
					</p>
				</TextBlock>
			</Reveal>
		{/snippet}
	</ThreeColumn>
</Section>

<Section padding="lg">
	<CenteredColumn width="medium">
		<Reveal>
			<TextBlock size="lg" opacity={0.8}>
				<h3>Moving Forward</h3>
				<p>
					While modern operating systems and compilers implement multiple layers of protection,
					buffer overflows remain relevant. Understanding their mechanics is essential for security
					researchers, systems programmers, and anyone working with low-level code.
				</p>
				<p>
					The evolution from simple stack smashing to sophisticated ROP chains demonstrates the
					ongoing arms race between attackers and defenders. Staying current with exploitation
					techniques and mitigation strategies is crucial for building secure systems.
				</p>
			</TextBlock>
		</Reveal>
	</CenteredColumn>
</Section>
