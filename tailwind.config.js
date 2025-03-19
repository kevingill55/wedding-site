/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./src/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#4b3832",
        accent: "#FDF5C9",
        accentTwo: "#fbffc0",
        primary: "#6B3E26",
        main2: "#302680",
        main: "#215BDF",
        oldMain: "#BA522D",
        alt: "#0A4737",
        oldAlt: "#665A20",
        temp: "#434343",
      },
    },
  },
  plugins: [],
};
