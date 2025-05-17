import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#C5D7D1", // Mint pastel
          foreground: "#333333",
          light: "#E1EBE7", // Lighter mint
          dark: "#9FAEA9", // Darker mint
        },
        secondary: {
          DEFAULT: "#C7CBBD", // Sage pastel
          foreground: "#333333",
          light: "#E3E5DE", // Lighter sage
          dark: "#A5A99C", // Darker sage
        },
        accent: {
          DEFAULT: "#FAEDCD", // Cream pastel
          foreground: "#333333",
          light: "#FDF7E9", // Lighter cream
          dark: "#E5D9BA", // Darker cream
        },
        sand: {
          DEFAULT: "#F0EBD7", // Sand pastel
          light: "#F8F5EB", // Lighter sand
          dark: "#D6D1BF", // Darker sand
        },
        slate: {
          DEFAULT: "#9FAEA9", // Slate pastel
          light: "#CDD5D2", // Lighter slate
          dark: "#7A8683", // Darker slate
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
