/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      light_blue: '#338BA8',
      lighter_blue: '#e1f1fd',
      light_gray: '#d3d3d3'
    }
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
