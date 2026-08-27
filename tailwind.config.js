/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBg: '#0b0f19',
        cardBg: '#131b2e',
        accentPurple: '#8b5cf6',
        accentCyan: '#06b6d4',
      },
    },
  },
  plugins: [],
}