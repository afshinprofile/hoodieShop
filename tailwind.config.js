/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
        }
      },
      fontFamily: {
        EstedadEL: [
          "'Estedad', sans-seri",
          {
            fontVariationSettings: '"wght" 200',
          },
        ],
        EstedadRegular: [
          "'Estedad', sans-seri",
          {
            fontVariationSettings: '"wght" 400',
          },
        ],
        EstedadMedium: [
          "'Estedad', sans-seri",
          {
            fontVariationSettings: '"wght" 500',
          },
        ],
        EstedadSB: [
          "'Estedad', sans-seri",
          {
            fontVariationSettings: '"wght" 600',
          },
        ],
        EstedadBold: [
          "'Estedad', sans-seri",
          {
            fontVariationSettings: '"wght" 700',
          },
        ],
        EstedadEB: [
          "'Estedad', sans-seri",
          {
            fontVariationSettings: '"wght" 800',
          },
        ],
        EstedadBlack: [
          "'Estedad', sans-seri",
          {
            fontVariationSettings: '"wght" 900',
          },
        ],
      },
      colors: {
        DEFAULT: '#1D2939',
        primary: '#2EC4B6'
      },
      borderRadius: {
        10: '10px'
      },
      fontSize: {
        10: '10px'
      }
    },
  },
  plugins: [],
}

