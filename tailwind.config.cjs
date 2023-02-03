/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "c-desaturatedRed": "hsl(0, 36%, 70%)",
        "c-softRed": "hsl(0, 93%, 68%)",
        "c-darkGrayish": "hsl(0, 6%, 24%)",
      },
      fontWeight: {
        "cfw-300": "300",
        "cfw-400": "400",
        "cfw-600": "600",
      },
    },
  },
  plugins: [],
};
