/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'fluid-h1': 'clamp(2.5rem, 8vw, 5rem)',
        'fluid-h2': 'clamp(2rem, 6vw, 4rem)',
        'fluid-h3': 'clamp(1.5rem, 4vw, 3rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.25rem)',
        'fluid-lg': 'clamp(1.125rem, 3vw, 1.5rem)',
      },
      spacing: {
        'fluid-gap': 'clamp(1rem, 4vw, 4rem)',
        'fluid-padding': 'clamp(1.5rem, 6vw, 6rem)',
      },
      colors: {
        sports: {
          primary: '#F26522',   // Radiant Orange
          secondary: '#0A0A0A', // Midnight Black
          accent: '#1E1B6E',    // Branded Blue (Limited)
          surface: '#1A1A1A',   // Dark Gray Surface
          white: '#FFFFFF',
          slate: '#94A3B8'
        }
      }
    },
  },
  plugins: [],
}
