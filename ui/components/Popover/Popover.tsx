import * as RadixPopover from "@radix-ui/react-popover"
import { XIcon } from "@untitledui-icons/react/line"
import { cn } from "#/utils"

import { Button } from "../Button"

export const Popover = (props) => {
  return <RadixPopover.Root {...props} />
}

export const PopoverTrigger = ({ children, ...props }: RadixPopover.PopoverTriggerProps) => (
  <RadixPopover.Trigger asChild={typeof children !== "string"} {...props}>
    {typeof children === "string" ? (
      <Button variant="outline" size="sm">
        {children}
      </Button>
    ) : (
      children
    )}
  </RadixPopover.Trigger>
)

export const PopoverContent = ({
  children,
  side,
  sideOffset,
  align,
  alignOffset,
  showArrow,
  showClose,
  className,
  ...props
}: RadixPopover.PopoverContentProps & {
  showArrow?: boolean
  showClose?: boolean
  className?: string
}) => (
  <RadixPopover.Portal>
    <RadixPopover.Content
      className={cn(
        "z-50 drop-shadow-md rounded-md bg-white px-3.5 py-4 shadow-md shadow-gray-600/10 outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 min-w-60",
        className
      )}
      side={side}
      sideOffset={sideOffset || 8}
      align={align}
      alignOffset={alignOffset}
      {...props}
    >
      {children}
      {showClose && (
        <RadixPopover.Close className="rounded-md size-6 inline-flex items-center justify-center absolute top-1 right-1 hover:bg-gray-100 outline-none cursor-pointer">
          <XIcon className="size-4" />
        </RadixPopover.Close>
      )}
      {showArrow && <RadixPopover.Arrow className="fill-white" />}
    </RadixPopover.Content>
  </RadixPopover.Portal>
)
