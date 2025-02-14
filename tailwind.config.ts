import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#1B3B36",
        secondary: "#F4F2E3",
        tertiary: "#E8E0D4",
        brown: "#493628",
      },
      fontFamily: {
        lora: ['var(--font-lora)'],
        ubuntu: ['var(--font-ubuntu)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
