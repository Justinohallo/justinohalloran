import results from '@/content/lighthouse.json'
import { MetricGrid } from '@/ui'
import type { Metric } from '@/content/types'

interface Recorded {
  url: string | null
  date: string | null
  formFactor: string | null
  runs?: string
  scores: Record<string, number> | null
  audits: Record<string, string> | null
}

/** Renders the most recent recorded Lighthouse run (scripts/record-lighthouse.mjs), or says none is recorded yet. */
export function LighthouseResults() {
  const r = results as Recorded
  if (!r.scores || !r.date) {
    return (
      <p className="mt-8 rounded-md border border-line bg-surface p-4 text-sm text-muted">
        Lighthouse results: not recorded yet. They will appear here after the first production run.
      </p>
    )
  }
  const metrics: Metric[] = [
    ...Object.entries(r.scores).map(([k, v]) => ({ label: `Lighthouse ${k}`, value: String(v), status: 'measured' as const })),
    ...Object.entries(r.audits ?? {}).map(([k, v]) => ({ label: k, value: v, status: 'measured' as const })),
  ]
  return (
    <div className="mt-8">
      <MetricGrid metrics={metrics} />
      <p className="mt-3 text-sm text-muted">
        Lab data: {r.runs}, {r.formFactor}, against {r.url} on {r.date}. Lab scores swing from run to run, which is
        why the spread is published with the median.
      </p>
    </div>
  )
}
