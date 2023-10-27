import type { Meta } from "@storybook/react"
import { Image } from "./Image"

const meta: Meta<typeof Image> = {
  title: "Components/Image",
  component: Image,
  parameters: {
    docs: {
      description: {
        component: "Image component",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

// type Story = StoryObj<CustomImageProps>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Default = {
  args: {
    src: "https://via.placeholder.com/890x557",
    alt: "Placeholder image",
    width: 890,
    height: 557,
  },
}
