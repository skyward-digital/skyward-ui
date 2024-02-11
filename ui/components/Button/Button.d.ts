export type ButtonBaseProps = {
  variant?: "primary" | "outline" | "ghost" | "text"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  destructive?: boolean
  className?: string
  children: React.ReactNode
  [key: string]:
    | React.AnchorHTMLAttributes<HTMLAnchorElement>
    | React.ButtonHTMLAttributes<HTMLButtonElement>
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
