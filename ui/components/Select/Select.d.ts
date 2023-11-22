export type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  name?: string
  label?: string
  hint?: string
  error?: string
  options?: string[]
  placeholder?: string
  selected?: string
  defaultValue?: string
  value?: string
  onChange?: (e: any) => void
}

export type SelectWrapperProps = {
  label: string
  htmlFor?: string
  error?: any
  hint?: string
} & React.HTMLAttributes<HTMLDivElement>

export type SelectOptionProps = {
  value: string
  children: React.ReactNode
  Icon?: React.ReactElement
}
