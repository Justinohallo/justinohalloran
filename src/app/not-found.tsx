import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-(--container-prose) pt-16">
      <h1 className="text-3xl font-semibold tracking-tight">Not found</h1>
      <p className="mt-4 text-muted">
        That page does not exist. <Link href="/work" className="text-accent">The work is here.</Link>
      </p>
    </div>
  )
}
