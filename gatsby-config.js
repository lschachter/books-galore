// this content is built off of gatsby's default code

module.exports = {
  siteMetadata: {
    title: `Books Galore`,
    description: `Enter a topic and the Google Books API will return to you a list of related books.`,
    author: `@lillie-schachter`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `books-galore`,
        short_name: `bookfinder`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
