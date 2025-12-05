// @ts-check
const isVercel = process.env.VERCEL === '1';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Minimalist Life Shift',
  tagline: 'Transform Your Life Through Simple, Actionable Principles',
  favicon: 'img/favicon.ico',

  url: isVercel
    ? 'https://book-the-minimalist-life-shift.vercel.app'
    : 'https://alishbanasir.github.io',

  baseUrl: isVercel
    ? '/'
    : '/-Book-The-Minimalist-Life-Shift/',

  organizationName: 'alishbanasir',
  projectName: '-Book-The-Minimalist-Life-Shift',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'The Minimalist Life Shift',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'bookSidebar',
          position: 'left',
          label: 'Read the Book',
        },
        {
          href: 'https://github.com/alishbanasir/-Book-The-Minimalist-Life-Shift',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} The Minimalist Life Shift.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
    },
  }),
};

module.exports = config;
