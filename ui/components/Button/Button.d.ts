export type ButtonBaseProps = {
  variant?: "primary" | "outline" | "ghost" | "text"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  destructive?: boolean
  className?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
}

export type ButtonLinkProps = ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode
  }

export type ButtonElementProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never
  }

export type ButtonProps = ButtonLinkProps | ButtonElementProps
