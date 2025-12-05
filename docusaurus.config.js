// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const isVercel = process.env.VERCEL === '1';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Minimalist Life Shift',
  tagline: 'Transform Your Life Through Simple, Actionable Principles',

  url: isVercel
    ? 'https://book-ochre-seven.vercel.app'
    : 'https://alishbanasir.github.io',

  baseUrl: isVercel
    ? '/'
    : '/-Book-The-Minimalist-Life-Shift/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org',
  projectName: 'the-minimalist-life-shift',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
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

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'The Minimalist Life Shift',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
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
        copyright: `Copyright © ${new Date().getFullYear()} The Minimalist Life Shift. Built with Docusaurus.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
        darkTheme: require('prism-react-renderer/themes/dracula'),
      },
    }),
};

module.exports = config;
