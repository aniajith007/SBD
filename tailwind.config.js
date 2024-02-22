/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: "'poppins',sans-serif",
        sofiasans: "'Sofia Sans Condensed', sans-serif"
      },
    },
  },
  plugins: [],
}

