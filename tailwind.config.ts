import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-jetbrains-mono)", "monospace"],
        sans: ["var(--font-ibm-plex-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
