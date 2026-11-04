import type { Meta, StoryObj } from '@storybook/react-vite'
import { Callout } from './Callout'

const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    title: 'In hindsight',
    children: 'We never instrumented adoption. Today I would track component usage from day one.',
  },
} satisfies Meta<typeof Callout>
export default meta
type Story = StoryObj<typeof meta>

export const Neutral: Story = {}
export const Accent: Story = { args: { tone: 'accent' } }
