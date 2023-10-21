import type { Meta } from '@storybook/react'
import { Avatar } from './Avatar'
import type { AvatarProps } from './Avatar.d'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<AvatarProps> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      description: {
        component: 'Avatar component',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

const args = {
  image: {
    src: 'https://a.storyblok.com/f/180053/1200x1600/bbce43daaf/dan-spratling-profile-picture.jpg',
    alt: 'Dan Spratling',
  },
  size: 'md',
  fallback: 'Dan Spratling',
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args,
}

export const Fallback = {
  args: {
    fallback: args.fallback,
  },
}

export const xs = {
  args: {
    ...args,
    size: 'xs',
  },
}

export const sm = {
  args: {
    ...args,
    size: 'sm',
  },
}

export const md = {
  args: {
    ...args,
    size: 'md',
  },
}

export const lg = {
  args: {
    ...args,
    size: 'lg',
  },
}

export const xl = {
  args: {
    ...args,
    size: 'xl',
  },
}

export const xxl = {
  args: {
    ...args,
    size: '2xl',
  },
}

export const CustomSize = {
  args: {
    ...args,
    size: 112,
  },
}

export const CustomClass = {
  args: {
    ...args,
    size: '2xl',
    className: 'rounded-lg rounded-tl-none',
  },
}
