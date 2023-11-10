/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        // loopstudios
        'dark-gray-le': '#8C8C8C',
        'very-dark-gray-le': '#696969',

        // ensure
        'dark-violet-ensure':'#2D2640',
        'grayish-blue-ensure': '#95A9C6',
        'very-dark-violet-ensure':'#2B272F',
        'dark-grayish-violet-ensure':'#837D87',
        'very-light-gray-ensure':'#FAFAFA'

      },
      fontFamily: {
        // loopstudios
        alata: ['Alata', 'sans-serif'],
        JosefinSans: ['"Josefin Sans"'],

        // ensure
        DMserifDisplay: ['DM Serif Display', 'serif'],
        karla: ['Karla', 'sans-serif'],

      },
      backgroundImage: {
        'banner-mobile-hero-le': "url('./assets/loopstudios/images/mobile/image-hero.jpg')",
        'banner-desktop-hero-le': "url('./assets/loopstudios/images/desktop/image-hero.jpg')",
      }
    },
  },
  plugins: [],
}

