import type { ImageProps } from '#/ui/components/Image'

export type BadgeProps = {
  variant?: 'rounded' | 'pill' | 'square'
  size?: 'sm' | 'md' | 'lg'
  color?:
    | 'random'
    | 'success'
    | 'warning'
    | 'danger'
    | 'info'
    | 'gray'
    | 'red'
    | 'orange'
    | 'amber'
    | 'yellow'
    | 'lime'
    | 'green'
    | 'emerald'
    | 'teal'
    | 'cyan'
    | 'sky'
    | 'blue'
    | 'indigo'
    | 'violet'
    | 'purple'
    | 'fuchsia'
    | 'pink'
    | 'rose'
  transparent?: boolean
  dot?: boolean
  image?: ImageProps
  children: string | React.ReactNode
  className?: string
}
