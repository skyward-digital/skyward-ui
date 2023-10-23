import { Avatar } from '#/ui/components/Avatar'
import { Link } from '#/ui/components/Link'
import { cn } from '#/utils'
import type { AuthorProps } from './Author.d'

export const Author = ({ href, avatar, name, detail, className }: AuthorProps) => {
  return (
    <div className={cn('flex items-center gap-3', href && 'group', className)}>
      <Link href={href}>
        <Avatar src={avatar?.src} alt={avatar?.alt} fallback={name} />
      </Link>
      <div className='grid gap-0.5'>
        <Link href={href}>
          <p className='text-gray-800 dark:text-gray-200 font-semibold leading-tight underline-offset-2 group-hover:underline group-hover:text-gray-600 dark:group-hover:text-gray-400'>
            {name}
          </p>
        </Link>
        <p className='text-gray-600 dark:text-gray-400 text-sm tracking-tight'>{detail}</p>
      </div>
    </div>
  )
}
