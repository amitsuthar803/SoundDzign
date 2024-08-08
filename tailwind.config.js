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
      screens: {
        tablet: { max: "1040px" },
        phone: { max: "640px" },
      },

      // sm: 640px and up (small screens like mobile phones)
      // md: 768px and up (tablets and small laptops)
      // lg: 1024px and up (larger laptops and desktops)
      // xl: 1280px and up (large desktops)
      // 2xl: 1536px and up (extra-large screens)
      // screens: {
      //   'md-max-lg': { 'min': '768px', 'max': '1023px' }, // Custom breakpoint between md and lg
      // },

      // Extra Small (xs): < 640px
      // Small (sm): ≥ 640px
      // Medium (md): ≥ 768px
      // Large (lg): ≥ 1024px
      // Extra Large (xl): ≥ 1280px
      // 2 Extra Large (2xl): ≥ 1536px

      // Custom breakpoints
      //   'sm-max': { 'max': '639px' },   // Custom breakpoint for screens smaller than 640px
      //   'md-max': { 'max': '767px' },   // Custom breakpoint for screens between 640px and 768px
      //   'lg-max': { 'max': '1023px' },  // Custom breakpoint for screens between 768px and 1024px
      // },

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
