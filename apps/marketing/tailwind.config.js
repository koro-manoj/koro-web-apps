/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ibm-plex)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      colors: {
        brand: {
          navy: "#0a1628",
          cream: "#faf7f2",
          copper: "#c45c26",
          sage: "#4a7c6f",
          slate: "#3d4f5f",
        },
      },
      animation: {
        "slide-up": "slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "reveal": "reveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      keyframes: {
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        reveal: {
          "0%": { opacity: "0", clipPath: "inset(0 100% 0 0)" },
          "100%": { opacity: "1", clipPath: "inset(0 0 0 0)" },
        },
      },
    },
  },
  plugins: [],
};
