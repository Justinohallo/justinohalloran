import { cx } from './cx'

export interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
  as?: React.ElementType
}

/** A link styled as a button. Navigation stays a link, so it keeps link semantics. */
export function ButtonLink({ variant = 'primary', as: Link = 'a', className, ...props }: ButtonLinkProps) {
  return (
    <Link
      className={cx(
        'inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium no-underline transition-colors',
        variant === 'primary' && 'bg-accent text-accent-ink hover:opacity-90',
        variant === 'secondary' && 'border border-line text-ink hover:border-accent hover:text-accent',
        className,
      )}
      {...props}
    />
  )
}
