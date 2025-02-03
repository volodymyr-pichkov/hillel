/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      maxWidth: {
        '1366': '1366px',
      },
      backgroundImage: {
        'banner': "url('/public/assets/images/main-banner.png')",
      },
      fontFamily: {
        work: ['Work Sans', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'title-dark': '#1F1E25',
        'nav-text': '#707C87',
        'link': '#2C36F2',
        'layout-white': '#F6F7FF',
        'white': '#FFFFFF',
      },
    },
  },
  plugins: [],
}

