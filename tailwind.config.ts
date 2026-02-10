import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./public/**/*.html",
  ],

  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "red-primary": "var(--red-primary)",
        "gray-warm": "#A8B3BF",
        "gray-light": "#D1D5DB",
      },
      fontSize: {
        caption: ["0.875rem", { lineHeight: "1.4" }],
        body: ["1rem", { lineHeight: "1.6" }],
        lead: ["1.125rem", { lineHeight: "1.5" }],
        heading: ["1.5rem", { lineHeight: "1.3" }],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        typing: "typing 2s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        typing: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(229, 9, 20, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(229, 9, 20, 0.6)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
