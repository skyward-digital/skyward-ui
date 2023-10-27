import { cn } from "#/utils"
import { Image } from "../Image"
import type { BadgeProps } from "./Badge.d"

export const Badge = ({
  variant = "rounded",
  size = "md",
  color = "random",
  transparent,
  dot,
  image,
  className,
  children,
  ...props
}: BadgeProps) => {
  const randomColor = (() => {
    const colors = [
      "gray",
      "red",
      "orange",
      "amber",
      "yellow",
      "lime",
      "green",
      "emerald",
      "teal",
      "cyan",
      "sky",
      "blue",
      "indigo",
      "violet",
      "purple",
      "fuchsia",
      "pink",
      "rose",
    ]
    return colors[Math.floor(Math.random() * colors.length)]
  })()

  const selectedColor = (() => {
    if (color === "random") return randomColor
    if (color === "success") return "green"
    if (color === "danger") return "red"
    if (color === "warning") return "amber"
    if (color === "info") return "blue"
    return color
  })()

  return (
    <div
      className={cn(
        // layout
        "border inline-flex items-center justify-center overflow-hidden whitespace-nowrap font-semibold tracking-snug [&>*]:inline-flex [&>*]:items-center",

        // variants
        variant === "rounded" && "rounded-lg",
        variant === "pill" && "rounded-full",
        variant === "square" && "rounded-none",

        // sizing
        size === "sm" &&
          "gap-1 text-xs px-1.5 py-0.5 [&>*]:gap-1 leading-[18px]",
        size === "md" &&
          "gap-1.5 text-sm px-2 py-0.5 [&>*]:gap-1.5 leading-[20px]",
        size === "lg" &&
          "gap-1.5 text-md px-2.5 py-1 [&>*]:gap-1.5 leading-[22px]",

        // Icon sizes
        size === "sm" &&
          "[&>svg]:-mx-0.5 [&>svg]:h-3 [&>svg]:w-3 [&>*>svg]:-mx-0.5 [&>*>svg]:h-3 [&>*>svg]:w-3",
        size === "md" &&
          "[&>svg]:-mx-0.5 [&>svg]:h-4 [&>svg]:w-4 [&>*>svg]:-mx-0.5 [&>*>svg]:h-4 [&>*>svg]:w-4",
        size === "lg" &&
          "[&>svg]:-mx-0.5 [&>svg]:h-5 [&>svg]:w-5 [&>*>svg]:-mx-0.5 [&>*>svg]:h-5 [&>*>svg]:w-5",

        // colors
        selectedColor === "gray" &&
          "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700",
        selectedColor === "red" &&
          "bg-red-50 text-red-700 border-red-200 dark:bg-red-900 dark:text-red-200 dark:border-red-700",
        selectedColor === "orange" &&
          "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900 dark:text-orange-200 dark:border-orange-700",
        selectedColor === "amber" &&
          "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900 dark:text-amber-200 dark:border-amber-700",
        selectedColor === "yellow" &&
          "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-700",
        selectedColor === "lime" &&
          "bg-lime-50 text-lime-700 border-lime-200 dark:bg-lime-900 dark:text-lime-200 dark:border-lime-700",
        selectedColor === "green" &&
          "bg-green-50 text-green-700 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-700",
        selectedColor === "emerald" &&
          "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-900 dark:text-emerald-200 dark:border-emerald-700",
        selectedColor === "teal" &&
          "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-900 dark:text-teal-200 dark:border-teal-700",
        selectedColor === "cyan" &&
          "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-900 dark:text-cyan-200 dark:border-cyan-700",
        selectedColor === "sky" &&
          "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-900 dark:text-sky-200 dark:border-sky-700",
        selectedColor === "blue" &&
          "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700",
        selectedColor === "indigo" &&
          "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-900 dark:text-indigo-200 dark:border-indigo-700",
        selectedColor === "violet" &&
          "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-900 dark:text-violet-200 dark:border-violet-700",
        selectedColor === "purple" &&
          "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-700",
        selectedColor === "fuchsia" &&
          "bg-fuchsia-50 text-fuchsia-700 border-fuchsia-200 dark:bg-fuchsia-900 dark:text-fuchsia-200 dark:border-fuchsia-700",
        selectedColor === "pink" &&
          "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-900 dark:text-pink-200 dark:border-pink-700",
        selectedColor === "rose" &&
          "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-900 dark:text-rose-200 dark:border-rose-700",

        // transparent
        transparent && "bg-transparent border-current shadow-sm",

        // any of the above classes can be overridden by passing a className prop
        className
      )}
      {...props}
    >
      {!image?.src && dot && (
        <span
          className={cn(
            "bg-current opacity-75 rounded-full flex-shrink-0",
            size === "sm" && "w-[5px] h-[5px]",
            size === "md" && "w-[6px] h-[6px]",
            size === "lg" && "w-[7px] h-[7px]"
          )}
        />
      )}

      {image?.src && (
        <Image
          src={image.src}
          alt={image.alt}
          className={cn("flex-shrink-0 rounded-full -ml-0.5 w-4 h-4")}
        />
      )}
      {children}
    </div>
  )
}
