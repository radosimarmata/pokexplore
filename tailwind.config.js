/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFFF00",
        secondary: "#FFCC00",
        accent: "#444444"
      },
    },
  },
  plugins: [],
};
