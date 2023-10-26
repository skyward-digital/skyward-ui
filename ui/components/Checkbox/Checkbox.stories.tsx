import type { Meta } from '@storybook/react'
import { useState } from 'react'
import { Checkbox } from './Checkbox'
import { CheckIcon, FaceHappyIcon, MinusIcon } from '@untitledui-icons/react/line'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: 'Checkbox component',
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
    defaultChecked: true,
  },
}

export const Indeterminate = {
  render: () => {
    const [checked, setChecked] = useState('indeterminate')
    return (
      <Checkbox
        id='email'
        label='Accept terms and conditions'
        checked={checked}
        icon={checked === 'indeterminate' ? <MinusIcon /> : checked ? <CheckIcon /> : undefined}
        onChange={() =>
          checked === 'indeterminate' ? setChecked(true) : checked ? setChecked(false) : setChecked('indeterminate')
        }
      />
    )
  },
}

export const CustomIcon = {
  args: {
    id: 'text',
    label: 'Accept terms and conditions',
    icon: <FaceHappyIcon />,
  },
}

export const Small = {
  args: {
    id: 'email',
    label: 'Accept terms and conditions',
    defaultChecked: true,
    size: 'sm',
  },
}

export const Medium = {
  args: {
    id: 'email',
    label: 'Accept terms and conditions',
    defaultChecked: true,
    size: 'md',
  },
}

export const Large = {
  args: {
    id: 'email',
    label: 'Accept terms and conditions',
    defaultChecked: true,
    size: 'lg',
  },
}
