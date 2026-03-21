<script lang="ts">
  import { Section, Reveal } from "$lib/components";

  let formState = $state({
    name: "",
    email: "",
    message: "",
    submitted: false,
  });

  function handleSubmit(e: Event) {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formState);
    formState.submitted = true;
  }
</script>

<svelte:head>
  <title>Contact — Portfolio</title>
  <meta name="description" content="Get in touch" />
</svelte:head>

<!-- Page Header -->
<Section padding="lg" border="bottom">
  <div class="col-span-12">
    <Reveal>
      <h1
        class="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6"
      >
        Contact
      </h1>
      <p class="text-xl md:text-2xl opacity-70 max-w-3xl">
        Available for select projects and collaborations.
      </p>
    </Reveal>
  </div>
</Section>

<!-- Contact Form Section -->
<Section padding="lg">
  <div class="col-span-12 lg:col-span-8 lg:col-start-3">
    <Reveal delay={100}>
      {#if formState.submitted}
        <!-- Success State -->
        <div class="text-center py-16">
          <div class="inline-block mb-6">
            <span
              class="font-mono text-sm uppercase tracking-wider px-4 py-2 border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400"
            >
              [MESSAGE SENT]
            </span>
          </div>
          <p class="text-lg opacity-70">
            Thank you for reaching out. I'll get back to you soon.
          </p>
        </div>
      {:else}
        <!-- Contact Form -->
        <form onsubmit={handleSubmit} class="contact-form space-y-12">
          <!-- Name Field -->
          <div class="form-group">
            <label
              for="name"
              class="font-mono text-xs uppercase tracking-widest opacity-40 mb-4 block"
            >
              [01] Name
            </label>
            <input
              type="text"
              id="name"
              bind:value={formState.name}
              required
              class="form-input"
              placeholder="Your name"
            />
          </div>

          <!-- Email Field -->
          <div class="form-group">
            <label
              for="email"
              class="font-mono text-xs uppercase tracking-widest opacity-40 mb-4 block"
            >
              [02] Email
            </label>
            <input
              type="email"
              id="email"
              bind:value={formState.email}
              required
              class="form-input"
              placeholder="your@email.com"
            />
          </div>

          <!-- Message Field -->
          <div class="form-group">
            <label
              for="message"
              class="font-mono text-xs uppercase tracking-widest opacity-40 mb-4 block"
            >
              [03] Message
            </label>
            <textarea
              id="message"
              bind:value={formState.message}
              required
              rows="6"
              class="form-input resize-none"
              placeholder="Tell me about your project"
            ></textarea>
          </div>

          <!-- Submit Button -->
          <div class="pt-4">
            <button
              type="submit"
              class="submit-btn font-mono text-sm uppercase tracking-wider px-8 py-4 border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-200"
            >
              [SEND MESSAGE]
            </button>
          </div>
        </form>
      {/if}
    </Reveal>
  </div>

  <!-- Contact Info -->
  <div
    class="col-span-12 lg:col-span-8 lg:col-start-3 mt-16 pt-16 border-t-2 border-gray-200 dark:border-gray-800"
  >
    <Reveal delay={200}>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3
            class="font-mono text-xs uppercase tracking-widest opacity-40 mb-3"
          >
            Email
          </h3>
          <a
            href="mailto:hello@example.com"
            class="text-lg hover:opacity-60 transition-opacity font-mono"
          >
            hello@example.com
          </a>
        </div>
        <div>
          <h3
            class="font-mono text-xs uppercase tracking-widest opacity-40 mb-3"
          >
            Social
          </h3>
          <div class="space-y-2">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-lg hover:opacity-60 transition-opacity"
            >
              Twitter
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-lg hover:opacity-60 transition-opacity"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              class="block text-lg hover:opacity-60 transition-opacity"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  </div>
</Section>

<style>
  .form-group {
    padding-top: 1rem;
  }

  .form-input {
    width: 100%;
    background: transparent;
    border: none;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    padding: 0.5rem 0 0.75rem 0;
    font-size: 1.125rem;
    font-family: inherit;
    color: inherit;
    outline: none;
    transition:
      border-bottom-width 0.2s ease,
      border-color 0.2s ease;
  }

  :global(.dark) .form-input {
    border-bottom-color: rgba(255, 255, 255, 0.2);
  }

  .form-input:focus {
    border-bottom-width: 2px;
    border-bottom-color: rgba(0, 0, 0, 1);
  }

  :global(.dark) .form-input:focus {
    border-bottom-color: rgba(255, 255, 255, 1);
  }

  .form-input::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }

  :global(.dark) .form-input::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  .submit-btn {
    cursor: pointer;
  }

  .submit-btn:active {
    transform: translateY(1px);
  }
</style>
