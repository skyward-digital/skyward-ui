import clsx, { type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// context: https://www.youtube.com/watch?v=re2JFITR7TI
export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes))
}
