/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#640EDA",
        darkis: "#161616",
        button: "#FBFE10",
      },
    },
  },
  plugins: [],
};
