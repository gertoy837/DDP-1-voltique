/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index/templates/**/*.html',
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'class',

  theme: {
    extend: {
      backgroundColor :{
        'smoke': 'rgb(245, 245, 245, 1)',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

