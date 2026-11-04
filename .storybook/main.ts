import type { StorybookConfig } from '@storybook/react-vite'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

const config: StorybookConfig = {
  stories: ['../src/ui/**/*.mdx', '../src/ui/**/*.stories.tsx'],
  addons: ['@storybook/addon-docs', '@storybook/addon-a11y'],
  framework: { name: '@storybook/react-vite', options: {} },
  core: { disableTelemetry: true },
  async viteFinal(config) {
    config.plugins = [...(config.plugins ?? []), tailwindcss()]
    config.resolve = {
      ...config.resolve,
      alias: { ...(config.resolve?.alias ?? {}), '@': fileURLToPath(new URL('../src', import.meta.url)) },
    }
    config.base = '/storybook/'
    return config
  },
}

export default config
