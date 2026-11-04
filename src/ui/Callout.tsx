import { cx } from './cx'

export interface CalloutProps {
  title: string
  children: React.ReactNode
  tone?: 'neutral' | 'accent'
}

/** A set-apart note. Used for the "in hindsight" paragraph on every case study. */
export function Callout({ title, children, tone = 'neutral' }: CalloutProps) {
  return (
    <aside
      className={cx(
        'rounded-md border-l-4 bg-surface p-5',
        tone === 'neutral' && 'border-line',
        tone === 'accent' && 'border-accent',
      )}
    >
      <p className="mb-1 font-mono text-xs uppercase tracking-wide text-muted">{title}</p>
      <div className="text-ink">{children}</div>
    </aside>
  )
}
