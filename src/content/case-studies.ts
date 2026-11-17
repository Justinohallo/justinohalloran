import type { CaseStudy } from './types'

export const caseStudies: CaseStudy[] = [
  {
    slug: 'sanity-migration',
    title: 'Drupal to Sanity in six weeks',
    summary:
      'A penetration test put a hard date on a CMS migration the team had estimated would run to the end of 2024. I stepped up as tech lead of four developers and we shipped it in six weeks.',
    org: "Arc'teryx",
    role: 'Tech lead on the migration (a role, not a title)',
    when: '2023 – 2024',
    tags: ['cms', 'architecture', 'leadership'],
    stack: ['Sanity', 'Next.js', 'React', 'TypeScript', 'Fastly', 'Drupal (source)'],
    featured: true,
    metrics: [
      { label: 'Delivery', value: '6 weeks', status: 'measured', note: 'Against a team estimate that ran to the end of 2024' },
      { label: 'Languages migrated', value: '8', status: 'measured' },
      { label: 'Business impact after launch', value: 'Unmeasured', status: 'unmeasured' },
    ],
    sections: [
      {
        heading: 'The situation',
        body: [
          "Arc'teryx's content pages ran on Drupal. Going into 2024, management asked for a timeline and the team estimated the end of the year. Then a penetration test commissioned by the parent company set a hard date of April 15, and around February we had six weeks.",
          'It was really two migrations at once: content from Drupal into Sanity, and the legacy Next.js "Landing Pages" app into a new Next.js "Content Pages" app, with Fastly gateway work in between, across eight languages.',
        ],
      },
      {
        heading: 'What I did',
        body: [
          "I was the only proficient React developer on the team and kept stepping up to bridge the gap, so I asked my manager for a leadership role, and got it.",
        ],
        list: [
          'Cut every agile ceremony for the six weeks. One shared deadline was doing all the coordinating a sprint board would have done, and we needed the hours.',
          'Ran an in-person sprint the first week to identify everything left to move.',
          'Then the team, four developers working under me, finished by the deadline. Content moved partly by hand and partly through an AI-assisted translation layer.',
        ],
      },
      {
        heading: 'After launch: structured content',
        body: [
          'Shipping on the deadline meant shipping with Drupal\'s structures intact. I made the case for structured content instead of page-builder blobs: content modelled as data that other teams and channels can reuse. I split the team into a design-system stream and a content stream, and ran reimagining workshops on content that was trapped, such as a sizing guide that lived inside the page builder where no other team could reach it.',
          'The structured content strategy I defined was adopted by the global content team. Because the team turned over heavily, I also built the documentation layer: glossaries, executive summaries, architecture diagrams, videos and in-person training so analysts and product managers could work with the new system (what Landing versus Content Pages meant, how Fastly caching behaved, how publishing worked).',
          "The migration earned a nomination for Arc'teryx's company-wide Creative Disruption award for 2024.",
        ],
      },
    ],
    hindsight:
      'To make the date, the editor experience in Sanity was the deliberate cut: content was copied over 1:1 on Drupal\'s principles. My request to go back and refactor after launch was turned down, so the platform carried those structures forward. I would push back on the page-builder direction from day one, while it was still cheap to change.',
  },
  {
    slug: 'component-library',
    title: 'A component library and Storybook, from scratch',
    summary:
      'The legacy component library was owned by no team and could not be upgraded. I set up its replacement from scratch: a shared React library with Storybook, published to NPM with alpha/beta/prod release channels.',
    org: "Arc'teryx",
    role: 'Set up the new library',
    when: '2023',
    tags: ['design-system', 'architecture'],
    stack: ['React', 'TypeScript', 'Styled Components', 'Storybook', 'Rollup', 'Vite', 'NPM'],
    featured: true,
    metrics: [
      { label: 'Release channels', value: 'alpha / beta / prod', status: 'measured' },
      { label: 'Adoption and velocity impact', value: 'Unmeasured', status: 'unmeasured' },
    ],
    sections: [
      {
        heading: 'The situation',
        body: [
          'The existing component library was used across the digital ecosystem but owned by no team. Its Node and TypeScript versions had fallen far behind, several attempts to upgrade it had failed, and the refactor it needed was off the table.',
        ],
      },
      {
        heading: 'What we built',
        list: [
          'I set up the package, Storybook and the component-layer architecture, released the first component and published it to NPM for the teams to use. The library used Styled Components and atomic design, the direction the agency had set.',
          'Storybook as the workbench and for visual regression, with React Testing Library on components. We built components to be accessible and used axe to find issues; it was never audited.',
          'Built with Rollup at first, later Vite, and published with alpha, beta and production release channels, so consuming apps could try a change before it became everyone\'s change.',
          'Alongside it, I designed how the new Next.js homepage worked with Sanity, and owned its performance work: payload reduction, responsive images with lazy loading, and Sanity-to-Fastly cache invalidation for three storefront homepages.',
        ],
        body: [],
      },
      {
        heading: 'The people side',
        body: [
          'During the CMS migration the team moved components into the library. Afterwards I split the team into a design-system stream and a content stream, and the team set up a governance structure that owned the library and approved every change. I also mentored two co-op engineers; one was hired full-time after finishing his degree.',
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
      'Exchange, ATM and on-chain wallet exports in; one FIFO cost-basis and custody report out, with custody reconciled to the satoshi. The client\'s accountant accepted its workbook for the 2025 filing.',
    org: 'Burrard Works (client: a Bitcoin ATM operator)',
    role: 'Founder and engineer',
    when: 'Feb 2026 – present (maintenance)',
    tags: ['fintech', 'architecture', 'testing'],
    stack: ['Next.js', 'TypeScript', 'Excel generation', 'Claude Code'],
    featured: true,
    metrics: [
      { label: 'Custody', value: 'Ties to the satoshi', status: 'measured', note: 'Against BitGo, the hot-wallet custodian' },
      { label: 'Accepted', value: '2025 filing', status: 'measured', note: "The client's accountant accepted the workbook" },
      { label: 'Reconciliation', value: 'CI gate', status: 'measured', note: "Fails any build whose output doesn't tie to the source files" },
    ],
    sections: [
      {
        heading: 'The problem',
        body: [
          'The client runs a network of Bitcoin ATMs and an exchange. Their accountant needs a FIFO cost-basis report, and the raw material is three exports that were never designed to agree with each other: exchange buys, ATM dispenses, and on-chain custody in a BitGo hot wallet.',
        ],
      },
      {
        heading: 'What I built',
        list: [
          'One FIFO queue across all three sources, with the hot wallet as the source of truth, a call I worked out together with the agent.',
          'One cost-basis and custody report, on screen, as an Excel workbook and as a PDF, that the client runs himself.',
          'A CI reconciliation gate that fails the build when the output does not tie to the source files.',
        ],
        body: [],
      },
      {
        heading: 'How it was built',
        body: [
          'Spec-first: the first build commit already had the agents, architecture, data spec, validation and task documents, and builder, QA and UX-review agents. The spec was generated from the client\'s messages and his ChatGPT conversation. I built from it with Claude Code, prompt-driven, without writing code by hand.',
        ],
      },
    ],
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
          'The market-data provider raised its price from $500 to $5,000 a year. Rather than pay it, I replaced the mock-trading backend with a SnapTrade brokerage integration, and connected a real Wealthsimple account to pull live account data into the app.',
        ],
      },
      {
        heading: 'The 2025 rebuild',
        body: [
          'During a sabbatical I rebuilt the web dashboard and backend as a Turborepo monorepo with GitHub Actions CI/CD in six weeks, AI-assisted in Cursor. That rebuild is public. It has no tests: I chose speed over coverage for it, and the test suite lives in the original repo.',
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
      'Static by default, no client components, system fonts, and Lighthouse scores published from real runs, spread included, rather than claimed.',
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
          'Every page is statically generated at build time. There is no client-side data fetching and none of my components run on the client; React Server Components render the pages. The JavaScript that does ship (about 145 KB compressed) is the Next.js and React runtime plus Vercel Speed Insights, and it is the main cost left in the mobile score.',
          'System font stacks, so no web-font request blocks first paint and nothing shifts when a font swaps in.',
          'Design tokens compile to CSS custom properties at build time, so theming (including dark mode) costs no JavaScript.',
          'Lighthouse runs against production are recorded above with their date and spread. Field data from real visitors comes from Speed Insights.',
        ],
        body: [],
      },
      {
        heading: 'Earlier performance work',
        body: [
          "At JumpStartCSR I redesigned the company website on a custom Webpack 4 build. At Arc'teryx I owned homepage performance work: payload reduction, responsive images with lazy loading, and a Sanity webhook to Fastly so publishing flushed the cache for each storefront homepage. Part of the job was explaining that caching to the analysts and product managers who needed to know why a change was or was not live yet.",
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
      'I set up the React codebase inside a late-2000s Spring Boot platform and led the front-end architecture for a multistep, save-and-resume onboarding flow. It shipped, and it moved no numbers.',
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
          "alluraDirect is a vacation-rental platform for property managers at BC ski resorts, built on a Java/Spring Boot platform from the late 2000s. New hosts were onboarded by hand, by the CEO, and he wanted to cut that setup friction. The team was four: me and a second bootcamp graduate under the CTO, plus a back-end developer.",
        ],
      },
      {
        heading: 'What I built',
        list: [
          'Set up the React app inside the legacy codebase and led the front-end architecture: React Router, Redux Toolkit, later React Query, and reusable hooks.',
          'Did the onboarding research behind the wizard, grouping its segments and steps. The front-end team built the multistep save-and-resume wizard from the CEO\'s designs, against the CTO\'s API.',
          'Built the Owner Dashboard calendar and reservation tools in React, Redux Toolkit and TypeScript.',
          'Set up, with the team, CI running Cypress end-to-end and Jest integration tests on every feature pull request through GitHub Actions.',
        ],
        body: [],
      },
      {
        heading: 'Leading without the title',
        body: [
          'I was never officially team lead, but I did the job for a frontend team of three: ran the front-end portion of developer interviews and sat on the hiring committee for two hires, ran sprint planning, retros and code review, ran Jira, and wrote the internal documentation the company aligned on.',
        ],
      },
    ],
    hindsight:
      'It shipped, the CEO kept onboarding hosts by hand, and it produced no new property-manager sign-ups that anyone could measure, because nobody, me included, set up the measurement. That is the project that made me build measurement in from the start.',
  },
]

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug)
