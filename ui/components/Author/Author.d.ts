import type { AvatarProps } from "../Avatar"
import type { ImageProps } from "../Image/Image.d"

export type AuthorProps = {
  href?: string
  avatar?: ImageProps
  name?: string
  detail?: string
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  className?: string
}
