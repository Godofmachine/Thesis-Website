/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html",  "./node_modules/flowbite/**/*.js"],
  theme: {

    
    extend: {fontFamily: {
      'king-richard': ['King Richard', 'sans'],
    },
  },
  fontWeight: {
    'king-richard-bold': 'bold',
  },
  // ...},
  },
  corePlugins: {
    preflight: false,
  },
  important: true,

  plugins: [ require('flowbite/plugin')],
}

