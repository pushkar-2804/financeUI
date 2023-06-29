/** @type {import('tailwindcss').Config} */
module.exports = {
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
        bgBottom: "url(assets/backgroundBottom.svg) !important",
        bgImg: "url(assets/background.svg) !important",
      },
      colors: {
        accent: "#FB7306",
      },
      height: {
        topDiv: "709px",
        bottomImg: "790px",
        screen: "1495px",
      },
      width: {
        subText: "614px",
      },
    },
  },
  plugins: [],
};
