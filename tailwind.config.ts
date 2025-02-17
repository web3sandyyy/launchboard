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

        blackThree: "#121212",
        blackTwo: "#1b1d1d",
        blackOne: "#242727",
      },
      fontFamily: {
        lora: ['var(--font-lora)'],
        ubuntu: ['var(--font-ubuntu)'],
      },
    },
  },
  plugins: [],
} satisfies Config;
