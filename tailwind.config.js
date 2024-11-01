/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html"],
  theme: {
    fontFamily: {
        body: ['Radley', 'serif'],
        hero: ['Playfair Display', 'serif'],
    },
    extend: {
        colors: {
            'classicOrange': '#ee7214',
            'classicGreen': '#527853',
            'primary': '#f9e8d9',
            'softOrange': '#f7b787',
        },
        keyframes: {
            fade: {
              '0%': { opacity: '0' },
              '100%': { opacity: '1' },
            }
        },
        animation: {
            'fade': 'fade 1s ease backwards',
        }
    },
  },
  plugins: [],
}

