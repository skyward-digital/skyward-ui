import type { Meta } from "@storybook/react"

import type { InputProps } from ".."
import { Input } from "./TrailingButton"

const meta: Meta<typeof Input> = {
  title: "Core/Input/TrailingButton",
  component: Input,
  parameters: {
    docs: {
      description: {
        component: "Input component",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

const args: InputProps = {
  id: "text",
  type: "email",
  label: "Email Address",
  placeholder: "dan@skyward.digital",
}

export const Default = {
  args,
}

export const Filled = {
  args: {
    ...args,
    value: "John Doe",
  },
}

export const Error = {
  args: {
    ...args,
    error: "First name is required",
  },
}
