import Link from 'next/link'
import { caseStudies } from '@/content/case-studies'
import { site } from '@/content/site'
import { ButtonLink, Card } from '@/ui'

export default function Home() {
  const featured = caseStudies.filter((c) => c.featured)
  return (
    <>
      <section className="max-w-(--container-prose) pb-16 pt-10 sm:pt-16">
        <p className="mb-4 font-mono text-sm text-accent">{site.title} · {site.location}</p>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">{site.pitch}</h1>
        <p className="mt-6 text-lg text-muted">
          Before founding Burrard Works, I was a senior software engineer at Arc&apos;teryx, where I led the Drupal to
          Sanity migration and architected the component library. {site.availability}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink as={Link} href="/work">See the work</ButtonLink>
          <ButtonLink variant="secondary" href={`mailto:${site.email}`}>Email me</ButtonLink>
        </div>
      </section>

      <section aria-labelledby="featured" className="pb-16">
        <h2 id="featured" className="mb-6 font-mono text-sm uppercase tracking-wide text-muted">Selected work</h2>
        <ul className="grid gap-4 md:grid-cols-3">
          {featured.map((c) => (
            <li key={c.slug}>
              <Card as={Link} href={`/work/${c.slug}`} eyebrow={`${c.org} · ${c.when}`} title={c.title} description={c.summary} tags={c.tags} />
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link href="/work" className="text-accent">All case studies →</Link>
        </p>
      </section>

      <section aria-labelledby="proof" className="rounded-lg border border-line bg-surface p-6 sm:p-8">
        <h2 id="proof" className="text-xl font-semibold tracking-tight">This site is part of the portfolio</h2>
        <ul className="mt-4 grid gap-4 text-muted sm:grid-cols-3">
          <li>
            <a href="/storybook/index.html" className="font-medium text-ink">Storybook →</a>
            <p className="mt-1 text-sm">Its components, documented and checked for accessibility, built from one tokens file.</p>
          </li>
          <li>
            <Link href="/work/this-site" className="font-medium text-ink">Performance →</Link>
            <p className="mt-1 text-sm">Static rendering, almost no client JavaScript, and Lighthouse numbers published with a date.</p>
          </li>
          <li>
            <a href="https://github.com/Justinohallo/justinohalloran" className="font-medium text-ink">Source →</a>
            <p className="mt-1 text-sm">Every number on the site is typed with its provenance: measured, estimate or unmeasured.</p>
          </li>
        </ul>
      </section>
    </>
  )
}
