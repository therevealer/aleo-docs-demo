const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Get Started',
      collapsed: false,
      items: [
        'getting-started/introduction',
      ],
    },
    {
      type: 'category',
      label: 'Core Concepts',
      collapsed: false,
      items: [
        'core-concepts/accounts',
        'core-concepts/programs',
        'core-concepts/public-vs-private',
        'core-concepts/records',
        'core-concepts/transactions',
      ],
    },
    {
      type: 'category',
      label: 'Build',
      collapsed: false,
      items: [
        'build/deploy-a-program',
        'build/execute-a-program',
        'build/transfer-credits',
      ],
    },
    {
      type: 'category',
      label: 'Network',
      collapsed: false,
      items: [
        'network/architecture',
        'network/validators',
        'network/staking',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      collapsed: false,
      items: [
        'reference/sdk-api',
        'reference/faq',
      ],
    },
  ],
};

module.exports = sidebars;