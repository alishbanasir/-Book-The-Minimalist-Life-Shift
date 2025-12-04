import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/-Book-The-Minimalist-Life-Shift/__docusaurus/debug',
    component: ComponentCreator('/-Book-The-Minimalist-Life-Shift/__docusaurus/debug', '4d7'),
    exact: true
  },
  {
    path: '/-Book-The-Minimalist-Life-Shift/__docusaurus/debug/config',
    component: ComponentCreator('/-Book-The-Minimalist-Life-Shift/__docusaurus/debug/config', 'f7c'),
    exact: true
  },
  {
    path: '/-Book-The-Minimalist-Life-Shift/__docusaurus/debug/content',
    component: ComponentCreator('/-Book-The-Minimalist-Life-Shift/__docusaurus/debug/content', '12f'),
    exact: true
  },
  {
    path: '/-Book-The-Minimalist-Life-Shift/__docusaurus/debug/globalData',
    component: ComponentCreator('/-Book-The-Minimalist-Life-Shift/__docusaurus/debug/globalData', '7a4'),
    exact: true
  },
  {
    path: '/-Book-The-Minimalist-Life-Shift/__docusaurus/debug/metadata',
    component: ComponentCreator('/-Book-The-Minimalist-Life-Shift/__docusaurus/debug/metadata', 'd42'),
    exact: true
  },
  {
    path: '/-Book-The-Minimalist-Life-Shift/__docusaurus/debug/registry',
    component: ComponentCreator('/-Book-The-Minimalist-Life-Shift/__docusaurus/debug/registry', '213'),
    exact: true
  },
  {
    path: '/-Book-The-Minimalist-Life-Shift/__docusaurus/debug/routes',
    component: ComponentCreator('/-Book-The-Minimalist-Life-Shift/__docusaurus/debug/routes', '28b'),
    exact: true
  },
  {
    path: '/-Book-The-Minimalist-Life-Shift/',
    component: ComponentCreator('/-Book-The-Minimalist-Life-Shift/', '4e0'),
    routes: [
      {
        path: '/-Book-The-Minimalist-Life-Shift/',
        component: ComponentCreator('/-Book-The-Minimalist-Life-Shift/', '287'),
        exact: true,
        sidebar: "bookSidebar"
      },
      {
        path: '/-Book-The-Minimalist-Life-Shift/chapter-1-inner-architect',
        component: ComponentCreator('/-Book-The-Minimalist-Life-Shift/chapter-1-inner-architect', '1e4'),
        exact: true,
        sidebar: "bookSidebar"
      },
      {
        path: '/-Book-The-Minimalist-Life-Shift/chapter-2-energy-equation',
        component: ComponentCreator('/-Book-The-Minimalist-Life-Shift/chapter-2-energy-equation', 'cb3'),
        exact: true,
        sidebar: "bookSidebar"
      },
      {
        path: '/-Book-The-Minimalist-Life-Shift/chapter-3-blueprint-breakthrough',
        component: ComponentCreator('/-Book-The-Minimalist-Life-Shift/chapter-3-blueprint-breakthrough', '991'),
        exact: true,
        sidebar: "bookSidebar"
      },
      {
        path: '/-Book-The-Minimalist-Life-Shift/chapter-4-rapid-mastery',
        component: ComponentCreator('/-Book-The-Minimalist-Life-Shift/chapter-4-rapid-mastery', '62a'),
        exact: true,
        sidebar: "bookSidebar"
      },
      {
        path: '/-Book-The-Minimalist-Life-Shift/chapter-5-unspoken-purpose',
        component: ComponentCreator('/-Book-The-Minimalist-Life-Shift/chapter-5-unspoken-purpose', 'aa9'),
        exact: true,
        sidebar: "bookSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
