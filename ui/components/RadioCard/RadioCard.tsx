"use client"

import { useState } from "react"
import * as Toggle from "@radix-ui/react-toggle"
import { Radio } from "#/ui/components/Radio"
import { cn, transformId } from "#/utils"

import type { RadioCardProps } from "./RadioCard.d"

export const RadioCard = ({
  id,
  name,
  children,
  checked,
  defaultChecked,
  showRadio,
  onChange,
  className,
}: RadioCardProps) => {
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

      <Radio
        id={formattedId}
        name={name}
        checked={isChecked}
        className={cn("ml-4 -mr-2", !showRadio && "hidden", isChecked ? "visible" : "invisible")}
        as="span"
      />
    </Toggle.Root>
  )
}
