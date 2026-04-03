import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          50:  "#fff8f0",
          100: "#ffefd6",
          200: "#ffd9a8",
          300: "#ffbc6b",
          400: "#ff9a2c",
          500: "#f97d08",
          600: "#e06200",
          700: "#b84d04",
          800: "#943d0c",
          900: "#78330e",
          950: "#411704",
        },
        cream: {
          50:  "#fdfaf5",
          100: "#f9f2e4",
          200: "#f2e3c4",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        devanagari: ["var(--font-devanagari)", "serif"],
      },
      backgroundImage: {
        "hero-pattern": "radial-gradient(ellipse 80% 60% at 50% 0%, #fff3e0 0%, #ffffff 70%)",
        "mandala-radial": "radial-gradient(circle at center, #f97d08 0%, transparent 70%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease forwards",
        "fade-in": "fadeIn 0.6s ease forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px 4px rgba(249,125,8,0.15)" },
          "50%":      { boxShadow: "0 0 40px 10px rgba(249,125,8,0.30)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
