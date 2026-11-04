import type { Meta, StoryObj } from '@storybook/react-vite'
import { Metric, MetricGrid } from './Metric'

const meta = {
  title: 'Components/Metric',
  component: Metric,
  args: { label: 'Validation', value: 'To the cent, 284 disposals', status: 'measured' },
  argTypes: { status: { control: 'inline-radio', options: ['measured', 'estimate', 'unmeasured'] } },
  parameters: {
    docs: {
      description: {
        component:
          'A number with its provenance. The status is required by the type and always rendered, so an estimate can never pass as a measurement and an unmeasured outcome is stated rather than left out.',
      },
    },
  },
} satisfies Meta<typeof Metric>
export default meta
type Story = StoryObj<typeof meta>

export const Measured: Story = { decorators: [(S) => <dl className="max-w-xs"><S /></dl>] }
export const Estimate: Story = {
  args: { label: 'Example estimate', value: '~40%', status: 'estimate', note: 'Illustrative value, not a real result' },
  decorators: [(S) => <dl className="max-w-xs"><S /></dl>],
}
export const Unmeasured: Story = {
  args: { label: 'Adoption', value: 'Unmeasured', status: 'unmeasured' },
  decorators: [(S) => <dl className="max-w-xs"><S /></dl>],
}
export const Grid: Story = {
  render: () => (
    <MetricGrid
      metrics={[
        { label: 'Delivery', value: '6 weeks', status: 'measured', note: 'Against a six-month estimate' },
        { label: 'Languages', value: '8', status: 'measured' },
        { label: 'Business impact', value: 'Unmeasured', status: 'unmeasured' },
      ]}
    />
  ),
}
