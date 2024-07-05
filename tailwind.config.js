/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xsm: "320px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xsl: "1280px",
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        bounce: "bounce 2s infinite",
      },
    },
    plugins: [],
  },
};
