/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html', "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  corePlugins: {
    preflight: false,
  },
  important: true,

  plugins: [ require('flowbite/plugin')],
}

