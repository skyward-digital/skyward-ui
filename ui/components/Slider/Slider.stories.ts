import type { Meta } from "@storybook/react"

import { Slider } from "./Slider"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider,
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
