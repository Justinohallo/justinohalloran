import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  args: {
    href: '#',
    eyebrow: "Arc'teryx · 2023 – 2024",
    title: 'Drupal to Sanity in six weeks',
    description: 'A penetration test put a hard date on a CMS migration the team had estimated would run to the end of 2024.',
    tags: ['cms', 'architecture', 'leadership'],
  },
  decorators: [(S) => <div className="max-w-sm"><S /></div>],
} satisfies Meta<typeof Card>
export default meta
type Story = StoryObj<typeof meta>

export const CaseStudy: Story = {}
export const External: Story = { args: { eyebrow: 'GitHub', title: 'wealthee-monorepo', external: true, tags: ['Next.js', 'Firebase'] } }
export const Minimal: Story = { args: { eyebrow: undefined, tags: [] } }
