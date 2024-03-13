import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#0D0D0D",
        primary: "#7856ff",
        nonactive: "#4A4A4A",
        tabsbtn: "#1C1C1C",
      },
      boxShadow: {
        "white-inset": "0px 4px 4px 0px #FFFFFF40 inset",
      },
    },
  },
  plugins: [],
};
export default config;
