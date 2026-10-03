"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface AccordionContextValue {
  openItems: string[]
  toggleItem: (value: string) => void
  type: "single" | "multiple"
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null)

function useAccordionContext() {
  const context = React.useContext(AccordionContext)
  if (!context) {
    throw new Error("Accordion components must be used within an Accordion component")
  }
  return context
}

interface AccordionProps {
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  children: React.ReactNode
  className?: string
}

export function Accordion({
  type = "single",
  defaultValue = type === "single" ? "" : [],
  children,
  className,
}: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<string[]>(
    Array.isArray(defaultValue) ? defaultValue : defaultValue ? [defaultValue] : []
  )

  const toggleItem = React.useCallback(
    (value: string) => {
      setOpenItems((prev) => {
        if (type === "single") {
          return prev.includes(value) ? [] : [value]
        } else {
          return prev.includes(value)
            ? prev.filter((item) => item !== value)
            : [...prev, value]
        }
      })
    },
    [type]
  )

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={cn("space-y-3", className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  value: string
  children: React.ReactNode
  className?: string
}

export function AccordionItem({ value, children, className }: AccordionItemProps) {
  return (
    <div
      className={cn(
        "rounded-xl border-2 border-[#E2E8F0] bg-white overflow-hidden transition-all",
        className
      )}
    >
      {children}
    </div>
  )
}

interface AccordionTriggerProps {
  value: string
  children: React.ReactNode
  className?: string
}

export function AccordionTrigger({
  value,
  children,
  className,
}: AccordionTriggerProps) {
  const { openItems, toggleItem } = useAccordionContext()
  const isOpen = openItems.includes(value)

  return (
    <button
      type="button"
      onClick={() => toggleItem(value)}
      className={cn(
        "flex w-full items-center justify-between px-6 py-4 text-left font-semibold transition-all",
        "hover:bg-[#F8FAFC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0284C7]",
        isOpen ? "text-[#0284C7]" : "text-[#1E293B]",
        className
      )}
    >
      <span>{children}</span>
      <ChevronDown
        className={cn(
          "h-5 w-5 transition-transform duration-300",
          isOpen ? "rotate-180 text-[#0284C7]" : "text-[#64748B]"
        )}
      />
    </button>
  )
}

interface AccordionContentProps {
  value: string
  children: React.ReactNode
  className?: string
}

export function AccordionContent({
  value,
  children,
  className,
}: AccordionContentProps) {
  const { openItems } = useAccordionContext()
  const isOpen = openItems.includes(value)

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className={cn("px-6 pb-4 pt-0 text-[#64748B]", className)}>
        {children}
      </div>
    </div>
  )
}
