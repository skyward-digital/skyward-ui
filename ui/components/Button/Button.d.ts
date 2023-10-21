export interface ButtonBaseProps {
  variant?: 'primary' | 'outline' | 'ghost' | 'text' | 'destructive'
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
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
