import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { caseStudies, getCaseStudy } from '@/content/case-studies'
import { Callout, MetricGrid, Tag } from '@/ui'
import { LighthouseResults } from './LighthouseResults'

export const dynamicParams = false

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const c = getCaseStudy((await params).slug)
  return c ? { title: c.title, description: c.summary } : {}
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const c = getCaseStudy((await params).slug)
  if (!c) notFound()

  return (
    <article className="max-w-(--container-prose) pt-8">
      <p className="font-mono text-sm text-muted">
        <Link href="/work" className="text-muted">Work</Link> / {c.org}
      </p>
      <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">{c.title}</h1>
      <p className="mt-4 text-lg text-muted">{c.summary}</p>

      <dl className="mt-8 grid gap-x-8 gap-y-3 border-y border-line py-5 text-sm sm:grid-cols-[auto_1fr]">
        <dt className="text-muted">Role</dt>
        <dd>{c.role}</dd>
        <dt className="text-muted">When</dt>
        <dd>{c.when}</dd>
        <dt className="text-muted">Stack</dt>
        <dd className="flex flex-wrap gap-1.5">
          {c.stack.map((s) => (
            <Tag key={s}>{s}</Tag>
          ))}
        </dd>
      </dl>

      {c.metrics.length > 0 ? (
        <div className="mt-8">
          <MetricGrid metrics={c.metrics} />
        </div>
      ) : null}
      {c.slug === 'this-site' ? <LighthouseResults /> : null}

      {c.sections.map((s) => (
        <section key={s.heading} className="mt-10">
          <h2 className="text-xl font-semibold tracking-tight">{s.heading}</h2>
          {s.body.map((p) => (
            <p key={p.slice(0, 40)} className="mt-3">{p}</p>
          ))}
          {s.list ? (
            <ul className="mt-3 list-disc space-y-2 pl-5 marker:text-accent">
              {s.list.map((li) => (
                <li key={li.slice(0, 40)}>{li}</li>
              ))}
            </ul>
          ) : null}
        </section>
      ))}

      {c.hindsight ? (
        <div className="mt-10">
          <Callout title="In hindsight" tone="accent">{c.hindsight}</Callout>
        </div>
      ) : null}

      {c.links?.length ? (
        <ul className="mt-8 flex flex-wrap gap-4">
          {c.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-accent">{l.label} →</a>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
