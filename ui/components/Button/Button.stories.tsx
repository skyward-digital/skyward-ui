import type { Meta } from '@storybook/react'
import { CircleIcon, Loading01Icon } from '@untitledui-icons/react/line'
import { Button } from './Button'
import type { ButtonProps } from './Button.d'
import { testButtonClick } from './Button.test'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Buttons are our standard call-to-actions, used for links and form submissions.',
      },
    },
    // disable a11y checks for this story - WARNING this is not recommended unless you know what you are doing
    a11y: {
      element: '#storybook-root',
      config: {
        rules: [
          {
            // For buttons, white text on a saturated blue background should not throw a contrast error.
            id: 'color-contrast',
            enabled: false,
          },
        ],
      },
      options: {},
    },
  },
  tags: ['autodocs'],
}

export default meta

const args = {
  children: (
    <>
      <CircleIcon /> Button CTA <CircleIcon />
    </>
  ),
  variant: 'primary',
  size: 'md',
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary = {
  args,
  play: testButtonClick,
}

export const Outline = {
  args: {
    ...args,
    variant: 'outline',
  },
}

export const Ghost = {
  args: {
    ...args,
    variant: 'ghost',
  },
}

export const Text = {
  args: {
    ...args,
    variant: 'text',
  },
}

export const Destructive = {
  args: {
    ...args,
    variant: 'destructive',
  },
}

export const IconLeading = {
  args: {
    ...args,
    children: (
      <>
        <CircleIcon /> Button CTA
      </>
    ),
  },
}

export const IconTrailing = {
  args: {
    ...args,
    children: (
      <>
        Button CTA
        <CircleIcon />
      </>
    ),
  },
}

export const IconOnly = {
  args: {
    ...args,
    children: (
      <>
        <CircleIcon />
        <span className='sr-only'>Button CTA</span>
      </>
    ),
  },
}

export const XSmall = {
  args: {
    ...args,
    size: 'xs',
  },
}

export const Small = {
  args: {
    ...args,
    size: 'sm',
  },
}

export const Medium = {
  args: {
    ...args,
    size: 'md',
  },
}

export const Large = {
  args: {
    ...args,
    size: 'lg',
  },
}

export const XLarge = {
  args: {
    ...args,
    size: 'xl',
  },
}

export const XXLarge = {
  args: {
    ...args,
    size: '2xl',
  },
}
