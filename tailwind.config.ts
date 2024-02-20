import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // https://m2.material.io/inline-tools/color/
        primary: {
          company: '#facc15',
          applicant: '#0891b2',
        },
        secondary: {
          company: '#fde047',
          applicant: '#22d3ee',
        },
        tertiary: {
          company: '#fef08a',
          applicant: '#67e8f9',
        },
        text: '#0F172A',
      },
    },
  },
  plugins: [require('daisyui')],
}
export default config
