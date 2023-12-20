export type ButtonBaseProps = {
  variant?: "primary" | "outline" | "ghost" | "text" | "destructive"
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
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
