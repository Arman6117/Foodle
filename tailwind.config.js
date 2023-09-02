/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        JanoSans: [ 'Poppins','cursive'],
      },
      backgroundColor:{
        lightRed:'#fff0e9',
        redPrimary:'#ea5858',
        yellowPrimary:'#fdcc63'
      },
      textColor:{
        red:'#ea5858',
        black:'#393939'
      }
    },
  },

  plugins: [
    require('tailwind-scrollbar')
  ],
};
