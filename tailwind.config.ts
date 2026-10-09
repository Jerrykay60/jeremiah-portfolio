import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2B66FF",
          "blue-hover": "#1E52E6",
          "blue-light": "#60A5FA",
          "blue-soft": "#EEF4FF",
          dark: "#0F172A",
          charcoal: "#1E293B",
          muted: "#64748B",
          surface: "#F8FAFC",
          card: "#FFFFFF",
          hero: "#EEF2F6",
        },
        pastel: {
          rose: "#FFF0F2",
          "rose-text": "#E11D48",
          sky: "#F0F7FF",
          "sky-text": "#0284C7",
          amber: "#FFFBEB",
          "amber-text": "#D97706",
          emerald: "#F0FDF4",
          "emerald-text": "#059669",
          purple: "#FAF5FF",
          "purple-text": "#9333EA",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "'Inter'", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
        serif: ["var(--font-inter)", "'Inter'", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 20px 40px -15px rgba(43, 102, 255, 0.12)",
        glow: "0 0 25px -5px rgba(43, 102, 255, 0.4)",
      },
    },
  },
  plugins: [],
};

export default config;
