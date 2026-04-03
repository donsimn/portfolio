<script lang="ts">
  export interface Achievement {
    year: string;
    title: string;
    context: string;
    rank?: string;    // e.g. "1ST" | "6TH"
    scope?: string;   // e.g. "WORLDWIDE" | "NATIONAL"
  }

  export interface AchievementGroup {
    label: string;
    items: Achievement[];
  }

  interface Props {
    groups: AchievementGroup[];
  }

  let { groups }: Props = $props();
</script>

<div class="achievement-list">
  {#each groups as group, gi}
    <div class="group" style="animation-delay: {gi * 80}ms">

      <!-- Group header -->
      <div class="group-header">
        <span class="group-label">{group.label}</span>
        <span class="group-rule" aria-hidden="true"></span>
        <span class="group-count">{String(group.items.length).padStart(2, '0')}</span>
      </div>

      <!-- Entries -->
      <div class="entries">
        {#each group.items as item, i}
          <div class="entry" class:entry--ranked={!!item.rank}>

            <!-- Year gutter -->
            <span class="entry-year">{item.year}</span>

            <!-- Rank badge (competitions only) -->
            {#if item.rank}
              <div class="rank-badge" class:rank-badge--top={item.rank === '1ST'}>
                <span class="rank-num">{item.rank.replace(/[A-Z]+$/, '')}</span>
                <span class="rank-suffix">{item.rank.replace(/^\d+/, '')}</span>
                {#if item.scope}
                  <span class="rank-scope">{item.scope}</span>
                {/if}
              </div>
            {:else}
              <div class="rank-placeholder" aria-hidden="true"></div>
            {/if}

            <!-- Content -->
            <div class="entry-content">
              <span class="entry-title">{item.title}</span>
              <span class="entry-context">{item.context}</span>
            </div>

          </div>
          {#if i < group.items.length - 1}
            <div class="entry-divider" aria-hidden="true"></div>
          {/if}
        {/each}
      </div>
    </div>

    {#if gi < groups.length - 1}
      <div class="group-gap" aria-hidden="true"></div>
    {/if}
  {/each}
</div>

<style>
  .achievement-list {
    width: 100%;
  }

  /* ── Group ─────────────────────────────────── */

  .group {
    width: 100%;
  }

  .group-gap {
    height: 3rem;
  }

  .group-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid var(--color-border, #E5E5E5);
    margin-bottom: 0;
  }

  .group-label {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    opacity: 0.35;
    white-space: nowrap;
    flex-shrink: 0;
  }

  .group-rule {
    flex: 1;
    height: 1px;
    background: var(--color-border, #E5E5E5);
  }

  .group-count {
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    opacity: 0.25;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
    flex-shrink: 0;
  }

  /* ── Entry ──────────────────────────────────── */

  .entries {
    width: 100%;
  }

  .entry {
    display: grid;
    grid-template-columns: 3.5rem 5rem 1fr;
    gap: 1.5rem;
    align-items: start;
    padding: 1.5rem 0;
  }

  @media (max-width: 640px) {
    .entry {
      grid-template-columns: 3rem 4rem 1fr;
      gap: 0.75rem;
    }
  }

  .entry-divider {
    height: 1px;
    background: var(--color-border, #E5E5E5);
  }

  /* Year */
  .entry-year {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.04em;
    opacity: 0.35;
    padding-top: 0.2rem;
    font-variant-numeric: tabular-nums;
    white-space: nowrap;
  }

  /* Rank badge */
  .rank-badge {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    padding: 0.4rem 0.6rem;
    border: 1px solid currentColor;
    opacity: 0.5;
    line-height: 1;
  }

  .rank-badge--top {
    background: black;
    color: white;
    border-color: black;
    opacity: 1;
  }

  :global(.dark) .rank-badge--top {
    background: white;
    color: black;
    border-color: white;
  }

  .rank-num {
    font-size: 1.4rem;
    font-weight: 800;
    letter-spacing: -0.04em;
    line-height: 1;
    font-variant-numeric: tabular-nums;
  }

  .rank-suffix {
    font-size: 0.5rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    line-height: 1;
    margin-top: 0.1rem;
  }

  .rank-scope {
    font-size: 0.45rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    opacity: 0.65;
    margin-top: 0.3rem;
    text-transform: uppercase;
    white-space: nowrap;
  }

  .rank-placeholder {
    /* keeps grid aligned for non-ranked entries */
    width: 100%;
    height: 0;
  }

  /* Entry content */
  .entry-content {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    padding-top: 0.15rem;
  }

  .entry-title {
    font-size: 0.95rem;
    font-weight: 500;
    letter-spacing: -0.01em;
    line-height: 1.35;
  }

  .entry-context {
    font-size: 0.75rem;
    opacity: 0.4;
    font-weight: 400;
    letter-spacing: 0.01em;
  }
</style>
