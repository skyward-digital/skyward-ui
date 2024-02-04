"use client"

import { useState } from "react"
import { ChevronDownIcon } from "@untitledui-icons/react/line"
import { cn } from "#/utils"

import type { AccordionItemProps } from "./Accordion.d"

export const AccordionItem = ({ title, children, className }: AccordionItemProps) => {
  const [tabExpanded, setTabExpanded] = useState(false)

  return (
    <details className={cn("py-2", className)}>
      <summary
        className="mr-2 flex w-full cursor-pointer items-center justify-between gap-2 py-2 font-semibold"
        onClick={() => setTabExpanded(!tabExpanded)}
      >
        {title}{" "}
        <ChevronDownIcon
          className={cn(
            "duration-300 size-4 transition-all text-gray-500",
            tabExpanded ? "rotate-180" : "rotate-0"
          )}
        />
      </summary>
      {/* <Transition
        show={tabExpanded}
        enter="transition-all duration-500 overflow-hidden"
        enterFrom="max-h-0 opacity-0"
        enterTo="max-h-screen opacity-100"
        leave="transition-all duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      > */}
      <div className={cn("prose dark:prose-invert py-2")}>{children}</div>
      {/* </Transition> */}
    </details>
  )
}
