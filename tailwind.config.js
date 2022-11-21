/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./dist/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        'DMSans': ["DM Sans", "sans-serif"],
      },
      colors: {
        Blue: 'hsl(228, 100%, 60%)',
        BlueLight: 'hsl(227, 100%, 66%)',
        BlueSupLight: 'hsl(226, 100%, 92%)',
        NavyBlue: 'hsl(233, 12%, 13%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',
      }
    },
    container: {}
  },
  plugins: [],
}
