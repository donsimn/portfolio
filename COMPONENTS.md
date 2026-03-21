# Swiss-Brutalist Component Library

A comprehensive collection of Svelte components designed with Swiss design and Brutalist aesthetics: sharp edges, bold typography, mathematical grids, and high-impact whitespace.

## Design Principles

- **Sharp Edges**: Zero border-radius throughout
- **High Contrast**: Pure black/white with grayscale accents
- **Mathematical Grid**: 12-column Swiss grid system
- **Bold Typography**: Heavy type hierarchy with Inter font
- **Minimal Borders**: Structure through whitespace and alignment
- **Scroll Animations**: Subtle reveals on scroll

## Component Library

### Layout Components

#### `<PageLayout>`
Wrapper that handles page transitions and the main grid container.

```svelte
<PageLayout maxWidth="default" noPadding={false}>
  <!-- Your content -->
</PageLayout>
```

**Props:**
- `maxWidth`: `'default' | 'wide' | 'full'` - Maximum width constraint
- `noPadding`: `boolean` - Remove horizontal padding
- `class`: `string` - Additional CSS classes

---

#### `<Section>`
Container for content blocks with consistent vertical padding.

```svelte
<Section padding="lg" border="bottom" background="default">
  <!-- Your content -->
</Section>
```

**Props:**
- `padding`: `'none' | 'sm' | 'md' | 'lg' | 'xl'` - Vertical padding size
- `border`: `'none' | 'top' | 'bottom' | 'both'` - Border placement
- `background`: `'default' | 'inverted' | 'gray'` - Background style
- `fullWidth`: `boolean` - Disable grid container
- `class`: `string` - Additional CSS classes

---

#### `<Grid>`
Flexible grid wrapper for portfolio and blog lists.

```svelte
<Grid cols={3} gap="md" style="default">
  <!-- Grid items -->
</Grid>
```

**Props:**
- `cols`: `1 | 2 | 3 | 4 | 6 | 12` - Number of columns
- `gap`: `'none' | 'sm' | 'md' | 'lg' | 'xl'` - Gap between items
- `responsive`: `boolean` - Enable responsive breakpoints (default: true)
- `style`: `'default' | 'masonry' | 'bordered'` - Grid style variant
- `class`: `string` - Additional CSS classes

---

### Typography & Content

#### `<Hero>`
Big, bold header section with massive typography.

```svelte
<Hero
  title="Your Bold Title"
  subtitle="Your subtitle"
  image="/path/to/image.jpg"
  align="left"
  height="default"
>
  <!-- Optional CTA buttons -->
</Hero>
```

**Props:**
- `title`: `string` (required) - Main heading (supports HTML)
- `subtitle`: `string` - Secondary text
- `image`: `string` - Background image URL
- `imageAlt`: `string` - Image alt text
- `align`: `'left' | 'center'` - Content alignment
- `height`: `'default' | 'tall' | 'full'` - Section height
- `overlay`: `boolean` - Add dark overlay on image
- `class`: `string` - Additional CSS classes

---

#### `<SectionHeader>`
Bold, uppercase section label with optional horizontal rule.

```svelte
<SectionHeader
  label="About"
  title="Your Section Title"
  subtitle="Optional description"
  rule="after"
  align="left"
/>
```

**Props:**
- `title`: `string` (required) - Section heading
- `subtitle`: `string` - Description text
- `label`: `string` - Small uppercase label
- `align`: `'left' | 'center'` - Text alignment
- `rule`: `'none' | 'before' | 'after' | 'both'` - Horizontal line placement
- `size`: `'sm' | 'md' | 'lg'` - Title size
- `class`: `string` - Additional CSS classes

---

#### `<TextBlock>`
Optimized body copy component with ideal line-length for readability.

```svelte
<TextBlock size="md" maxWidth="default" align="left">
  <p>Your content here...</p>
</TextBlock>
```

**Props:**
- `size`: `'sm' | 'md' | 'lg' | 'xl'` - Text size
- `maxWidth`: `'narrow' | 'default' | 'wide' | 'full'` - Max width for readability
- `align`: `'left' | 'center'` - Text alignment
- `weight`: `'light' | 'normal' | 'medium' | 'bold'` - Font weight
- `opacity`: `number` - Text opacity (0-1)
- `class`: `string` - Additional CSS classes

---

### Animation

#### `<Reveal>`
Scroll-triggered animation wrapper with "slide up and fade in" effect.

```svelte
<Reveal delay={0} duration={600} y={40} threshold={0.1}>
  <!-- Content to reveal -->
</Reveal>
```

**Props:**
- `delay`: `number` - Animation delay in ms (default: 0)
- `duration`: `number` - Animation duration in ms (default: 600)
- `y`: `number` - Vertical offset in px (default: 40)
- `threshold`: `number` - Intersection observer threshold (default: 0.1)
- `once`: `boolean` - Animate only once (default: true)
- `class`: `string` - Additional CSS classes

