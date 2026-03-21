<script lang="ts">
	interface Props {
		code: string;
		language?: string;
		title?: string;
		showLineNumbers?: boolean;
		class?: string;
	}

	let {
		code,
		language = 'javascript',
		title,
		showLineNumbers = true,
		class: className = ''
	}: Props = $props();

	let copied = $state(false);

	function copyToClipboard() {
		navigator.clipboard.writeText(code);
		copied = true;
		setTimeout(() => {
			copied = false;
		}, 2000);
	}

	// Split code into lines for line numbers
	const lines = $derived(code.trim().split('\n'));
</script>

<div class="code-block-wrapper {className}">
	<!-- Terminal Header -->
	<div
		class="terminal-header flex items-center justify-between px-4 py-2 bg-gray-900 dark:bg-gray-100 border-b-2 border-black dark:border-white"
	>
		<div class="flex items-center gap-2">
			{#if title}
				<span class="font-mono text-xs text-gray-400 dark:text-gray-600 uppercase tracking-wider">
					{title}
				</span>
			{:else}
				<span class="font-mono text-xs text-gray-400 dark:text-gray-600 uppercase tracking-wider">
					{language}
				</span>
			{/if}
		</div>

		<!-- Copy Button -->
		<button
			onclick={copyToClipboard}
			class="copy-btn font-mono text-xs uppercase tracking-wider px-3 py-1 border border-gray-700 dark:border-gray-300 text-gray-400 dark:text-gray-600 hover:bg-gray-800 hover:text-white dark:hover:bg-gray-200 dark:hover:text-black transition-colors"
		>
			{copied ? '[COPIED]' : '[COPY]'}
		</button>
	</div>

	<!-- Code Content -->
	<div class="code-content bg-black dark:bg-white border-2 border-black dark:border-white">
		<pre
			class="font-mono text-sm leading-relaxed p-4 overflow-x-auto text-green-400 dark:text-green-600"><code>{#if showLineNumbers}{#each lines as line, i}<span class="line-number select-none opacity-40">{String(i + 1).padStart(2, ' ')} </span>{line}
{/each}{:else}{code}{/if}</code></pre>
	</div>
</div>

<style>
	.code-block-wrapper {
		width: 100%;
		margin: 1.5rem 0;
	}

	.terminal-header {
		font-weight: 500;
	}

	.copy-btn {
		cursor: pointer;
		transition: all 0.2s ease;
	}

	.copy-btn:active {
		transform: translateY(1px);
	}

	.code-content pre {
		margin: 0;
		background: transparent;
	}

	.code-content code {
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Courier New', monospace;
		text-shadow: 0 0 2px rgba(34, 197, 94, 0.3);
	}

	:global(.dark) .code-content code {
		text-shadow: 0 0 2px rgba(22, 163, 74, 0.2);
	}

	.line-number {
		display: inline-block;
		margin-right: 1rem;
		min-width: 2ch;
		text-align: right;
	}
</style>
