/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#12131a',
        navy: '#0a1a4d',
        'navy-deep': '#081235',
        brand: {
          blue: '#0f42c6',
          'blue-dark': '#0a37c5',
          'blue-bright': '#2f6bf2',
          cyan: '#1aa0c0',
          teal: '#12b3b3',
          purple: '#3d2ea9',
          magenta: '#b01868',
        },
        slate: {
          text: '#3a3d4a',
          soft: '#6b6e7e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'system-ui', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-blue': 'linear-gradient(180deg,#ffffff 0%,#e8effb 22%,#1f5fd8 62%,#0a37c5 100%)',
        'card-blue': 'linear-gradient(160deg,#0f3fbf,#0a2a86)',
      },
    },
  },
  plugins: [],
}
