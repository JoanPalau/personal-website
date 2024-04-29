/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "6rem",
        xl: "6rem",
        "2xl": "8rem",
      },
    },
    colors: {
      dark: "#22323f",
      darker: "#1d2a35",
      darkest: "#0b1215",
      white: "#f2f2f2",
      accent: "#ff9a3c",
    },
    extend: {
      animation: {
        caret:
          "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s",
        typewriter: "typewriter 2s steps(11) forwards",
      },
      keyframes: {
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        typewriter: {
          to: {
            left: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
