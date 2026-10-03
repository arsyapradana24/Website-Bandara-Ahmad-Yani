import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "bg-[#0284C7] text-white hover:bg-[#0066CC]",
        secondary:
          "bg-[#F1F5F9] text-[#1E293B] hover:bg-[#E2E8F0]",
        success:
          "bg-green-100 text-green-800 hover:bg-green-200",
        warning:
          "bg-amber-100 text-amber-800 hover:bg-amber-200",
        error:
          "bg-red-100 text-red-800 hover:bg-red-200",
        info:
          "bg-blue-100 text-blue-800 hover:bg-blue-200",
        outline:
          "border-2 border-[#0284C7] text-[#0284C7] hover:bg-[#0284C7] hover:text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
