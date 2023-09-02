/** @type {import('tailwindcss').Config} */
import { screens as _screens } from 'tailwindcss/defaultTheme'

export const content = [
  './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
  './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  './src/app/**/*.{js,ts,jsx,tsx,mdx}',
]
export const theme = {
  extend: {
    screens: {
      'xs': '330px',
      ..._screens,
    },
    colors: {
      primaryText: "#9C9C9C",
      accent: "#F34E3A",
    }
  },
}
export const plugins = []
