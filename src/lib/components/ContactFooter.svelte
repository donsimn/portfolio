<script lang="ts">
  interface Props {
    /** The line printed after `whoami` */
    bio?: string;
    /** Small dim line under the button */
    note?: string;
  }

  let {
    bio = "cybersecurity · systems · building things",
    note = "basel, ch · available for select work",
  }: Props = $props();
</script>

<footer class="contact-footer border-t border-gray-800">
  <div class="swiss-grid">
    <div class="col-span-12 py-20 md:py-28 lg:py-36">
      <div class="mx-auto max-w-2xl">
        <p class="line">
          <span class="dim">simonas@basel:~$</span> whoami
        </p>
        <p class="out">&gt; {bio}</p>

        <p class="line mt-6">
          <span class="dim">simonas@basel:~$</span> ./contact.sh<span
            class="cursor"
            aria-hidden="true"
          ></span>
        </p>

        <a href="/contact" class="run-btn group">
          <span>Start a conversation</span>
          <span class="arrow" aria-hidden="true">→</span>
        </a>

        <p class="note">// {note}</p>
      </div>
    </div>
  </div>
</footer>

<style>
  .contact-footer {
    font-family: "SF Mono", "Monaco", "Inconsolata", "Courier New", monospace;
  }

  .line {
    font-size: 0.95rem;
    line-height: 1.7;
  }

  .dim {
    color: #525252; /* gray-600 */
  }

  .out {
    color: #a3a3a3; /* gray-400 */
    font-size: 0.95rem;
    line-height: 1.7;
  }

  /* Full-height blinking block cursor */
  .cursor {
    display: inline-block;
    width: 0.55em;
    height: 1.15em;
    margin-left: 0.15em;
    background: currentColor;
    vertical-align: text-bottom;
    animation: blink 1.1s step-end infinite;
  }

  .run-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.7rem;
    margin-top: 2rem;
    padding: 0.8rem 1.4rem;
    border: 1px solid #404040; /* gray-700 */
    text-decoration: none;
    color: inherit;
    font-size: 0.95rem;
    transition: background-color 0.18s ease, color 0.18s ease, border-color 0.18s ease;
  }

  .run-btn:hover {
    background-color: #ffffff;
    border-color: #ffffff;
    color: #000000;
  }

  .arrow {
    transition: transform 0.18s ease;
  }

  .run-btn:hover .arrow {
    transform: translateX(4px);
  }

  .note {
    margin-top: 2.5rem;
    font-size: 0.75rem;
    color: #525252; /* gray-600 */
  }

  @keyframes blink {
    50% {
      opacity: 0;
    }
  }
</style>
