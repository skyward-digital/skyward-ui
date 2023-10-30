import type { Meta } from "@storybook/react"

import { Progress } from "./Progress"

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress,
  parameters: {
    docs: {
      description: {
        component: "Progress component",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

export const Default = {
  args: {
    value: 66,
  },
}

export const Complete = {
  args: {
    value: 100,
  },
}

export const Empty = {
  args: {
    value: 0,
  },
}

export const Indeterminate = {}
