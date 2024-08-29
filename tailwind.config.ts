import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1920px',
      // => @media (min-width: 1920px) { ... }
    },
    extend: {
      colors: {
        'yofrag-purple': '#820AA1',
        'yofrag-pink': '#AD33CC',
        'yofrag-deepGreen': '#61A100',
        'yofrag-lightGreen': '#9BED1C',
        'yofrag-black': '#19171B',
        'yofrag-gray': '#EEEDED',
        'yofrag-white': '#F9F9F9',
      },
      fontFamily: {
        'ambit': ['Ambit', 'sans-serif'], // Ya lo tienes configurado
        'jost': ['Jost', 'sans-serif'],  // Añade esta línea
      },
    },
  },
  plugins: [],
}
export default config
