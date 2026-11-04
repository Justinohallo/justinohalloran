import { cx } from './cx'
import { Tag } from './Tag'

export interface CardProps {
  href: string
  eyebrow?: string
  title: string
  description: string
  tags?: string[]
  /** Rendered instead of a plain anchor, e.g. next/link. Keeps the component framework-agnostic for Storybook. */
  as?: React.ElementType
  external?: boolean
  className?: string
}

/** A whole-card link for case studies and projects. */
export function Card({ href, eyebrow, title, description, tags = [], as: Link = 'a', external, className }: CardProps) {
  return (
    <Link
      href={href}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
      className={cx(
        'group flex h-full flex-col gap-3 rounded-lg border border-line bg-surface p-5 no-underline transition-colors hover:border-accent',
        className,
      )}
    >
      {eyebrow ? <span className="font-mono text-xs uppercase tracking-wide text-muted">{eyebrow}</span> : null}
      <span className="text-lg font-semibold leading-snug tracking-tight text-ink group-hover:text-accent">
        {title}
        {external ? <span aria-hidden="true"> ↗</span> : null}
      </span>
      <span className="text-[0.95rem] text-muted">{description}</span>
      {tags.length > 0 ? (
        <span className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </span>
      ) : null}
    </Link>
  )
}
