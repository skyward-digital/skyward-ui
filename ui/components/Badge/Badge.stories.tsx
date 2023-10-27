import type { Meta, StoryObj } from "@storybook/react"
import { CircleIcon } from "@untitledui-icons/react/line"
import { Badge } from "./Badge"
import { Default as Avatar } from "../Avatar/Avatar.stories"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    docs: {
      description: {
        component:
          "The badge component displays category or grouping information with an optional icon",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    children: "Category",
    color: "info",
  },
}

export const Dot = {
  args: {
    children: "Category",
    color: "info",
    dot: true,
  },
}

export const Image = {
  args: {
    children: "Category",
    color: "info",
    image: Avatar.args,
  },
}

export const Small = {
  args: {
    children: "Category",
    color: "info",
    size: "sm",
  },
}

export const Medium = {
  args: {
    children: "Category",
    color: "info",
    size: "md",
  },
}

export const Large = {
  args: {
    children: "Category",
    color: "info",
    size: "lg",
  },
}
