import type { Config } from "tailwindcss";

/* ============================================================
   CANNABIS INSURANCE — "Regulated Green" design system
   Forest green primary · gold accent · clean white backgrounds
   clay = forest green · sage = gold · espresso = dark charcoal
   ============================================================ */

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#fafaf7",
        sand: "#f2ede4",
        white: "#ffffff",
        clay: {
          DEFAULT: "#1a3d1a",
          dark: "#122b12",
          light: "#2d5c2d",
          50: "#eef5ee",
          100: "#d4e8d4",
          200: "#a9d0a9",
          300: "#79b379",
          400: "#4d964d",
          500: "#2d5c2d",
          600: "#1a3d1a",
          700: "#122b12",
          800: "#0c1e0c",
          900: "#071007",
        },
        sage: {
          DEFAULT: "#c9972c",
          dark: "#a87a1e",
          light: "#ddb050",
          50: "#fdf6e8",
          100: "#f9e8c0",
          200: "#f2d083",
          300: "#e8b84b",
          400: "#ddb050",
          500: "#c9972c",
          600: "#a87a1e",
          700: "#7d5b16",
        },
        gold: {
          DEFAULT: "#c9972c",
          dark: "#a87a1e",
          light: "#ddb050",
          50: "#fdf6e8",
          100: "#f9e8c0",
          200: "#f2d083",
          300: "#e8b84b",
          400: "#ddb050",
          500: "#c9972c",
          600: "#a87a1e",
        },
        espresso: "#1a1a1a",
        cocoa: "#3d3d3d",
        mocha: "#666666",
        adobe: "#e8e0d0",
        adobeDark: "#d4c8b4",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        arch: "0.75rem 0.75rem 0.75rem 0.75rem",
        arch2: "1rem 1rem 0.75rem 0.75rem",
        "4xl": "1rem",
        "5xl": "1.25rem",
      },
      backgroundImage: {
        "sunrise-bands":
          "linear-gradient(180deg, #fafaf7 0%, #f5f0e8 40%, #f2ede4 70%, #fafaf7 100%)",
        "warm-radial":
          "radial-gradient(circle at 30% 20%, rgba(26,61,26,0.06) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(201,151,44,0.06) 0%, transparent 55%)",
        "clay-gradient": "linear-gradient(135deg, #1a3d1a 0%, #2d5c2d 100%)",
        "sage-gradient": "linear-gradient(135deg, #c9972c 0%, #ddb050 100%)",
        "gold-gradient": "linear-gradient(135deg, #c9972c 0%, #e8b84b 100%)",
      },
      boxShadow: {
        warm: "0 10px 40px -15px rgba(26,61,26,0.20), 0 4px 12px -6px rgba(26,61,26,0.08)",
        "warm-lg": "0 30px 70px -20px rgba(26,61,26,0.26), 0 10px 30px -10px rgba(26,61,26,0.10)",
        card: "0 2px 8px -2px rgba(26,26,26,0.06), 0 1px 3px -1px rgba(26,26,26,0.04)",
        "card-hover": "0 20px 50px -15px rgba(26,61,26,0.22), 0 8px 20px -8px rgba(26,26,26,0.08)",
        arch: "inset 0 -8px 30px -10px rgba(26,61,26,0.08)",
      },
      keyframes: {
        "fade-up": { "0%": { opacity: "0", transform: "translateY(20px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        "slow-zoom": { "0%, 100%": { transform: "scale(1)" }, "50%": { transform: "scale(1.05)" } },
        shimmer: { "0%": { backgroundPosition: "-200% 0" }, "100%": { backgroundPosition: "200% 0" } },
        "arch-rise": { "0%": { transform: "scaleY(0.6)", opacity: "0", transformOrigin: "bottom" }, "100%": { transform: "scaleY(1)", opacity: "1", transformOrigin: "bottom" } },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
        "arch-rise": "arch-rise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
