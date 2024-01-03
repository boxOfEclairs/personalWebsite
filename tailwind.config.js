/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'cream': '#F4E9CD',
        'dark': '#171C1A',
        'mainColor': '#F4E9CD',
        'accentColor': '#171C1A',
      },
      fontFamily: {
        larken: ['"Larken"', "sans-serif"],
        chromate: ['"Chromate"', "sans-serif"],
        argesta: ['"Argesta"', "sans-serif"],
      }
    },
  },
  plugins: [],
}

