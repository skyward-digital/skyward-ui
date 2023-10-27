export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export const Link = ({ href, children, target, ...props }: LinkProps) => {
  if (!href) {
    if (props.className)
      return <div className={props.className}>{children}</div>
    return <>{children}</>
  }

  // If the link starts with / we use NextLink, otherwise, use an <a> tag with target='_blank'
  const isInternal = href.startsWith("/")

  // Replace this with your framework's link component
  if (isInternal) {
    return (
      <a href={href} target={target ?? undefined} {...props}>
        {children}
      </a>
    )
  }

  // external links
  return (
    <a href={href} target={target ?? "_blank"} {...props}>
      {children}
    </a>
  )
}
