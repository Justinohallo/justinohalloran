import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tag } from './Tag'

const meta = { title: 'Components/Tag', component: Tag, args: { children: 'Next.js' } } satisfies Meta<typeof Tag>
export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = {}
export const Accent: Story = { args: { tone: 'accent', children: 'featured' } }
export const InARow: Story = {
  render: () => (
    <div className="flex flex-wrap gap-1.5">
      {['Sanity', 'Next.js', 'TypeScript', 'Storybook', 'Fastly'].map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  ),
}
