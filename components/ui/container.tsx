import * as React from "react"
import { cn } from "@/lib/utils"

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  size?: "default" | "sm" | "lg" | "full"
}

const containerSizes = {
  default: "max-w-7xl",
  sm: "max-w-4xl",
  lg: "max-w-[1400px]",
  full: "max-w-full",
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, size = "default", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full px-4 sm:px-6 lg:px-8",
          containerSizes[size],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)
Container.displayName = "Container"

export { Container }
