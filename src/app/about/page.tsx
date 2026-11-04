import type { Metadata } from 'next'
import { site } from '@/content/site'

export const metadata: Metadata = {
  title: 'About',
  description: "Justin O'Halloran: from running international sport tours to senior frontend engineering.",
}

const timeline = [
  { when: '2026 –', what: 'Founder and engineer, Burrard Works', note: 'Building software for clients, starting with a FIFO cost-basis engine for a Bitcoin ATM operator.' },
  { when: '2025 –', what: 'Vancouver chapter lead, Bitcoin Builders', note: 'A community for people building Bitcoin products; events of 30 to 40 people.' },
  { when: '2022 – 2025', what: "Intermediate front-end developer → senior software engineer, Arc'teryx", note: 'Component library and Storybook; tech lead on the Drupal to Sanity migration; promoted to senior in 2024.' },
  { when: '2020 – 2025', what: 'Co-founder and sole engineer, Wealthee', note: 'A portfolio platform for financial advisors: React, React Native, Firebase.' },
  { when: '2019 – 2022', what: 'React developer, alluraDirect', note: 'Started the React codebase inside a legacy Java platform; took on team-lead duties and hiring.' },
  { when: '2018 – 2019', what: 'Web developer, JumpStartCSR, and freelance', note: 'A SaaS MVP with 3D foot modelling in Three.js; a site rebuild that cut payloads 60%.' },
  { when: '2018', what: 'Web Development Diploma, BrainStation', note: '' },
  { when: '2014 – 2018', what: 'Event and tour operations, CSTT Sports Management and EduTravel', note: 'Ran 11 international sport tours and rebuilt the quoting system after inheriting a failed tour season.' },
]

export default function About() {
  return (
    <div className="max-w-(--container-prose) pt-8">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">About</h1>
      <div className="mt-6 space-y-4 text-lg">
        <p>
          I came to engineering from operations. My first career was running international sport tours, and the job that
          taught me the most was inheriting a tour season that had gone wrong: records in banker&apos;s boxes, the maths
          handwritten, and a funding gap. I reconstructed the books and rebuilt the quoting system from scratch. It was a
          spreadsheet, but it was the first system I designed, and I have been building systems since.
        </p>
        <p>
          Since 2018 I have worked in React: inside a legacy Java platform at alluraDirect, on the content platform and
          component library at Arc&apos;teryx, as the only engineer on a fintech product I co-founded, and now through my
          own company, Burrard Works. I care about the part of frontend where architecture meets the people using it:
          content models editors can live with, components other teams want to adopt, and documentation that outlasts
          team turnover.
        </p>
        <p>
          I build with AI agents, from written specifications with validation criteria defined before the code
          exists. It is how I move fast; the engineering judgement is still the job.
        </p>
        <p className="text-muted">{site.availability}</p>
      </div>

      <h2 className="mt-14 font-mono text-sm uppercase tracking-wide text-muted">Timeline</h2>
      <ol className="mt-4 divide-y divide-line border-y border-line">
        {timeline.map((t) => (
          <li key={t.what} className="grid gap-1 py-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
            <span className="font-mono text-sm text-muted">{t.when}</span>
            <span>
              <span className="font-medium">{t.what}</span>
              {t.note ? <span className="block text-muted">{t.note}</span> : null}
            </span>
          </li>
        ))}
      </ol>

      <h2 className="mt-14 font-mono text-sm uppercase tracking-wide text-muted">Contact</h2>
      <p className="mt-4">
        <a href={`mailto:${site.email}`} className="text-accent">{site.email}</a> ·{' '}
        <a href={site.github} className="text-accent">GitHub</a> ·{' '}
        <a href={site.linkedin} className="text-accent">LinkedIn</a>
      </p>
    </div>
  )
}
