/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./pages/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Playwrite NG Modern"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
