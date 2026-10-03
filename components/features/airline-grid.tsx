import * as React from "react"
import Image from "next/image"
import { Plane } from "lucide-react"
import { cn } from "@/lib/utils"
import { AIRLINES } from "@/lib/constants"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface AirlineGridProps {
  type?: "all" | "domestic" | "international"
  columns?: 2 | 3 | 4
  showBadge?: boolean
  className?: string
}

export function AirlineGrid({
  type = "all",
  columns = 4,
  showBadge = true,
  className,
}: AirlineGridProps) {
  const airlines = Object.values(AIRLINES).filter((airline) => {
    if (type === "all") return true
    return airline.type === type
  })

  const gridCols = {
    2: "grid-cols-1 sm:grid-cols-2",
    3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-2 sm:grid-cols-2 lg:grid-cols-4",
  }

  return (
    <div className={cn("grid gap-4", gridCols[columns], className)}>
      {airlines.map((airline) => (
        <Card
          key={airline.code}
          className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="p-6">
            <div className="flex items-center gap-4">
              {/* Airline Logo */}
              <div className="relative h-16 w-16 flex-shrink-0 rounded-xl bg-[#F8FAFC] p-2 group-hover:bg-white transition-colors">
                <Image
                  src={airline.logo}
                  alt={`${airline.name} Logo`}
                  fill
                  className="object-contain p-1"
                />
              </div>

              {/* Airline Info */}
              <div className="flex-1 min-w-0">
                <h3 className="font-display font-bold text-[#0A192F] truncate group-hover:text-[#0284C7] transition-colors">
                  {airline.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge
                    variant="secondary"
                    className="text-xs font-mono font-semibold"
                  >
                    {airline.code}
                  </Badge>
                  {showBadge && (
                    <Badge
                      variant={
                        airline.type === "international" ? "info" : "default"
                      }
                      className="text-xs capitalize"
                    >
                      {airline.type === "international"
                        ? "Internasional"
                        : "Domestik"}
                    </Badge>
                  )}
                </div>
              </div>

              {/* Icon */}
              <div className="hidden sm:block">
                <div className="h-10 w-10 rounded-full bg-[#0284C7]/10 flex items-center justify-center group-hover:bg-[#0284C7] transition-colors">
                  <Plane className="h-5 w-5 text-[#0284C7] group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Hover Effect Border */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0284C7] rounded-xl transition-colors pointer-events-none" />
        </Card>
      ))}
    </div>
  )
}
