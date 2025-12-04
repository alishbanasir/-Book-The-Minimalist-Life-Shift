/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  bookSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: 'Introduction',
    },
    {
      type: 'category',
      label: 'The Book',
      items: [
        'chapter-1-inner-architect',
        'chapter-2-energy-equation',
        'chapter-3-blueprint-breakthrough',
        'chapter-4-rapid-mastery',
        'chapter-5-unspoken-purpose',
      ],
    },
  ],
};

module.exports = sidebars;
