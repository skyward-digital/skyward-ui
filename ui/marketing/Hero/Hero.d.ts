import { type ButtonProps } from "#/ui/components/Button"
import type { ImageProps } from "#/ui/components/Image"

export type HeroProps = {
  title: React.ReactNode
  description?: React.ReactNode
  buttons?: ButtonProps[]
  testimonials?: TestimonialsProps
  image?: ImageProps
  contain?: boolean
  priority?: boolean
  className?: string
}
