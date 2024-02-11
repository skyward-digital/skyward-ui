import { Star01Icon } from "@untitledui-icons/react/line"
import { Avatar } from "#/ui/components/Avatar"
import { cn } from "#/utils"

import { type TestimonialsProps } from "."

export const Testimonials = ({ authors, rating, totalCustomers }: TestimonialsProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <div className="flex">
        {authors.map(({ avatar, name }, index) => (
          <Avatar
            key={index}
            src={avatar?.src}
            alt={avatar?.alt}
            fallback={name}
            className={cn("border-2 border-white", index > 0 && "-ml-3")}
          />
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star01Icon
              key={index}
              className={cn(
                "size-5",
                Math.round(rating) > index ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
              )}
            />
          ))}
          <p className="text-sm font-semibold text-slate-700 ml-1 mt-px">{rating.toFixed(1)}</p>
        </div>
        <p className="text-xs font-semibold text-slate-500">
          From {totalCustomers.toLocaleString("en-US")}+ customers
        </p>
      </div>
    </div>
  )
}
