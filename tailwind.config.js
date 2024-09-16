/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        screens: {
          '2xl': '1200px',
          'xl': '1200px',
          'lg': '1024px',
        }
      },
      colors: {
        'primary': '#282828',
        'secondary': '#F7F7F7',
        'outline': '#0147FF',
        'white': '#FFFFFF',
        'gray': '#F1F1F1',
      },
      fontFamily: {
        'robotoF': ['Roboto Flex', 'sans-serif'],
        'robotoCon': ['Roboto Condensed', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
      },
    },
    plugins: [],
  }