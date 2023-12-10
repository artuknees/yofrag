import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
    },
  },
  plugins: [],
}
export default config
