import { Button } from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Components/Button/Primary',
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
    variant: 'primary',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Log In',
    variant: 'primary',
    disabled: true,
  },
};

// export const Arrow: Story = {
//   args: {
//     children: 'Loading',
//     variant: 'primary',
//     arrow: true,
//   },
// };
