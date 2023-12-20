import type { AvatarProps } from "../Avatar"
import type { ImageProps } from "../Image/Image.d"

export type AuthorProps = {
  href?: string
  avatar?: ImageProps
  name?: string | React.ReactElement
  detail?: string | React.ReactElement
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  className?: string
}
