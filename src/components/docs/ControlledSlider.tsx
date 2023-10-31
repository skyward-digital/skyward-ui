import { useState } from "react"
import { Slider } from "#/ui/components/Slider"

export const ControlledSlider = ({
  min = 0,
  max = 100,
  value: defaultValue,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => {
  const [value, setValue] = useState(defaultValue || min)
  return (
    <>
      {value}{" "}
      <Slider
        min={min}
        max={max}
        value={value}
        onChange={(e) => setValue(parseInt(e.target.value))}
        {...props}
      />
    </>
  )
}
