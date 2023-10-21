import type { StorybookConfig } from '@storybook/react-vite'
const viteTsconfig = require('vite-tsconfig-paths')
import { mergeConfig } from 'vite'
const tsconfigPaths = viteTsconfig.default

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
    '../ui/**/*.mdx',
    '../ui/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  // This allows us to use tsconfig paths in our stories - eg. '#/lib/classnames'
  async viteFinal(config) {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    })
  },
  docs: {
    autodocs: 'tag',
  },
}
export default config
