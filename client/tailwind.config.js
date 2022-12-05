/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Inter"],
        secondary: ["Source Code Pro", "sans-serif"],
        tertiary: ["Source Sans Pro", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      ...colors,
      primary: "#00934C",
      secondary: "#006D5B",
      tertiary: "#D0FFE9",
      primaryGreen: "#5AD17E",
      formGreen: "#F0FFF8",
      lightGreen: "#ecfff7",
      backgroud: "#FAFFFD",
    },

    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("tailwind-scrollbar"),
  ],
};
