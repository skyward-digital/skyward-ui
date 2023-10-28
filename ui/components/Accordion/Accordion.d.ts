export type AccordionProps = {
  items: {
    title: string
    content: React.ReactNode
  }[]
  className?: string
} & React.HTMLAttributes<HTMLDivElement>

export type AccordionItemProps = {
  title: string
  children: React.ReactNode
  className?: string
} & React.HTMLAttributes<HTMLDivElement>
