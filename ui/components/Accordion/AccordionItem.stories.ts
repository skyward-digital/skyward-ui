import type { Meta, StoryObj } from "@storybook/react"

import { AccordionItem } from "./AccordionItem"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof AccordionItem> = {
  title: "Components/Accordion/Item",
  component: AccordionItem,
  parameters: {
    docs: {
      description: {
        component: "A single accordion item that displays a heading with expandable content",
      },
    },
    chromatic: {
      viewports: [390, 1440],
    },
  },
  tags: ["autodocs"],
}

export default meta

export const Default = {
  args: {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem, vel aliquet velit blandit ut.",
  },
}
