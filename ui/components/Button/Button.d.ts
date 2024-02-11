export type ButtonBaseProps = {
  variant?: "primary" | "outline" | "ghost" | "text"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  destructive?: boolean
  className?: string
  children: React.ReactNode
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

export type ButtonLinkProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    type?: never
  }

export type ButtonElementProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

export type ButtonProps = ButtonLinkProps | ButtonElementProps
