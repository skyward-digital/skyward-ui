import type { Meta } from "@storybook/react"
import { Author } from "./Author"
import { Default as Avatar } from "../Avatar/Avatar.stories"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Author> = {
  title: "Components/Author",
  component: Author,
  parameters: {
    docs: {
      description: {
        component: "Author component",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

const args = {
  href: "#dan-spratling",
  name: "Dan Spratling",
  detail: "CEO @ Skyward.digital",
  avatar: Avatar.args,
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = {
  args,
}

export const WithEmail = {
  args: {
    ...args,
    detail: "dan@skyward.digital",
  },
}

export const NoDetail = {
  args: {
    ...args,
    detail: undefined,
  },
}

export const NoAvatar = {
  args: {
    ...args,
    avatar: undefined,
  },
}
