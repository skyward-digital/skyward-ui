"use client"

import { useState } from "react"
import { CircleIcon } from "@untitledui-icons/react/line"
import { cn, transformId } from "#/utils"

import type { RadioProps } from "./Radio.d"

export const Radio = ({
  id,
  name,
  label,
  hideLabel,
  checked,
  defaultChecked,
  icon,
  size = "md",
  className,
  as,
  ...props
}: RadioProps) => {
  // Uncontrolled (internal) component state - see "checked" for controlled component state
  const [checkedState, setCheckedState] = useState(defaultChecked || false)

  const formattedId = id ? id : label ? transformId(label) : undefined
  const isChecked = checked !== undefined ? checked : checkedState

  const Component = as ?? "button"

  return (
    <div className={cn("flex gap-3 items-center flex-nowrap", className)}>
      <Component
        id={formattedId}
        type="button"
        role="radio"
        aria-checked={isChecked}
        data-state={isChecked ? "checked" : ""}
        value={isChecked ? "on" : "off"}
        className={cn(
          "inline-flex rounded-full flex-none items-center justify-center border transition-colors duration-150 ease-in-out",
          isChecked
            ? "border-indigo-500 bg-indigo-500 text-white"
            : "border-gray-700 dark:border-gray-300 bg-transparent",
          // size
          size === "sm" && "size-4",
          size === "md" && "size-5",
          size === "lg" && "size-6"
          // overrides
          // className
        )}
        onKeyDown={(event) => {
          props.onKeyDown && props.onKeyDown(event)
          // According to WAI ARIA, Radioes don't activate on enter keypress
          if (event.key === "Enter") event.preventDefault()
        }}
        onClick={(event) => {
          props.onChange ? props.onChange(event) : setCheckedState(!isChecked)
        }}
        onChange={(event) => {
          props.onChange ? props.onChange(event) : setCheckedState(!isChecked)
        }}
        {...props}
      >
        {isChecked &&
          (icon ?? (
            <CircleIcon
              className={cn(
                "pointer-events-none text-inherit",
                size === "sm" && "size-3",
                size === "md" && "size-4",
                size === "lg" && "size-5"
              )}
              strokeWidth={3}
            />
          ))}
        <span className="sr-only">{label}</span>
      </Component>
      <input
        name={name}
        type="radio"
        aria-hidden="true"
        tabIndex={-1}
        value={isChecked ? "on" : "off"}
        className="-translate-x-full absolute opacity-0 size-4 pointer-events-none"
        checked={isChecked}
        onChange={(event) => {
          props.onChange ? props.onChange(event) : setCheckedState(!isChecked)
        }}
      />
      {!hideLabel && label && (
        <label
          htmlFor={formattedId}
          className={cn(
            "inline-block text-gray-800 dark:text-gray-200 cursor-pointer", // size
            size === "sm" && "text-xs",
            size === "md" && "text-sm",
            size === "lg" && "text-md"
          )}
          onClick={(event) => {
            props.onChange ? props.onChange(event) : () => setCheckedState(!isChecked)
          }}
        >
          {label}
        </label>
      )}
    </div>
  )
}
