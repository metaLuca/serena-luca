const path = require("path");
const { title, keywords, description, author, defaultLang, trackingId } = require("./config/site");

module.exports = {
  pathPrefix: "/serena-luca",
  siteMetadata: {
    title,
    keywords,
    description,
    author,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId,
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
     "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: title,
        short_name: "Sere&Luca",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#fed136",
        display: "minimal-ui",
        icon: "content/assets/wedding-logo.png",
      },
    },
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/content/assets/images`,
      },
    },
    "gatsby-plugin-eslint",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-transformer-sharp",
      options: {
        checkSupportedExtensions: false,
      },
    },
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        data: `@import "core.scss";`,
        includePaths: [path.resolve(__dirname, "src/style")],
      },
    },
    {
      resolve: "gatsby-omni-font-loader",
      options: {
        preconnect: ["https://fonts.gstatic.com"],
        web: [
          {
            name: "Droid Sans",
            file: "https://fonts.googleapis.com/css2?family=Droid+Sans&display=swap",
          },
          {
            name: "Montserrat",
            file: "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap",
          },
          {
            name: "Kaushan Script",
            file: "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap",
          },
          {
            name: "Roboto Slab",
            file: "https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap",
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: defaultLang,
        useLangKeyLayout: false,
        pagesPaths: ["/content/"],
      },
    },
  ],
};
