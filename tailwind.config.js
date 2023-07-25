/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');
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
      },
      colors: {
        background: "var(--additional-navyblue, #2B2D42)",
        brandOrange: "#FF632C",
        brandBlue: "#0083FE",
      },
      fontFamily: {
        druk: ['var(--font-drukWide)', 'sans-serif'],
        drukWideBold: ["Druk Wide Bold", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
        rubik: ["Rubik", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
        daimon: ["Damion", "sans-serif"], // after you font, add some fonts separated by commas to handle fallback.
      },
    },
  },
  plugins: [
    // plugin(function ({ addBase }) {
    //   addBase({
    //     '@font-face': {
    //         fontFamily: 'Druk-Wide-Bold',
    //         fontWheight: '700',
    //         src: 'url(/app/assets/fonts/Druk-Wide-Bold.ttf)'
    //     }
    //   })
    // }),
    // plugin(function ({ addBase }) {
    //   addBase({
    //     '@font-face': {
    //         fontFamily: 'Damion',
    //         fontWheight: '400',
    //         src: 'url(https://fonts.gstatic.com/s/damion/v10/hv-XlzJ3KEUe_YZkamw2.woff2) format(\'woff2\')'
    //     }
    //   })
    // }),
  ],
};
