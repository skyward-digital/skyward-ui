export type RadioProps = {
  name: string
  label?: string
  hideLabel?: boolean
  checked?: boolean
  defaultChecked?: boolean
  icon?: any
  className?: string
  required?: string
  size?: "sm" | "md" | "lg"
  as?: "button" | "span"
} & React.ButtonHTMLAttributes<HTMLButtonElement>
