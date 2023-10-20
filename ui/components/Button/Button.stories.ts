import { Button } from './Button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
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

export const Small: Story = {
  args: {
    children: 'Log In',
    size: 'sm',
  },
}

export const Medium: Story = {
  args: {
    children: 'Log in',
    size: 'md',
  },
}

export const Large: Story = {
  args: {
    children: 'Log In',
    size: 'lg',
  },
}

// export const Arrow: Story = {
//   args: {
//     children: 'Loading',
//     variant: 'primary',
//     arrow: true,
//   },
// }

// export const Icon: Story = {
//   args: {
//     children: 'Loading',
//     Icon: ShoppingCartIcon,
//   },
// }

// export const IconOnly: Story = {
//   args: {
//     Icon: ShoppingCartIcon,
//     'aria-label': 'Add to cart',
//   },
// }

// export const Link: Story = {
//   args: {
//     children: 'Log in',
//     variant: 'link',
//     // arrow: true,
//   },
// }
