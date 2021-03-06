/* eslint-disable prettier/prettier */
module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Edgar Portfolio`,
        short_name: `Edgar Rincón`,
        start_url: `/`,
        background_color: `#ededed`,
        theme_color: `#272341`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },
  ],
};
