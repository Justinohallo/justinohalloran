/**
 * Content model. Every number on the site is a Metric, and every Metric carries a status,
 * so an estimate can never render as if it were measured and "unmeasured" is shown, not hidden.
 */
export type MetricStatus = 'measured' | 'estimate' | 'unmeasured'

export interface Metric {
  label: string
  value: string
  status: MetricStatus
  note?: string
}

export type Tag =
  | 'cms'
  | 'design-system'
  | 'performance'
  | 'fintech'
  | 'react-native'
  | 'leadership'
  | 'architecture'
  | 'testing'

export interface Section {
  heading: string
  body: string[]
  list?: string[]
}

export interface CaseStudy {
  slug: string
  title: string
  /** One sentence for cards and meta descriptions. */
  summary: string
  org: string
  role: string
  when: string
  tags: Tag[]
  stack: string[]
  featured?: boolean
  metrics: Metric[]
  sections: Section[]
  /** Said plainly: what did not work, or what I'd change. */
  hindsight?: string
  links?: { label: string; href: string }[]
}

export interface Project {
  name: string
  description: string
  stack: string[]
  repo: string
  live?: string
}
