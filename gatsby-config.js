module.exports = {
  siteMetadata: {
    title: 'Sienna\'s blog',
    description:
      'Sienna is a business and computer science at Western University',
    url: 'https://gatsby-starter-amsterdam.netlify.com',
    author: 'Sienna Luong',
    image: 'https://gatsby-starter-amsterdam.netlify.com/og-image.jpg',
    intro: 'This is Sienna Luong navigating her 20s.',
    menuLinks: [
      {
        name: 'Sienna\'s blog',
        slug: '/',
      },
      {
        name: 'About',
        slug: '/about/',
      },
      {
        name: 'Learn List',
        slug: '/learn/',
      },
    ],
    footerLinks: [
      {
        name: 'Portfolio',
        url: 'https://siennaluong.github.io/',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-theme-amsterdam',
      options: {},
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {},
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Theme Amsterdam`,
        short_name: `Amsterdam`,
        background_color: `#fff`,
        theme_color: `#fff`,
        start_url: `/`,
        display: `standalone`,
        icon: require.resolve('./src/images/favicon.png'),
      },
    },
  ],
}
