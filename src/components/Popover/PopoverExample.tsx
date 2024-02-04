import { Popover, PopoverContent, PopoverTrigger } from "#/ui/components/Popover"

export const PopoverExample = ({ trigger, content, ...props }) => {
  return (
    <Popover>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent {...props}>{content}</PopoverContent>
    </Popover>
  )
}
