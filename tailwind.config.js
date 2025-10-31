/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  mode: "jit",
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "blueish-gray": "#F5F9FA",
      },
      fontFamily: {
        sans: ['"MoMA Sans Web"', ...defaultTheme.fontFamily.sans],
        serif: ['"Perfectly Nineties"', ...defaultTheme.fontFamily.serif],
        mono: ['"Inconsolata"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [],
  variants: {},
};
