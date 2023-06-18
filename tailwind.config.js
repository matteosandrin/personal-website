/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./public/**/*.{html,js}",
  ],
  theme: {
    extend: {
        colors: {
            'blueish-gray': '#F5F9FA'
        },
        fontFamily: {
            sans: ['Helvetica', 'sans-serif']
        }
    },
  },
  plugins: [],
  variants: {},
}

