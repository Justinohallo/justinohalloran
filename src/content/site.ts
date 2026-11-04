import type { Project } from './types'

export const site = {
  name: "Justin O'Halloran",
  url: 'https://justinohalloran.com',
  title: 'Senior frontend engineer',
  location: 'Vancouver, BC',
  pitch:
    'I build React and Next.js products, the design systems they are made of, and the content platforms behind them. Lately that means fintech and Bitcoin.',
  availability: 'Open to full-time roles and senior frontend contracts, in Vancouver or remote.',
  email: 'justinohallo@gmail.com',
  github: 'https://github.com/Justinohallo',
  linkedin: 'https://www.linkedin.com/in/justinohalloran',
}

export const projects: Project[] = [
  {
    name: 'wealthee-monorepo',
    description:
      'The 2025 rebuild of Wealthee: a Next.js advisor dashboard and Firebase Cloud Functions in one Turborepo, with broker connections through SnapTrade and secrets kept server-side.',
    stack: ['Next.js', 'Firebase', 'SnapTrade', 'Turborepo'],
    repo: 'https://github.com/Justinohallo/wealthee-monorepo',
  },
  {
    name: 'task-manager-spec-first',
    description:
      'A take-home built spec-first by AI agents, with the process instrumented: 79 acceptance criteria traced to the brief, an ADR per stack choice, and a ledger of every session\'s token cost.',
    stack: ['Next.js', 'TypeScript', 'Playwright', 'ADRs'],
    repo: 'https://github.com/Justinohallo/task-manager-spec-first',
  },
  {
    name: 'bitcoin-builder',
    description:
      'The Bitcoin Builders Vancouver site: JSON content validated by Zod schemas, with types inferred from the schemas and Schema.org structured data.',
    stack: ['Next.js 16', 'Zod', 'Tailwind CSS'],
    repo: 'https://github.com/Justinohallo/bitcoin-builder',
  },
  {
    name: 'lightning-login',
    description: 'A Lightning Login (LNURL-auth) demo: education for non-developers, developer docs, and a live wallet sign-in.',
    stack: ['Next.js 16', 'LNURL-auth', 'Tailwind CSS 4'],
    repo: 'https://github.com/Justinohallo/lightning-login',
  },
  {
    name: 'mcp-btc-tip-jar',
    description:
      'An MCP server that returns UI instead of text: a Lightning tip-jar widget drawn inside an AI chat client, over stdio or HTTP + SSE. Invoices are mocked.',
    stack: ['MCP', 'TypeScript', 'mcp-ui'],
    repo: 'https://github.com/Justinohallo/mcp-btc-tip-jar',
  },
]
