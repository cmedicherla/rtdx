import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/rtdx/about_us',
    component: ComponentCreator('/rtdx/about_us', '735'),
    exact: true
  },
  {
    path: '/rtdx/blog',
    component: ComponentCreator('/rtdx/blog', '409'),
    exact: true
  },
  {
    path: '/rtdx/blog/archive',
    component: ComponentCreator('/rtdx/blog/archive', '04d'),
    exact: true
  },
  {
    path: '/rtdx/blog/authors',
    component: ComponentCreator('/rtdx/blog/authors', 'c5d'),
    exact: true
  },
  {
    path: '/rtdx/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/rtdx/blog/authors/all-sebastien-lorber-articles', 'ff3'),
    exact: true
  },
  {
    path: '/rtdx/blog/authors/yangshun',
    component: ComponentCreator('/rtdx/blog/authors/yangshun', '134'),
    exact: true
  },
  {
    path: '/rtdx/blog/first-blog-post',
    component: ComponentCreator('/rtdx/blog/first-blog-post', '4a7'),
    exact: true
  },
  {
    path: '/rtdx/blog/long-blog-post',
    component: ComponentCreator('/rtdx/blog/long-blog-post', 'd3f'),
    exact: true
  },
  {
    path: '/rtdx/blog/mdx-blog-post',
    component: ComponentCreator('/rtdx/blog/mdx-blog-post', 'd29'),
    exact: true
  },
  {
    path: '/rtdx/blog/tags',
    component: ComponentCreator('/rtdx/blog/tags', 'ad1'),
    exact: true
  },
  {
    path: '/rtdx/blog/tags/docusaurus',
    component: ComponentCreator('/rtdx/blog/tags/docusaurus', 'da0'),
    exact: true
  },
  {
    path: '/rtdx/blog/tags/facebook',
    component: ComponentCreator('/rtdx/blog/tags/facebook', 'dda'),
    exact: true
  },
  {
    path: '/rtdx/blog/tags/hello',
    component: ComponentCreator('/rtdx/blog/tags/hello', '09b'),
    exact: true
  },
  {
    path: '/rtdx/blog/tags/hola',
    component: ComponentCreator('/rtdx/blog/tags/hola', '8c4'),
    exact: true
  },
  {
    path: '/rtdx/blog/welcome',
    component: ComponentCreator('/rtdx/blog/welcome', '6ce'),
    exact: true
  },
  {
    path: '/rtdx/disclaimer',
    component: ComponentCreator('/rtdx/disclaimer', '03c'),
    exact: true
  },
  {
    path: '/rtdx/markdown-page',
    component: ComponentCreator('/rtdx/markdown-page', '218'),
    exact: true
  },
  {
    path: '/rtdx/docs',
    component: ComponentCreator('/rtdx/docs', '4c1'),
    routes: [
      {
        path: '/rtdx/docs',
        component: ComponentCreator('/rtdx/docs', 'c49'),
        routes: [
          {
            path: '/rtdx/docs',
            component: ComponentCreator('/rtdx/docs', '3cc'),
            routes: [
              {
                path: '/rtdx/docs/hello',
                component: ComponentCreator('/rtdx/docs/hello', '289'),
                exact: true
              },
              {
                path: '/rtdx/docs/insights/brain_health',
                component: ComponentCreator('/rtdx/docs/insights/brain_health', '4ff'),
                exact: true,
                sidebar: "principlesSidebar"
              },
              {
                path: '/rtdx/docs/insights/children_health',
                component: ComponentCreator('/rtdx/docs/insights/children_health', '659'),
                exact: true,
                sidebar: "principlesSidebar"
              },
              {
                path: '/rtdx/docs/insights/heart_health',
                component: ComponentCreator('/rtdx/docs/insights/heart_health', 'ba9'),
                exact: true,
                sidebar: "principlesSidebar"
              },
              {
                path: '/rtdx/docs/insights/weightloss',
                component: ComponentCreator('/rtdx/docs/insights/weightloss', '86c'),
                exact: true,
                sidebar: "principlesSidebar"
              },
              {
                path: '/rtdx/docs/our_mission',
                component: ComponentCreator('/rtdx/docs/our_mission', 'b41'),
                exact: true,
                sidebar: "principlesSidebar"
              },
              {
                path: '/rtdx/docs/the_principles/activity',
                component: ComponentCreator('/rtdx/docs/the_principles/activity', '79e'),
                exact: true,
                sidebar: "principlesSidebar"
              },
              {
                path: '/rtdx/docs/the_principles/hydration',
                component: ComponentCreator('/rtdx/docs/the_principles/hydration', 'b12'),
                exact: true,
                sidebar: "principlesSidebar"
              },
              {
                path: '/rtdx/docs/the_principles/nutrition',
                component: ComponentCreator('/rtdx/docs/the_principles/nutrition', '146'),
                exact: true,
                sidebar: "principlesSidebar"
              },
              {
                path: '/rtdx/docs/the_principles/sleep',
                component: ComponentCreator('/rtdx/docs/the_principles/sleep', 'c80'),
                exact: true,
                sidebar: "principlesSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/rtdx/',
    component: ComponentCreator('/rtdx/', '01b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
