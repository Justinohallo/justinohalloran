import type { Metadata } from 'next'
import Link from 'next/link'
import { caseStudies } from '@/content/case-studies'
import { Card } from '@/ui'

export const metadata: Metadata = {
  title: 'Work',
  description: 'Case studies: content platforms, design systems, fintech engines and web performance.',
}

export default function WorkIndex() {
  return (
    <>
      <header className="max-w-(--container-prose) pb-10 pt-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">Work</h1>
        <p className="mt-4 text-lg text-muted">
          Each case study says what I did, what came of it, and what I would change. Where an outcome was never
          measured, it says so.
        </p>
      </header>
      <ul className="grid gap-4 md:grid-cols-2">
        {caseStudies.map((c) => (
          <li key={c.slug}>
            <Card as={Link} href={`/work/${c.slug}`} eyebrow={`${c.org} · ${c.when}`} title={c.title} description={c.summary} tags={c.tags} />
          </li>
        ))}
      </ul>
    </>
  )
}
