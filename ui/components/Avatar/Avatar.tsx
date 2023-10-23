import { Image } from '#/ui/components/Image'
import { cn } from '#/utils'
import type { AvatarProps } from './Avatar.d'

export const Avatar = ({ src, alt, size = 'md', fallback = '', className }: AvatarProps) => {
  const calculatedFallback = (() => {
    if (!fallback) return

    // If the user has already provider a 2 character fallback, use that
    if (fallback.length <= 2) return fallback

    // Assuming names include a space, split the name into first and last
    if (fallback.includes(' ')) {
      const [first, last] = fallback.split(' ')
      return first?.[0] + last?.[0]
    }

    // If the name is only one word, return the first two characters
    return fallback.slice(0, 2)
  })()

  const sizeMap = {
    xs: 24,
    sm: 32,
    md: 40,
    lg: 48,
    xl: 56,
    '2xl': 64,
  }

  const imageSize = typeof size === 'number' ? size : sizeMap[size]

  return (
    <div
      className={cn(
        'flex items-center gap-3 rounded-full overflow-hidden text-gray-800 bg-gray-300 dark:bg-gray-700 dark:text-gray-200',
        className
      )}
      style={{ width: imageSize, height: imageSize }}
    >
      {src ? (
        <Image src={src} alt={alt} width={imageSize} height={imageSize} />
      ) : (
        <p
          className={cn(
            'grid place-items-center w-full h-full',
            size === 'xs' && 'text-xs',
            size === 'sm' && 'text-sm',
            size === 'md' && 'text-base',
            size === 'lg' && 'text-lg',
            size === 'xl' && 'text-xl',
            size === '2xl' && 'text-2xl'
          )}
        >
          {calculatedFallback}
        </p>
      )}
    </div>
  )
}
