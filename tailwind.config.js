/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'white': '#F4F4F4',
        'cream': '#F4E9CD',
        'dark': '#171C1A',
        'mainColor': '#F4E9CD',
        'accentColor': '#171C1A',
        'viridian': '#668F80',
        'rose': '#B592A0',
      },
      fontFamily: {
        larken: ['"Larken"', "sans-serif"],
        chromate: ['"Chromate"', "sans-serif"],
        argesta: ['"Argesta"', "sans-serif"],
      }
    },
    fontSize: {
      'title': '9.375rem',
      'label': '2.8125rem',
      'labelSmall': '1.875rem',
      'textDesktop': '1.5625rem',
      'textMobile': '1.25rem',
    },
  },
  plugins: [],
}

