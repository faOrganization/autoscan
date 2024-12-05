/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.jsx"
  ],
  theme: {
    extend: {
      colors: {
        'silver': '#e4e7ec',
        'slate': '#475467',
        'primary': 'rgb(var(--color-primary))',
        'primary-t': 'rgb(var(--color-t))',
      }
    },
  },
  plugins: [],
}

