/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}", "./public/**/*.html"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "linear-gradient(0deg, rgba(44,54,242,0.5) 0%, rgba(44,54,242,0.5) 100%), url('/public/assets/images/main-banner.png')",
      },
      fontFamily: {
        work: ["Work Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        title: "#1F1E25",
        navigation: "#707C87",
        background: "#F6F7FF",
        link: "#2C36F2",
        white: "#FFFFFF",
        grey: "#E0E1EA",
      }      
    },
  },
  plugins: [],
};
