// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Minimalist Life Shift',
  tagline: 'Transform Your Life Through Simple, Actionable Principles',
  url: 'https://your-domain.com',
  baseUrl: '/-Book-The-Minimalist-Life-Shift/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'your-org',
  projectName: 'the-minimalist-life-shift',

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
      navbar: {
        title: 'The Minimalist Life Shift',
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Read the Book',
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
