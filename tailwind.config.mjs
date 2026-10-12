import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "blueish-gray": "#F5F9FA",
      },
      fontFamily: {
        serif: ["var(--font-serif)", ...defaultTheme.fontFamily.serif],
        mono: ["var(--font-mono)", ...defaultTheme.fontFamily.mono],
        moma: ["var(--font-moma)", ...defaultTheme.fontFamily.sans],
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
