/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        main_color_1: "#2e3192",
        main_color_2: "#489d33",
      },
      screens: {
        sm: { max: "767px" },
      },
    },
  },
  plugins: [],
};
