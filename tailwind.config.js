/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundGradientColors: {
        custom:
          "linear-gradient(270deg, rgb(171, 102, 255) 0%, rgb(20, 241, 149) 101.39%)",
      },
    },
  },
  plugins: [],
};
