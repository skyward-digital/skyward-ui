import type { Meta } from "@storybook/react"
import {
  ActivityIcon,
  CalendarIcon,
  CheckDone01Icon,
  CreditCard01Icon,
  FolderIcon,
  Grid01Icon,
  MessageSquare02Icon,
  PieChart01Icon,
  Settings01Icon,
  Users01Icon,
} from "@untitledui-icons/react/line"

import { Sidebar } from "./Sidebar"

const meta: Meta<typeof Sidebar> = {
  title: "Components/Sidebar",
  component: Sidebar,
  parameters: {
    docs: {
      description: {
        component:
          "Sidebar is a global component that shows up on the left side of the screen, allowing users to navigate through the app.",
      },
    },
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="flex min-h-[97dvh]">
        <Story />
      </div>
    ),
  ],
}

export default meta

const firstItems = [
  { name: "Dashboard", href: "#", icon: Grid01Icon, current: true },
  { name: "My Tasks", href: "#", icon: CheckDone01Icon, current: false },
  { name: "Calendar", href: "#", icon: CalendarIcon, current: false },
]
const secondItems = [
  {
    name: "Projects",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "GraphQL API", href: "#" },
      { name: "iOS App", href: "#" },
      { name: "Android App", href: "#" },
      { name: "New Customer Portal", href: "#" },
    ],
  },
  {
    name: "Customers",
    icon: Users01Icon,
    current: false,
    children: [
      { name: "Engineering", href: "#" },
      { name: "Human Resources", href: "#" },
      { name: "Customer Success", href: "#" },
    ],
  },
  { name: "Reports", href: "#", icon: PieChart01Icon, current: false },
  {
    name: "Payments",
    icon: CreditCard01Icon,
    current: false,
    children: [
      { name: "All", href: "#" },
      { name: "Overdue", href: "#" },
      { name: "Payouts", href: "#" },
      { name: "Tax", href: "#" },
    ],
  },
]
const thirdItems = [{ name: "Settings", href: "#", icon: Settings01Icon, current: false }]
const endItems = [
  { name: "Inbox", href: "#", icon: MessageSquare02Icon, current: false, notification: true },
]

export const Default = {
  args: {
    navigation: [
      {
        items: [...firstItems, ...secondItems, ...thirdItems],
      },
      {
        items: [...endItems],
      },
    ],
    separateLast: true,
    showGroupLabels: true,
    showGroupDividers: true,
  },
}
