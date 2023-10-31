import { cn } from "#/utils"

export const Slider = ({
  min,
  max,
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      className={cn(
        "h-2.5 w-full",
        // Background
        "[&::-webkit-slider-runnable-track]:bg-gray-100 [&::-webkit-slider-runnable-track]:h-2 [&::-webkit-slider-runnable-track]:rounded-full dark:[&::-webkit-slider-runnable-track]:bg-gray-700",
        // Progress bar
        "[&::-webkit-slider-thumb]:shadow-sm [&::-webkit-slider-thumb]:-mt-1 [&::-webkit-slider-thumb]:bg-indigo-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:transition-all [&::-webkit-slider-thumb]:duration-500",
        className
      )}
      {...props}
    />
  )
}
