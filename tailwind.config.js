/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        card: "37.5rem",
      },
      width: {
        card: "37.5rem",
      },
    },
  },
  plugins: [],
};
