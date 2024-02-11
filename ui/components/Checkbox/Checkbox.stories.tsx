import { useState } from "react"
import type { Meta } from "@storybook/react"
import { CheckIcon, FaceHappyIcon, MinusIcon } from "@untitledui-icons/react/line"

import { Checkbox, type CheckboxProps } from "."

const meta: Meta<typeof Checkbox> = {
  title: "Core/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: "Checkbox component",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

export const Default = {
  args: {
    id: "text",
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

export const Indeterminate = {
  render: () => {
    const [checked, setChecked] = useState<CheckboxProps["checked"]>("indeterminate")
    return (
      <Checkbox
        id="indeterminate"
        label="Accept terms and conditions"
        checked={checked}
        icon={checked === "indeterminate" ? <MinusIcon /> : checked ? <CheckIcon /> : undefined}
        onChange={() =>
          checked === "indeterminate"
            ? setChecked(true)
            : checked
              ? setChecked(false)
              : setChecked("indeterminate")
        }
      />
    )
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
