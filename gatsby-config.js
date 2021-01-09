module.exports = {
  siteMetadata: {
    title: "Derive music",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "XrzPl1V302CYq0ePe4a0CeFGOUvw8zH_45Aj_fLrPHY",
        spaceId: "rwra23x6dlqz",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
