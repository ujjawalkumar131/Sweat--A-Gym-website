/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'hero': "linear-gradient(to right bottom, rgba(0, 0, 0, 0.75), rgba(216, 107, 40, 0.38)), url('./images/hero.jpg')",
      'profile1': "url('./images/pexels-arthouse-studio-4621419.jpg')",
      'profile2': "url('./images/pexels-mikhail-nilov-6740102.jpg')",
      'profile3': "url('./images/pexels-vazhnik-7562313.jpg')",
    },
      width:{
        'hero-text-container': "600px",
        'faq-text-container': "400px",
      
      },
      height:{
        'hero-container': "600px"
      },
      keyframes:{
        moveToLeft:{
          '0%':{transform:'translateX(350px)'},
          '100%':{transform:'translateX(0px)'}
        }
      },
      animation:{
        moveToLeft:'moveToLeft 300ms ease-in-out',
      },
      fontFamily:{
        'heading-text':'Montserrat, sans-serif',
      }
  },
  },
  plugins: [],
}