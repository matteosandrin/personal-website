/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./public/**/*.{html,js}",
  ],
  purge: [
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {},
}

