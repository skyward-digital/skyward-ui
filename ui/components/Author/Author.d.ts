import type { ImageProps } from '../Image/Image.d'

export type AuthorProps = {
  href?: string
  avatar?: ImageProps
  name: string
  detail?: React.ReactComponentElement | string
  className?: string
}
