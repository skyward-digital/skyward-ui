import { cn } from "#/utils"

export type TextHighlightProps = React.HTMLAttributes<HTMLSpanElement>

export const TextHighlight = ({ className, ...props }: TextHighlightProps) => (
  <mark
    className={cn("bg-cyan-400 text-white -z-10 px-[0.15ch] -mx-[0.15ch]", className)}
    {...props}
  />
)
