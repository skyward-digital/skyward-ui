import type { TdHTMLAttributes } from "react"
import { cn } from "#/utils"

export const TableCell = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLTableCellElement>) => {
  return (
    <td
      className={cn(
        "px-5 py-4 border-gray-200 dark:border-gray-800 border-b",
        className
      )}
      {...props}
    >
      {children}
    </td>
  )
}