**Usage:**
```svelte
<Reveal>
  <SectionHeader title="Animated Section" />
</Reveal>

<Reveal delay={100}>
  <TextBlock>This appears 100ms after the header</TextBlock>
</Reveal>
```

---

### UI Components

#### `<Card>`
Flexible card component with multiple variants.

```svelte
<Card variant="bordered" padding="md" hover={true}>
  <!-- Card content -->
</Card>
```

**Props:**
- `variant`: `'default' | 'bordered' | 'filled' | 'inverted'` - Visual style
- `padding`: `'none' | 'sm' | 'md' | 'lg'` - Internal padding
- `hover`: `boolean` - Enable hover effect (default: true)
- `href`: `string` - Make card a link
- `class`: `string` - Additional CSS classes

---

#### `<Button>`
Swiss-style button with multiple variants.

```svelte
<Button variant="primary" size="md" fullWidth={false}>
  Click Me
</Button>
```

**Props:**
- `variant`: `'primary' | 'secondary' | 'ghost' | 'inverted'` - Button style
- `size`: `'sm' | 'md' | 'lg' | 'xl'` - Button size
- `fullWidth`: `boolean` - Expand to full width
- `href`: `string` - Render as link
- `type`: `'button' | 'submit' | 'reset'` - Button type
- `disabled`: `boolean` - Disable button
- `onclick`: `function` - Click handler
- `class`: `string` - Additional CSS classes

---

#### `<ProjectCard>`
Specialized card for portfolio projects.

```svelte
<ProjectCard
  title="Project Name"
  description="Project description"
  year="2026"
  tags={['Design', 'Development']}
  image="/path/to/image.jpg"
  href="/projects/name"
  featured={false}
/>
```

**Props:**
- `title`: `string` (required) - Project name
- `description`: `string` (required) - Project description
- `year`: `string` - Project year
- `tags`: `string[]` - Project tags/categories
- `image`: `string` - Project image URL
- `imageAlt`: `string` - Image alt text
- `href`: `string` - Project link
- `featured`: `boolean` - Double-width featured card
- `class`: `string` - Additional CSS classes

---

## Usage Examples

### Basic Page Layout

```svelte
<script>
  import { Hero, Section, SectionHeader, TextBlock, Button } from '$lib/components';
</script>

<Hero title="Welcome" subtitle="Swiss-style portfolio">
  <Button variant="primary">Get Started</Button>
</Hero>

<Section padding="lg" border="bottom">
  <div class="col-span-12">
    <SectionHeader title="About" rule="after" />
  </div>
  <div class="col-span-12 lg:col-span-8">
    <TextBlock size="lg">
      <p>Your content here...</p>
    </TextBlock>
  </div>
</Section>
```

### Portfolio Grid with Reveals

```svelte
<script>
  import { Section, SectionHeader, Grid, ProjectCard, Reveal } from '$lib/components';
</script>

<Section padding="lg">
  <div class="col-span-12">
    <Reveal>
      <SectionHeader label="Work" title="Selected Projects" rule="after" />
    </Reveal>
  </div>

  <div class="col-span-12">
    <Reveal delay={100}>
      <Grid cols={3} gap="lg">
        <ProjectCard
          title="Project 1"
          description="Description here"
          tags={['Design', 'Dev']}
        />
        <!-- More projects... -->
      </Grid>
    </Reveal>
  </div>
</Section>
```

### Inverted CTA Section

```svelte
<Section padding="xl" background="inverted">
  <div class="col-span-12 text-center">
    <h2 class="text-5xl font-bold mb-6">Let's Work Together</h2>
    <TextBlock size="xl" align="center" class="mb-12">
      <p>Get in touch for collaborations.</p>
    </TextBlock>
    <Button variant="inverted" size="xl">Contact Me</Button>
  </div>
</Section>
```

## Importing Components

All components are exported from a central index file:

```svelte
import {
  PageLayout,
  Section,
  Grid,
  Hero,
  SectionHeader,
  TextBlock,
  Reveal,
  Card,
  Button,
  ProjectCard,
  Navigation
} from '$lib/components';
```

## Customization

All components accept a `class` prop for additional Tailwind classes:

```svelte
<Button variant="primary" class="mt-8 shadow-lg">
  Custom Styled Button
</Button>
```

## Color System

The design system uses a strict grayscale palette:

- **Black**: `#000000`
- **White**: `#FFFFFF`
- **Gray Scale**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950

Access via Tailwind classes: `bg-black`, `text-white`, `border-gray-200`, etc.

## Grid System

The 12-column Swiss grid is available via the `.swiss-grid` class:

```svelte
<div class="swiss-grid">
  <div class="col-span-12 md:col-span-6">
    Half width on desktop
  </div>
  <div class="col-span-12 md:col-span-6">
    Half width on desktop
  </div>
</div>
```

## Dark Mode

All components automatically support dark mode via the `dark:` variant:

```svelte
<!-- Automatically adapts to dark mode -->
<Section background="default">
  Content here
</Section>
```

Toggle dark mode using the button in the top-right corner of the layout.
