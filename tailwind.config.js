// Example tailwind.config.js
import daisyui from "daisyui";
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
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"], // specify the theme you want to use
  },
};
