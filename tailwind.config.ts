import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#000",
      hoverLink: "#333333",
      secondary: "#BBBBBB",
      border: "rgb(221 221 221)",
      banner: "#D7F1FD",
      accent: "#BCEDEA",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      sans: ["DM-sans", "sans-serif"],
      serif: ["Cormorant", "serif"],
    },
    screens: {
      sm: "640px",
      tablet: "768px",
      laptop: "1101px",
      desktop: "1601px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
export default config;
