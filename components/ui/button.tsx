import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: 
          "bg-[#6B4E71] text-white hover:bg-[#6B4E74] hover:scale-105 hover:shadow-md focus-visible:ring-[#2563EB]",
        secondary:
          "bg-transparent border-2 border-[#6B4E71] text-[#6B4E71] hover:text-white hover:bg-[#6B4E71] hover:border-[#6B4E71] shadow-sm focus-visible:ring-[#6B4E71]",
        ghost:
          "text-[#6B4E71] hover:bg-[#F9FAFB] hover:text-[#2563EB]",
        success:
          "bg-[--success] text-white hover:bg-[#059669] hover:scale-105 shadow-md focus-visible:ring-[#10B981]",
        error:
          "bg-[#EF4444] text-white hover:bg-[#DC2626] hover:scale-105 shadow-md focus-visible:ring-[#EF4444]",
        warning:
          "bg-[#F59E0B] text-white hover:bg-[#D97706] hover:scale-105 shadow-md focus-visible:ring-[#F59E0B]",
        info:
          "bg-[#2563EB] text-white hover:bg-[#1D4ED8] hover:scale-105 shadow-md focus-visible:ring-[#2563EB]",
      },
      size: {
        default: "h-10 px-6 py-3 rounded-md text-base has-[>svg]:px-3",
        sm: "h-8 px-3 py-1.5 rounded-full text-sm gap-1.5 has-[>svg]:px-2.5",
        lg: "h-12 px-6 py-3 rounded-full text-base has-[>svg]:px-5",
        xl: "h-14 px-9 py-4 rounded-xl text-lg has-[>svg]:px-7",
        icon: "size-10 rounded-full",
        "icon-sm": "size-8 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
