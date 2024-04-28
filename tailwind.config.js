/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        card_bg: "#364F63",
        nav_bg: "#1B2A37",
        footer_bg : "#1B2A37 ",
        btn_bg: "#446680",
        hover_bg: "#2E4255"
      }
    },
  },
  plugins: [require("daisyui")],
}