/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        Verydarkblue: "hsl(233, 47%, 7%)",
        Darkdesaturatedblue: "hsl(244, 38%, 16%)",
        Softviolet: "hsl(277, 64%, 61%)",
        Slightlytransparentwhite: "hsla(0, 0%, 100%, 0.75)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lexend: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};
