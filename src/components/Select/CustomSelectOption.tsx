import { employees } from "#/src/data/employees"
import { Select, SelectOption, SelectWrapper } from "#/ui/components/Select"

export const CustomSelectOption = () => (
  <SelectWrapper label="Name">
    <Select>
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
  </SelectWrapper>
)
