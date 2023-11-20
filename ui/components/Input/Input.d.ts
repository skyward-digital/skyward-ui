export type InputWrapperProps = {
  label: string
  htmlFor: string
  error?: any
  hint?: string
} & React.HTMLAttributes<HTMLDivElement>

export type InputProps = {
  id: string
  type?: "text" | "email" | "tel" | "password"
  // inputMode?: "text" | "none" | "tel" | "url" | "email" | "numeric" | "decimal"
  error?: any
  defaultValue?: any
} & React.InputHTMLAttributes<HTMLInputElement>
