import * as React from "react"
import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-11 w-full rounded-lg border-2 border-[#E2E8F0] bg-white px-4 py-2.5 text-sm text-[#1E293B] placeholder:text-[#94A3B8] transition-colors",
          "focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#F1F5F9]",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
