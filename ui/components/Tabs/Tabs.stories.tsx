import type { Meta } from "@storybook/react"
import { cn } from "#/utils"

import { Tabs } from "./Tabs"

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

const Panel = ({ className, children }) => (
  <div
    className={cn(
      "w-full rounded-xl p-4 bg-gray-300 ring-inset ring-1 ring-gray-400/50",
      className
    )}
  >
    {children}
  </div>
)

export const Default = {
  render: () => (
    <Tabs
      tabs={[
        { title: "Tab 1", content: <Panel className="bg-blue-800">Tab 1</Panel> },
        { title: "Tab 2", content: <Panel className="bg-red-800">Tab 2</Panel> },
        { title: "Tab 3", content: <Panel className="bg-green-800">Tab 3</Panel> },
      ]}
    />
  ),
}
