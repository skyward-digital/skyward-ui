import { useState } from "react"
import type { Meta } from "@storybook/react"
import { CheckIcon, FaceHappyIcon, MinusIcon } from "@untitledui-icons/react/line"

import { Radio } from "./Radio"

const meta: Meta<typeof Radio> = {
  title: "Core/Radio",
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: "Radio component",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

export const Default = {
  args: {
    id: "default",
    label: "Accept terms and conditions",
  },
}

export const Checked = {
  args: {
    id: "checked",
    label: "Accept terms and conditions",
    defaultChecked: true,
  },
}

export const CustomIcon = {
  args: {
    id: "custom",
    label: "Accept terms and conditions",
    icon: <FaceHappyIcon />,
    defaultChecked: true,
  },
}

export const Small = {
  args: {
    id: "small",
    label: "Accept terms and conditions",
    defaultChecked: true,
    size: "sm",
  },
}

export const Medium = {
  args: {
    id: "medium",
    label: "Accept terms and conditions",
    defaultChecked: true,
    size: "md",
  },
}

export const Large = {
  args: {
    id: "large",
    label: "Accept terms and conditions",
    defaultChecked: true,
    size: "lg",
  },
}
