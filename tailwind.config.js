/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "blueish-gray": "#F5F9FA",
      },
      fontFamily: {
        serif: ['"Perfectly Nineties"', ...defaultTheme.fontFamily.serif],
        mono: ['"Inconsolata"', ...defaultTheme.fontFamily.mono],
      },
      margin: {
        single: "0.75rem",
        double: "1.5rem",
        triple: "2.25rem",
      },
    },
  },
  plugins: [],
};
