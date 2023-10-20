export interface ButtonBaseProps {
  variant?: 'primary' | 'outline' | 'link'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  icon?: any
  iconStyle?: 'leading' | 'trailing' | 'icon-only' | 'both' // both is just used for testing
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

export interface ButtonLinkProps extends ButtonBaseProps, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string
}

export interface ButtonElementProps extends ButtonBaseProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never
}

export type ButtonProps = ButtonLinkProps | ButtonElementProps
