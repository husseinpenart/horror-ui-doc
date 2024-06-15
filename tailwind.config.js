/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem"
      }
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px"
    }
  },
  plugins: []
};
