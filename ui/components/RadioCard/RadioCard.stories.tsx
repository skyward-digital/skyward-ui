import type { Meta } from "@storybook/react"
import { ContainerIcon } from "@untitledui-icons/react/line"

import { RadioCard } from "./RadioCard"

const meta: Meta<typeof RadioCard> = {
  title: "Components/RadioCard",
  component: RadioCard,
  parameters: {
    docs: {
      description: {
        component:
          "A stylized radio that allows you to add additional information or design elements to checkboxes.",
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

export const ShowRadio = {
  args: {
    children: "Lorem ipsum",
    defaultChecked: true,
    showRadio: true,
  },
}

export const Custom = {
  render: () => {
    return (
      <RadioCard
        id="custom-checkbox"
        name="custom-checkbox"
        defaultChecked={true}
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
      </RadioCard>
    )
  },
}

export const CustomWithCheck = {
  render: () => {
    return (
      <RadioCard
        id="custom-checkbox"
        defaultChecked={true}
        showRadio={true}
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
      </RadioCard>
    )
  },
}
