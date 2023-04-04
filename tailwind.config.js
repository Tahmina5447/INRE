/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes: [
      {
        doctortheme:{
          primary: '#002550',
          secondary: '#1A1A1A',
          info:'#E6EAEE',
          accent:'#F2F4F6'
        }
      }
    ]
  },
  plugins: [require("daisyui")],
}

