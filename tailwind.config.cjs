/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        hunterGreen: {
          100: "#d9dfd9",
          200: "#b3beb4",
          300: "#8d9e8e",
          400: "#677d69",
          500: "#415d43",
          600: "#344a36",
          700: "#273828",
          800: "#1a251b",
          900: "#0d130d"
        },
        cambridgeBlue: {
          100: "#e2eae3",
          200: "#c6d5c8",
          300: "#a9c1ac",
          400: "#8dac91",
          500: "#709775",
          600: "#5a795e",
          700: "#435b46",
          800: "#2d3c2f",
          900: "#161e17"
        },
        eeRieBlack: {
          100: "#cfd2d0",
          200: "#a0a5a1",
          300: "#707771",
          400: "#414a42",
          500: "#111d13",
          600: "#0e170f",
          700: "#0a110b",
          800: "#070c08",
          900: "#030604"
        },
      },
    },
  },
  plugins: [],
};
