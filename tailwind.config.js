/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        softBlue: "hsl(231, 69%, 60%)",
        softRed: "hsl(0, 94%, 66%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        veryDarkBlue: "hsl(229, 31%, 21%)",
      },
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      fontWeight: {
        400: "400",
        500: "500",
      },
      screens: {
        375: "375px",
        500: "500px",
      },
    },
  },
  plugins: [],
};
