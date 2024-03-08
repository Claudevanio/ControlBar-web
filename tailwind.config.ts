import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/components/**/*.tsx", "./src/app/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        backgroundSecondary: "#F2F2F2",

        primary: "#421C6D",
        primaryLight: "#5A2491",

        secondary: "#077167",
        secondaryLight: "#01A9A9",

        danger: "#D70000",
        warning: "#EFF333",
        success: "#00A72F",
        info: "#085FE2",

        textPrimary: "#39474F",
        textSecondary: "#545C6F",
        textTertiary: "#313131",
        textQuaternary: "#767676",

        gray: "#C4C4C4",
        grayLight: "#F7F7F7",
      },
    },
  },
  plugins: [],
};
export default config;
