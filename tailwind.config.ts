import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        medium: { raw: "(min-height: 650px)" },
        tall: { raw: "(min-height: 920px)" },
      },
    },
  },
  plugins: [],
};
export default config;
