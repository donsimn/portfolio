<div class="bento">
  <!-- HERO — 1st Worldwide, spans 2×2 -->
  <div class="card card-hero card-inverted">
    <div class="card-top">
      <span class="year">2022</span>
      <span class="tag">Competition</span>
    </div>
    <div class="rank">1<sup class="ord">st</sup></div>
    <div class="card-foot">
      <span class="scope">1st &middot; Worldwide</span>
      <span class="title">MakeX Spark</span>
      <span class="ctx">International Innovation Competition</span>
    </div>
  </div>

  <!-- 1st National -->
  <div class="card">
    <div class="card-top">
      <span class="year">2021</span>
      <span class="tag">Competition</span>
    </div>
    <div class="rank rank-sm">1<sup class="ord">st</sup></div>
    <div class="card-foot">
      <span class="scope">1st &middot; National</span>
      <span class="title">MakeX Robotics Competition</span>
      <span class="ctx">Swiss National Championship</span>
    </div>
  </div>

  <!-- Hack@Google -->
  <div class="card">
    <div class="card-top">
      <span class="year">2023</span>
      <span class="tag">Event</span>
    </div>
    <div class="card-foot card-foot-push">
      <span class="title">Hack@Google Weekend</span>
      <span class="ctx">Industry Event</span>
    </div>
  </div>

  <!-- 6th National Vex -->
  <div class="card">
    <div class="card-top">
      <span class="year">2025</span>
      <span class="tag">Competition</span>
    </div>
    <div class="rank rank-sm rank-dim">6<sup class="ord">th</sup></div>
    <div class="card-foot">
      <span class="scope">6th &middot; National</span>
      <span class="title">Vex V5 Robotics</span>
      <span class="ctx">Swiss National Robotics Competition</span>
    </div>
  </div>

  <!-- Roche Internship -->
  <div class="card">
    <div class="card-top">
      <span class="year">2025</span>
      <span class="tag">Program</span>
    </div>
    <div class="card-foot card-foot-push">
      <span class="title">Summer Internship at Roche</span>
      <span class="ctx">Applied AI Engineering</span>
    </div>
  </div>

  <!-- 50 Amazing Young Swiss — wide -->
  <div class="card card-wide">
    <div class="card-top">
      <span class="year">2026</span>
      <span class="tag">Recognition</span>
    </div>
    <div class="card-foot card-foot-push">
      <span class="title title-lg"
        >"50 Amazing Young Swiss: Fearless Dreamers"</span
      >
      <span class="ctx">Featured · Published Recognition</span>
    </div>
  </div>

  <!-- School Newspaper -->
  <div class="card">
    <div class="card-top">
      <span class="year">2023</span>
      <span class="tag">Recognition</span>
    </div>
    <div class="card-foot card-foot-push">
      <span class="title">School Newspaper Website</span>
      <span class="ctx">Creator & Maintainer</span>
    </div>
  </div>

  <!-- AI Institute Visit -->
  <div class="card">
    <div class="card-top">
      <span class="year">2024</span>
      <span class="tag">Program</span>
    </div>
    <div class="card-foot card-foot-push">
      <span class="title">Visit to the Robotics & AI Institute</span>
      <span class="ctx">Exclusive Visit</span>
    </div>
  </div>
</div>

<style>
  /* ── Grid ─────────────────────────────────────────── */

  .bento {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1px;
    background-color: #e5e5e5;
    border: 1px solid #e5e5e5;
    width: 100%;
  }

  :global(.dark) .bento {
    background-color: #262626;
    border-color: #262626;
  }

  /* Desktop explicit placement */
  @media (min-width: 1025px) {
    .card:nth-child(1) {
      grid-column: 1 / 3;
      grid-row: 1 / 3;
    }
    .card:nth-child(2) {
      grid-column: 3;
      grid-row: 1;
    }
    .card:nth-child(3) {
      grid-column: 4;
      grid-row: 1;
    }
    .card:nth-child(4) {
      grid-column: 3;
      grid-row: 2;
    }
    .card:nth-child(5) {
      grid-column: 4;
      grid-row: 2;
    }
    .card:nth-child(6) {
      grid-column: 1 / 3;
      grid-row: 3;
    }
    .card:nth-child(7) {
      grid-column: 3;
      grid-row: 3;
    }
    .card:nth-child(8) {
      grid-column: 4;
      grid-row: 3;
    }
  }

  /* Tablet */
  @media (min-width: 641px) and (max-width: 1024px) {
    .bento {
      grid-template-columns: repeat(2, 1fr);
    }
    .card:nth-child(1) {
      grid-column: 1 / 3;
    }
    .card:nth-child(6) {
      grid-column: 1 / 3;
    }
  }

  /* Mobile */
  @media (max-width: 640px) {
    .bento {
      grid-template-columns: 1fr;
    }
    .card-foot-push {
      margin-top: 1rem;
      padding-top: 0;
    }
  }

  /* ── Cards ────────────────────────────────────────── */

  .card {
    background: #ffffff;
    display: flex;
    flex-direction: column;
    padding: 1.25rem 1.5rem 1.5rem;
  }

  @media (min-width: 641px) {
    .card {
      min-height: 180px;
    }
  }

  :global(.dark) .card {
    background: #000000;
  }

  .card-inverted {
    background: #000000;
    color: #ffffff;
  }

  :global(.dark) .card-inverted {
    background: #ffffff;
    color: #000000;
  }

  /* ── Card internals ───────────────────────────────── */

  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-shrink: 0;
  }

  .year {
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    opacity: 0.4;
    font-variant-numeric: tabular-nums;
  }

  .tag {
    font-size: 0.55rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    opacity: 0.3;
  }

  /* Big rank number */
  .rank {
    font-size: 5.5rem;
    font-weight: 800;
    letter-spacing: -0.05em;
    line-height: 1;
    flex: 1;
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
  }

  .rank-sm {
    font-size: 3.5rem;
  }

  .ord {
    font-size: 0.3em;
    font-weight: 700;
    letter-spacing: 0.02em;
    vertical-align: super;
    margin-left: 0.05em;
  }

  .rank-dim {
    opacity: 0.3;
  }

  /* Footer content */
  .card-foot {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    flex-shrink: 0;
  }

  .card-foot-push {
    margin-top: auto;
    padding-top: 1rem;
  }

  .scope {
    font-size: 0.6rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    opacity: 0.5;
    margin-bottom: 0.15rem;
  }

  .title {
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: -0.01em;
    line-height: 1.35;
  }

  .title-lg {
    font-size: 1.05rem;
  }

  .ctx {
    font-size: 0.72rem;
    opacity: 0.45;
    font-weight: 400;
    letter-spacing: 0;
  }
</style>
