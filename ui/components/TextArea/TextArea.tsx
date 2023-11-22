import { cn } from "#/utils"

import type { TextAreaProps, TextAreaWrapperProps } from "./TextArea.d"

export const TextAreaWrapper = ({
  label,
  htmlFor,
  className,
  error,
  hint,
  children,
}: TextAreaWrapperProps) => {
  return (
    <div className={cn(className)}>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-base font-semibold text-gray-600 dark:text-gray-400"
      >
        {label}
      </label>

      <div className="relative mb-5 flex">{children}</div>

      {(error || hint) && (
        <p
          className={cn(
            "-mt-3 mb-2 text-sm text-gray-600 dark:text-gray-200",
            error && "text-red-500"
          )}
        >
          {error || hint}
        </p>
      )}
    </div>
  )
}

export const TextArea = ({ className, error, ...props }: TextAreaProps) => {
  return (
    <textarea
      className={cn(
        " focus:outline-indigo-100 focus:outline-offset-0 focus:outline-4 inline-flex w-full gap-x-2 rounded-lg border py-2 px-4 text-gray-600 no-underline placeholder:text-gray-400 dark:placeholder:text-gray-600 dark:text-gray-100",
        error ? "border-red-500" : "border-gray-300",
        className
      )}
      {...props}
    />
  )
}
