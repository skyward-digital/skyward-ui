import type { Meta } from '@storybook/react'
import { Image } from './Image'

const meta: Meta<typeof Image> = {
  title: 'Components/Image',
  component: Image,
  parameters: {
    docs: {
      description: {
        component: 'Image component',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

// type Story = StoryObj<CustomImageProps>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default = {
  args: {
    src: '/placeholder/Screen.png',
    alt: 'Placeholder image',
    width: 890,
    height: 557,
  },
}

export const Logo = {
  args: {
    src: '/placeholder/Logo.svg',
    alt: 'Placeholder logo',
    width: 200,
    height: 120,
  },
}

export const Avatar = {
  args: {
    src: '/placeholder/Avatar.jpg',
    alt: 'Placeholder Avatar',
    width: 120,
    height: 120,
  },
}

export const FullWidth = {
  args: {
    src: '/placeholder/FullWidth.png',
    alt: 'Placeholder image',
    fill: true,
    className: 'object-contain',
  },
  decorators: [
    (Story: any) => (
      <div className='relative h-80 w-full md:h-[50rem]'>
        <Story />
      </div>
    ),
  ],
}
