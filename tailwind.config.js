/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    // Override default border radius to enforce sharp edges
    borderRadius: {
      none: '0px',
    },
    // Swiss design color system: Pure grayscale
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      white: '#FFFFFF',
      gray: {
        50: '#FAFAFA',
        100: '#F5F5F5',
        200: '#E5E5E5',
        300: '#D4D4D4',
        400: '#A3A3A3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717',
        950: '#0A0A0A',
      },
    },
    extend: {
      // Swiss typography system
      fontFamily: {
        sans: [
          'Inter',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'SF Mono',
          'Monaco',
          'Inconsolata',
          'Roboto Mono',
          'Courier New',
          'monospace',
        ],
      },
      // 12-column grid system
      gridTemplateColumns: {
        12: 'repeat(12, minmax(0, 1fr))',
      },
      // Consistent spacing based on mathematical scale
      spacing: {
        gutter: '1.5rem', // 24px
        'gutter-sm': '1rem', // 16px
        'gutter-lg': '2rem', // 32px
      },
      // Letter spacing for precision
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.05em',
      },
    },
  },
  plugins: [],
}

