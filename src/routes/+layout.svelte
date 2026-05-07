<script lang="ts">
  import "../app.css";
  import Navigation from "$lib/components/Navigation.svelte";

  import { injectSpeedInsights } from "@vercel/speed-insights/sveltekit";
  import { dev } from "$app/environment";
  import { injectAnalytics } from "@vercel/analytics/sveltekit";
  injectSpeedInsights();
  injectAnalytics({ mode: dev ? "development" : "production" });

  let { children } = $props();
</script>

<svelte:head>
  <title>Portfolio</title>
</svelte:head>

<div class="min-h-screen bg-black text-white">
  <Navigation />
  {@render children()}
</div>
