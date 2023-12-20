import type { Meta, StoryObj } from "@storybook/react"

import { TextArea } from "."

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  parameters: {
    docs: {
      description: {
        component: "TextArea component",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

type Story = StoryObj<typeof TextArea>

export const Default: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message",
  },
}

export const Filled: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message",
    value: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos",
  },
}

export const Hint: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message",
    hint: "Please enter your message",
  },
}

export const Error: Story = {
  args: {
    label: "Message",
    placeholder: "Enter your message",
    error: "Please enter your message",
  },
}
