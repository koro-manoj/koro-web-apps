/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-instrument)", "Georgia", "serif"],
      },
      colors: {
        koro: {
          ink: "var(--koro-ink)",
          muted: "var(--koro-ink-muted)",
          surface: "var(--koro-surface)",
          raised: "var(--koro-surface-raised)",
          accent: "var(--koro-accent)",
          teal: "var(--koro-teal)",
          border: "var(--koro-border)",
        },
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
