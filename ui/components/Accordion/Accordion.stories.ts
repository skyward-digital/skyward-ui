import type { Meta } from "@storybook/react"

import { Accordion } from "./Accordion"
import { Default as Item } from "./AccordionItem.stories"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Accordion> = {
  title: "Core/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      description: {
        component:
          "An accordion component is a wrapper that displays a list of AccordionItem components",
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
    items: [Item.args, Item.args, Item.args],
  },
}
