import type { Meta } from "@storybook/react"
import { ContainerIcon } from "@untitledui-icons/react/line"

import { CheckboxCard } from "./CheckboxCard"

const meta: Meta<typeof CheckboxCard> = {
  title: "Components/CheckboxCard",
  component: CheckboxCard,
  parameters: {
    docs: {
      description: {
        component:
          "A stylized checkbox that allows you to add additional information or design elements to checkboxes.",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

export const Default = {
  args: {
    children: "Lorem ipsum",
  },
}

export const Checked = {
  args: {
    children: "Lorem ipsum",
    defaultChecked: true,
  },
}

export const ShowCheck = {
  args: {
    children: "Lorem ipsum",
    defaultChecked: true,
    showCheckbox: true,
  },
}

export const Custom = {
  render: () => {
    return (
      <CheckboxCard id="custom-checkbox" defaultChecked={true} className="flex gap-4 max-w-md">
        <ContainerIcon className="size-6 flex-shrink-0" />
        <div className="text-left">
          <label htmlFor="custom-checkbox" className="font-bold">
            Lorem ipsum
          </label>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem,
            vel aliquet velit blandit ut.
          </p>
        </div>
      </CheckboxCard>
    )
  },
}

export const CustomWithCheck = {
  render: () => {
    return (
      <CheckboxCard
        id="custom-checkbox"
        defaultChecked={true}
        showCheckbox={true}
        className="flex gap-4 max-w-md"
      >
        <ContainerIcon className="size-6 flex-shrink-0" />
        <div className="text-left">
          <label htmlFor="custom-checkbox" className="font-bold">
            Lorem ipsum
          </label>
          <p className="text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla condimentum tortor sem,
            vel aliquet velit blandit ut.
          </p>
        </div>
      </CheckboxCard>
    )
  },
}
