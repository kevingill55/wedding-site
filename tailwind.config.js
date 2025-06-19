/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        temp: "Young Serif",
      },
      colors: {
        accent: "#F7E7E2",
        primary: "#9F4A3C",
        temp: "#434343",
      },
    },
  },
  plugins: [],
};
