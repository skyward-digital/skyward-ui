import type { Meta } from "@storybook/react"
import { CircleIcon } from "@untitledui-icons/react/line"
import { Notification } from "./Notification"
import type { NotificationProps } from "./Notification.d"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<NotificationProps> = {
  title: "Components/Notification",
  component: Notification,
  parameters: {
    docs: {
      description: {
        component: "",
      },
    },
    // disable a11y checks for this story - WARNING this is not recommended unless you know what you are doing
    a11y: {
      element: "#storybook-root",
      config: {
        rules: [
          {
            // For Notifications, white text on a saturated blue background should not throw a contrast error.
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

const Square = () => (
  <div className="w-8 h-8 rounded-xl bg-gray-300 ring-inset ring-1 ring-gray-400/50"></div>
)

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default = {
  render: () => (
    <Notification count={42}>
      <Square />
    </Notification>
  ),
}

export const HideNumber = {
  render: () => (
    <Notification count={100} hideNumber>
      <Square />
    </Notification>
  ),
}

export const HidePlus = {
  render: () => (
    <Notification count={100} showPlus={false}>
      <Square />
    </Notification>
  ),
}

export const ShowZero = {
  render: () => (
    <Notification count={0} showZero>
      <Square />
    </Notification>
  ),
}

export const Zero = {
  render: () => (
    <Notification count={0}>
      <Square />
    </Notification>
  ),
}

export const Nine = {
  render: () => (
    <Notification count={10} max={9}>
      <Square />
    </Notification>
  ),
}

export const TwoNines = {
  render: () => (
    <Notification count={100} max={99}>
      <Square />
    </Notification>
  ),
}

export const ThreeNines = {
  render: () => (
    <Notification count={1000} max={999}>
      <Square />
    </Notification>
  ),
}

export const FourNines = {
  render: () => (
    <Notification count={10000} max={9999}>
      <Square />
    </Notification>
  ),
}

export const FiveNines = {
  render: () => (
    <Notification count={100000} max={99999}>
      <Square />
    </Notification>
  ),
}
