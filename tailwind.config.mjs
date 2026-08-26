/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Placeholder colors for brand
        primary: {
          500: '#0055FF',
        },
        secondary: {
          500: '#FF5500',
        },
      },
      fontFamily: {
        // Placeholder fonts
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
