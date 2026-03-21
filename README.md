# Swiss-Brutalist Portfolio Site

A high-end portfolio website built with SvelteKit and Tailwind CSS, following International Typographic Style (Swiss Design) principles with a cyber-brutalist edge.

## Design Philosophy

This site embodies the core principles of Swiss design:

- **Mathematical Grids**: Strict 12-column layout system
- **Sharp Edges**: Zero border-radius, pure geometric forms
- **High Contrast**: Pure black (#000000) and white (#FFFFFF)
- **Bold Typography**: Inter font with tight tracking (-0.03em on headings)
- **Functional Beauty**: Every element serves a purpose
- **Minimal Decoration**: Structure through whitespace and alignment

## Tech Stack

- **Framework**: SvelteKit (with Svelte 5 runes)
- **Styling**: Tailwind CSS 3.x with custom Swiss design system
- **Language**: TypeScript
- **Deployment**: Ready for Vercel, Netlify, or any Node.js host

## Features

### Core Pages

- **Home** (`/`) - Hero, about, featured work, CTA
- **Portfolio** (`/portfolio`) - 2-column project grid with metadata
- **Blog** (`/blog`) - Vertical list with monospace dates
- **About** (`/about`) - Bio, services, contact CTA
- **Contact** (`/contact`) - Minimal form with borderless inputs

### Component Library

#### Layout Components
- `PageLayout` - Page wrapper with fade transitions
- `Section` - Container with configurable padding/borders
- `Grid` - Flexible 1-12 column responsive grid
- `Hero` - Large hero sections with massive typography

#### Typography
- `SectionHeader` - Section titles with horizontal rules
- `TextBlock` - Optimized body copy (line-height: 1.6)

#### UI Components
- `Card` - Versatile container
- `Button` - Sharp Swiss buttons (4 variants)
- `ProjectCard` - Portfolio project cards
- `Divider` - Horizontal/vertical separators

#### Cyber-Swiss Technical Components
- `CodeBlock` - Terminal-style code with copy button
- `InfoCard` - High-contrast callout boxes
- `TerminalLink` - Links with cursor + glitch effect
- `CyberMetric` - Status/difficulty badges

#### Animation
- `Reveal` - Scroll-triggered fade + slide animations

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Documentation

- `COMPONENTS.md` - Complete component API reference
- `CONTENT_GUIDE.md` - Content management guide
- `CYBER_SWISS_COMPONENTS.md` - Technical writing components

## Design Refinements Applied

✅ **Strict 12-column grid** - All pages use `.swiss-grid`
✅ **Tight line-height** - Body: 1.6, Headings: 1.15
✅ **Negative letter-spacing** - Headings use -0.02em to -0.03em
✅ **Grain texture** - Subtle noise overlay on body
✅ **Minimal form** - Contact form with border-bottom inputs
✅ **Dark mode** - Full support with localStorage

## Content Management

Content is managed through a metadata registry system. See `CONTENT_GUIDE.md` for details.

To add new blog posts or portfolio projects:

1. Add metadata to `src/lib/data/content.js`
2. Create `.svelte` file in appropriate `[slug]/` folder
3. Content automatically appears in listings

## Project Structure

```
src/
├── lib/
│   ├── components/          # Component library
│   │   └── index.ts         # Central exports
│   └── data/
│       └── content.js       # Metadata registry
├── routes/
│   ├── +layout.svelte       # Root layout + dark mode
│   ├── +page.svelte         # Homepage
│   ├── blog/                # Blog posts
│   ├── portfolio/           # Portfolio projects
│   ├── about/               # About page
│   └── contact/             # Contact form
└── app.css                  # Global styles
```

## License

MIT

---

Built with precision, function, and Swiss design principles.
