# Content Management Guide

## Overview

This site uses a **Metadata Registry** system for managing blog posts and portfolio projects. Instead of markdown with frontmatter, you write content directly in `.svelte` files while metadata is stored in a central registry.

## System Architecture

```
src/lib/data/content.js         → Central metadata registry
src/routes/blog/+page.svelte    → Blog listing page
src/routes/blog/+page.server.js → Blog data loader
src/routes/blog/[slug]/         → Individual blog posts
src/routes/portfolio/           → Portfolio listing & projects
```

## How It Works

### 1. Metadata Registry (`src/lib/data/content.js`)

This file contains all metadata for blog posts and portfolio projects:

```javascript
export const blogPosts = [
  {
    slug: 'my-post',              // URL slug
    title: 'My Post Title',       // Post title
    date: '2026.03.15',           // Date (YYYY.MM.DD format)
    description: 'Description',   // Short description
    thumbnail: '/images/...',     // Optional image
    tags: ['Design', 'Code']      // Optional tags
  }
];

export const portfolioProjects = [
  {
    slug: 'project-name',
    title: 'Project Title',
    date: '2026.03.01',
    description: 'Project description',
    thumbnail: '/images/...',
    tags: ['Branding', 'Web'],
    client: 'Client Name',        // Optional client
    year: '2026'                  // Optional year
  }
];
```

### 2. Server-Side Data Loading

Each listing page has a `+page.server.js` file that loads data:

**Blog Loader** (`src/routes/blog/+page.server.js`):
```javascript
import { getAllBlogPosts } from '$lib/data/content.js';

export function load() {
  return { posts: getAllBlogPosts() };
}
```

**Portfolio Loader** (`src/routes/portfolio/+page.server.js`):
```javascript
import { getAllPortfolioProjects } from '$lib/data/content.js';

export function load() {
  return { projects: getAllPortfolioProjects() };
}
```

### 3. Individual Post/Project Pages

Each slug route has its own loader:

**Blog Post Loader** (`src/routes/blog/[slug]/+page.server.js`):
```javascript
import { getBlogPost } from '$lib/data/content.js';
import { error } from '@sveltejs/kit';

export function load({ params }) {
  const post = getBlogPost(params.slug);
  if (!post) throw error(404, 'Post not found');
  return { post };
}
```

## Adding New Content

### Adding a Blog Post

1. **Add metadata** to `src/lib/data/content.js`:

```javascript
export const blogPosts = [
  {
    slug: 'new-post-slug',
    title: 'My New Blog Post',
    date: '2026.03.20',
    description: 'A short description of the post',
    tags: ['Design', 'Development']
  },
  // ... existing posts
];
```

2. **Create the page** at `src/routes/blog/new-post-slug/+page.svelte`:

```svelte
<script>
  import { Section, TextBlock, Reveal } from '$lib/components';
  export let data;
  const { post } = data;
</script>

<svelte:head>
  <title>{post.title} — Blog</title>
</svelte:head>

<Section padding="lg">
  <div class="col-span-12 lg:col-span-8 lg:col-start-3">
    <h1>{post.title}</h1>

    <!-- Write your content here as standard HTML/Svelte -->
    <TextBlock>
      <p>Your blog post content...</p>
    </TextBlock>
  </div>
</Section>
```

### Adding a Portfolio Project

1. **Add metadata** to `src/lib/data/content.js`:

```javascript
export const portfolioProjects = [
  {
    slug: 'new-project',
    title: 'New Project',
    date: '2026.03.20',
    description: 'Project description',
    tags: ['Branding', 'Web Design'],
    client: 'Client Name',
    year: '2026'
  },
  // ... existing projects
];
```

2. **Create the page** at `src/routes/portfolio/new-project/+page.svelte`:

Use the template in the existing example files or customize as needed.

## Swiss Design Features

### Typography

- **Headings**: Large, bold, with tight tracking
- **Dates**: Monospace font (`font-mono`) in `YYYY.MM.DD` format
- **Tags**: Monospace, uppercase, with wide tracking

### Layout

- **Blog**: Vertical list with heavy horizontal rules (`border-t-2`)
- **Portfolio**: 2-column grid on desktop, vertical on mobile
- **No rounded corners**: Everything uses sharp edges
- **Minimal borders**: Structure created through whitespace and heavy rules

### Components Used

```svelte
import {
  Section,        // Container with padding/borders
  TextBlock,      // Optimized body copy
  Reveal,         // Scroll animations
  Grid            // Flexible grid layouts
} from '$lib/components';
```

## Date Format

**Always use**: `YYYY.MM.DD` format with periods

- ✅ Correct: `2026.03.15`
- ❌ Wrong: `2026-03-15`, `March 15, 2026`

This format works with the mono font and Swiss aesthetic.

## Tag Format

Tags should be:
- Uppercase
- Monospace font
- Concise (1-2 words)
- Limited to 3-5 per item

**Examples**:
```javascript
tags: ['Design', 'Development', 'UI/UX']
```

## Helper Functions

The registry provides utility functions:

```javascript
// Get all posts (sorted by date, newest first)
getAllBlogPosts()
getAllPortfolioProjects()

// Get single item by slug
getBlogPost('slug')
getPortfolioProject('slug')
```

## File Structure

```
src/
├── lib/
│   ├── data/
│   │   └── content.js           ← Metadata registry
│   └── components/              ← Reusable components
└── routes/
    ├── blog/
    │   ├── +page.svelte         ← Blog listing
    │   ├── +page.server.js      ← Blog loader
    │   └── [slug]/
    │       ├── +page.svelte     ← Blog post template
    │       └── +page.server.js  ← Post loader
    └── portfolio/
        ├── +page.svelte         ← Portfolio listing
        ├── +page.server.js      ← Portfolio loader
        └── [slug]/
            ├── +page.svelte     ← Project template
            └── +page.server.js  ← Project loader
```

## Benefits of This System

1. **Clean Separation**: Metadata separate from content
2. **Type Safety**: Central registry makes it easy to validate
3. **Flexibility**: Full Svelte power in content files
4. **Performance**: Server-side rendering with SvelteKit
5. **No Build Step**: No markdown compilation needed
6. **Easy Updates**: Change metadata in one place

## Example Workflow

1. Add metadata to `content.js`
2. Create `.svelte` file in appropriate `[slug]/` folder
3. Write content using Svelte components and HTML
4. Page automatically appears in listing
5. Navigation and routing handled automatically

## Tips

- **Copy templates**: Duplicate existing blog/portfolio pages as starting points
- **Use components**: Leverage `Section`, `TextBlock`, etc. for consistency
- **Preview locally**: Run `npm run dev` to see changes
- **Dark mode**: All components support dark mode automatically
- **Images**: Place in `/static/images/` and reference with `/images/...`

## Monospace Font Stack

The system includes a carefully chosen mono font stack:

```css
font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Courier New', monospace;
```

Use with `font-mono` class or for dates, tags, and technical content.
