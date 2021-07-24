const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.js', './src/**/*.jsx', './public/**/*.html', './public/**/*.ts', './public/**/*.tsx'],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};