export type SwitchProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  label?: string
  detail?: string
  hideLabel?: boolean
  reverse?: boolean
  size?: 'sm' | 'md' | 'lg'
  checked?: boolean
}
