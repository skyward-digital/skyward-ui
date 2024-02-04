import * as RadixSelect from "@radix-ui/react-select"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@untitledui-icons/react/line"
import { cn } from "#/utils"

import type { SelectOptionProps, SelectProps, SelectWrapperProps } from "./Select.d"

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
    <RadixSelect.Root
      defaultValue={defaultValue?.toLowerCase().replace(" ", "-")}
      value={value}
      onValueChange={onChange}
      required={required}
    >
      <RadixSelect.Trigger
        className={cn(
          "flex items-center justify-between gap-2 border rounded-md text-sm px-2 py-2 focus:outline-indigo-600 focus:outline-4",
          error ? "border-red-600" : "border-gray-400",
          className
        )}
      >
        <RadixSelect.Value placeholder={placeholder ?? "Select..."} />
        <RadixSelect.Icon>
          <ChevronDownIcon className="size-4" />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          className={cn(
            "z-50 p-1 bg-white min-w-[12rem] shadow-lg rounded-md overflow-hidden flex items-center justify-center",
            "max-h-[var(--radix-select-content-available-height)]" // ensures the content is never taller than the viewport
          )}
          position="popper"
        >
          <RadixSelect.ScrollUpButton>
            <ChevronUpIcon className="size-4" />
          </RadixSelect.ScrollUpButton>

          <RadixSelect.Viewport className="my-2 flex flex-col gap-px relative w-full">
            <RadixSelect.Group>
              {label && (
                <RadixSelect.Label className="flex items-center justify-between gap-2 px-2 mb-2 text-sm">
                  {label}
                </RadixSelect.Label>
              )}
              {options?.length
                ? options.map((option) => (
                    <SelectOption key={option} value={option}>
                      {option}
                    </SelectOption>
                  ))
                : children}
            </RadixSelect.Group>
          </RadixSelect.Viewport>

          <RadixSelect.ScrollDownButton>
            <ChevronDownIcon className="size-4" />
          </RadixSelect.ScrollDownButton>

          {/* <RadixSelect.Arrow /> */}
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  )
}

export const SelectOption = ({
  value,
  children,
  Icon = <CheckIcon className="size-4 text-indigo-600" strokeWidth={3} />,
}: SelectOptionProps) => {
  return (
    <RadixSelect.Item
      value={value.toLowerCase().replace(" ", "-")}
      className="text-sm mx-2 my-1 flex items-center justify-between gap-2 overflow-auto p-2 rounded-md outline-none duration-150 ease-in-out hover:cursor-pointer focus:outline-2 focus:outline-primary-700 data-[state=checked]:bg-indigo-50 data-[state=checked]:text-indigo-600 hover:bg-gray-50"
    >
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator className="SelectItemIndicator">{Icon}</RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  )
}
