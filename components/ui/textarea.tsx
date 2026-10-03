import * as React from "react"
import { cn } from "@/lib/utils"

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[100px] w-full rounded-lg border-2 border-[#E2E8F0] bg-white px-4 py-3 text-sm text-[#1E293B] placeholder:text-[#94A3B8] transition-colors",
          "focus:border-[#0284C7] focus:outline-none focus:ring-2 focus:ring-[#0284C7]/20",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-[#F1F5F9]",
          "resize-none",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
