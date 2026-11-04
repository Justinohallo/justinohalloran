import type { Metric as MetricData, MetricStatus } from '@/content/types'
import { cx } from './cx'

const statusLabel: Record<MetricStatus, string> = {
  measured: 'Measured',
  estimate: 'Estimate',
  unmeasured: 'Unmeasured',
}

const statusClass: Record<MetricStatus, string> = {
  measured: 'text-measured',
  estimate: 'text-estimate',
  unmeasured: 'text-unmeasured',
}

/**
 * A number with its provenance. The status is always rendered, so an estimate
 * never reads as a measurement and an unmeasured outcome is stated rather than omitted.
 */
export function Metric({ label, value, status, note }: MetricData) {
  return (
    <div className="flex flex-col gap-1 rounded-md border border-line bg-surface p-4">
      <dt className="text-sm text-muted">{label}</dt>
      <dd className={cx('text-xl font-semibold tracking-tight', status === 'unmeasured' && 'text-muted')}>{value}</dd>
      <dd className={cx('flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide', statusClass[status])}>
        <span aria-hidden="true" className="inline-block size-1.5 rounded-full bg-current" />
        {statusLabel[status]}
      </dd>
      {note ? <dd className="text-sm text-muted">{note}</dd> : null}
    </div>
  )
}

export function MetricGrid({ metrics }: { metrics: MetricData[] }) {
  if (metrics.length === 0) return null
  return (
    <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {metrics.map((m) => (
        <Metric key={m.label} {...m} />
      ))}
    </dl>
  )
}
