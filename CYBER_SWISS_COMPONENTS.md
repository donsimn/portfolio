# Cyber-Swiss Technical Writing Components

Advanced components for technical content with a Swiss-Brutalist aesthetic.

## CodeBlock

Terminal-style syntax highlighting with copy functionality.

```svelte
<script>
  import { CodeBlock } from '$lib/components';
</script>

<CodeBlock
  language="javascript"
  title="example.js"
  showLineNumbers={true}
  code={`function greet(name) {
  console.log('Hello, ' + name);
}

greet('World');`}
/>
```

**Props:**
- `code`: `string` (required) - The code to display
- `language`: `string` - Language label (default: 'javascript')
- `title`: `string` - Optional title for the code block
- `showLineNumbers`: `boolean` - Show line numbers (default: true)
- `class`: `string` - Additional CSS classes

**Features:**
- Terminal-style header with language/title
- Copy button with `[COPY]` / `[COPIED]` states
- Sharp corners, no shadows
- Green monospace text with subtle glow
- Line numbers for easy reference
- Black background in light mode, white in dark mode

---

## InfoCard

High-contrast callout boxes for important information.

```svelte
<script>
  import { InfoCard } from '$lib/components';
</script>

<InfoCard title="KEY TAKEAWAY" variant="default">
  <p>
    Swiss design emphasizes clarity through the use of grids,
    asymmetric layouts, and sans-serif typography.
  </p>
</InfoCard>

<InfoCard title="VULNERABILITY" variant="danger">
  <p>
    <strong>CVE-2024-1234:</strong> Critical security flaw in authentication system.
  </p>
</InfoCard>
```

**Props:**
- `title`: `string` - Header text (default: 'INFO')
- `variant`: `'default' | 'warning' | 'success' | 'danger'` - Color scheme
- `class`: `string` - Additional CSS classes

**Variants:**
- `default`: Black/white with standard text
- `warning`: Yellow accent
- `success`: Green accent
- `danger`: Red accent

**Features:**
- Inverted background (solid black in light mode, white in dark mode)
- High contrast colored text based on variant
- Bold header with brackets `[TITLE]`
- Border separator between header and content

---

## TerminalLink

Text links with cursor animation and glitch hover effect.

```svelte
<script>
  import { TerminalLink } from '$lib/components';
</script>

<p>
  Check out the
  <TerminalLink href="/docs">documentation</TerminalLink>
  for more details.
</p>

<p>
  View on
  <TerminalLink href="https://github.com" external={true}>
    GitHub
  </TerminalLink>
</p>
```

**Props:**
- `href`: `string` (required) - Link URL
- `external`: `boolean` - Opens in new tab (default: false)
- `class`: `string` - Additional CSS classes

**Features:**
- Monospace font
- Underline that thickens on hover
- Blinking cursor `_` appears on hover
- Glitch animation effect on hover
- Automatic `target="_blank"` for external links

---

## CyberMetric

Status indicators and difficulty badges with monospace styling.

```svelte
<script>
  import { CyberMetric } from '$lib/components';
</script>

<CyberMetric label="Status" value="RESOLVED" status="success" />
<CyberMetric label="Difficulty" value="HARD" status="danger" />
<CyberMetric label="Version" value="2.1.0" status="default" />
```

**Props:**
- `label`: `string` (required) - Metric label
- `value`: `string` (required) - Metric value
- `status`: `'default' | 'success' | 'warning' | 'danger' | 'info'` - Color scheme
- `class`: `string` - Additional CSS classes

**Status Colors:**
- `default`: Black/white
- `success`: Green
- `warning`: Yellow
- `danger`: Red
- `info`: Blue

**Features:**
- Monospace font for both label and value
- Uppercase text with wide tracking
- Value wrapped in brackets `[VALUE]`
- Border color matches status
- Inline display for inline use

---

## Usage Examples

### Technical Blog Post

```svelte
<script>
  import { CodeBlock, InfoCard, TerminalLink, CyberMetric } from '$lib/components';
</script>

<Section>
  <div class="col-span-12 lg:col-span-8 lg:col-start-3">
    <CyberMetric label="Difficulty" value="INTERMEDIATE" status="warning" />
    <CyberMetric label="Reading Time" value="8 MIN" status="info" class="ml-4" />

    <h2>Setting Up Authentication</h2>

    <InfoCard title="PREREQUISITES" variant="default">
      <p>Before starting, ensure you have:</p>
      <ul>
        <li>Node.js 18+ installed</li>
        <li>Basic understanding of JWT tokens</li>
      </ul>
    </InfoCard>

    <p>
      First, install the required packages. See the
      <TerminalLink href="/docs/install">installation guide</TerminalLink>
      for details.
    </p>

    <CodeBlock
      language="bash"
      title="terminal"
      code="npm install jsonwebtoken bcrypt"
    />

    <CodeBlock
      language="javascript"
      title="auth.js"
      code={`const jwt = require('jsonwebtoken');

function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
}`}
    />

    <InfoCard title="SECURITY WARNING" variant="danger">
      <p>
        <strong>Never</strong> commit your <code>JWT_SECRET</code> to version control.
        Always use environment variables.
      </p>
    </InfoCard>
  </div>
</Section>
```

### Vulnerability Report

```svelte
<Section>
  <div class="col-span-12">
    <div class="flex gap-4 mb-6">
      <CyberMetric label="Severity" value="CRITICAL" status="danger" />
      <CyberMetric label="CVE" value="2024-1234" status="default" />
      <CyberMetric label="Status" value="PATCHED" status="success" />
    </div>

    <InfoCard title="VULNERABILITY SUMMARY" variant="danger">
      <p>
        SQL injection vulnerability in user authentication endpoint allows
        attackers to bypass login and access admin accounts.
      </p>
    </InfoCard>

    <h3>Affected Code</h3>

    <CodeBlock
      language="sql"
      title="vulnerable-query.sql"
      code="SELECT * FROM users WHERE username = '$username' AND password = '$password'"
    />

    <h3>Fix</h3>

    <CodeBlock
      language="javascript"
      title="secure-auth.js"
      code={`// Use parameterized queries
const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
db.query(query, [username, hashedPassword])`}
    />
  </div>
</Section>
```

---

## Styling

All components follow Swiss design principles:

- **Sharp edges**: Zero border-radius
- **High contrast**: Pure black/white with accent colors
- **Monospace fonts**: For technical/data content
- **Minimal decoration**: Function over form
- **Precise spacing**: Mathematical grid-based layouts

## Dark Mode

All components automatically adapt to dark mode:
- Inverted backgrounds
- Adjusted border colors
- Maintained contrast ratios
- Consistent visual hierarchy

## Accessibility

- Semantic HTML elements
- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly
- Sufficient color contrast

## Integration

Import components from the central index:

```svelte
import {
  CodeBlock,
  InfoCard,
  TerminalLink,
  CyberMetric
} from '$lib/components';
```

These components are designed specifically for technical writing, documentation, and cybersecurity content while maintaining the Swiss-Brutalist aesthetic.
