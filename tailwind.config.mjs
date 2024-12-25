/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#E15225",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#404040",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      fontFamily: {
        sans: ["var(--font-roboto), Roboto, sans-serif"],
        display: ["RandomGrotesque, Arial, sans-serif"],
        mono: ["MaK, Arial, sans-serif"],
      },
    },
  },
  plugins: [],
};
