/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "plex-mono": ['"IBM Plex Mono"', "monospace"], // Note as aspas duplas extras
        "raleway": ["Raleway", "sans-serif"],
      },
      colors: {
        back: ["#000000"],
        secundary: ["#e53939 "],
        detail: ["#ffffff "],
      },
      backgroundImage: {
        'custom-background': "url('/src/assets/image.jpg')",
      },
      screens: {
        'mobile': '320px', 
        'tablet': '481px',  
        'laptop': '769px',     
        'desktop': '1025px',    
        'tv': '1201px',   
      },

    },
  },
  plugins: [],
};
