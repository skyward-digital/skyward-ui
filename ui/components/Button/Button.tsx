import { cn } from "#/utils"

import type { ButtonElementProps, ButtonLinkProps, ButtonProps } from "./Button.d"

export const Button = ({
  variant = "primary",
  size = "md",
  destructive,
  className,
  children,
  ...props
}: ButtonProps) => {
  const { href } = props as ButtonLinkProps
  const { type, disabled } = props as ButtonElementProps

  // A "button" can be both a <button> and an <a> element depending on the props passed. This lines up with the design system terminology moreso than the HTML spec where buttons and links are often visually indistinguishable.
  const Component = href ? "a" : "button"

  return (
    <Component
      href={href ?? undefined}
      className={cn(
        // layout
        "rounded h-fit tracking-normal relative outline-offset-0 outline-4 outline-none transition-all duration-200 no-underline inline-flex items-center justify-center overflow-hidden whitespace-nowrap font-semibold ease-in-out disabled:pointer-events-none [&>*]:inline-flex [&>*]:items-center focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-transparent",

        // variants
        variant === "primary" &&
          "border border-slate-950 bg-slate-950 hover:bg-opacity-95 hover:outline-sky-300/50 text-white",
        variant === "outline" &&
          "border border-gray-400 text-gray-700 hover:text-gray-950 dark:border-gray-700 hover:outline-sky-300/50 dark:text-gray-100 dark:hover:text-white",
        variant === "ghost" &&
          "border border-transparent text-gray-700 hover:text-gray-950 hover:bg-gray-400/20 dark:text-gray-100 dark:hover:text-white dark:focus:bg-gray-400/20",
        variant === "text" &&
          "border border-transparent justify-start text-gray-900 underline-offset-2 hover:underline focus:underline dark:text-gray-100",

        // destructive - overrides variant colours but keeps the rest of the variant styles
        destructive &&
          variant === "primary" &&
          "border border-red-600 bg-red-600 text-red-50 hover:outline-red-300/50 hover:text-white",
        destructive &&
          variant === "outline" &&
          "border border-red-600 text-red-900 hover:outline-red-300/50",
        destructive && variant === "ghost" && "text-red-900 hover:bg-red-400/20",
        destructive && variant === "text" && "text-red-900",

        // sizing
        size === "xs" && "gap-2 text-xs leading-tight px-2 py-1.5 [&>*]:gap-2",
        size === "sm" && "gap-2 text-sm leading-tight px-4 py-2 [&>*]:gap-2",
        size === "md" && "gap-2 text-base leading-tight px-6 py-3 [&>*]:gap-2",
        size === "lg" && "gap-2 text-xl leading-none px-8 py-4 [&>*]:gap-2",
        size === "xl" && "gap-2.5 text-2xl leading-none px-8 py-5 [&>*]:gap-2.5",
        // size === "2xl" && "gap-3 text-3xl leading-none px-8 py-6 [&>*]:gap-3",

        // Icon classes
        size === "xs" && "has-[>.sr-only]:p-1.5",
        size === "sm" && "has-[>.sr-only]:p-2",
        size === "md" && "has-[>.sr-only]:p-2.5",
        size === "lg" && "has-[>.sr-only]:p-3",
        size === "xl" && "has-[>.sr-only]:p-3.5",
        // size === "2xl" && "has-[>.sr-only]:p-4",

        // icon classes - applies to child svgs
        size === "xs" && "[&>svg]:size-3 [&>*>svg]:size-3",
        size === "sm" && "[&>svg]:size-4 [&>*>svg]:size-4",
        size === "md" && "[&>svg]:size-5 [&>*>svg]:size-5",
        size === "lg" && "[&>svg]:size-6 [&>*>svg]:size-6",
        size === "xl" && "[&>svg]:size-7 [&>*>svg]:size-7",
        // size === "2xl" && "[&>svg]:size-8 [&>*>svg]:size-8",

        // any of the above classes can be overridden by passing a className prop
        className
      )}
      // type={type ?? undefined}
      disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  )
}
