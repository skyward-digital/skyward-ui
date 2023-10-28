export type CheckboxCardProps = {
  id: string
  checked?: boolean
  defaultChecked?: boolean
  showCheckbox?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>
