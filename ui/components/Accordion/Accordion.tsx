import { cn } from "#/utils"

import type { AccordionProps } from "./Accordion.d"
import { AccordionItem } from "./AccordionItem"

export const Accordion = ({ items, className, ...props }: AccordionProps) => {
  return (
    <div className={cn("w-full", className)} {...props}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          className={cn(
            index !== items.length - 1 && "border-b border-gray-300 dark:border-gray-700"
          )}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  )
}
