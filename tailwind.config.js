const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      aspectRatio: {
        none: 0,
        square: [1, 1],
        "16/9": [16, 9],
        "4/3": [4, 3],
        "21/9": [21, 9]
      },
      padding: { "fluid-video": "56.25%" },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {aspectRatio: ['responsive']},
  plugins: [
    require('@tailwindcss/ui'),
    require("tailwindcss-responsive-embed"),
    require("tailwindcss-aspect-ratio")
  ]
}
