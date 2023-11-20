import type { Meta } from "@storybook/react"

import { ExampleRadioGroup } from "./ExampleRadioGroup"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ExampleRadioGroup> = {
  title: "Components/ExampleRadioGroup",
  component: ExampleRadioGroup,
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

export const Default = {}
