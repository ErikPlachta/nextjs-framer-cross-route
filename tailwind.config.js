/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color-main': "hsl(0, 0%, 96%)",
        'color-parent': "hsl(0, 0%, 90%)",
        'color-child': "hsl(0, 0%, 80%)",
      }
    },
  },
  plugins: [],
}
