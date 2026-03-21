<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		children?: any;
		delay?: number;
		duration?: number;
		y?: number;
		threshold?: number;
		class?: string;
		once?: boolean;
	}

	let {
		children,
		delay = 0,
		duration = 600,
		y = 40,
		threshold = 0.1,
		class: className = '',
		once = true
	}: Props = $props();

	let element: HTMLDivElement;
	let isVisible = $state(false);
	let hasAnimated = $state(false);

	onMount(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						isVisible = true;
						hasAnimated = true;
						if (once) {
							observer.unobserve(element);
						}
					} else if (!once && hasAnimated) {
						isVisible = false;
					}
				});
			},
			{ threshold }
		);

		if (element) {
			observer.observe(element);
		}

		return () => {
			if (element) {
				observer.unobserve(element);
			}
		};
	});
</script>

<div
	bind:this={element}
	class="reveal {className}"
	style="
		--reveal-delay: {delay}ms;
		--reveal-duration: {duration}ms;
		--reveal-y: {y}px;
		opacity: {isVisible ? 1 : 0};
		transform: translateY({isVisible ? 0 : y}px);
		transition: opacity var(--reveal-duration) cubic-bezier(0.16, 1, 0.3, 1) var(--reveal-delay),
		            transform var(--reveal-duration) cubic-bezier(0.16, 1, 0.3, 1) var(--reveal-delay);
	"
>
	{@render children?.()}
</div>

<style>
	.reveal {
		will-change: opacity, transform;
	}
</style>
