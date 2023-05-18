/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f3f1ef",
        readings: "#dabda9",
        chart: "#95cfd9",
        performance: "#0f1322",
      },
    },
  },
  plugins: [],
};
