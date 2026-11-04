import type { Preview } from '@storybook/react-vite'
import '../src/styles/globals.css'

const preview: Preview = {
  parameters: {
    layout: 'padded',
    a11y: { test: 'error' },
    options: { storySort: { order: ['Introduction', 'Tokens', 'Components'] } },
  },
  tags: ['autodocs'],
}

export default preview
