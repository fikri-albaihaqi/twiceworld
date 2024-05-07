import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-black': '#1B1816',
        'alternate-black': '#3D3C3A',
        'primary-orange': '#EB8038',
        'heart-red': '#882B11',
        'cream': '#D1CAA7'
      },
      fontFamily: {
        bungee: ['var(--font-bungee)'],
        josefin: ['var(--font-josefin)'],
        dmSerif: ['var(--font-dm-serif)'],
        gloriaHallelujah: ['var(--font-gloria-hallelujah)'],
      },
    },
  },
  plugins: [],
}
export default config
