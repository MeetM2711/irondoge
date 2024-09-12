/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "primary": 'rgb(7,39,64)',
        "primary-dark":'rgb(47 154 255 )',
        "secondary": 'rgb(0 ,240, 255)',
        "secondary-dark": 'rgb(4 22 37)',
        "white-light": 'rgb(203 212 223)',
        "dark": 'rgb(15 14 15 )',
      },
      backgroundImage: {
        'button-background': 'linear-gradient(180deg, #ffe5c2 1%, #cdaf87 100%), #ffffff'
      }, fontFamily: {
        'GOT': ['"Game of Thrones"', 'sans-serif']
      }
    },
  },
  plugins: [],
}

