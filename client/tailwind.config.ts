import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xxs: "5px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
