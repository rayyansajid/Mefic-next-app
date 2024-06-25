const { transform } = require('next/dist/build/swc');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    animation:{
      'slideInFromLeft': 'slideInFromLeft 5s ease-in-out 0s infinite',
      'slideInFromRight': 'slideInFromRight 5s ease-in-out 0s infinite',
      'slidetoRop': 'slidetoRop 5s ease-in-out 0s infinite',
    },
    keyframes:{
      slideInFromLeft:{
        'from':{transform:'translateX(0)'},
        // '25%':{transform:'translateX(-3%)'},
        // '50%':{transform:'translateX(-6%)'},
        '50%': {transform:'translateX(-6%)'},
        'to':{transform:'translateX(0)'}
      },
      slideInFromRight:{
        'from':{transform:'translateX(0)'},
        // '25%':{transform:'translateX(-3%)'},
        // '50%':{transform:'translateX(-6%)'},
        '50%': {transform:'translateX(6%)'},
        'to':{transform:'translateX(0)'}
      },
      // slidetoTop:{
      //   'from':{transform:'translateY(0)'},
      //   // '25%':{transform:'translateX(-3%)'},
      //   // '50%':{transform:'translateX(-6%)'},
      //   '50%': {transform:'translateY(6%)'},
      //   'to':{transform:'translateY(0)'}
      // }
      slidetoTop:{
        'from':{top:'0'},
        // '25%':{transform:'translateX(-3%)'},
        // '50%':{transform:'translateX(-6%)'},
        '50%': {top:"5px"},
        'to':{top:'0'}
      }


    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
