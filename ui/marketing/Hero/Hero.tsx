import { Button } from "#/ui/components/Button"
import { Image } from "#/ui/components/Image"
import { Testimonials } from "#/ui/components/Testimonials"
import { cn } from "#/utils"

import { type HeroProps } from "."

export const Hero = ({
  title,
  description,
  buttons,
  testimonials,
  image,
  contain,
  priority,
  className,
}: HeroProps) => {
  return (
    <section
      className={cn(
        "relative flex flex-col items-center justify-center overflow-hidden",
        "py-12 sm:py-20",
        // contain && "pb-12 sm:pb-20",
        className
      )}
    >
      <div className="container">
        {/* title, description and button */}
        <div
          className={cn(
            "relative z-10 mx-auto flex flex-col items-center gap-y-6 text-center sm:max-w-6xl sm:gap-y-8"
            // image ? "pt-16 sm:pt-28" : "pt-12 sm:pt-20"
          )}
        >
          <div className={cn("text-4xl sm:text-8xl tracking-tighter")}>{title}</div>
          {description && <div className={cn("prose max-w-4xl sm:text-2xl")}>{description}</div>}
          <div className="grid md:grid-cols-2 gap-3">
            {buttons?.map((button, index) => (
              <Button key={index} variant={index === 0 ? "primary" : "outline"} {...button} />
            ))}
          </div>
          {testimonials && <Testimonials {...testimonials} />}
        </div>
      </div>

      {image && (
        <div
          className={cn(
            "sm:container sm:mx-auto",
            !contain && "max-h-72 w-full max-w-[90rem] sm:max-h-80 md:max-h-[560px]"
          )}
        >
          <div
            className={cn(
              "relative flex flex-col items-center justify-center drop-shadow-[0_0_64px_rgba(52,64,64,0.2)] dark:drop-shadow-[0_0_135px_rgba(60,89,149,0.75)]"
            )}
          >
            <Image
              {...image}
              width={image?.width ?? contain ? 890 : undefined}
              className={"rounded-lg"}
              sizes={`"(max-width: 768px) 100vw, ${image.width ? image.width + "px" : "890px"}"`}
              priority={priority}
            />
          </div>
        </div>
      )}
    </section>
  )
}
