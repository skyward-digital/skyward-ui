import type { Meta } from "@storybook/react"
import { employees } from "#/src/data/employees"

import { Select, SelectOption } from "."

const meta: Meta<typeof Select> = {
  title: "Core/Select",
  component: Select,
  parameters: {
    docs: {
      description: {
        component: "Select component",
      },
    },
  },
  tags: ["autodocs"],
}

export default meta

export const Default = {
  args: {
    label: "Select",
    placeholder: "Select your option",
    options: ["One", "Two"],
  },
}

export const Hint = {
  args: {
    label: "Select",
    placeholder: "Select your option",
    hint: "Please select an option",
    options: ["One", "Two"],
  },
}

export const Error = {
  args: {
    label: "Select",
    placeholder: "Select your option",
    error: "Please select an option",
    options: ["One", "Two"],
  },
}

export const Custom = {
  render: () => (
    <Select defaultValue={employees[1].name}>
      {console.log(employees[1].name)}
      {employees.map((employee) => (
        <SelectOption key={employee.name} value={employee.name}>
          <div className="flex items-center gap-2 text-left">
            <img src={employee.avatar} alt={employee.name} className="size-8 rounded-full" />
            <div>
              <div className="font-bold">{employee.name}</div>
              <div className="text-xs text-gray-500">{employee.role}</div>
            </div>
          </div>
        </SelectOption>
      ))}
    </Select>
  ),
}
