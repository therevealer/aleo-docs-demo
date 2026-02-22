import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const paths = [
  {
    icon: '⚡',
    title: 'App Developer',
    description: "Build web or full-stack apps using Aleo's privacy features via the Provable SDK.",
    color: 'teal',
    links: [
      { label: 'Quickstart', to: '/docs/getting-started/introduction' },
      { label: 'Provable SDK overview', to: '/docs/reference/sdk-api' },
      { label: 'Deploy a program', to: '/docs/build/deploy-a-program' },
    ],
  },
  {
    icon: '📝',
    title: 'Smart Contract Developer',
    description: "Write privacy-preserving programs in Leo, Aleo's purpose-built language for ZK circuits.",
    color: 'purple',
    links: [
      { label: 'Leo Language docs ↗', href: 'https://docs.leo-lang.org' },
      { label: 'Structure of a Leo program', href: 'https://docs.leo-lang.org/language/structure' },
      { label: 'Leo Playground ↗', href: 'https://play.leo-lang.org' },
    ],
  },
  {
    icon: '🌐',
    title: 'Node Operator',
    description: 'Run infrastructure, validate transactions, or prove computation on the Aleo network.',
    color: 'orange',
    links: [
      { label: 'Network architecture', to: '/docs/network/architecture' },
      { label: 'Run a validator', to: '/docs/network/validators' },
      { label: 'Staking guide', to: '/docs/network/staking' },
    ],
  },
];

const steps = [
  { num: '01', title: 'Create an account', desc: 'Generate an Aleo address using the Leo Playground or a supported wallet.' },
  { num: '02', title: 'Get testnet credits', desc: 'Request ALEO credits from the faucet to fund your deployments.' },
  { num: '03', title: 'Write a Leo program', desc: 'Use the Leo Playground or install the CLI to write your first program.' },
  { num: '04', title: 'Deploy to testnet', desc: 'Deploy your program to Aleo Testnet, then Mainnet when ready.' },
];
const products = [
  {
    title: 'Aleo Protocol',
    description: 'Learn what Aleo is and how it works',
    links: [
      { label: 'What is Aleo?', to: '/docs/core-concepts/accounts' },
      { label: 'Aleo Virtual Machine', to: '/docs/core-concepts/programs' },
      { label: 'Public vs. Private State', to: '/docs/core-concepts/public-vs-private' },
      { label: 'Aleo Programs', to: '/docs/core-concepts/programs' },
    ],
  },
  {
    title: 'Zero-Knowledge Applications',
    description: 'Build privacy-preserving applications with Aleo',
    links: [
      { label: 'Getting Started', to: '/docs/getting-started/introduction' },
      { label: 'Deploy a Program', to: '/docs/build/deploy-a-program' },
      { label: 'Execute a Program', to: '/docs/build/execute-a-program' },
      { label: 'Provable SDK', to: '/docs/reference/sdk-api' },
    ],
  },
  {
    title: 'Leo Programming Language',
    description: 'Write privacy-preserving smart contracts with Leo',
    links: [
      { label: 'Leo Documentation ↗', href: 'https://docs.leo-lang.org' },
      { label: 'Structure of a Leo Program ↗', href: 'https://docs.leo-lang.org/language/structure' },
      { label: 'Testing Leo Programs ↗', href: 'https://docs.leo-lang.org/testing/overview' },
      { label: 'Leo Playground ↗', href: 'https://play.leo-lang.org' },
    ],
  },
  {
    title: 'Full Stack Developer Resources',
    description: 'Essential tools and guides for full stack developers',
    links: [
      { label: 'Provable SDK', to: '/docs/reference/sdk-api' },
      { label: 'Provable APIs ↗', href: 'https://docs.explorer.provable.com' },
      { label: 'Transfer Credits', to: '/docs/build/transfer-credits' },
      { label: 'FAQs', to: '/docs/reference/faq' },
    ],
  },
  {
    title: 'AleoBFT Consensus',
    description: "Learn about Aleo's Byzantine Fault Tolerant consensus mechanism",
    links: [
      { label: 'Network Architecture', to: '/docs/network/architecture' },
      { label: 'Validators', to: '/docs/network/validators' },
      { label: 'Staking', to: '/docs/network/staking' },
    ],
  },
  {
    title: 'Contribute to Aleo',
    description: 'Join the Aleo community and help build the future of privacy',
    links: [
      { label: 'GitHub ↗', href: 'https://github.com/AleoHQ' },
      { label: 'Discord ↗', href: 'https://discord.com/invite/aleo' },
      { label: 'Twitter / X ↗', href: 'https://twitter.com/AleoHQ' },
    ],
  },
];

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout title={siteConfig.title} description={siteConfig.tagline}>
      <main>

        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot}></span>
              Aleo Mainnet is live
            </div>
            <h1 className={styles.heroTitle}>
              Build <span className={styles.heroAccent}>Privacy-First</span><br />
              apps on Aleo
            </h1>
            <p className={styles.heroSub}>
              Aleo is a Layer 1 blockchain that uses zero-knowledge proofs to give
              developers a platform for building fully private, verifiable applications
              without compromising on performance.
            </p>
            <div className={styles.heroActions}>
              <Link className={styles.btnPrimary} to="/docs/getting-started/introduction">
                Start building →
              </Link>
              <a className={styles.btnSecondary} href="https://play.leo-lang.org" target="_blank" rel="noopener noreferrer">
                Try Leo Playground ↗
              </a>
            </div>
          </div>
        </section>

        {/* PATHS */}
        <section className={styles.section}>
          <p className={styles.sectionLabel}>choose your path</p>
          <div className={styles.pathsGrid}>
            {paths.map((path) => (
              <div key={path.title} className={`${styles.pathCard} ${styles[`pathCard_${path.color}`]}`}>
                <div className={styles.pathIcon}>{path.icon}</div>
                <h3 className={styles.pathTitle}>{path.title}</h3>
                <p className={styles.pathDesc}>{path.description}</p>
                <ul className={styles.pathLinks}>
                  {path.links.map((link) => (
                    <li key={link.label}>
                      {link.to
                        ? <Link to={link.to}>→ {link.label}</Link>
                        : <a href={link.href} target="_blank" rel="noopener noreferrer">→ {link.label}</a>
                      }
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* STEPS */}
        <section className={styles.section}>
          <p className={styles.sectionLabel}>from zero to deployed in 4 steps</p>
          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <div key={step.num} className={styles.step}>
                <div className={styles.stepNum}>{step.num}</div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* PRODUCTS */}
        <section className={styles.section}>
          <p className={styles.sectionLabel}> explore the ecosystem</p>
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <div key={product.title} className={styles.productCard}>
                <div className={styles.productCardTop}>
                  <h3 className={styles.productTitle}>{product.title}</h3>
                  <p className={styles.productDesc}>{product.description}</p>
                </div>
                <ul className={styles.productLinks}>
                  {product.links.map((link) => (
                    <li key={link.label}>
                      {link.to
                        ? <Link to={link.to}>{link.label}</Link>
                        : <a href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>
                      }
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </main>
    </Layout>
  );
}