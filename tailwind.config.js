/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    '**/*.{html,js}',],
  theme: {
    extend: {},
    colors: {
      lightRed: '#ff5757',
      orangeYellow: '#ffb01f',
      greeTeal: '#00bd91',
      cobaltBlue: '#1125d4',
      lSlateBlueT: '#7857ff',
      lRoyalBlueT: '#2e2be9',
      violetBlueC: '4e21ca',
      persianBlueC: '#2421ca',
      paleBlue: '#ebf1ff',
      lightLavender: '#c8c7ff',
      darkGrayBlue: '#303b5a',
    },
    fontFamily: {
      grotesk: ['Hanken Grotesk', 'sans-serif'],
    },
    safelist: [
      'text-gray'
    ]
  },
  plugins: [],
}

