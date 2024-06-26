/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
      },
      container: {
        padding: "10rem",
        center: true,
      },
      screens: {
        sm: "640px",
        md: "768px",
      },
    },
  },
  plugins: [],
};
