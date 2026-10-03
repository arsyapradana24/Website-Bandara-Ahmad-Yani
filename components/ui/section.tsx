import * as React from "react"
import { cn } from "@/lib/utils"
import { Container } from "./container"

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  container?: boolean
  containerSize?: "default" | "sm" | "lg" | "full"
  spacing?: "default" | "sm" | "lg" | "none"
}

const spacingClasses = {
  default: "py-16 md:py-20 lg:py-24",
  sm: "py-8 md:py-12 lg:py-16",
  lg: "py-20 md:py-28 lg:py-32",
  none: "",
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      children,
      container = true,
      containerSize = "default",
      spacing = "default",
      className,
      ...props
    },
    ref
  ) => {
    const content = container ? (
      <Container size={containerSize}>{children}</Container>
    ) : (
      children
    )

    return (
      <section
        ref={ref}
        className={cn(spacingClasses[spacing], className)}
        {...props}
      >
        {content}
      </section>
    )
  }
)
Section.displayName = "Section"

export { Section }
