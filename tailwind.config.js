/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      content: ["Alef"],
      body: ["Aladin"],
    },
    extend: {
      colors: {
        light: "#f1f7f0",
        dark: "#1c1c22",
      },
      boxShadow: {
        search: "0px 8px 15px rgba(#4b4848, 0.1)",
        "search-focus": "0px 9px 20px rgba(#4b4848, 0.3)",
      },
      gridTemplateColumns: {
        "1fr": "1fr 1fr",
        mobile1fr: "1fr",
        "details-grid": "repeat(2, 50vw)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
