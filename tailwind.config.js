/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          red: "#E63946",
          pink: "#FF6864",
          yellow: "#FFCA28",
          dark: "#181E1E",
        },
      },
      fontFamily: {
        fontsecondary: ["Alegreya", "sans-serif"],
      },

      // fontSize: {
      //   "heading-1": ["2.5rem", { lineHeight: "2.5rem" }], // Equivalent to text-4xl
      //   "heading-2": ["1.875rem", { lineHeight: "2.25rem" }], // Equivalent to text-3xl
      //   "heading-3": ["1.5rem", { lineHeight: "2rem" }], // Equivalent to text-2xl
      //   "heading-4": ["1.25rem", { lineHeight: "1.75rem" }], // Equivalent to text-xl
      //   "heading-5": ["1.125rem", { lineHeight: "1.5rem" }], // Equivalent to text-lg
      //   "heading-6": ["1rem", { lineHeight: "1.5rem" }], // Equivalent to text-base
      // },
    },
  },
  plugins: [],
};
