import { Button } from './Button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Secondary',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button component',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Loading',
    variant: 'secondary',
  },
}

export const Disabled: Story = {
  args: {
    children: 'Log In',
    variant: 'secondary',
    disabled: true,
  },
}

// export const Arrow: Story = {
//   args: {
//     children: 'Loading',
//     variant: 'secondary',
//     arrow: true,
//   },
// };
