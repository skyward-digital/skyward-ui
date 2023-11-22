export type TextAreaWrapperProps = {
  label: string
  htmlFor: string
  error?: any
  hint?: string
} & React.HTMLAttributes<HTMLDivElement>

export type TextAreaProps = {
  id: string
  error?: any
  defaultValue?: any
} & React.TextAreaHTMLAttributes<HTMLTextAreaElement>
