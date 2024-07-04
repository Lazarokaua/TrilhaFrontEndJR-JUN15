/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "plex-mono": ['"IBM Plex Mono"', "monospace"], // Note as aspas duplas extras
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        back: ["#1B1B1B"],
        secundary: ["#e53939 "],
        detail: ["#ffffff "]
      },
    },
  },
  plugins: [],
};
