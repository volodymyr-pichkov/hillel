/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      screens: {
        'max': '1366px',
      },
      maxWidth: {
        '1366': '1366px',
      },
    },
  },
  plugins: [],
}

