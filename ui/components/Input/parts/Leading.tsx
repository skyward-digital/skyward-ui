import { cn } from "#/utils"

type InputPropsWithLeadingIcon = React.HTMLProps<HTMLSpanElement> & {
  type: "icon"
  children: React.FC<React.SVGProps<SVGSVGElement>>
}

type InputPropsWithLeadingText = React.HTMLProps<HTMLSpanElement> & {
  type: "text"
  children: string
}

export type InputLeadingProps = InputPropsWithLeadingIcon | InputPropsWithLeadingText

export const InputLeading = ({ type, children, className, ...props }: InputLeadingProps) => {
  if (type === "text") {
    return (
      <span
        className={cn(
          "inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 dark:border-gray-500 bg-gray-50 dark:bg-gray-850 text-gray-500 dark:text-gray-400",
          className
        )}
      >
        {children}
      </span>
    )
  }

  if (type === "icon") {
    return (
      <span
        className={cn(
          "absolute top-1/2 ml-3 size-5 -translate-y-1/2 text-gray-500 dark:text-gray-400",
          className
        )}
        {...props}
      >
        {children}
      </span>
    )
  }

  return children
}
