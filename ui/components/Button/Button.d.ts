import type { LinkProps } from "../Link/Link"

export type ButtonBaseProps = {
  variant?: "primary" | "outline" | "ghost" | "text"
  size?: "xs" | "sm" | "md" | "lg" | "xl"
  destructive?: boolean
  className?: string
  children: React.ReactNode
}

export type ButtonLinkProps = ButtonBaseProps & LinkProps

export type ButtonElementProps = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }

export type ButtonProps = ButtonLinkProps | ButtonElementProps
