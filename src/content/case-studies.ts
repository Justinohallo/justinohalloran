import type { CaseStudy } from './types'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'sanity-migration',
    title: 'Drupal to Sanity in six weeks',
    summary:
      'A security finding put a deadline on a CMS migration the team had estimated at six more months. I took the tech lead role and we shipped it in six weeks.',
    org: "Arc'teryx",
    role: 'Tech lead on the migration (a role, not a title)',
    when: '2023 – 2024',
    tags: ['cms', 'architecture', 'leadership'],
    stack: ['Sanity', 'Next.js', 'React', 'TypeScript', 'Fastly', 'Drupal (source)'],
    featured: true,
    metrics: [
      { label: 'Delivery', value: '6 weeks', status: 'measured', note: 'Against a team estimate of six more months' },
      { label: 'Languages migrated', value: '8', status: 'measured' },
      { label: 'Business impact after launch', value: 'Unmeasured', status: 'unmeasured' },
    ],
    sections: [
      {
        heading: 'The situation',
        body: [
          "Arc'teryx's content pages ran on Drupal. A penetration test commissioned by the parent company flagged it, and the migration that had been drifting suddenly had a date. The team estimated six more months. The director gave us six weeks.",
          'It was really two migrations at once: content from Drupal into Sanity, and the legacy Next.js "Landing Pages" app into a new Next.js "Content Pages" app, with Fastly gateway work in between, across eight languages and with an agency partner building alongside us.',
        ],
      },
      {
        heading: 'What I did',
        body: [
          "I was already mentoring the team's back-end-leaning intermediate developer on React, so I asked for the tech lead role for the duration, and got it.",
        ],
        list: [
          'Dropped the agile ceremonies for six weeks. One shared deadline was doing all the coordinating a sprint board would have done, and we needed the hours.',
          'Ran a full in-office week of schema mapping before anyone wrote migration code. Every Drupal content type got a Sanity destination, or an explicit decision not to have one.',
          'Then six weeks heads-down. Content moved partly by hand and partly through an AI-assisted translation layer.',
        ],
      },
      {
        heading: 'After launch: structured content',
        body: [
          'Shipping on the deadline meant shipping with Drupal\'s structures intact. I made the case for structured content instead of page-builder blobs: content modelled as data that other teams and channels can reuse. I split the team into a design-system stream and a content stream, and ran reimagining workshops on content that was trapped, such as a sizing guide that lived inside the page builder where no other team could reach it.',
          'The structured content strategy I defined was adopted by the global content team. Because the team turned over heavily, I also built the documentation layer: glossaries, executive summaries, architecture diagrams, videos and in-person training so analysts and product managers could work with the new system (what Landing versus Content Pages meant, how Fastly caching behaved, how publishing worked).',
          "The migration earned a 2025 nomination for Arc'teryx's company-wide Creative Disruption award.",
        ],
      },
    ],
    hindsight:
      'My request to refactor away the inherited Drupal structures after launch was turned down, so the platform carried them forward. I would push back on the page-builder direction from day one rather than after launch, while it was still cheap to change.',
  },
  {
    slug: 'component-library',
    title: 'A component library and Storybook, from scratch',
    summary:
      'The legacy design system had rotted past upgrading. I architected its replacement: a React component library with Storybook as the workbench and an alpha/beta/prod release pipeline.',
    org: "Arc'teryx",
    role: 'Architect of the new library',
    when: '2023',
    tags: ['design-system', 'architecture'],
    stack: ['React', 'TypeScript', 'Styled Components', 'Storybook', 'Rollup', 'NPM'],
    featured: true,
    metrics: [
      { label: 'Release channels', value: 'alpha / beta / prod', status: 'measured' },
      { label: 'Adoption and velocity impact', value: 'Unmeasured', status: 'unmeasured' },
    ],
    sections: [
      {
        heading: 'The situation',
        body: [
          'The existing design system could no longer be maintained. Its Node and TypeScript versions had fallen far behind, and several attempts to upgrade it had failed.',
        ],
      },
      {
        heading: 'What I built',
        list: [
          'A new React component library organised by atomic design, so primitives, composites and page sections each had a clear home and a clear owner.',
          'Storybook as the workbench and the documentation site: every component developed and reviewed in isolation, with its states visible to designers and product people, not only engineers.',
          'Rollup builds published to NPM through an alpha, beta and production release pipeline, so consuming apps could try a change before it became everyone\'s change.',
          'Alongside it, I led the new Next.js homepage architecture and the React component layer for the Content Pages app.',
        ],
        body: [],
      },
      {
        heading: 'The people side',
        body: [
          'After the CMS migration I split the team into a design-system stream and a content stream so the library had owners rather than visitors. I also mentored two co-op engineers through the work; one was hired full-time after the term.',
        ],
      },
      {
        heading: 'What I would build today',
        body: [
          'This site carries a small version of the same idea, rebuilt with what I would choose now: tokens in one JSON file generated into CSS custom properties and a Tailwind theme, so the values in Storybook, in utilities and in plain CSS cannot drift; light and dark themes from the same tokens; and the Storybook accessibility addon checking every story. It is public at /storybook.',
        ],
      },
    ],
    hindsight:
      'We never instrumented adoption, so I cannot tell you how many screens moved onto the library or what it did to delivery speed. Today I would track component usage from day one.',
    links: [{ label: "This site's Storybook", href: '/storybook/index.html' }],
  },
  {
    slug: 'fifo-engine',
    title: 'A FIFO cost-basis engine for a Bitcoin ATM operator',
    summary:
      'Monthly exports from ATMs, an exchange and a hot wallet in; FIFO cost basis, gains and an accountant-ready workbook out, validated to the cent across 284 disposals.',
    org: 'Burrard Works (client: a Bitcoin ATM operator)',
    role: 'Founder and engineer',
    when: 'Feb 2026 – present',
    tags: ['fintech', 'architecture', 'testing'],
    stack: ['Next.js', 'TypeScript', 'Excel generation', 'Claude Code'],
    featured: true,
    metrics: [
      { label: 'Validation', value: 'To the cent, 284 disposals', status: 'measured', note: "Against the client's reference baseline" },
      { label: 'In production', value: 'Q1 2026 reporting delivered', status: 'measured', note: 'Still operated and iterated' },
    ],
    sections: [
      {
        heading: 'The problem',
        body: [
          'The client runs a network of Bitcoin ATMs and an exchange. Each month their accountant needs cost basis and realised gains for business-income reporting to the CRA, and the raw material is three sets of exports (ATM, exchange and hot wallet) that were never designed to agree with each other.',
        ],
      },
      {
        heading: 'What I built',
        list: [
          'An ingestion layer that normalises the three exports into one ledger of acquisitions and disposals.',
          'A FIFO engine that matches each disposal against open lots in order and computes cost basis and gain per lot.',
          'Output the accountant can use without me: a summary plus a multi-tab, reconciled Excel workbook.',
        ],
        body: [],
      },
      {
        heading: 'The rewrite',
        body: [
          'Months two and three broke on data states the model had no mapping for, and the cause turned out to be structural: the hot wallet, not the exchange, was the tier-1 dataset. I rewrote the engine around it. After the rewrite the output matched the client\'s own reference baseline to the cent across all 284 disposals.',
        ],
      },
      {
        heading: 'How it was built',
        body: [
          'I wrote the specification first (architecture, data spec, and validation criteria) and built from it with Claude Code, prompt-driven, without writing code by hand. The spec is what made that safe: the validation baseline was defined before the engine existed, so "done" meant matching it, not looking plausible.',
        ],
      },
    ],
    hindsight:
      'I skipped mapping how the business actually runs before writing code, and paid for it in the rewrite. Now that map comes first, before any code.',
  },
  {
    slug: 'wealthee',
    title: 'Wealthee: a portfolio platform, built end to end',
    summary:
      'Co-founded with a financial advisor; as the only engineer I built the web dashboard, the React Native app, the Firebase backend and a shared TypeScript package.',
    org: 'Wealthee (co-founder)',
    role: 'Co-founder and sole engineer',
    when: '2020 – 2025',
    tags: ['fintech', 'react-native', 'architecture', 'testing'],
    stack: ['React', 'React Native', 'Firebase', 'TypeScript', 'SnapTrade', 'Big.js', 'Jest', 'Turborepo', 'GitHub Actions'],
    metrics: [
      { label: 'Data cost change that forced a re-architecture', value: '$500 → $5,000 / yr', status: 'measured' },
      { label: 'Users', value: 'Never reached market', status: 'measured' },
    ],
    sections: [
      {
        heading: 'What it was',
        body: [
          'A portfolio-management platform for independent financial advisors and their clients. I co-founded it with a Toronto-based advisor and was the only engineer from 2020 until the partnership ended in April 2025.',
        ],
      },
      {
        heading: 'The original build',
        list: [
          'A React web dashboard for advisors and a React Native app for clients, with push notifications and real-time asset updates.',
          'A Firebase backend: Auth, Realtime Database, and Cloud Functions, including scheduled portfolio snapshots.',
          'A shared TypeScript API package published to NPM in both ESM and CommonJS, so web, mobile and functions used one set of types and calls.',
          'Money arithmetic in Big.js rather than floating point, and extensive Jest coverage on the financial-transaction logic.',
        ],
        body: [],
      },
      {
        heading: 'Re-architecting around a price change',
        body: [
          'The market-data provider raised its price from $500 to $5,000 a year. Rather than pay it, I replaced the custom trading backend with SnapTrade, which turned the product into broker-connected execution through Wealthsimple, Questrade and others.',
        ],
      },
      {
        heading: 'The 2025 rebuild',
        body: [
          'During a sabbatical I rebuilt the web dashboard and backend as a Turborepo monorepo with GitHub Actions CI/CD in about six weeks, working with an AI coding agent. That rebuild is public. It has no tests: I chose speed over coverage for it, and the test suite lives in the original repo.',
        ],
      },
    ],
    hindsight: 'The partnership ended and the product never went to market. The code is shared as a record of the architecture, not as a live service.',
    links: [{ label: 'wealthee-monorepo on GitHub', href: 'https://github.com/Justinohallo/wealthee-monorepo' }],
  },
  {
    slug: 'this-site',
    title: 'Web performance, measured on this site',
    summary:
      'Static by default, almost no client JavaScript, system fonts, and Lighthouse scores published from a real run rather than claimed.',
    org: 'justinohalloran.com',
    role: 'Everything',
    when: '2026',
    tags: ['performance', 'design-system', 'architecture'],
    stack: ['Next.js', 'React Server Components', 'Tailwind CSS', 'Storybook', 'Vercel', 'Lighthouse'],
    metrics: [],
    sections: [
      {
        heading: 'The approach',
        list: [
          'Every page is statically generated at build time. There is no client-side data fetching and no hydration-heavy UI; React Server Components render the pages, and the only client script of note is Vercel Speed Insights for field data.',
          'System font stacks, so no web-font request blocks first paint and nothing shifts when a font swaps in.',
          'Design tokens compile to CSS custom properties at build time, so theming (including dark mode) costs no JavaScript.',
          'A Lighthouse run against production is recorded below with its date. Field data from real visitors comes from Speed Insights.',
        ],
        body: [],
      },
      {
        heading: 'Earlier performance work',
        body: [
          "At JumpStartCSR I redesigned the company website on a custom Webpack 4 build and cut its file and image payloads by 60%. At Arc'teryx the content platform sat behind Fastly, and part of my job was the gateway and caching behaviour, and explaining it to the analysts and product managers who needed to know why a change was or was not live yet.",
        ],
      },
    ],
    hindsight:
      'Most of my performance work has been architectural (what renders where, what is cached at the edge) rather than measured against Core Web Vitals targets. This site is where I hold myself to published numbers.',
    links: [{ label: 'Source on GitHub', href: 'https://github.com/Justinohallo/justinohalloran' }],
  },
  {
    slug: 'onboarding-wizard',
    title: 'A React onboarding wizard inside a legacy Java platform',
    summary:
      'I started the React codebase inside a late-2000s Spring Boot platform and shipped a multistep, save-and-resume onboarding flow. It shipped, and it moved no numbers.',
    org: 'alluraDirect',
    role: 'React developer, with team-lead duties',
    when: '2019 – 2022',
    tags: ['architecture', 'testing', 'leadership'],
    stack: ['React', 'TypeScript', 'React Query', 'Redux Toolkit', 'Java / Spring Boot (host)', 'Cypress', 'Jest', 'GitHub Actions'],
    metrics: [
      { label: 'Planned vs actual', value: '12 weeks → ~1.5 years', status: 'measured' },
      { label: 'New sign-ups attributable', value: 'None measured', status: 'unmeasured' },
    ],
    sections: [
      {
        heading: 'The situation',
        body: [
          "alluraDirect is a vacation-rental platform for property managers at BC ski resorts, built on a Java/Spring Boot platform from the late 2000s. Every new property manager was onboarded by hand, by the CEO. The team when I arrived was the CEO, the CTO and a bookkeeper; I talked my way in with a month's trial and was hired at the end of it.",
        ],
      },
      {
        heading: 'What I built',
        list: [
          'Started the React app inside the legacy codebase and owned its architecture: state management, data fetching (I introduced React Query), and reusable hooks across the codebase.',
          'Did the onboarding research and wireframes, designed how onboarding segments group together, and built the multistep save-and-resume wizard that replaced the manual process.',
          'Built the Owner Dashboard calendar and reservation tools in React, Redux Toolkit and TypeScript.',
          'Set up CI running Cypress end-to-end and Jest integration tests through GitHub Actions.',
        ],
        body: [],
      },
      {
        heading: 'Leading without the title',
        body: [
          'I was never officially team lead, but I did the job for a frontend team of three: designed the interview process and hired two developers, ran sprint planning, retros and code review, ran Jira, and wrote the internal documentation the company aligned on.',
        ],
      },
    ],
    hindsight:
      'It shipped and produced no new property-manager sign-ups that anyone could measure, because nobody, me included, set up the measurement. That is the project that made me build measurement in from the start.',
  },
]

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug)
