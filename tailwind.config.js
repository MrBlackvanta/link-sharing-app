/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-grey": "#333333",
        "light-grey": "#eeeeee",
        borders: "#D9D9D9",
        purple: "#633CFF",
        "purple-hover": "#BEADFF",
        "light-purple": "#EFEBFF",
        red: "#FF3939",
      },
      boxShadow: {
        "purple-shadow": "0px 0px 32px 0px rgba(99, 60, 255, 0.25)",
        "black-shadow": "0px 0px 32px 0px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
