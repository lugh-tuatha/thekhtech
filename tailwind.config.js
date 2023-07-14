/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#9D72E8",
        secondary: "#CCDAF5",
        accent: "#21146B",
        gray: "#e5e5e5",

        darkBackground: "#1E1506",
        darkSecondary: "#09162F",
        darkAccent: "#21146B",
      },
    },
  },
  plugins: [],
};
