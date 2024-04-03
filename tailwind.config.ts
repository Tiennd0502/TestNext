import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        maxScreen: "1440px",
      },
      colors: {
        mainColor: "#E7EDF0",
        bgNavColor: "#0D2AAB",
        iconColor: "#95A3D9",
        blue: {
          100: "#95A3D9",
          200: "#8FE7F9",
          300: "#9274FE",
          400: "#543BD2",
          500: "#3048B7",
          600: "#0D2AAB",
        },
        gray: {
          100: "#4B5057",
          200: "#F8F8FA",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
