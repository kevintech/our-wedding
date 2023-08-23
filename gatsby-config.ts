import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Welcome to our wedding ~ Kevin & Ligia`,
    siteUrl: `https://eternalloveofkevinandligia.com`,
    weddingDate: `2023-09-09 15:00`,
    weddingTimeZone: `America/Guatemala`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: "gatsby-plugin-google-gtag",
    options: {
      trackingIds: ['G-1XY9J1TEPG'],
      pluginConfig: {
        head: true
      }
    }
  },
  "gatsby-plugin-image",
  "gatsby-plugin-sitemap",
  "gatsby-plugin-sharp",
  "gatsby-transformer-sharp",
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-omni-font-loader`,
    options: {
      enableListener: true,
      preconnect: [`https://fonts.googleapis.com`, `https://fonts.gstatic.com`],
      web: [
        {
          name: `Great Vibes`,
          file: `https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap`,
        },
        {
          name: `Nothing You Could Do`,
          file: `https://fonts.googleapis.com/css2?family=Nothing+You+Could+Do&display=swap`,
        },
        {
          name: `Source Serif Pro`,
          file: `https://fonts.googleapis.com/css2?family=Source+Serif+Pro:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap`,
        },
        {
          name: `Playfair Display`,
          file: `https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap`,
        },
      ],
    },
  }]
};

export default config;
