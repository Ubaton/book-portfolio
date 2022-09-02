/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
        "colors": {
          "salmon": {
            "50": "#ffddd0",
            "100": "#ffd3c6",
            "200": "#ffc9bc",
            "300": "#ffbfb2",
            "400": "#ffb5a8",
            "500": "#fcab9e",
            "600": "#f2a194",
            "700": "#e8978a",
            "800": "#de8d80",
            "900": "#d48376"
          },
          "lightwhite": {
            "50": "#ffffff",
            "100": "#ffffff",
            "200": "#ffffff",
            "300": "#fffff8",
            "400": "#fdf6ee",
            "500": "#f3ece4",
            "600": "#e9e2da",
            "700": "#dfd8d0",
            "800": "#d5cec6",
            "900": "#cbc4bc"
          },
          "brown": {
            "50": "#ffe8d5",
            "100": "#ffdecb",
            "200": "#f7d4c1",
            "300": "#edcab7",
            "400": "#e3c0ad",
            "500": "#d9b6a3",
            "600": "#cfac99",
            "700": "#c5a28f",
            "800": "#bb9885",
            "900": "#b18e7b"
          },
          "lightbrown": {
            "50": "#ffffeb",
            "100": "#fff5e1",
            "200": "#ffebd7",
            "300": "#fae1cd",
            "400": "#f0d7c3",
            "500": "#e6cdb9",
            "600": "#dcc3af",
            "700": "#d2b9a5",
            "800": "#c8af9b",
            "900": "#bea591"
          },
          "rose": {
            "50": "#ffc8da",
            "100": "#fbbed0",
            "200": "#f1b4c6",
            "300": "#e7aabc",
            "400": "#dda0b2",
            "500": "#d396a8",
            "600": "#c98c9e",
            "700": "#bf8294",
            "800": "#b5788a",
            "900": "#ab6e80"
          }
        },

        fontFamily: {
          rs: ["Radiantly_Signature_400","cursive"],
          vng: ["Vanger","cursive"],
        },

        backgroundImage: {
          'hero-img': "url('/images/hero.png')"},

          screens: {
            'tablet': '640px',
            // => @media (min-width: 640px) { ... }
      
            'laptop': '1024px',
            // => @media (min-width: 1024px) { ... }
      
            'desktop': '1280px',
            // => @media (min-width: 1280px) { ... }
          },
    },
  },
  plugins: [require('flowbite/plugin')],
}