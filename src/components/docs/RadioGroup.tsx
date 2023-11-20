import { useState } from "react"

export const RadioGroup = ({
  label,
  showLabel,
  defaultChecked,
  children,
}: {
  label?: string
  showLabel?: boolean
  defaultChecked?: string
  children: ({}: { [key: string]: any }) => React.ReactElement
}) => {
  if (!children) return null
  const [checked, setChecked] = useState(defaultChecked || "")

  return (
    <fieldset>
      {label && <legend className={cn(showLabel && "sr-only")}>{label}</legend>}
      <div>{children({ checked, setChecked })}</div>
    </fieldset>
  )
}
