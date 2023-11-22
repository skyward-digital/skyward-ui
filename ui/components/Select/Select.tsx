import * as RS from "@radix-ui/react-select"
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@untitledui-icons/react/line"
import { cn } from "#/utils"

import type {
  SelectOptionProps,
  SelectProps,
  SelectWrapperProps,
} from "./Select.d"

export const SelectWrapper = ({
  label,
  htmlFor,
  className,
  error,
  hint,
  children,
}: SelectWrapperProps) => {
  return (
    <div className={cn(className)}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-base font-semibold text-gray-600 dark:text-gray-400"
      >
        {label}
      </label>

      <div className="relative mb-5 flex">{children}</div>

      {(error || hint) && (
        <p
          className={cn(
            "-mt-3 mb-2 text-sm text-gray-600 dark:text-gray-200",
            error && "text-red-500"
          )}
        >
          {error || hint}
        </p>
      )}
    </div>
  )
}

export const Select = ({
  label,
  placeholder,
  error,
  className,
  children,
  options,
  defaultValue,
  value,
  onChange,
  required,
}: SelectProps) => {
  return (
    <RS.Root
      defaultValue={defaultValue?.toLowerCase().replace(" ", "-")}
      value={value}
      onValueChange={onChange}
      required={required}
    >
      <RS.Trigger
        className={cn(
          "flex items-center justify-between gap-2 border rounded-md text-sm px-2 py-2 focus:outline-indigo-600 focus:outline-4",
          error ? "border-red-600" : "border-gray-400",
          className
        )}
      >
        <RS.Value placeholder={placeholder ?? "Select..."} />
        <RS.Icon>
          <ChevronDownIcon className="h-4 w-4" />
        </RS.Icon>
      </RS.Trigger>

      <RS.Portal>
        <RS.Content
          className={cn(
            "z-10 p-1.5 bg-white min-w-[12rem] shadow-lg rounded-md overflow-hidden flex items-center justify-center",
            "max-h-[var(--radix-select-content-available-height)]" // ensures the content is never taller than the viewport
          )}
          position="popper"
        >
          <RS.ScrollUpButton>
            <ChevronUpIcon className="h-4 w-4" />
          </RS.ScrollUpButton>

          <RS.Viewport className="my-2 flex flex-col gap-px relative w-full">
            <RS.Group>
              {label && (
                <RS.Label className="flex items-center justify-between gap-2 px-2 mb-2 text-sm">
                  {label}
                </RS.Label>
              )}
              {options?.length
                ? options.map((option) => (
                    <SelectOption key={option} value={option}>
                      {option}
                    </SelectOption>
                  ))
                : children}
            </RS.Group>
          </RS.Viewport>

          <RS.ScrollDownButton>
            <ChevronDownIcon className="h-4 w-4" />
          </RS.ScrollDownButton>

          {/* <RS.Arrow /> */}
        </RS.Content>
      </RS.Portal>
    </RS.Root>
  )
}

export const SelectOption = ({
  value,
  children,
  Icon = <CheckIcon className="h-4 w-4 text-indigo-600" strokeWidth={3} />,
}: SelectOptionProps) => {
  return (
    <RS.Item
      value={value.toLowerCase().replace(" ", "-")}
      className="text-sm mx-2 my-1 flex items-center justify-between gap-2 overflow-auto p-2 rounded-md outline-none transition-colors duration-150 ease-in-out hover:cursor-pointer focus:outline-2 focus:outline-primary-700 data-[state=checked]:bg-indigo-50 data-[state=checked]:text-indigo-600 hover:bg-gray-50"
    >
      <RS.ItemText>{children}</RS.ItemText>
      <RS.ItemIndicator className="SelectItemIndicator">
        {Icon}
      </RS.ItemIndicator>
    </RS.Item>
  )
}
