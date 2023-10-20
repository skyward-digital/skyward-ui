import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Link',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: 'Button component',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Loading',
    variant: 'link',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Log In',
    variant: 'link',
    disabled: true,
  },
};

export const Arrow: Story = {
  args: {
    children: 'Loading',
    variant: 'link',
    arrow: true,
  },
};
