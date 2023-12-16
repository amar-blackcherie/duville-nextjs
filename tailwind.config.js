/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#fdfdfd",
          "200": "#252525",
          "300": "#1d1d1d",
          "400": "#1d1c1c",
          "500": "#030303",
          "600": "rgba(255, 255, 255, 0.8)",
          "700": "rgba(253, 253, 253, 0)",
        },
        crimson: {
          "100": "#ff2e39",
          "200": "#ed1c26",
        },
        red: "#ff0000",
        black: "#000",
        whitesmoke: {
          "100": "#ecedef",
          "200": "#ededed",
        },
        gainsboro: {
          "100": "#dfdede",
          "200": "#d9d9d9",
        },
        dimgray: {
          "100": "#6c6a6a",
          "200": "#666",
        },
        darkgray: {
          "100": "#afadad",
          "200": "#a9a8a8",
          "300": "#999",
        },
        lightgray: {
          "100": "#d7d7d7",
          "200": "#ccc",
        },
        darkslategray: "#343434",
      },
      spacing: {},
      fontFamily: {
        gilroy: "Gilroy",
        lato: "Lato",
        "plus-jakarta-sans": "'Plus Jakarta Sans'",
        raleway: "Raleway",
      },
    },
    fontSize: {
      "26xl": "45px",
      sm: "14px",
      base: "16px",
      "87xl": "106px",
      xs: "12px",
      lg: "18px",
      mini: "15px",
      "11xl": "30px",
      "3xl": "22px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
