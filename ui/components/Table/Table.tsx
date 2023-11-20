import { cn } from "#/utils"

export const Table = ({
  className,
  children,
}: React.HTMLAttributes<HTMLTableElement>) => {
  return (
    <div className={cn("w-fit min-w-full overflow-auto", className)}>
      {/* class for stripes [&>tbody>*:nth-child(even)]:bg-gray-50 */}
      <table
        className={cn("w-max min-w-full border-separate border-spacing-0")}
      >
        {children}
      </table>
    </div>
  )
}

// Wrapper for horizontal scrolling on smaller screens
// TODO: This doesn't work on mobile, need to fix
// <div className="relative z-10 overflow-auto pb-2 md:w-max md:min-w-[calc(64ch+8rem)] md:max-w-[100vw]">
{
  /* Wrapper for table styling as tables do not play nicely with rounded corners */
}

// </div>
