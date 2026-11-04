import { cx } from './cx'

export interface TagProps {
  children: React.ReactNode
  tone?: 'neutral' | 'accent'
  className?: string
}

/** A small label for technologies and topics. */
export function Tag({ children, tone = 'neutral', className }: TagProps) {
  return (
    <span
      className={cx(
        'inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-xs leading-5',
        tone === 'neutral' && 'border-line text-muted',
        tone === 'accent' && 'border-accent text-accent',
        className,
      )}
    >
      {children}
    </span>
  )
}
