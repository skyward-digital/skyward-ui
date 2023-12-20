import type { ButtonProps } from "#/ui/components/Button"
import { cn } from "#/utils"

type InputPropsWithTrailingIcon = React.HTMLProps<HTMLSpanElement> & {
  type: "icon"
  children: React.FC<React.SVGProps<SVGSVGElement>>
}

type InputPropsWithTrailingText = React.HTMLProps<HTMLSpanElement> & {
  type: "text"
  children: string
}

export type InputTrailingProps = InputPropsWithTrailingIcon | InputPropsWithTrailingText

export const InputTrailing = ({ type, children, className, ...props }: InputTrailingProps) => {
  if (type === "text") {
    return (
      <span
        className={cn(
          "inline-flex items-center px-3 rounded-r-md border border-l-0 border-gray-300 dark:border-gray-500 bg-gray-50 dark:bg-gray-850 text-gray-500 dark:text-gray-400",
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
          "absolute top-1/2 right-0 mr-3 size-5 -translate-y-1/2 text-gray-500 dark:text-gray-400",
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
