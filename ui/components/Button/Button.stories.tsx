import type { Meta } from '@storybook/react'
import { CircleIcon } from '@untitledui-icons/react/line'
import { Button } from './Button'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Buttons are our standard call-to-actions, used for links and form submissions.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const XSmall = {
  args: {
    children: 'Log In',
    size: 'xs',
  },
}

export const Small = {
  args: {
    children: 'Log In',
    size: 'sm',
  },
}

export const Medium = {
  args: {
    children: 'Log in',
    size: 'md',
  },
}

export const Large = {
  args: {
    children: 'Log In',
    size: 'lg',
  },
}

export const XLarge = {
  args: {
    children: 'Log In',
    size: 'xl',
  },
}

export const XXLarge = {
  args: {
    children: 'Log In',
    size: '2xl',
  },
}

export const Primary = {
  args: {
    children: 'Button CTA',
    icon: CircleIcon,
    iconStyle: 'both',
  },
}

export const Outline = {
  args: {
    children: 'Button CTA',
    icon: CircleIcon,
    iconStyle: 'both',
    variant: 'secondary',
  },
}

export const ButtonLink = {
  args: {
    children: 'Button CTA',
    icon: CircleIcon,
    iconStyle: 'both',
    variant: 'link',
  },
}

export const IconLeading = {
  args: {
    children: 'Button CTA',
    icon: CircleIcon,
    iconStyle: 'leading',
  },
}

export const IconTrailing = {
  args: {
    children: 'Button CTA',
    icon: CircleIcon,
    iconStyle: 'trailing',
  },
}

export const IconOnly = {
  args: {
    icon: CircleIcon,
    iconStyle: 'icon-only',
  },
}
