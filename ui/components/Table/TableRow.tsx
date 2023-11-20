import { cn } from "#/utils"

export const TableRow = ({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLTableRowElement>) => {
  return (
    <tr className={cn("hover:bg-gray-50", className)} {...props}>
      {children}
    </tr>
  )
}
