module.exports = {
  siteMetadata: {
    title: `Jana Rajakumar`,
    description: `Personal Portfolio`,
    author: `Jana Rajakumar`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'bp5s8545',
        dataset: 'projects',
        token: process.env.GATSBY_SANITY_TOKEN,
        watchMode: true
      }
    }
  ]
}
