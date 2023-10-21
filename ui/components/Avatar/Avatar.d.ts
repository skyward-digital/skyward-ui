import type { ImageProps } from '#/ui/components/Image/Image.d'

export type AvatarProps = {
  image?: ImageProps
  size?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  fallback?: string
  className?: string
}
