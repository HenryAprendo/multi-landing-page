/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'dark-gray-le': '#8C8C8C',
        'very-dark-gray-le': '#696969',
      },
      fontFamily: {
        alata: ['Alata', 'sans-serif'],
        JosefinSans: ['"Josefin Sans"'],
      },
      backgroundImage: {
        'banner-mobile-hero-le': "url('./assets/loopstudios/images/mobile/image-hero.jpg')",
      }
    },
  },
  plugins: [],
}

