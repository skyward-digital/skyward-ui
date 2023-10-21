import { cn } from '#/utils'
import type { ButtonElementProps, ButtonLinkProps, ButtonProps } from './Button.d'

export const Button = ({
  variant = 'primary',
  size = 'md',
  icon,
  iconStyle = 'trailing',
  className,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const Icon = icon ?? null
  const { href } = props as ButtonLinkProps
  const { type, disabled } = props as ButtonElementProps

  // A "button" can be both a <button> and an <a> element depending on the props passed. This lines up with the design system terminology moreso than the HTML spec where buttons and links are often visually indistinguishable.
  const Component = href ? 'a' : 'button'

  return (
    <Component
      href={href ?? undefined}
      onClick={onClick}
      className={cn(
        // layout
        'rounded-lg relative no-underline inline-flex items-center justify-center overflow-hidden whitespace-nowrap font-semibold tracking-wide outline-none transition duration-200 ease-in-out disabled:pointer-events-none',

        // variants
        variant === 'primary' &&
          'bg-indigo-500 text-white hover:bg-indigo-400 focus:ring-4 focus:ring-indigo-500/40 focus:ring-offset-2 focus:ring-offset-indigo-200',
        variant === 'outline' &&
          'border border-gray-700 hover:bg-gray-400/20 hover:border-gray-500 text-gray-100 hover:text-white focus:bg-gray-400/20 focus:border-gray-200 focus:text-white focus:ring-4 focus:ring-gray-800/40 focus:ring-offset-1 focus:ring-offset-gray-200',
        variant === 'link' &&
          'justify-start text-gray-200 hover:text-gray-400 focus:text-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-200 focus:ring-gray-400/40',

        // sizing
        size === 'xs' && 'gap-2 text-xs',
        size === 'sm' && 'gap-2 text-sm',
        size === 'md' && 'gap-2',
        size === 'lg' && 'gap-2 text-lg',
        size === 'xl' && 'gap-2.5 text-xl',
        size === '2xl' && 'gap-3 text-2xl',

        // icon only
        iconStyle === 'icon-only' && {
          'p-1.5': size === 'sm',
          'p-2': size === 'sm',
          'p-2.5': size === 'md',
          'p-3': size === 'lg',
          'p-3.5': size === 'xl',
          'p-4': size === '2xl',
        },

        // Not icon only
        iconStyle !== 'icon-only' && {
          'px-2 py-1.5': size === 'xs',
          'px-3 py-1.5': size === 'sm',
          'px-3.5 py-1.5': size === 'md',
          'px-4 py-1.5': size === 'lg',
          'px-5 py-2': size === 'xl',
          'px-5 py-2.5': size === '2xl',
        },

        // any of the above classes can be overridden by passing a className prop
        className
      )}
      type={type}
      disabled={disabled}
    >
      {/* Leading icon */}
      {icon && iconStyle !== 'trailing' && (
        <Icon
          size={size}
          variant={variant}
          className={cn('h-5 w-5', size === 'xl' && 'h-6 w-6', size === '2xl' && 'h-7 w-7')}
        />
      )}

      {children}

      {/* Trailing icon */}
      {icon && iconStyle && ['trailing', 'both'].includes(iconStyle) ? (
        <Icon
          size={size}
          variant={variant}
          className={cn('h-5 w-5', size === 'xl' && 'h-6 w-6', size === '2xl' && 'h-7 w-7')}
        />
      ) : null}
    </Component>
  )
}
