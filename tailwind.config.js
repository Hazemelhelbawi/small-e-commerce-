/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "150px",
          xl: "250px",
        },
      },
      fontFamily: {
        volkhov: ["Volkhov", "serif"],
        jost: ["Jost", "sans-serif"],
      },
    },
  },
  plugins: [],
};
