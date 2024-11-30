/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        custom: "79% 20% 21% 82% / 49% 26% 78% 53% ",
      },
    },
  },
  plugins: [],
};
