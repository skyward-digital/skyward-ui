import type { Meta } from "@storybook/react"

import { Skeleton } from "./Skeleton"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Skeleton> = {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = {
  render: () => (
    <div className="flex gap-3 items-center">
      <Skeleton className="w-10 h-10 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="w-24 h-2.5" />
        <Skeleton className="w-16 h-2.5" />
      </div>
    </div>
  ),
}
