/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'timmana': ['timmana'],
        'pacifico': ['pacifico'],
      },
      colors: {
        'gold': '#A98D15'
      }
    },
  },
  plugins: [],
}

