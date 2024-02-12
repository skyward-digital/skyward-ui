import type { Meta, StoryObj } from "@storybook/react"
import { Default as testimonials } from "#/ui/components/Testimonials/Testimonials.stories"

import { TextHighlight, type TextHighlightProps } from "."

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof TextHighlight> = {
  title: "Core/TextHighlight",
  component: TextHighlight,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
    chromatic: {
      viewports: [390, 1440],
    },
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof TextHighlight>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args: {
    children: "Lorem ipsum dolor sit amet",
  },
}
