/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {},
      colors: {
        'primary': '#0147FF',
        'secondary': '#F7F7F7',
      },
    },
    plugins: [],
  }