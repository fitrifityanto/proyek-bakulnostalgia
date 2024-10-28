/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
        body: ['Crimson Text', 'serif'],
        hero: ['Playfair Display', 'serif'],
    },
    color: {
        'classic-orange': '#ee7214',
        'classic-green': '#527853',
        'cl-primary': '#f9e8d9',
        'soft-orange': '#f7b787',
    },
    extend: {},
  },
  plugins: [],
}

