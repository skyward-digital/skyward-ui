export type CheckboxProps = {
  label?: string
  hideLabel?: boolean
  checked?: "indeterminate" | boolean
  defaultChecked?: boolean
  icon?: any
  className?: string
  required?: string
  size?: "sm" | "md" | "lg"
  as?: "button" | "span"
} & React.ButtonHTMLAttributes<HTMLButtonElement>
