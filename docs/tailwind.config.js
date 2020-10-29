module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
        fontFamily: {
            "carstyle-logo": ['"Secular One"'],
            "carstyle-text": ['Inter'],
        },
        spacing: {
            '7': '1.75rem',
            '9': '2.25rem',
            '21': '5.25rem',
            '72': '18rem',
            '80': '20rem',
        },
        inset: {
            '-1': '-0.25rem',
            '-4': '-1rem',
            '-5': '-1.25rem',
            '1/2': '50%',
        }
    },
  },
  variants: {},
  plugins: [],
}
