import { Image } from '#/ui/components/Image'
import { cn } from '#/utils'
import type { AvatarProps } from './Avatar.d'

export const Avatar = ({ image, size = 'md', fallback = '', className }: AvatarProps) => {
  const firstLetters = (() => {
    if (!fallback) return ''
    const [first, last] = fallback.split(' ')
    return `${first?.[0]}${last?.[0]}`
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
      className={cn('flex items-center gap-3 rounded-full overflow-hidden text-gray-200 bg-gray-800', className)}
      style={{ width: imageSize, height: imageSize }}
    >
      {image?.src ? (
        <Image src={image.src} alt={image.alt} width={imageSize} height={imageSize} />
      ) : (
        <p className='grid place-items-center w-full h-full'>{firstLetters}</p>
      )}
    </div>
  )
}
