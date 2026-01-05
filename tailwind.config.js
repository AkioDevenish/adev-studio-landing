/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F2F0E9", // Much warmer cream/ivory
        foreground: "#2C2C2C", // Darker black for better contrast
        muted: "#A6A296", // Warmer beige-gray
        surface: "#E6E4DD", // Slightly darker cream for cards/sections
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", "monospace"],
      },
      fontSize: {
        "xs": "0.75rem",
        "sm": "0.875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "7xl": "4.5rem",
        "8xl": "6rem",
        "9xl": "8rem",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
      lineHeight: {
        '0.8': '0.8',
      },
      maxWidth: {
        'screen-xl': '1280px',
      },
    },
  },
  plugins: [],
}