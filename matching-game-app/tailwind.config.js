/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      rotate:{
        '31.61': '31.61deg',
      },
      backgroundImage: {
        'messageBox':"url(./Assets/message.png)"
      }
    },
  },
  plugins: [],
}

