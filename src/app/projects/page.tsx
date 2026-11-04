import type { Metadata } from 'next'
import { projects } from '@/content/site'
import { Card } from '@/ui'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Public repositories: fintech, spec-first agent builds, Bitcoin and MCP.',
}

export default function Projects() {
  return (
    <>
      <header className="max-w-(--container-prose) pb-10 pt-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Projects</h1>
        <p className="mt-4 text-lg text-muted">Public code you can read. Each README says what is real and what is mocked.</p>
      </header>
      <ul className="grid gap-4 md:grid-cols-2">
        {projects.map((p) => (
          <li key={p.name}>
            <Card href={p.repo} external eyebrow="GitHub" title={p.name} description={p.description} tags={p.stack} />
          </li>
        ))}
      </ul>
    </>
  )
}
