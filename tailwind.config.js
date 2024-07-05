/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5AB2FF",
        secondary: "#A0DEFF",
        tertiary: "#CAF4FF",
        fourth: "#FFF9D0",
      },

      boxShadow: {
        "custom": "0px 0px 12px 24px #F8F8F8",
      },

      fontFamily: {
        playfair : ["Playfair Display", "serif"],
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

