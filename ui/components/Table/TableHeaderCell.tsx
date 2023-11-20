// Things to include - Sort,

import { cn } from "#/utils"

export const TableHeaderCell = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLTableCellElement>) => {
  return (
    <th
      className={cn(
        "bg-gray-50 border-gray-200 px-5 py-4 dark:border-gray-800 text-xs font-medium text-left text-gray-600 border-y",
        className
      )}
      {...props}
    >
      {children}
    </th>
  )
}
