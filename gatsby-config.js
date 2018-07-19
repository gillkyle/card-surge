module.exports = {
  siteMetadata: {
    title: 'Card Surge',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Card Surge',
        short_name: 'Card Surge',
        start_url: '/',
        background_color: '#2BE1F2',
        theme_color: '#2BE1F2',
        display: 'minimal-ui',
        icon: 'src/img/Logo-Icon.png',
      },
    },
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
  ],
}
