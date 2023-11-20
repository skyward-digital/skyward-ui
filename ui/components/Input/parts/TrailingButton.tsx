import { Button, type ButtonProps } from "#/ui/components/Button"
import { cn } from "#/utils"

import { InputBase } from "../Input"
import type { InputProps } from "../Input.d"

export type InputPropsWithTrailingButton = InputProps & {
  buttonLink: ButtonProps["href"]
  buttonLabel: ButtonProps["children"]
}

export const Input = ({
  buttonLabel,
  buttonLink,
  className,
  ...props
}: InputPropsWithTrailingButton) => {
  return (
    <div className="relative mb-5 flex">
      <InputBase className={cn(className, "rounded-r-none")} {...props} />
      <Button
        href={buttonLink}
        variant="outline"
        className="rounded-l-none border-gray-300 -ml-px"
      >
        {buttonLabel}
      </Button>
    </div>
  )
}
