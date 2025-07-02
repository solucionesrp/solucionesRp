/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'orbitron': ['Orbitron', 'monospace'],
      },
      colors: {
        'negro': '#000000',
        'mostaza': '#f4a124',
        'azul': '#5f8ca0',
        'blanco': '#ffffff',
        'naranja': '#f4a124',
        'celeste': '#5f8ca0',
      },
    },
  },
  plugins: [],
} 