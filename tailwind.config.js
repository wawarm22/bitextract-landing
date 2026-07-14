/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#010101',
        gray1: '#393939',
        gray2: '#686868',
        brand: {
          blue: '#0f42c6',
          'blue-dark': '#0a37c5',
          purple: '#3d2ea9',
          'purple2': '#4235a1',
          cyan: '#44bcd3',
          teal: '#12b3b3',
          magenta: '#b01868',
          lilac: '#cfd9f4',
        },
      },
      fontFamily: {
        // Design uses Helvetica for the bulk of text
        sans: ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
        // Inter for large display type (Transform / Actionable Insights / BITTEXT / section headings)
        display: ['Inter', '"Helvetica Neue"', 'sans-serif'],
        // Pixel/retro heading (old ThinkBit banner style)
        pixel: ['"Press Start 2P"', 'monospace'],
      },
      backgroundImage: {
        'hero-blue': 'linear-gradient(180deg,#ffffff 0%,#eaf1fc 20%,#2a63d6 60%,#0a37c5 100%)',
      },
    },
  },
  plugins: [],
}
