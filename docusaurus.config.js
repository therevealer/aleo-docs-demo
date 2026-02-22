// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Aleo Developer Docs',
  tagline: 'Build privacy-first apps with zero-knowledge proofs',
  favicon: 'img/favicon.ico',
  

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Aleo Developer',
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
      {
        type: 'docSidebar',
        sidebarId: 'docs',
        position: 'left',
        label: 'Docs',
      },
      {
        href: 'https://docs.leo-lang.org',
        label: 'Leo Language ↗',
        position: 'left',
      },
      {
        href: 'https://play.leo-lang.org',
        label: 'Leo Playground ↗',
        position: 'left',
      },
      {
        href: 'https://docs.explorer.provable.com',
        label: 'Provable API ↗',
        position: 'left',
      },
      {
        href: 'https://github.com/AleoHQ',
        label: 'GitHub',
        position: 'right',
      },
      {
        href: 'https://discord.com/invite/aleo',
        label: 'Discord',
        position: 'right',
      },
    ],
      },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            { label: 'Getting Started', to: '/docs/getting-started/introduction' },
            { label: 'Core Concepts', to: '/docs/core-concepts/accounts' },
            { label: 'Build', to: '/docs/build/deploy-a-program' },
          ],
        },
        {
          title: 'Network',
          items: [
            { label: 'Validators', to: '/docs/network/validators' },
            { label: 'Staking', to: '/docs/network/staking' },
            { label: 'Architecture', to: '/docs/network/architecture' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Discord', href: 'https://discord.com/invite/aleo' },
            { label: 'GitHub', href: 'https://github.com/AleoHQ' },
            { label: 'Twitter / X', href: 'https://twitter.com/AleoHQ' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Aleo.org', href: 'https://aleo.org' },
            { label: 'Leo Language', href: 'https://docs.leo-lang.org' },
            { label: 'Provable API', href: 'https://docs.explorer.provable.com' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Aleo Network Foundation`,
    },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
