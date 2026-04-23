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
        background: "var(--background)",
        foreground: "var(--foreground)",
        wedding: {
          red: "#D6002A", // Vermelho Cereja from reference
          gold: "#C59B62", // Gold from Save the Date box
          olive: "#7D8C61", // Green/Olive from nature drawing
          beige: "#F9F6F0", // Soft background off-white
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        script: ["var(--font-script)"],
      }
    },
  },
  plugins: [],
};
export default config;
