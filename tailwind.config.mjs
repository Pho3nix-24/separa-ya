/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'sep-green': '#489076',
        'sep-gray': '#93939C',
      }
    },
  },
  plugins: [],
}