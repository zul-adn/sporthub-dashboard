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
        neutral: {
          10: "#FBFDFF",
          20: "#A3A5A8",
          40: "#505254",
          60: "#232425",
          80: "#202021",
          90: "#030D1B",
        },
        primary: {
          10: "#FDE8EB",
          20: "#FF8694",
          40: "#FF6D7F",
          60: "#FF5165",
          80: "#FF4A60",
          90: "#ED1A33",
        },
        secondary: {
          10: "#FFF7ED",
          20: "#FDD6A3",
          40: "#FCC67E",
          60: "#FBBD6C",
          80: "#FBB559",
          90: "#FAAD47",
        },
        success: {
          10: "#F1FBF8",
          20: "#81D112",
          40: "#66B30D",
          60: "#4F9609",
          80: "#4F9609",
          90: "#2B6403",
          100: "#009262",
        },
        error: {
          10: "#FFF1F0",
          20: "#F0857D",
          40: "#FF5A4F",
          60: "#E02B1D",
          80: "#E01507",
          90: "#C43025",
        },
        borderColor: {
          primary: "#AEB1B4",
          secondary: "#F4F4F4",
          tertiary: "#979CA0",
        },
        disableColor: {
          primary: "#E9EEF3",
          secondary: "#DCE6EE",
          tertiary: "#BEC5CB",
        },
        isFocusText: {
          primary: "#FAB252",
        },
        silver: {
          20: "#F4F6F9",
        },
      },
      fontSize: {
        "body-lg": "1rem",
        "body-md": "0.875rem",
        "body-sm": "0.75rem",
      },
      animation: {
        "spin-slow": "spin 5s linear infinite",
      },
      backgroundImage: {
        "gradient-radial-navbar":
          "radial-gradient(183.87% 183.38% at -30.13% -34.15%, #FBB04C 0%, #FD8C48 17.71%, #FE684D 37.5%, #F43036 56.25%, #F0232B 76.04%, #ED1C24 91.95%, #ED1C24 100%);",
        "portofolio-orange": "url('../assets/svgs/bg-protofolio-orange.svg')",
        "portofolio-red": "url('../assets/svgs/bg-protofolio-red.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
