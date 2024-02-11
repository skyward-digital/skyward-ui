import type { Meta } from "@storybook/react"

import { Popover, PopoverContent, PopoverTrigger } from "./Popover"

const meta: Meta<typeof Popover> = {
  title: "Core/Popover",
  component: Popover,
  parameters: {
    docs: {
      description: {
        component: "Popover component",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

export const Default = {
  render: () => (
    <Popover>
      <PopoverTrigger>Trigger</PopoverTrigger>
      <PopoverContent>Content</PopoverContent>
    </Popover>
  ),
}
