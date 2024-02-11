import type { Meta } from "@storybook/react"
import { CircleIcon } from "@untitledui-icons/react/line"

import { Button } from "./Button"
import type { ButtonProps } from "./Button.d"
import { testButtonClick, testButtonLink } from "./Button.test"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<ButtonProps> = {
  title: "Core/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          "Buttons are components that allow users to take actions within your website or app. They are used in a variety of places where you want users to do something like submitting a form, confirming a notificaiton or changing a setting",
      },
    },
    // disable a11y checks for this story - WARNING this is not recommended unless you know what you are doing
    a11y: {
      element: "#storybook-root",
      config: {
        rules: [
          {
            // For buttons, white text on a saturated blue background should not throw a contrast error.
            id: "color-contrast",
            enabled: false,
          },
        ],
      },
      options: {},
    },
  },
  tags: ["autodocs"],
}

export default meta

const args = {
  children: "Button CTA",
  variant: "primary",
  size: "md",
  destructive: false,
  onClick: undefined,
}

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Primary = {
  args,
  play: testButtonClick,
}

export const Outline = {
  args: {
    ...args,
    variant: "outline",
  },
}

export const Ghost = {
  args: {
    ...args,
    variant: "ghost",
  },
}

export const Text = {
  args: {
    ...args,
    href: "#",
    variant: "text",
  },
  play: testButtonLink,
}

export const DestructivePrimary = {
  args: {
    ...args,
    destructive: true,
  },
}

export const DestructiveOutline = {
  args: {
    ...args,
    variant: "outline",
    destructive: true,
  },
}

export const DestructiveGhost = {
  args: {
    ...args,
    variant: "ghost",
    destructive: true,
  },
}

export const DestructiveText = {
  args: {
    ...args,
    variant: "text",
    destructive: true,
  },
}

export const Icon = {
  args: {
    ...args,
    children: (
      <>
        <CircleIcon />
        <span className="sr-only">Button CTA</span>
      </>
    ),
  },
}

export const IconLeading = {
  args: {
    ...args,
    children: (
      <>
        <CircleIcon /> Button CTA
      </>
    ),
  },
}

export const IconTrailing = {
  args: {
    ...args,
    children: (
      <>
        Button CTA
        <CircleIcon />
      </>
    ),
  },
}

export const XSmall = {
  args: {
    ...args,
    size: "xs",
  },
}

export const Small = {
  args: {
    ...args,
    size: "sm",
  },
}

export const Medium = {
  args: {
    ...args,
    size: "md",
  },
}

export const Large = {
  args: {
    ...args,
    size: "lg",
  },
}

export const XLarge = {
  args: {
    ...args,
    size: "xl",
  },
}
