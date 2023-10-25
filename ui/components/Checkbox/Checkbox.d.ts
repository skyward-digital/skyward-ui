export type CheckboxProps = {
  id: string
  label: string
  checked?: 'indeterminate' | boolean
  defaultChecked?: boolean
  icon?: any
  className?: string
  required?: string
  size?: 'sm' | 'md' | 'lg'
} & React.ButtonHTMLAttributes<HTMLButtonElement>
