<script lang="ts">
  import { page } from "$app/stores";
  import { fade } from "svelte/transition";
  import Reveal from "./Reveal.svelte";

  interface NavItem {
    label: string;
    href: string;
  }

  const navItems: NavItem[] = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
  ];
</script>

<nav class="border-b border-gray-200 dark:border-gray-800">
  <div class="swiss-grid">
    <div class="col-span-6 md:col-span-6 flex items-center h-16 md:h-20">
      {#if $page.url.pathname !== "/"}
        <a
          transition:fade={{ duration: 200 }}
          href="/"
          class="text-xl md:text-2xl font-semibold tracking-tight hover:opacity-70 transition-opacity"
        >
          HOME
        </a>
      {/if}
    </div>
    <!-- Navigation Links -->
    <div
      class="col-span-6 md:col-span-6 flex items-center justify-end gap-4 md:gap-8 py-4 md:py-6"
    >
      {#each navItems as item}
        <a
          href={item.href}
          class="text-sm md:text-base font-medium tracking-wide uppercase transition-opacity duration-200 {$page
            .url.pathname === item.href ||
          $page.url.pathname.startsWith(item.href + '/')
            ? 'opacity-100'
            : 'opacity-60 hover:opacity-100'}"
        >
          {item.label}
        </a>
      {/each}
    </div>
  </div>
</nav>
