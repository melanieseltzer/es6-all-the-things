const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'ES6 All The Things',
  },
  pathPrefix: '/es6-all-the-things',
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-plugin-postcss-sass',
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8,
      },
    },
  ],
};
