/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary'   : "hsl(0, 0%, 96%)",
        'secondary' : "hsl(0, 0%, 90%)",
        'tertiary'  : "hsl(0, 0%, 80%)",
      },
      
      //-- Update with custom fonts.
      // fontFamily: {
      //   'sans': ['Inter', 'sans-serif'],
      // },
      
      //-- Update with custom theming.
      // typography: (theme) => ({
      //   DEFAULT: {
      //     css: {
      //       // color: theme('colors.gray.700'),
      //       a: {
      //         color: theme('colors.blue.500'),
      //         '&:hover': {
      //           color: theme('colors.blue.700'),
      //         }
      //       },
      //     },
      //   },
      // }),
    },
  },
  plugins: [],
}
