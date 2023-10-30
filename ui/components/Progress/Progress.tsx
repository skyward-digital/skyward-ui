"use client"

import { useEffect, useState } from "react"
import { cn } from "#/utils"

import type { ProgressProps } from "./Progress.d"

export const Progress = ({
  id,
  value: defaultValue,
  max = 100,
  className,
}: ProgressProps) => {
  if (defaultValue && defaultValue < 0) defaultValue = 0
  if (defaultValue && defaultValue > max) defaultValue = max

  const [value, setValue] = useState(defaultValue === undefined ? undefined : 0)

  // Animate the progress bar on initial load
  useEffect(() => {
    if (value === undefined) return
    setValue(defaultValue)
  }, [])

  // Indeterminate - cannot be animated within a progress element (for now)
  if (value === undefined)
    return (
      <div
        className={cn(
          "h-2.5 w-full rounded-full overflow-hidden bg-gray-100 dark:bg-gray-700",
          className
        )}
      >
        <div
          className="h-full w-full rounded-full animate-loading motion-reduce:animate-pulse bg-indigo-500"
          style={{
            transformOrigin: "0% 50%",
          }}
        />
      </div>
    )

  return (
    <progress
      id={id}
      value={value}
      max={max}
      className={cn(
        "h-2.5 w-full rounded-full overflow-hidden",
        // Background
        "[&::-webkit-progress-bar]:bg-gray-100 dark:[&::-webkit-progress-bar]:bg-gray-700",
        // Progress bar
        "[&::-webkit-progress-value]:bg-indigo-500 [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:transition-all [&::-webkit-progress-value]:duration-500",
        className
      )}
    >
      {value ? `${(value / max) * 100}%` : "indeterminate"}
    </progress>
  )
}
