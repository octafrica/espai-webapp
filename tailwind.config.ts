import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        satoshi: ["Satoshi", "sans-serif"],
      },
      colors: {
        default: "#111",
        purple: "#5150AE",
        deeppurple: "#714dd2",
        ctagray: "#212121",
        lightgray: "#1E1E1E",
        lightergray: "#2c2c2c",
        bentogray: "#171717",
      },
    },
  },
  plugins: [],
};
export default config;
