/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
      colors: {
        'primary': '#282828',
        'secondary': '#F7F7F7',
        'outline': '#0147FF',
        'white': '#FFFFFF',
      },
      fontFamily: {
        'robotoF': ['Roboto Flex', 'sans-serif'],
        'robotoCon': ['Roboto Condensed', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
      },
    },
    plugins: [],
  }