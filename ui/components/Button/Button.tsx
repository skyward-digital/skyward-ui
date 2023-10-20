import clsx from 'clsx'

export interface ButtonBaseProps {
  variant?: 'primary' | 'secondary' | 'link'
  size?: 'sm' | 'md' | 'lg'
  Icon?: React.ElementType
  // arrow?: boolean;
  className?: string
}

export interface ButtonLinkProps extends ButtonBaseProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string
  onClick?: never
}

export interface ButtonElementProps extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never
  onClick?: any
}

export type ButtonProps = ButtonLinkProps | ButtonElementProps

export const Button = ({
  variant = 'primary',
  size = 'lg',
  Icon,
  // arrow,
  className,
  children,
  onClick,
  ...props
}: ButtonProps) => {
  const { href } = props as ButtonLinkProps
  const { type, disabled } = props as ButtonElementProps
  const Component = href ? 'a' : 'button'

  return (
    <Component
      href={href}
      onClick={onClick}
      className={clsx(
        'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold no-underline outline-none transition duration-200 ease-in-out focus:ring-2 focus:ring-gray-600 focus:ring-offset-2',
        // Style
        variant === 'primary' &&
          'border-blue-500 hover:border-blue-500 group-hover:border-blue-500 bg-blue-500 shadow-xs hover:bg-blue-500 group-hover:bg-blue-500 border text-white hover:-translate-y-0.5 hover:text-white focus:-translate-y-0.5 disabled:border-gray-200 disabled:bg-gray-200 disabled:text-white group-hover:text-white dark:disabled:border-gray-800 dark:disabled:bg-gray-800 dark:disabled:text-gray-500',
        variant === 'secondary' &&
          'shadow-xs border border-gray-300 text-gray-600 hover:-translate-y-0.5 hover:bg-gray-100 hover:text-black focus:-translate-y-0.5 disabled:bg-gray-100 disabled:text-gray-400 group-hover:bg-gray-100 group-hover:text-black dark:text-gray-300 dark:hover:border-white dark:hover:bg-transparent dark:hover:text-white dark:disabled:bg-gray-800 dark:group-hover:border-white dark:group-hover:bg-transparent',
        variant === 'link' &&
          'text-blue-500 hover:text-blue-500 group-hover:hover:text-blue-500 py-2 disabled:text-gray-400',
        // Size
        size === 'sm' && 'px-2 py-1 text-sm',
        size === 'md' && 'px-3 py-1.5 text-base',
        size === 'lg' && 'px-6 py-3 text-base',
        className
      )}
      type={type}
      disabled={disabled}
    >
      {Icon && <Icon className='h-5 w-5' />}
      {children}
      {/* {arrow ? <ArrowRightIcon className="h-5 w-5" /> : null} */}
    </Component>
  )
}
