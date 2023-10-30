export type RadioCardProps = {
  id: string
  name: string
  checked?: boolean
  defaultChecked?: boolean
  showRadio?: boolean
  className?: any
} & React.ButtonHTMLAttributes<HTMLButtonElement>
