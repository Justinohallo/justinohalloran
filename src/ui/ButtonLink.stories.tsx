import type { Meta, StoryObj } from '@storybook/react-vite'
import { ButtonLink } from './ButtonLink'

const meta = { title: 'Components/ButtonLink', component: ButtonLink, args: { href: '#', children: 'See the work' } } satisfies Meta<typeof ButtonLink>
export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}
export const Secondary: Story = { args: { variant: 'secondary', children: 'Email me' } }
