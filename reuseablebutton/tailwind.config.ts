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
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        maxXsm: { max: "380px" },
        maxSsm: { max: "430px" },
        maxXs: { max: "480px" },
        maxSm: { max: "639px" },
        maxMd: { max: "767px" },
        maxLg: { max: "1023px" },
        minMax: { min: "768px", max: "960px" },
        minMaxMd: { min: "1025px", max: "1089px" },
      },
      fontSize: {
        xs: ".75rem",
        base: "1rem",
        md: "1.125rem",
        lg: "1.375rem",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        prussianblue: "#053B50",
        bluesapphire: "#176B87",
      },
    },
  },
  plugins: [],
};
export default config;
