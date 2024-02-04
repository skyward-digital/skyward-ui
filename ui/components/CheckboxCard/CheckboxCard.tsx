"use client"

import { useState } from "react"
import * as Toggle from "@radix-ui/react-toggle"
import { Checkbox } from "#/ui/components/Checkbox"
import { cn, transformId } from "#/utils"

import type { CheckboxCardProps } from "./CheckboxCard.d"

export const CheckboxCard = ({
  id,
  children,
  checked,
  defaultChecked,
  showCheckbox,
  onChange,
  className,
}: CheckboxCardProps) => {
  const [checkedState, setCheckedState] = useState(defaultChecked || false)
  const isChecked = checked !== undefined ? checked : checkedState

  const formattedId = id ? id : typeof children === "string" ? transformId(children) : undefined

  return (
    <Toggle.Root
      pressed={isChecked}
      onPressedChange={(e) => {
        if (onChange) {
          onChange(e)
        }
        setCheckedState(e)
      }}
      className={cn(
        "group relative flex cursor-pointer items-center gap-2 rounded-lg border border-gray-500 px-4 py-2 transition-colors duration-150 ease-in-out hover:bg-gray-100",
        isChecked && "outline outline-indigo-500 border-indigo-500 bg-gray-50",
        className
      )}
    >
      {typeof children === "string" ? (
        <label htmlFor={formattedId} className="flex-1">
          {children}
        </label>
      ) : (
        <>{children}</>
      )}

      <Checkbox
        id={formattedId}
        checked={isChecked}
        className={cn("ml-4 -mr-2", !showCheckbox && "hidden", isChecked ? "visible" : "invisible")}
        as="span"
      />
    </Toggle.Root>
  )
}
