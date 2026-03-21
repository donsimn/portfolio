<script lang="ts">
	interface Props {
		href: string;
		children?: any;
		external?: boolean;
		class?: string;
	}

	let { href, children, external = false, class: className = '' }: Props = $props();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noopener noreferrer' : undefined}
	class="terminal-link {className}"
>
	<span class="link-text">{@render children?.()}</span>
	<span class="link-cursor">_</span>
</a>

<style>
	.terminal-link {
		position: relative;
		display: inline-flex;
		align-items: center;
		gap: 0.125rem;
		font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Courier New', monospace;
		font-weight: 500;
		text-decoration: none;
		color: inherit;
		transition: all 0.2s ease;
		border-bottom: 1px solid currentColor;
		padding-bottom: 2px;
	}

	.link-text {
		position: relative;
	}

	.link-cursor {
		display: inline-block;
		opacity: 0;
		animation: blink 1s step-end infinite;
		transition: opacity 0.2s ease;
	}

	.terminal-link:hover .link-cursor {
		opacity: 1;
	}

	.terminal-link:hover {
		border-bottom-width: 2px;
		padding-bottom: 1px;
	}

	/* Glitch effect on hover */
	.terminal-link:hover .link-text {
		animation: glitch 0.3s ease-in-out;
	}

	@keyframes blink {
		0%,
		50% {
			opacity: 1;
		}
		51%,
		100% {
			opacity: 0;
		}
	}

	@keyframes glitch {
		0% {
			transform: translate(0);
		}
		20% {
			transform: translate(-2px, 1px);
		}
		40% {
			transform: translate(2px, -1px);
		}
		60% {
			transform: translate(-1px, 2px);
		}
		80% {
			transform: translate(1px, -2px);
		}
		100% {
			transform: translate(0);
		}
	}
</style>
