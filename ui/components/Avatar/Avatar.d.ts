import type { ImageProps } from "#/ui/components/Image/Image.d"

export type AvatarProps = ImageProps & {
  size?: number | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  fallback: string
  className?: string
}
