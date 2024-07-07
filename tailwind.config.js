// Example tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Custom colors
        "orange-450": "#e8772e",
        "grey-450": "#102541",
      },
      fontFamily: {
        sans: ["Libre Franklin", "sans-serif"],
      },
    },
  },
  plugins: [],
};
