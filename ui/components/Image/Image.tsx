// This image component is a simple example but you should use a framework component (next/image) or an image service (cloudinary, imgix, etc.)
import { cn } from "#/utils"
import type { ImageProps } from "./Image.d"

export const Image = ({
  src,
  alt,
  width,
  height,
  priority,
  className,
  ...props
}: ImageProps) => {
  const aspectRatio = width && height ? width / height : undefined

  return (
    <img
      {...props}
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      decoding={priority ? "auto" : "async"}
      className={cn("object-cover", className)}
      style={{ aspectRatio }}
    />
  )
}
