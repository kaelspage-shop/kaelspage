/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cocoa: "#563A2B", mocha: "#80583D", caramel: "#B58B69",
        latte: "#E7D4BC", cream: "#F8F0E5", soft: "#FFFCF7",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"DM Sans"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        boutique: "0 8px 24px -10px rgba(86,58,43,.35)",
        lift: "0 14px 30px -12px rgba(86,58,43,.45)",
      },
      keyframes: {
        float: { "0%,100%": { transform: "translateY(0) rotate(0)" }, "50%": { transform: "translateY(-8px) rotate(6deg)" } },
        pop: { from: { opacity: 0, transform: "translateY(12px) scale(.97)" }, to: { opacity: 1, transform: "none" } },
        slideIn: { from: { transform: "translateX(100%)" }, to: { transform: "none" } },
        fade: { from: { opacity: 0 }, to: { opacity: 1 } },
      },
      animation: { float: "float 5s ease-in-out infinite", pop: "pop .25s ease-out", slideIn: "slideIn .3s ease-out", fade: "fade .2s ease-out" },
    },
  },
  plugins: [],
};
