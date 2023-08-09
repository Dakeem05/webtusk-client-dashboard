/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'lato' : ['Lato', 'san-serif'],
      'montserrat' :['Montserrat', 'sans-serif']
    },
    extend: {
      screens:{
        'xxs':'361px',
        'xs':'461px',
        'xms':'500px',
        'xss':'590px',
        'smm':'690px',
        'inter':"934px",
        'mdd':"834px",
        'mid':'1170px'
      },
      keyframes:{
        'ping': {
          'from' : {
              // transform: "scale(0)",
          },
          'to' : {
              transform: "scale(1)",
          }
      }
      // .animate-ping {
      //     animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
      // }
      },
      animation:{
        'ping-notify':'ping 2s infinite'
      }
    },
  },
  plugins: [],
}

