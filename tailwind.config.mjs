/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
      extend: {
        keyframes: {
          scaleAnim: {
            '0%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.1)' },
            '100%': { transform: 'scale(1)' },
          },
        },
        animation: {
          scale: 'scaleAnim 300ms ease-in-out',
        },
      },
    },
    plugins: [],
  };
  // tailwind.config.cjs
const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [heroui()]
}


  // tailwind.config.js
   module.exports = {
     theme: {
       extend: {
         animation: {
           'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
           'star-movement-top': 'star-movement-top linear infinite alternate',
         },
         keyframes: {
           'star-movement-bottom': {
             '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
             '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
           },
           'star-movement-top': {
             '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
             '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
           },
         },
       },
     }
   }