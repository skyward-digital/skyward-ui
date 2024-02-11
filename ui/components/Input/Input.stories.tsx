import type { Meta, StoryObj } from "@storybook/react"

import { Input } from "./InputOld"

const meta: Meta<typeof Input> = {
  title: "Core/Input",
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

type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {
    id: "text",
    type: "text",
    label: "First name",
    placeholder: "Your first name",
  },
}

export const Error: Story = {
  args: {
    id: "text",
    type: "text",
    label: "First name",
    placeholder: "Your first name",
    error: { message: "First name is required" },
  },
}

export const Email: Story = {
  args: {
    id: "email",
    type: "email",
    label: "Email",
    placeholder: "email@example.com",
  },
}

export const Password: Story = {
  args: {
    id: "password",
    type: "password",
    label: "Password",
    placeholder: "Your password",
  },
}

export const PasswordWithHint: Story = {
  args: {
    id: "password",
    type: "password",
    label: "Password",
    placeholder: "Your password",
    hint: "Passwords must have at least 8 characters",
  },
}
