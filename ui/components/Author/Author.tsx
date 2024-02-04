import { Avatar } from "#/ui/components/Avatar"
import { cn } from "#/utils"

import type { AuthorProps } from "./Author.d"

export const Author = ({ href, avatar, name, detail, size = "md", className }: AuthorProps) => {
  return (
    <div
      className={cn(
        "flex items-center max-w-max overflow-hidden",
        href && "group",
        size === "xs" && "gap-1.5",
        size === "sm" && "gap-2",
        size === "md" && "gap-3",
        size === "lg" && "gap-3",
        size === "xl" && "gap-3",
        size === "2xl" && "gap-4",
        className
      )}
    >
      <Avatar
        src={avatar?.src}
        alt={avatar?.alt}
        fallback={name as string}
        size={size}
        className="shrink-0"
      />
      {name ? (
        <div className="grid gap-0.5">
          <p
            className={cn(
              "text-gray-800 dark:text-gray-200 font-semibold underline-offset-2 group-hover:underline group-hover:text-gray-600 dark:group-hover:text-gray-400",
              size === "xs" && "text-sm",
              size === "sm" && "text-sm",
              size === "md" && "text-base",
              size === "lg" && "text-lg",
              size === "xl" && "text-xl",
              size === "2xl" && "text-2xl",
              "leading-none"
            )}
          >
            {name}
          </p>

          <p
            className={cn(
              "text-gray-600 dark:text-gray-400 tracking-tight",
              size === "xs" && "text-xs",
              size === "sm" && "text-xs",
              size === "md" && "text-sm",
              size === "lg" && "text-base",
              size === "xl" && "text-base",
              size === "2xl" && "text-base"
            )}
          >
            {detail}
          </p>
        </div>
      ) : null}
    </div>
  )
}
