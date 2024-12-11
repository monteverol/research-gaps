/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_bg: 'var(--primary-bg)',
        secondary_bg: 'var(--secondary-bg)',
        neutral_bg: 'var(--neutral-bg)',
        accent_dark: 'var(--accent-dark)',
        accent_light: 'var(--accent-light)',
      },
    },
  },
  plugins: [],
}