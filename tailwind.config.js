/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        "orange-primary-1": "#ea580c",
        "orange-primary-2": "#c2410c",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
