import type { Config } from "tailwindcss";

// Blush, charcoal, and soft whites for the refreshed clinic design.
// Legacy token names remain compatible with the existing form components.
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#302b32",
        slate: "#736975",
        mist: "#f8eff4",
        pink: {
          DEFAULT: "#a93670",
          soft: "#f5dce9",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      boxShadow: {
        card: "0 4px 20px -4px rgba(31, 31, 31, 0.08)",
        soft: "0 10px 30px -10px rgba(31, 31, 31, 0.15)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        "fade-in": "fade-in 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;


