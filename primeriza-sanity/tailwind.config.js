
// For some reason, if I do not create this file, an error ui with sanity comes up. 
/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
'./pages/**/*.{js,ts,jsx,tsx}',
'./components/**/*.{js,ts,jsx,tsx}',
'./app/**/*.{js,ts,jsx,tsx}',

  ],

  theme: {
    extend: {},
  },
  plugins: [],
}