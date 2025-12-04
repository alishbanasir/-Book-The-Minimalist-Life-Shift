import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
