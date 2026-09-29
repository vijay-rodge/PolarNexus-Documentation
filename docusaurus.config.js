// @ts-check
const {themes = require('prism-react-renderer')} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PolarNexus Documentation',
  tagline: 'Integrated Polar Science Outreach, Knowledge Repository and Media Dissemination Portal (SIH PS 26063)',
  favicon: 'img/logo.svg',

  url: 'https://vijay-rodge.github.io',
  baseUrl: '/PolarNexus-Documentation/',

  organizationName: 'vijay-rodge',
  projectName: 'PolarNexus-Documentation',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
        },
        blog: false, // Disabled default preset blog in favor of separate dedicated RAG and ML blogs
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'rag-blog',
        routeBasePath: 'rag-blog',
        path: 'blog/rag',
        blogTitle: 'Polar RAG Architecture Deep Dives',
        blogDescription: 'In-depth engineering articles on Polar Retrieval-Augmented Generation systems.',
        showReadingTime: true,
        postsPerPage: 10,
        blogSidebarTitle: 'RAG Architecture Series',
        blogSidebarCount: 'ALL',
      },
    ],
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'ml-blog',
        routeBasePath: 'ml-blog',
        path: 'blog/ml',
        blogTitle: 'Polar ML & Governance Deep Dives',
        blogDescription: 'In-depth engineering articles on Polar Machine Learning models, clustering, and data validation.',
        showReadingTime: true,
        postsPerPage: 10,
        blogSidebarTitle: 'Polar ML Series',
        blogSidebarCount: 'ALL',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'PolarNexus',
        logo: {
          alt: 'PolarNexus Polar Science Emblem',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: '/rag-blog',
            label: 'RAG Deep Dives',
            position: 'left',
          },
          {
            to: '/ml-blog',
            label: 'ML Deep Dives',
            position: 'left',
          },
          {
            href: 'http://14.139.119.23:8080/dspace/',
            label: 'NCPOR DSpace',
            position: 'right',
          },
          {
            href: 'https://github.com/vijay-rodge/PolarNexus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Architecture & Engine',
            items: [
              {
                label: 'System Overview',
                to: '/docs/architecture/system-overview',
              },
              {
                label: 'Scientific Data Flow',
                to: '/docs/architecture/scientific-analysis-flow',
              },
              {
                label: 'DSpace Ingestion Pipeline',
                to: '/docs/data/data-ingestion',
              },
            ],
          },
          {
            title: 'Specialized Technical Blogs',
            items: [
              {
                label: 'Polar RAG Architecture Series',
                to: '/rag-blog',
              },
              {
                label: 'Polar ML & Governance Series',
                to: '/ml-blog',
              },
            ],
          },
          {
            title: 'Institutional Governance',
            items: [
              {
                label: 'NCPOR Official Portal',
                href: 'https://ncpor.res.in',
              },
              {
                label: 'National Polar Data Center',
                href: 'https://npdc.ncpor.res.in',
              },
              {
                label: 'Ministry of Earth Sciences (MoES)',
                href: 'https://moes.gov.in',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} PolarNexus Platform — SIH Problem Statement 26063. Developed for NCPOR / MoES.`,
      },
      prism: {
        theme: themes.github,
        darkTheme: themes.dracula,
        additionalLanguages: ['python', 'bash', 'json', 'yaml', 'sql'],
      },
      mermaid: {
        theme: {light: 'neutral', dark: 'dark'},
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

module.exports = config;