const colors = require('tailwindcss/colors');
const daisyUI = require('daisyui');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: false, // or 'media' or 'class'
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    darkTheme: 'dark',
  },
  variants: {
    extend: {},
  },
  plugins: [daisyUI],
};
