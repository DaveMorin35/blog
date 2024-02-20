/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      font: "#252B38",
      background: "#CBD6C7"
    },
    extend: {
      fontFamily: {
        'Bahianita':["Bahianita"],
        'Rubik': ["Rubik"],
      },
    },
  },
  plugins: [],
}

