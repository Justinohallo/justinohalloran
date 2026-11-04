import type { Metadata, Viewport } from 'next'
import Link from 'next/link'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { site } from '@/content/site'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} · ${site.title}`, template: `%s · ${site.name}` },
  description: site.pitch,
  openGraph: { type: 'website', siteName: site.name, url: site.url },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfaf8' },
    { media: '(prefers-color-scheme: dark)', color: '#111215' },
  ],
}

const nav = [
  { href: '/work', label: 'Work' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/storybook/index.html', label: 'Storybook' },
]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-10 focus:bg-surface focus:p-2">
          Skip to content
        </a>
        <header className="mx-auto flex max-w-(--container-page) flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-6 sm:px-6">
          <Link href="/" className="font-semibold tracking-tight text-ink no-underline">
            {site.name}
          </Link>
          <nav aria-label="Main">
            <ul className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
              {nav.map((n) => (
                <li key={n.href}>
                  {n.href.startsWith('/storybook') ? (
                    <a href={n.href} className="text-muted no-underline hover:text-accent">
                      {n.label}
                    </a>
                  ) : (
                    <Link href={n.href} className="text-muted no-underline hover:text-accent">
                      {n.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main id="main" className="mx-auto max-w-(--container-page) px-4 pb-24 sm:px-6">
          {children}
        </main>
        <footer className="border-t border-line">
          <div className="mx-auto flex max-w-(--container-page) flex-wrap justify-between gap-4 px-4 py-8 text-sm text-muted sm:px-6">
            <p>
              {site.name} · {site.location}
            </p>
            <p className="flex gap-4">
              <a href={`mailto:${site.email}`} className="text-muted hover:text-accent">Email</a>
              <a href={site.github} className="text-muted hover:text-accent">GitHub</a>
              <a href={site.linkedin} className="text-muted hover:text-accent">LinkedIn</a>
              <a href="https://github.com/Justinohallo/justinohalloran" className="text-muted hover:text-accent">Source</a>
            </p>
          </div>
        </footer>
        <SpeedInsights />
      </body>
    </html>
  )
}
