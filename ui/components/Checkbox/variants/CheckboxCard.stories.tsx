import { CheckboxCard } from './CheckboxCard'
import type { Meta } from '@storybook/react'

const meta: Meta<typeof CheckboxCard> = {
  title: 'Components/Checkbox/Card',
  component: CheckboxCard,
  parameters: {
    docs: {
      description: {
        component: 'CheckboxCard component',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

export const Default = {
  args: {
    id: 'text',
    label: 'Accept terms and conditions',
  },
}

export const Checked = {
  args: {
    id: 'email',
    label: 'Accept terms and conditions',
    checked: true,
  },
}
