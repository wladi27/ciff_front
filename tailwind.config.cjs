/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E90FF",
        secondary: {
          100: "#FCFCFC",
          900: "#f0f0f0",
        },
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
